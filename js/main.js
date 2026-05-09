/**
 * ============================================
 * LLC STORE - MAIN JAVASCRIPT
 * ============================================
 * MUDAH DIEDIT - Semua konfigurasi ada di sini
 */

// ============================================
// KONFIGURASI TOKO (EDIT SESUAI KEBUTUHAN)
// ============================================

const STORE_NAME = "LLC STORE";
const ADMIN_FEE = 0; // Biaya admin (isi 0 jika tidak ada)

// Daftar nominal sampai 20B
const NOMINAL_LIST = [
    "100M", "200M", "300M", "400M", "500M", "600M", "700M", "800M", "900M",
    "1B", "2B", "3B", "4B", "5B", "6B", "7B", "8B", "9B", "10B", "11B", "12B",
    "13B", "14B", "15B", "16B", "17B", "18B", "19B", "20B"
];

// ============================================
// DATA GAME (EDIT HARGA DI SINI)
// Format: [nominal, harga_beli, harga_jual]
// ============================================

const GAME_DATA = {
    higgs: {
        name: "HIGGS DOMINO",
        img: "https://play-lh.googleusercontent.com/0AfLM4u9VMWMwZK6jeC1ax4mWdM4eQAl3N5jWl2AParMUK65WOEXF_owy6fbtnJS5XY",
        downloadLink: "https://s.topinterface.net/data/sharePage.do",
        tutorialLink: "https://www.youtube.com/embed/DlMQ-SD21TU",
        prices: [
            ["100M", 6500, 4000], ["200M", 12500, 9000], ["300M", 18000, 14000],
            ["400M", 23000, 20000], ["500M", 28000, 25000], ["600M", 32500, 30000],
            ["700M", 37000, 35000], ["800M", 41000, 40000], ["900M", 45000, 45000],
            ["1B", 55000, 52000], ["2B", 110000, 104000], ["3B", 165000, 156000],
            ["4B", 220000, 208000], ["5B", 275000, 260000], ["6B", 330000, 312000],
            ["7B", 385000, 364000], ["8B", 440000, 416000], ["9B", 495000, 468000],
            ["10B", 550000, 520000], ["11B", 605000, 572000], ["12B", 660000, 624000],
            ["13B", 715000, 676000], ["14B", 770000, 728000], ["15B", 825000, 780000],
            ["16B", 880000, 832000], ["17B", 935000, 884000], ["18B", 990000, 936000],
            ["19B", 1045000, 988000], ["20B", 1100000, 1040000]
        ]
    },
    royal: {
        name: "ROYAL DOMINO",
        img: "https://ts2.mm.bing.net/th?q=ROYAL%20DREAM%20DOMINO",
        downloadLink: "https://api-1.chillaxgaming.com/rd14248172",
        tutorialLink: "https://www.youtube.com/embed/royal",
        prices: [
            ["100M", 6400, 5100], ["200M", 12800, 11200], ["300M", 19200, 17300],
            ["400M", 25600, 23400], ["500M", 32000, 29500], ["600M", 38400, 35600],
            ["700M", 44800, 41700], ["800M", 51200, 47800], ["900M", 57600, 53900],
            ["1B", 64000, 61000], ["2B", 128000, 122000], ["3B", 192000, 183000],
            ["4B", 256000, 244000], ["5B", 320000, 305000], ["6B", 384000, 366000],
            ["7B", 448000, 427000], ["8B", 512000, 488000], ["9B", 576000, 549000],
            ["10B", 640000, 610000], ["11B", 704000, 671000], ["12B", 768000, 732000],
            ["13B", 832000, 793000], ["14B", 896000, 854000], ["15B", 960000, 915000],
            ["16B", 1024000, 976000], ["17B", 1088000, 1037000], ["18B", 1152000, 1098000],
            ["19B", 1216000, 1159000], ["20B", 1280000, 1220000]
        ]
    },
    bos: {
        name: "BOS DOMINO",
        img: "https://dl.memuplay.com/new_market/img/com.vivid.domino.icon.2023-11-24-13-29-36.png",
        downloadLink: "https://i.fordomino.com/share/sharePage?&shareType=101&languageType=2",
        tutorialLink: "https://www.youtube.com/embed/bosdomino",
        prices: [
            ["10B", 50000, 40000], ["20B", 100000, 80000], ["30B", 150000, 120000],
            ["40B", 200000, 160000], ["50B", 250000, 200000], ["60B", 300000, 240000],
            ["70B", 350000, 280000], ["80B", 400000, 320000], ["90B", 450000, 360000],
            ["100B", 500000, 400000]
        ]
    },
    berfist: {
        name: "BERFIST",
        img: "https://play-lh.googleusercontent.com/mvFrMMdovquq71B-ta-JVKBdw4Zbs2RmPxe8EVFyGiXAtHAm_p0x3940NqDmFGk6vg",
        downloadLink: "https://play.google.com/store/apps/details?id=com.neptune.bearfish",
        tutorialLink: "https://www.youtube.com/embed/berfish",
        prices: [
            ["100M", 3500, 2100], ["200M", 7000, 5200], ["300M", 10500, 8300],
            ["400M", 14000, 11400], ["500M", 17500, 14500], ["600M", 21000, 17600],
            ["700M", 24500, 20700], ["800M", 28000, 23800], ["900M", 31500, 26900],
            ["1B", 35000, 31000], ["2B", 70000, 62000], ["3B", 105000, 93000],
            ["4B", 140000, 124000], ["5B", 175000, 155000], ["6B", 210000, 186000],
            ["7B", 245000, 217000], ["8B", 280000, 248000], ["9B", 315000, 279000],
            ["10B", 350000, 310000], ["11B", 385000, 341000], ["12B", 420000, 372000],
            ["13B", 455000, 403000], ["14B", 490000, 434000], ["15B", 525000, 465000],
            ["16B", 560000, 496000], ["17B", 595000, 527000], ["18B", 630000, 558000],
            ["19B", 665000, 589000], ["20B", 700000, 620000]
        ]
    }
};

