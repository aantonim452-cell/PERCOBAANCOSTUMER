async function loadChatMessages() {
    const container = document.getElementById("chatMessages");
    if (!container) return;
    if (!db || !isFirebaseReady) {
        container.innerHTML = '<div class="chat-bubble admin">⚠️ Chat offline. Periksa koneksi.</div>';
        return;
    }
    try {
        const snap = await db.collection("chat_llc").orderBy("timestamp", "asc").limit(100).get();
        if (snap.empty) {
            container.innerHTML = '<div class="chat-bubble admin">💬 Selamat datang! Silakan bertanya.</div>';
        } else {
            container.innerHTML = "";
            snap.forEach(doc => {
                const data = doc.data();
                const div = document.createElement("div");
                div.className = `chat-bubble ${data.sender === "user" ? "user" : "admin"}`;
                div.innerText = data.text;
                container.appendChild(div);
            });
        }
        container.scrollTop = container.scrollHeight;
    } catch(e) { console.error(e); }
}

async function sendChatMessage(msg) {
    if (!msg.trim()) return;
    if (!db || !isFirebaseReady) { showToast("Chat offline"); return; }
    await db.collection("chat_llc").add({ text: msg, timestamp: new Date(), sender: "user" });
    document.getElementById("chatInput").value = "";
    loadChatMessages();
}

document.getElementById("sendChatBtn")?.addEventListener("click", () => sendChatMessage(document.getElementById("chatInput").value));
document.getElementById("chatInput")?.addEventListener("keypress", e => { if(e.key === "Enter") sendChatMessage(e.target.value); });

// Inisialisasi setelah DOM ready
document.addEventListener("DOMContentLoaded", () => {
    renderPricing();
    renderPaymentMethods();
    renderGameSections();
    if (db && isFirebaseReady) {
        loadChatMessages();
        db.collection("chat_llc").orderBy("timestamp", "asc").onSnapshot(() => loadChatMessages());
        document.getElementById("chatStatus").innerHTML = "● Online";
    } else {
        document.getElementById("chatStatus").innerHTML = "● Offline";
    }
    let onlineCount = 1482;
    setInterval(() => {
        const el = document.getElementById("onlineCount");
        if (el) el.innerText = (onlineCount + Math.floor(Math.random() * 60 - 20)).toLocaleString();
    }, 15000);
    // Hilangkan loading screen
    setTimeout(() => {
        const loader = document.getElementById("loadingScreen");
        if (loader) loader.style.opacity = "0";
        setTimeout(() => { if(loader) loader.style.display = "none"; }, 500);
    }, 800);
});