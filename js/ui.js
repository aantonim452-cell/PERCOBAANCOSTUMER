function renderPricing() {
    const container = document.getElementById("pricingGrid");
    if (!container) return;
    container.innerHTML = PRICE_PLANS.map(p => `
        <div class="pricing-card">
            <div class="pricing-duration">📅 ${p.label}</div>
            <div class="pricing-price">${p.priceFormatted}</div>
        </div>
    `).join('');
}

function renderPaymentMethods() {
    const container = document.getElementById("paymentMethods");
    if (!container) return;
    container.innerHTML = PAYMENT_METHODS.map(m => `<div class="payment-method-item"><i class="fas fa-check-circle"></i> ${m}</div>`).join('');
}

function renderGameSections() {
    const container = document.getElementById("gameSections");
    if (!container) return;
    container.innerHTML = GAMES.map(game => `
        <div class="section-title-premium"><h2><i class="fas fa-gamepad"></i> ${game.name}</h2></div>
        <div class="game-grid-premium">
            <div class="game-card-premium">
                <div class="game-info">
                    <img class="game-img" src="${game.img}" alt="${game.name}" onerror="this.src='https://via.placeholder.com/55x55?text=${game.name.charAt(0)}'">
                    <div><div class="game-name">${game.name}</div><div class="game-price">${game.desc}</div></div>
                </div>
                <button class="btn-order" onclick="openOrderModal('${game.id}', '${game.name}')"><i class="fas fa-shopping-cart"></i> Beli Mod</button>
            </div>
        </div>
    `).join('');
}

function renderPaketOptions() {
    const select = document.getElementById("paketSelect");
    if (!select) return;
    select.innerHTML = '<option value="">-- Pilih Paket --</option>' + 
        PRICE_PLANS.map(p => `<option value='${JSON.stringify(p)}'>${p.label} - ${p.priceFormatted}</option>`).join('');
}

function renderMetodeOptions() {
    const select = document.getElementById("bankTransfer");
    if (!select) return;
    select.innerHTML = '<option value="">-- Pilih Metode --</option>' + 
        PAYMENT_METHODS.map(m => `<option value="${m}">${m}</option>`).join('');
}

let currentGame = {};

window.openOrderModal = function(gameId, gameName) {
    currentGame = { id: gameId, name: gameName };
    document.getElementById("gameNameDisplay").value = gameName;
    renderPaketOptions();
    renderMetodeOptions();
    document.getElementById("orderModal").style.display = "flex";
    updatePreview();
}

function closeModal() {
    document.getElementById("orderModal").style.display = "none";
}

function updatePreview() {
    const game = document.getElementById("gameNameDisplay").value;
    const paketSelect = document.getElementById("paketSelect");
    const metode = document.getElementById("bankTransfer").value;
    let paketText = "", paketObj = null;
    if (paketSelect.value) {
        paketObj = JSON.parse(paketSelect.value);
        paketText = `${paketObj.label} - ${paketObj.priceFormatted}`;
    }
    const preview = `📋 ORDER MOD LLC STORE\n\n🎮 Game: ${game}\n📦 Paket: ${paketText || "Belum pilih"}\n💳 Metode: ${metode || "Belum pilih"}\n💰 Total: ${paketObj ? paketObj.priceFormatted : "-"}\n\n⏰ Mohon konfirmasi ke admin via chat.`;
    document.getElementById("previewBox").innerHTML = preview.replace(/\n/g, '<br>');
    window.currentOrderData = { game, paket: paketText, paketObj, metode };
}

document.addEventListener("DOMContentLoaded", () => {
    const paketSelect = document.getElementById("paketSelect");
    const metodeSelect = document.getElementById("bankTransfer");
    if (paketSelect) paketSelect.addEventListener("change", updatePreview);
    if (metodeSelect) metodeSelect.addEventListener("change", updatePreview);

    document.getElementById("copyBtn")?.addEventListener("click", () => {
        const text = document.getElementById("previewBox").innerText;
        navigator.clipboard.writeText(text);
        showToast("✅ Pesanan disalin!");
    });

    document.getElementById("sendBtn")?.addEventListener("click", async () => {
        const data = window.currentOrderData;
        if (!data || !data.game || !data.paketObj) {
            showToast("⚠️ Pilih game dan paket terlebih dahulu!");
            return;
        }
        const msg = `📋 *ORDER MOD BARU*\n🎮 Game: ${data.game}\n📦 Paket: ${data.paket}\n💳 Metode: ${data.metode || "-"}\n💰 Total: ${data.paketObj.priceFormatted}`;
        if (db && isFirebaseReady) {
            await db.collection("chat_llc").add({ text: msg, timestamp: new Date(), sender: "user", type: "order" });
            showToast("✅ Pesanan terkirim ke chat support!");
            saveTransaction(data.game, data.paketObj, data.metode);
            closeModal();
        } else {
            showToast("⚠️ Chat offline, silakan copy pesan dan kirim manual ke Telegram");
        }
    });
});

// Sidebar & dark mode
function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("open");
    document.getElementById("overlay").classList.toggle("show");
}
document.getElementById("menuBtn")?.addEventListener("click", toggleSidebar);
document.getElementById("closeSidebarBtn")?.addEventListener("click", toggleSidebar);
document.getElementById("overlay")?.addEventListener("click", toggleSidebar);
document.getElementById("darkModeBtn")?.addEventListener("click", () => {
    document.body.style.background = document.body.style.background === "#0a0a1a" ? "#f0f2f5" : "#0a0a1a";
    showToast("Mode berubah");
});
setTimeout(() => {
    const loader = document.getElementById("loadingScreen");
    if (loader) loader.style.display = "none";
}, 1000);