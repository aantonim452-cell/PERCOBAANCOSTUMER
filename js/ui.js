// ==================== UI RENDER FUNCTIONS ====================

function renderPricing() {
    const container = document.getElementById("pricingGrid");
    if (!container) return;
    container.innerHTML = PRICE_PLANS.map(plan => `
        <div class="pricing-card">
            <div class="pricing-duration">📅 ${plan.label}</div>
            <div class="pricing-price">${plan.priceFormatted}</div>
            <div style="font-size:10px; color:#94a3b8;">semua game</div>
        </div>
    `).join('');
}

function renderPaymentMethods() {
    const container = document.getElementById("paymentMethods");
    if (!container) return;
    container.innerHTML = PAYMENT_METHODS.map(method => `
        <div class="payment-method-item">
            <i class="fas fa-check-circle" style="color:#10b981; font-size:10px;"></i>
            ${method}
        </div>
    `).join('');
}

function renderGameSections() {
    const container = document.getElementById("gameSections");
    if (!container) return;
    
    container.innerHTML = GAMES.map(game => `
        <div class="section-title-premium">
            <h2><i class="${game.icon}" style="color:#f59e0b"></i> ${game.name}</h2>
        </div>
        <div class="game-grid-premium">
            <div class="game-card-premium" data-game="${game.id}" data-game-name="${game.name}">
                <div class="game-info">
                    <img class="game-img" src="${game.img}" alt="${game.name}" 
                         onerror="this.src='${game.imgFallback}'; this.onerror=null; this.src='https://via.placeholder.com/55x55?text=${game.name.charAt(0)}'">
                    <div>
                        <div class="game-name">${game.name}</div>
                        <div class="game-price">${game.desc}</div>
                    </div>
                </div>
                <button class="btn-order" onclick="openOrderModal('${game.id}', '${game.name}')">
                    <i class="fas fa-shopping-cart"></i> Beli Mod
                </button>
            </div>
        </div>
    `).join('');
}

function renderPaketOptions() {
    const select = document.getElementById("paketSelect");
    if (!select) return;
    select.innerHTML = '<option value="">-- Pilih Paket --</option>' + 
        PRICE_PLANS.map(plan => `<option value='${JSON.stringify(plan)}'>${plan.label} - ${plan.priceFormatted}</option>`).join('');
}

// Modal Order
let currentGame = {};

window.openOrderModal = function(gameId, gameName) {
    currentGame = { id: gameId, name: gameName };
    document.getElementById("gameNameDisplay").value = gameName;
    renderPaketOptions();
    document.getElementById("orderModal").style.display = "flex";
    updatePreview();
}

function closeModal() {
    document.getElementById("orderModal").style.display = "none";
}

function updatePreview() {
    const gameName = document.getElementById("gameNameDisplay").value;
    const paketSelect = document.getElementById("paketSelect");
    const idGame = document.getElementById("idGame").value;
    const metode = document.getElementById("bankTransfer").value;
    
    let paketText = "";
    let paketObj = null;
    if (paketSelect.value) {
        paketObj = JSON.parse(paketSelect.value);
        paketText = `${paketObj.label} - ${paketObj.priceFormatted}`;
    }
    
    const preview = `📋 ORDER MOD LLC STORE\n\n🎮 Game: ${gameName}\n📦 Paket: ${paketText || "Belum pilih"}\n🆔 ID: ${idGame || "Belum diisi"}\n💳 Metode: ${metode || "Belum pilih"}\n💰 Total: ${paketObj ? paketObj.priceFormatted : "-"}\n\n⏰ Mohon konfirmasi ke admin\n📱 Chat support sudah terhubung!`;
    
    document.getElementById("previewBox").innerHTML = preview.replace(/\n/g, '<br>');
    
    // Store for send
    window.currentOrderData = {
        game: gameName,
        paket: paketText,
        paketObj: paketObj,
        idGame: idGame,
        metode: metode
    };
}

// Event listeners untuk form
document.addEventListener("DOMContentLoaded", function() {
    const paketSelect = document.getElementById("paketSelect");
    const idGameInput = document.getElementById("idGame");
    const bankSelect = document.getElementById("bankTransfer");
    
    if (paketSelect) paketSelect.addEventListener("change", updatePreview);
    if (idGameInput) idGameInput.addEventListener("input", updatePreview);
    if (bankSelect) bankSelect.addEventListener("change", updatePreview);
    
    const copyBtn = document.getElementById("copyBtn");
    if (copyBtn) {
        copyBtn.addEventListener("click", function() {
            const previewText = document.getElementById("previewBox").innerText;
            navigator.clipboard.writeText(previewText).then(() => {
                showToast("✅ Pesanan disalin!");
            });
        });
    }
    
    const sendBtn = document.getElementById("sendBtn");
    if (sendBtn) {
        sendBtn.addEventListener("click", function() {
            const orderData = window.currentOrderData;
            if (!orderData || !orderData.game || !orderData.paketObj) {
                showToast("⚠️ Lengkapi data pesanan terlebih dahulu!");
                return;
            }
            
            // Kirim ke Firebase Chat
            const message = `📋 *ORDER BARU*\n🎮 Game: ${orderData.game}\n📦 Paket: ${orderData.paket}\n🆔 ID: ${orderData.idGame || "-"}\n💳 Metode: ${orderData.metode || "-"}\n💰 Total: ${orderData.paketObj.priceFormatted}`;
            
            if (db && isFirebaseReady) {
                db.collection("chat_llc").add({
                    text: message,
                    timestamp: new Date(),
                    sender: "user",
                    type: "order"
                }).then(() => {
                    showToast("✅ Pesanan terkirim ke chat support!");
                    saveTransaction(orderData.game, orderData.paket, orderData.idGame, orderData.metode);
                    closeModal();
                    document.getElementById("idGame").value = "";
                }).catch(e => {
                    console.error(e);
                    showToast("Gagal kirim, coba lagi");
                });
            } else {
                showToast("⚠️ Chat offline, silakan copy pesan dan kirim manual");
            }
        });
    }
});

// Sidebar
function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("open");
    document.getElementById("overlay").classList.toggle("show");
}

// Dark mode
let isDark = true;
function initDarkMode() {
    const btn = document.getElementById("darkModeBtn");
    if (btn) {
        btn.addEventListener("click", () => {
            isDark = !isDark;
            document.body.style.background = isDark ? "#0a0a1a" : "#f0f2f5";
            showToast(isDark ? "Mode Gelap" : "Mode Terang");
        });
    }
}

// Loading screen hide
function hideLoadingScreen() {
    setTimeout(() => {
        const loader = document.getElementById("loadingScreen");
        if (loader) {
            loader.style.opacity = "0";
            setTimeout(() => {
                if (loader) loader.style.display = "none";
            }, 500);
        }
    }, 800);
}