// ============================================
// DATA PEMBAYARAN (QRIS, DANA, OVO)
// ============================================

const PAYMENT_DATA = {
    qris: {
        name: "QRIS",
        instruction: "Scan QR Code di bawah ini menggunakan aplikasi mobile banking atau e-wallet",
        code: "https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=QRIS&choe=UTF-8"
    },
    dana: {
        name: "DANA",
        number: "081234567890",
        holder: "LLC STORE"
    },
    ovo: {
        name: "OVO",
        number: "085678912345",
        holder: "LLC STORE"
    }
};

// ============================================
// JANGAN UBAH KODE DI BAWAH INI
// ============================================

let currentGameId = 'higgs';
let currentMsg = '';

function formatRupiah(angka) {
    return 'Rp ' + angka.toLocaleString('id-ID');
}

// Render semua game
function renderGame(gridId, gameId) {
    let game = GAME_DATA[gameId];
    let rows = '';
    for (let p of game.prices) {
        rows += `<tr>
            <td class="jumlah-col">${p[0]}</td>
            <td class="beli-col" onclick="quickOrder('${gameId}', 'BELI', '${p[0]}')">${formatRupiah(p[1])}</td>
            <td class="jual-col" onclick="quickOrder('${gameId}', 'JUAL', '${p[0]}')">${formatRupiah(p[2])}</td>
        </tr>`;
    }
    
    let harga1B = game.prices.find(p => p[0] === '1B');
    let beliPerB = harga1B ? formatRupiah(harga1B[1]) : '-';
    let jualPerB = harga1B ? formatRupiah(harga1B[2]) : '-';
    
    let html = `<div class="game-card">
        <div class="card-header">
            <div class="logo-game"><img src="${game.img}" onerror="this.src='https://via.placeholder.com/55'"></div>
            <div class="game-name"><h2>${game.name}</h2></div>
        </div>
        <div class="price-per-b">
            <div><span class="beli-b">🔰 BELI: ${beliPerB}/B</span> | <span class="jual-b">💰 JUAL: ${jualPerB}/B</span></div>
        </div>
        <div class="table-container">
            <table class="price-table">
                <thead><tr><th>Jumlah</th><th>Beli</th><th>Jual</th></tr></thead>
                <tbody>${rows}</tbody>
            </table>
        </div>
        <div class="btn-group">
            <button class="btn-order" onclick="openModal('${gameId}')"><i class="fas fa-cart-shopping"></i> Order</button>
            <button class="btn-download" onclick="downloadGame('${gameId}')"><i class="fas fa-download"></i> Download</button>
            <button class="btn-tutorial" onclick="openVideo('${game.tutorialLink}')"><i class="fas fa-play-circle"></i> Tutorial</button>
        </div>
    </div>`;
    document.getElementById(gridId).innerHTML = html;
}

