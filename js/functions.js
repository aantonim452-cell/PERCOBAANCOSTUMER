// ==================== FUNGSI UTAMA ====================

let currentMsg = "";

// Toast notification
function showToast(msg) {
    let t = document.getElementById('toastMsg');
    if (!t) return;
    t.innerHTML = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2000);
}

// Copy nomor rekening
function copyNumber(num, bank) {
    navigator.clipboard.writeText(num);
    showToast(`✅ Nomor ${bank} disalin!`);
}

// Generate pesanan
function generateMessage() {
    let g = document.getElementById("gameNameDisplay").value;
    let t = document.getElementById("transaksiType").value;
    let j = document.getElementById("jumlahKoin").value.trim();
    let u = document.getElementById("idGame").value.trim();
    let b = document.getElementById("bankTransfer").value;
    
    if (!t) return "⚠️ Pilih jenis transaksi";
    if (!j) return "⚠️ Masukkan jumlah";
    if (!u) return "⚠️ Masukkan ID Game";
    if (!b) return "⚠️ Pilih metode pembayaran";
    
    return `🛒 ORDER LLC STORE 🛒\n━━━━━━━━━━━━━━━━━━━━\n🎮 Game: ${g}\n📌 Jenis: ${t}\n💰 Jumlah: ${j}\n🆔 ID Game: ${u}\n🏦 Metode Bayar: ${b}\n━━━━━━━━━━━━━━━━━━━━\n⏰ Mohon diproses, terima kasih.`;
}

// Update preview
function updatePreview() {
    let m = generateMessage();
    currentMsg = m;
    let box = document.getElementById("previewBox");
    if (!box) return;
    if (m.startsWith("⚠️")) {
        box.innerHTML = `<i class="fas fa-exclamation-triangle"></i> ${m}`;
    } else {
        box.innerHTML = m.replace(/\n/g, '<br>');
    }
}

// Copy pesanan
function copyMessage() {
    if (currentMsg && !currentMsg.startsWith("⚠️")) {
        navigator.clipboard.writeText(currentMsg);
        showToast("✅ Pesanan disalin! Buka Chat APK dan paste.");
    } else {
        showToast("❌ Lengkapi data!");
    }
}

// Send message ke Admin via APK
function sendMessage() {
    if (currentMsg && !currentMsg.startsWith("⚠️")) {
        // Simpan ke localStorage untuk riwayat
        let riwayat = JSON.parse(localStorage.getItem('llc_riwayat') || '[]');
        riwayat.unshift({
            tanggal: new Date().toLocaleString('id-ID'),
            game: document.getElementById("gameNameDisplay").value,
            jenis: document.getElementById("transaksiType").value,
            jumlah: document.getElementById("jumlahKoin").value,
            idGame: document.getElementById("idGame").value,
            status: 'Diproses'
        });
        if (riwayat.length > 50) riwayat.pop();
        localStorage.setItem('llc_riwayat', JSON.stringify(riwayat));
        
        // Kirim ke Android
        if (window.Android && window.Android.sendMessageToAdmin) {
            window.Android.sendMessageToAdmin(currentMsg);
            showToast("✅ Pesanan dikirim ke Admin!");
            closeModal();
        } else {
            window.location.href = `llcstore://customer_chat?message=${encodeURIComponent(currentMsg)}`;
            showToast("✅ Membuka Chat APK...");
            setTimeout(() => closeModal(), 500);
        }
    } else {
        showToast("❌ Lengkapi data!");
    }
}

// Open/Close modal order
function openModal(gameName) {
    const modal = document.getElementById("orderModal");
    if (!modal) return;
    
    document.getElementById("gameNameDisplay").value = gameName;
    document.getElementById("transaksiType").value = "";
    document.getElementById("jumlahKoin").value = "";
    document.getElementById("idGame").value = "";
    document.getElementById("bankTransfer").value = "";
    updatePreview();
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    const modal = document.getElementById("orderModal");
    if (!modal) return;
    modal.style.display = "none";
    document.body.style.overflow = "";
}

