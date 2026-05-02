async function loadChatMessages() {
    const container = document.getElementById("chatMessages");
    if (!container) return;
    if (!db || !isFirebaseReady) { container.innerHTML = '<div class="chat-bubble admin">⚠️ Chat offline. Periksa koneksi.</div>'; return; }
    try {
        const snap = await db.collection("chat_llc").orderBy("timestamp", "asc").limit(100).get();
        if (snap.empty) container.innerHTML = '<div class="chat-bubble admin">💬 Selamat datang! Silakan bertanya.</div>';
        else {
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

function bindChatEvents() {
    document.getElementById("sendChatBtn")?.addEventListener("click", () => sendChatMessage(document.getElementById("chatInput").value));
    document.getElementById("chatInput")?.addEventListener("keypress", e => { if(e.key === "Enter") sendChatMessage(e.target.value); });
}

document.addEventListener("DOMContentLoaded", () => {
    if (db && isFirebaseReady) {
        bindChatEvents();
        loadChatMessages();
        db.collection("chat_llc").orderBy("timestamp", "asc").onSnapshot(() => loadChatMessages());
    }
    renderPricing();
    renderPaymentMethods();
    renderGameSections();
    setInterval(() => {
        const online = document.getElementById("onlineCount");
        if(online) online.innerText = Math.floor(1200 + Math.random() * 500).toLocaleString();
    }, 30000);
});