// Quick order dari klik tabel
function quickOrder(gameId, jenis, nominal) {
    currentGameId = gameId;
    let game = GAME_DATA[gameId];
    document.getElementById("gameNameDisplay").value = game.name;
    document.getElementById("transaksiType").value = jenis;
    updateJumlahSelect(jenis);
    let select = document.getElementById("jumlahSelect");
    select.value = nominal;
    document.getElementById("idGame").value = "";
    document.getElementById("bankSelect").value = "";
    updatePrice();
    showPaymentDetail();
    document.getElementById("orderModal").style.display = "flex";
}

function updateJumlahSelect(jenis) {
    let select = document.getElementById("jumlahSelect");
    let game = GAME_DATA[currentGameId];
    let options = '<option value="">-- Pilih Jumlah --</option>';
    let quickHtml = '';
    
    for (let p of game.prices) {
        if (jenis === 'JUAL') {
            let nominalAngka = parseFloat(p[0]);
            let isMinimal = p[0].includes('B') && nominalAngka >= 1;
            if (!isMinimal && p[0] !== '1B') continue;
        }
        options += `<option value="${p[0]}">${p[0]} - ${formatRupiah(jenis === 'BELI' ? p[1] : p[2])}</option>`;
        quickHtml += `<span class="quick-nom-btn" onclick="setNominal('${p[0]}')">${p[0]}</span>`;
    }
    select.innerHTML = options;
    document.getElementById("quickNominal").innerHTML = quickHtml;
}

function setNominal(nominal) {
    document.getElementById("jumlahSelect").value = nominal;
    updatePrice();
    generateMessage();
}

function updatePrice() {
    let game = GAME_DATA[currentGameId];
    let jenis = document.getElementById("transaksiType").value;
    let nominal = document.getElementById("jumlahSelect").value;
    let priceData = game.prices.find(p => p[0] === nominal);
    
    if (priceData) {
        let harga = jenis === 'BELI' ? priceData[1] : priceData[2];
        document.getElementById("totalPrice").innerHTML = formatRupiah(harga);
        document.getElementById("priceDetail").innerHTML = `${nominal} x ${jenis === 'BELI' ? 'Beli' : 'Jual'} = ${formatRupiah(harga)}`;
    } else {
        document.getElementById("totalPrice").innerHTML = "Rp 0";
        document.getElementById("priceDetail").innerHTML = "";
    }
    generateMessage();
}

function showPaymentDetail() {
    let metode = document.getElementById("bankSelect").value;
    let box = document.getElementById("paymentDetailBox");
    let content = document.getElementById("paymentDetailContent");
    
    if (metode === "QRIS") {
        box.style.display = "block";
        content.innerHTML = `<div style="text-align:center">
            <img src="${PAYMENT_DATA.qris.code}" width="150" style="background:white; padding:10px; border-radius:12px;">
            <p style="font-size:11px; margin-top:8px;">Scan QRIS menggunakan mobile banking atau e-wallet</p>
        </div>`;
    } else if (metode === "DANA") {
        box.style.display = "block";
        content.innerHTML = `<div style="text-align:center">
            <div style="font-size:20px; margin-bottom:5px;">💰 ${PAYMENT_DATA.dana.number}</div>
            <div style="font-size:10px; color:#10b981;">a.n ${PAYMENT_DATA.dana.holder}</div>
            <button onclick="copyNumber('${PAYMENT_DATA.dana.number}', 'DANA')" style="margin-top:8px; background:#f59e0b; border:none; padding:6px 12px; border-radius:20px; color:white; cursor:pointer;">Salin Nomor</button>
        </div>`;
    } else if (metode === "OVO") {
        box.style.display = "block";
        content.innerHTML = `<div style="text-align:center">
            <div style="font-size:20px; margin-bottom:5px;">💰 ${PAYMENT_DATA.ovo.number}</div>
            <div style="font-size:10px; color:#10b981;">a.n ${PAYMENT_DATA.ovo.holder}</div>
            <button onclick="copyNumber('${PAYMENT_DATA.ovo.number}', 'OVO')" style="margin-top:8px; background:#f59e0b; border:none; padding:6px 12px; border-radius:20px; color:white; cursor:pointer;">Salin Nomor</button>
        </div>`;
    } else {
        box.style.display = "none";
    }
}

function copyNumber(num, name) {
    navigator.clipboard.writeText(num);
    showToast(`✅ Nomor ${name} disalin!`);
}