// Payment modal
function showPaymentDetail(method) {
    const modal = document.getElementById('modalPayment');
    const title = document.getElementById('paymentTitle');
    const detail = document.getElementById('paymentDetail');
    if (!modal || !title || !detail) return;
    
    let content = '';
    
    if (method === 'qris') {
        title.innerHTML = 'QRIS';
        content = `<div style="background:#fff; border-radius:20px; padding:20px; text-align:center;">
                    <i class="fas fa-qrcode" style="font-size:100px; color:#000;"></i>
                    <p style="margin-top:10px; color:#000;">Scan QRIS via mobile banking/e-wallet</p>
                    <p style="font-size:11px; color:#666;">Kode QR akan muncul setelah scan</p>
                   </div>`;
    } else {
        let bankName = method.toUpperCase();
        let bankNumber = bankNumbers[method] || "Nomor tidak tersedia";
        title.innerHTML = bankName;
        content = `<div class="nomor-besar">${bankNumber}</div>
                   <button class="copy-btn-besar" onclick="copyNumber('${bankNumber}','${bankName}')">
                   <i class="fas fa-copy"></i> Salin Nomor ${bankName}
                   </button>`;
    }
    
    detail.innerHTML = content;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closePaymentModal() {
    const modal = document.getElementById('modalPayment');
    if (!modal) return;
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

// Video modal
function openVideoTutorial(url) {
    const modal = document.getElementById('videoModal');
    const frame = document.getElementById('videoFrame');
    if (!modal || !frame) return;
    
    frame.src = url;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const frame = document.getElementById('videoFrame');
    if (!modal) return;
    
    if (frame) frame.src = '';
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

// Download game
function downloadGame(gameKey) {
    let link = gameData[gameKey]?.downloadLink;
    if (link && link !== '#') {
        window.open(link, '_blank');
    } else {
        showToast("Link download belum tersedia");
    }
}

// Render game grid
function renderGame(gridId, gameKey) {
    let g = gameData[gameKey];
    if (!g) return;
    
    let rows = '';
    g.prices.forEach(p => {
        rows += `<tr>
                    <td class="jumlah-col">${p[0]}</td>
                    <td class="beli-col"><span>${p[1]}</span></td>
                    <td class="jual-col"><span>${p[2]}</span></td>
                 </tr>`;
    });
    
    const grid = document.getElementById(gridId);
    if (!grid) return;
    
    grid.innerHTML = `
        <div class="card-game-premium" id="card-${gameKey}">
            <div class="card-header-premium">
                <div class="logo-game"><img src="${g.img}" onerror="this.src='https://via.placeholder.com/55'"></div>
                <div class="game-name-premium">
                    <h2>${g.name}</h2>
                    <div class="price-sub">${g.sub}</div>
                </div>
            </div>
            <div class="table-premium">
                <table class="price-table">
                    <thead>
                        <tr>
                            <th>Jumlah</th>
                            <th>Beli</th>
                            <th>Jual</th>
                        </tr>
                    </thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>
            <div class="btn-action-group">
                <button class="btn-order-premium" onclick="openModal('${g.name}')">
                    <i class="fas fa-cart-shopping"></i> Beli/Jual
                </button>
                <button class="btn-download-premium" onclick="downloadGame('${gameKey}')">
                    <i class="fas fa-download"></i> Download
                </button>
                <button class="btn-tutorial-premium" onclick="openVideoTutorial('${g.tutorialLink}')">
                    <i class="fas fa-play-circle"></i> Tutorial
                </button>
            </div>
        </div>
    `;
}

// Render semua game
function renderAllGames() {
    renderGame('grid-higgs', 'higgs');
    renderGame('grid-royal', 'royal');
    renderGame('grid-bos', 'bos');
    renderGame('grid-berfist', 'berfist');
}

// Render payment methods
function renderPaymentMethods() {
    const container = document.getElementById('paymentMethods');
    if (!container) return;
    
    container.innerHTML = paymentMethods.map(m => `
        <div class="payment-chip" onclick="showPaymentDetail('${m.id}')">
            <i class="fas ${m.icon}"></i><span>${m.name}</span>
        </div>
    `).join('');
}

// Event listeners untuk form
function initFormListeners() {
    const transaksiType = document.getElementById("transaksiType");
    const jumlahKoin = document.getElementById("jumlahKoin");
    const idGame = document.getElementById("idGame");
    const bankTransfer = document.getElementById("bankTransfer");
    const copyBtn = document.getElementById("copyBtn");
    const sendBtn = document.getElementById("sendBtn");
    
    if (transaksiType) transaksiType.addEventListener("change", updatePreview);
    if (jumlahKoin) jumlahKoin.addEventListener("input", updatePreview);
    if (idGame) idGame.addEventListener("input", updatePreview);
    if (bankTransfer) bankTransfer.addEventListener("change", updatePreview);
    if (copyBtn) copyBtn.addEventListener("click", copyMessage);
    if (sendBtn) sendBtn.addEventListener("click", sendMessage);
}