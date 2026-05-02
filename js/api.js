// ==================== FIREBASE CHAT FUNCTIONS ====================

// Load chat messages dari Firestore
async function loadChatMessages() {
    const chatContainer = document.getElementById("chatMessages");
    if (!chatContainer) return;
    
    if (!db || !isFirebaseReady) {
        chatContainer.innerHTML = '<div class="chat-bubble admin">⚠️ Chat offline. Silakan refresh atau hubungi admin via Telegram.</div>';
        return;
    }
    
    try {
        const snapshot = await db.collection("chat_llc").orderBy("timestamp", "asc").limit(100).get();
        if (snapshot.empty) {
            chatContainer.innerHTML = '<div class="chat-bubble admin">💬 Selamat datang! Silakan tanyakan harga mod atau kendala anda.</div>';
        } else {
            chatContainer.innerHTML = "";
            snapshot.forEach(doc => {
                const data = doc.data();
                const msgDiv = document.createElement("div");
                msgDiv.className = `chat-bubble ${data.sender === "user" ? "user" : "admin"}`;
                msgDiv.innerText = data.text || "...";
                if (data.type === "order") {
                    msgDiv.style.borderLeft = "3px solid #f59e0b";
                }
                chatContainer.appendChild(msgDiv);
            });
        }
        chatContainer.scrollTop = chatContainer.scrollHeight;
    } catch(err) {
        console.error("Gagal load chat:", err);
        chatContainer.innerHTML = '<div class="chat-bubble admin">⚠️ Gagal memuat chat. Periksa koneksi internet dan konfigurasi Firebase.</div>';
    }
}

// Send chat message ke Firestore
async function sendChatMessage(message) {
    if (!message.trim()) {
        showToast("Pesan tidak boleh kosong!");
        return;
    }
    
    if (!db || !isFirebaseReady) {
        showToast("⚠️ Chat offline. Silakan refresh halaman.");
        return;
    }
    
    try {
        await db.collection("chat_llc").add({
            text: message,
            timestamp: new Date(),
            sender: "user",
            type: "message"
        });
        document.getElementById("chatInput").value = "";
        loadChatMessages();
        showToast("✅ Pesan terkirim!");
    } catch(e) {
        console.error("Gagal kirim chat:", e);
        showToast("❌ Gagal mengirim pesan");
    }
}

// Inisialisasi chat listener realtime
function initChatListener() {
    if (!db || !isFirebaseReady) return;
    
    db.collection("chat_llc").orderBy("timestamp", "asc").onSnapshot(() => {
        loadChatMessages();
    }, (error) => {
        console.error("Listener error:", error);
    });
}

// Bind chat events
function bindChatEvents() {
    const sendBtn = document.getElementById("sendChatBtn");
    const chatInput = document.getElementById("chatInput");
    
    if (sendBtn) {
        sendBtn.addEventListener("click", () => sendChatMessage(chatInput.value));
    }
    if (chatInput) {
        chatInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") sendChatMessage(chatInput.value);
        });
    }
}

// ==================== INITIALIZATION ====================
document.addEventListener("DOMContentLoaded", function() {
    // Render UI
    renderPricing();
    renderPaymentMethods();
    renderGameSections();
    
    // Setup event listeners
    const menuBtn = document.getElementById("menuBtn");
    const closeSidebarBtn = document.getElementById("closeSidebarBtn");
    const overlay = document.getElementById("overlay");
    
    if (menuBtn) menuBtn.addEventListener("click", toggleSidebar);
    if (closeSidebarBtn) closeSidebarBtn.addEventListener("click", toggleSidebar);
    if (overlay) overlay.addEventListener("click", toggleSidebar);
    
    // Dark mode
    initDarkMode();
    
    // Online counter
    updateOnlineCount();
    setInterval(updateOnlineCount, 30000);
    
    // Firebase chat
    if (db && isFirebaseReady) {
        initChatListener();
        bindChatEvents();
        loadChatMessages();
        
        // Update status
        const statusEl = document.getElementById("chatStatus");
        if (statusEl) {
            statusEl.innerHTML = "● Online";
            statusEl.style.color = "#10b981";
        }
    } else {
        const statusEl = document.getElementById("chatStatus");
        if (statusEl) {
            statusEl.innerHTML = "● Offline";
            statusEl.style.color = "#ef4444";
        }
        const chatContainer = document.getElementById("chatMessages");
        if (chatContainer) {
            chatContainer.innerHTML = '<div class="chat-bubble admin">⚠️ Firebase belum terkonfigurasi. Ganti firebaseConfig di js/config.js dengan project Anda yang asli!</div>';
        }
    }
    
    // Close modal with outside click
    window.onclick = function(event) {
        const modal = document.getElementById("orderModal");
        if (event.target === modal) closeModal();
        const videoModal = document.getElementById("videoModal");
        if (event.target === videoModal) closeVideoModal();
        const paymentModal = document.getElementById("modalPayment");
        if (event.target === paymentModal) closePaymentModal();
    }
    
    // APK Free Link
    const freeApkLink = document.getElementById("freeApkLink");
    if (freeApkLink) {
        freeApkLink.addEventListener("click", (e) => {
            e.preventDefault();
            showToast("Hubungi admin di chat untuk mendapat APK trial");
        });
    }
    
    // Hide loading screen
    hideLoadingScreen();
});

// Modal functions
window.closeVideoModal = function() {
    const modal = document.getElementById("videoModal");
    if (modal) modal.style.display = "none";
    const frame = document.getElementById("videoFrame");
    if (frame) frame.src = "";
}

window.closePaymentModal = function() {
    const modal = document.getElementById("modalPayment");
    if (modal) modal.style.display = "none";
}