function generateMessage() {
    let gameName = document.getElementById("gameNameDisplay").value;
    let jenis = document.getElementById("transaksiType").value;
    let nominal = document.getElementById("jumlahSelect").value;
    let idGame = document.getElementById("idGame").value.trim();
    let metode = document.getElementById("bankSelect").value;
    let game = GAME_DATA[currentGameId];
    let priceData = game.prices.find(p => p[0] === nominal);
    
    if (!nominal || !idGame || !metode || !priceData) {
        document.getElementById("previewBox").innerHTML = "⚠️ Lengkapi semua data!";
        currentMsg = "";
        return;
    }
    
    let harga = jenis === 'BELI' ? priceData[1] : priceData[2];
    let jenisText = jenis === 'BELI' ? '🔰 BELI (Topup)' : '💰 JUAL (Bongkar)';
    
    currentMsg = `🛒 ORDER ${STORE_NAME} 🛒\n━━━━━━━━━━━━━━━━━━━━\n🎮 Game: ${gameName}\n📌 Jenis: ${jenisText}\n💎 Jumlah: ${nominal}\n💵 Total: ${formatRupiah(harga)}\n🆔 ID Game: ${idGame}\n🏦 Metode: ${metode}\n━━━━━━━━━━━━━━━━━━━━\n⏰ Mohon diproses, terima kasih.`;
    document.getElementById("previewBox").innerHTML = currentMsg.replace(/\n/g, '<br>');
}

function sendMessage() {
    if (!currentMsg) {
        showToast("❌ Lengkapi semua data!");
        return;
    }
    
    // Simpan ke localStorage
    let riwayat = JSON.parse(localStorage.getItem('llc_history') || '[]');
    riwayat.unshift({
        tanggal: new Date().toLocaleString('id-ID'),
        game: document.getElementById("gameNameDisplay").value,
        jenis: document.getElementById("transaksiType").value,
        jumlah: document.getElementById("jumlahSelect").value,
        idGame: document.getElementById("idGame").value,
        status: 'Diproses'
    });
    if (riwayat.length > 50) riwayat.pop();
    localStorage.setItem('llc_history', JSON.stringify(riwayat));
    
    // Copy ke clipboard
    navigator.clipboard.writeText(currentMsg);
    showToast("✅ Pesanan disalin! Buka APK dan paste ke admin.");
    closeModal();
}

function openModal(gameId) {
    currentGameId = gameId;
    let game = GAME_DATA[gameId];
    document.getElementById("gameNameDisplay").value = game.name;
    document.getElementById("transaksiType").value = "BELI";
    updateJumlahSelect("BELI");
    document.getElementById("jumlahSelect").value = "";
    document.getElementById("idGame").value = "";
    document.getElementById("bankSelect").value = "";
    document.getElementById("totalPrice").innerHTML = "Rp 0";
    document.getElementById("previewBox").innerHTML = "⚡ Pilih jumlah chip di atas";
    document.getElementById("paymentDetailBox").style.display = "none";
    document.getElementById("orderModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("orderModal").style.display = "none";
}

function showToast(msg) {
    let t = document.getElementById('toastMsg');
    t.innerHTML = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2000);
}

function downloadGame(gameId) {
    let link = GAME_DATA[gameId].downloadLink;
    if (link) window.open(link, '_blank');
    else showToast("Link tidak tersedia");
}

function openVideo(url) {
    let modal = document.getElementById('videoModal');
    if (!modal) {
        let newModal = document.createElement('div');
        newModal.id = 'videoModal';
        newModal.className = 'modal-video';
        newModal.innerHTML = `<div class="modal-content"><div style="display:flex; justify-content:space-between;"><h3><i class="fas fa-play-circle"></i> Tutorial</h3><span class="modal-close" onclick="closeVideoModal()">&times;</span></div><iframe id="videoFrame" width="100%" height="300" frameborder="0" allowfullscreen></iframe></div>`;
        document.body.appendChild(newModal);
        modal = newModal;
    }
    document.getElementById('videoFrame').src = url;
    modal.style.display = 'flex';
}

function closeVideoModal() {
    let modal = document.getElementById('videoModal');
    if (modal) {
        modal.style.display = 'none';
        let frame = document.getElementById('videoFrame');
        if (frame) frame.src = '';
    }
}

// Info Banner
document.getElementById('infoBanner').innerHTML = `
    <h4><i class="fas fa-bell"></i> 📢 INFO ${STORE_NAME}</h4>
    <p>✅ Harga per 1B: Higgs 55K / Royal 64K / Bos 5K / Berfist 35K<br>
    ✅ Jual/Bongkar minimal 1B<br>
    ✅ Klik harga di tabel untuk order cepat!<br>
    ✅ Copy pesanan dan kirim ke admin via APK</p>
`;

