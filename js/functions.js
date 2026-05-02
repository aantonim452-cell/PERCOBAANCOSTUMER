// ==================== DATA HARGA ====================
const PRICE_PLANS = [
    { days: 14, price: 50000, label: "14 Hari", priceFormatted: "Rp 50.000" },
    { days: 30, price: 70000, label: "30 Hari", priceFormatted: "Rp 70.000" },
    { days: 60, price: 100000, label: "60 Hari", priceFormatted: "Rp 100.000" }
];

// Daftar Game dengan GAMBAR ASLI (ambil dari URL resmi)
const GAMES = [
    { 
        id: "pubg", 
        name: "PUBG Mobile", 
        icon: "fab fa-android", 
        img: "https://images.cdn4.stockunlimited.net/preview1300/pubg-mobile-game-logo_2058505.jpg",
        imgFallback: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/PUBG_Mobile_app_logo.jpg/200px-PUBG_Mobile_app_logo.jpg",
        desc: "ESP, Aimbot, No Recoil, Anti-Ban"
    },
    { 
        id: "freefire", 
        name: "Free Fire", 
        icon: "fab fa-android", 
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/FreeFireLogo.png/200px-FreeFireLogo.png",
        imgFallback: "https://play-lh.googleusercontent.com/YKRv_etfsqnFZ8bU7yUiqCSC0o6N99iFKIhx3Gg7nX8FjEo2NLpDgNdx4U0H6pHzJHM=w240-h480",
        desc: "Diamond Hack, Wallhack, Damage Mod"
    },
    { 
        id: "mlbb", 
        name: "Mobile Legends", 
        icon: "fab fa-android", 
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Mobile_Legends_Bang_Bang_logo.png/200px-Mobile_Legends_Bang_Bang_logo.png",
        imgFallback: "https://play-lh.googleusercontent.com/0FZQFQ7c7U_u0hDnC1kZ2KvTkFdQJxpZQonM6z5h6QZQmY6wDnL8DqQvMvRnP5k=w240-h480",
        desc: "Map Hack, Skin Unlocker, Drill"
    },
    { 
        id: "codm", 
        name: "Call of Duty Mobile", 
        icon: "fab fa-android", 
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Call_of_Duty_Mobile_logo.png/200px-Call_of_Duty_Mobile_logo.png",
        imgFallback: "https://play-lh.googleusercontent.com/ILgjfOHz0qX97YlQvQqKZxw0KjXtFjQzLq8L8L8L8L8=w240-h480",
        desc: "Radar, Aim Assist, Magic Bullet"
    },
    { 
        id: "genshin", 
        name: "Genshin Impact", 
        icon: "fab fa-android", 
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Genshin_Impact_logo.svg/200px-Genshin_Impact_logo.svg.png",
        imgFallback: "https://play-lh.googleusercontent.com/0FZQFQ7c7U_u0hDnC1kZ2KvTkFdQJxpZQonM6z5h6QZQmY6wDnL8DqQvMvRnP5k=w240-h480",
        desc: "God Mode, Damage Multiplier, No CD"
    },
    { 
        id: "valorant", 
        name: "Valorant", 
        icon: "fab fa-windows", 
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Valorant_logo.png/200px-Valorant_logo.png",
        imgFallback: "https://play-lh.googleusercontent.com/0FZQFQ7c7U_u0hDnC1kZ2KvTkFdQJxpZQonM6z5h6QZQmY6wDnL8DqQvMvRnP5k=w240-h480",
        desc: "TriggerBot, ESP, Radar"
    },
    { 
        id: "farlight", 
        name: "Farlight 84", 
        icon: "fab fa-android", 
        img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1882280/header.jpg",
        imgFallback: "https://play-lh.googleusercontent.com/0FZQFQ7c7U_u0hDnC1kZ2KvTkFdQJxpZQonM6z5h6QZQmY6wDnL8DqQvMvRnP5k=w240-h480",
        desc: "Aimbot, ESP, Vehicle Hack"
    }
];

// Metode Pembayaran
const PAYMENT_METHODS = ["QRIS", "DANA", "OVO", "BRI", "BCA", "Mandiri"];

// Toast notification
function showToast(msg) {
    const toast = document.getElementById("toastMsg");
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2000);
}

// Format Rupiah
function formatRupiah(angka) {
    return "Rp " + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Simpan transaksi ke localStorage
function saveTransaction(game, paket, idGame, metode) {
    const riwayat = JSON.parse(localStorage.getItem('llc_riwayat') || '[]');
    riwayat.unshift({
        id: Date.now(),
        game: game,
        paket: paket,
        idGame: idGame,
        metode: metode,
        tanggal: new Date().toLocaleString('id-ID'),
        status: 'Diproses'
    });
    localStorage.setItem('llc_riwayat', JSON.stringify(riwayat.slice(0, 30)));
}

// Update online count random
function updateOnlineCount() {
    const count = Math.floor(1200 + Math.random() * 500);
    const onlineEl = document.getElementById("onlineCount");
    if (onlineEl) onlineEl.innerHTML = count.toLocaleString();
}