// Event Listeners
document.getElementById("transaksiType")?.addEventListener("change", function() {
    updateJumlahSelect(this.value);
    updatePrice();
    showPaymentDetail();
});
document.getElementById("jumlahSelect")?.addEventListener("change", function() {
    updatePrice();
    generateMessage();
});
document.getElementById("idGame")?.addEventListener("input", generateMessage);
document.getElementById("bankSelect")?.addEventListener("change", function() {
    generateMessage();
    showPaymentDetail();
});
document.getElementById("sendBtn")?.addEventListener("click", sendMessage);

// Payment chips
document.querySelectorAll('.payment-chip').forEach(chip => {
    chip.addEventListener('click', () => {
        let method = chip.getAttribute('data-method');
        if (method === 'qris') {
            showToast("📱 QRIS: Scan kode QR yang tersedia di form pemesanan");
        } else if (method === 'dana') {
            showToast("💰 DANA: Nomor akan muncul saat pilih metode di form");
        } else if (method === 'ovo') {
            showToast("💰 OVO: Nomor akan muncul saat pilih metode di form");
        }
    });
});

// Particles
for (let i = 0; i < 100; i++) {
    let p = document.createElement('div');
    p.classList.add('particle');
    p.style.width = Math.random() * 3 + 1 + 'px';
    p.style.height = p.style.width;
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = Math.random() * 12 + 5 + 's';
    p.style.animationDelay = Math.random() * 10 + 's';
    document.getElementById('particleZone')?.appendChild(p);
}

// Online counter
let online = 1482;
setInterval(() => {
    let change = Math.floor(Math.random() * 11) - 5;
    online = Math.max(400, Math.min(3500, online + change));
    let counter = document.getElementById('onlineCount');
    if (counter) counter.innerHTML = online.toLocaleString();
}, 13000);

// Dark mode
let dark = false;
document.getElementById('darkModeBtn')?.addEventListener('click', () => {
    dark = !dark;
    document.body.classList.toggle('dark-mode', dark);
    document.getElementById('darkModeBtn').innerHTML = dark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Sidebar
document.getElementById('menuBtn')?.addEventListener('click', () => {
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('overlay').classList.add('show');
});
document.getElementById('closeSidebarBtn')?.addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('overlay').classList.remove('show');
});
document.getElementById('overlay')?.addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('overlay').classList.remove('show');
});
document.getElementById('sidebarHome')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('overlay').classList.remove('show');
});
document.getElementById('sidebarHistory')?.addEventListener('click', (e) => {
    e.preventDefault();
    let history = JSON.parse(localStorage.getItem('llc_history') || '[]');
    if (history.length) {
        let msg = "📋 RIWAYAT TRANSAKSI:\n\n";
        history.slice(0, 10).forEach((h, i) => {
            msg += `${i+1}. ${h.tanggal}\n   ${h.game} - ${h.jumlah}\n   ID: ${h.idGame} - ${h.status}\n\n`;
        });
        alert(msg);
    } else {
        alert("Belum ada riwayat transaksi");
    }
});
document.getElementById('sidebarGuide')?.addEventListener('click', (e) => {
    e.preventDefault();
    alert("📖 PANDUAN:\n\n1. Pilih game yang ingin di-topup\n2. Klik harga di tabel atau buka form order\n3. Pilih jumlah chip\n4. Isi ID Game\n5. Pilih metode pembayaran (QRIS/DANA/OVO)\n6. Copy pesanan\n7. Kirim pesanan ke admin via APK\n8. Lakukan pembayaran sesuai instruksi");
});
document.getElementById('sidebarAbout')?.addEventListener('click', (e) => {
    e.preventDefault();
    alert(`🏪 TENTANG ${STORE_NAME}\n\nTopup Chip Terpercaya\n\n✅ Beli & Bongkar Chip\n✅ Proses Cepat 3-10 Menit\n✅ Support 24 Jam Nonstop\n✅ Harga Kompetitif\n✅ Garansi 100%\n\n© 2026 ${STORE_NAME}`);
});

// Badge scroll
document.querySelectorAll('.badge[data-game]').forEach(b => {
    b.addEventListener('click', () => {
        let game = b.dataset.game;
        let section = document.getElementById(`section-${game}`);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Render semua game
renderGame('grid-higgs', 'higgs');
renderGame('grid-royal', 'royal');
renderGame('grid-bos', 'bos');
renderGame('grid-berfist', 'berfist');

// Loading screen hilang
setTimeout(() => {
    let loading = document.getElementById('loadingScreen');
    if (loading) {
        loading.style.opacity = '0';
        setTimeout(() => loading.style.display = 'none', 500);
    }
}, 1000);