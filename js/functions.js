// HARGA PAKET (14,30,60 hari)
const PRICE_PLANS = [
    { days: 14, price: 50000, label: "14 Hari", priceFormatted: "Rp 50.000" },
    { days: 30, price: 70000, label: "30 Hari", priceFormatted: "Rp 70.000" },
    { days: 60, price: 100000, label: "60 Hari", priceFormatted: "Rp 100.000" }
];

// DAFTAR GAME dengan GAMBAR ASLI
const GAMES = [
    { id: "pubg", name: "PUBG Mobile", img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/PUBG_Mobile_app_logo.jpg/200px-PUBG_Mobile_app_logo.jpg", desc: "ESP, Aimbot, No Recoil" },
    { id: "freefire", name: "Free Fire", img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/FreeFireLogo.png/200px-FreeFireLogo.png", desc: "Diamond Hack, Wallhack" },
    { id: "mlbb", name: "Mobile Legends", img: "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Mobile_Legends_Bang_Bang_logo.png/200px-Mobile_Legends_Bang_Bang_logo.png", desc: "Map Hack, Skin Unlocker" },
    { id: "codm", name: "Call of Duty Mobile", img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Call_of_Duty_Mobile_logo.png/200px-Call_of_Duty_Mobile_logo.png", desc: "Radar, Aim Assist" },
    { id: "genshin", name: "Genshin Impact", img: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Genshin_Impact_logo.svg/200px-Genshin_Impact_logo.svg.png", desc: "God Mode, Damage Multi" },
    { id: "valorant", name: "Valorant", img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Valorant_logo.png/200px-Valorant_logo.png", desc: "TriggerBot, ESP" },
    { id: "farlight", name: "Farlight 84", img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1882280/header.jpg", desc: "Aimbot, Fly Hack" }
];

const PAYMENT_METHODS = ["QRIS", "DANA", "OVO", "BRI", "BCA", "Mandiri"];

function showToast(msg) {
    const toast = document.getElementById("toastMsg");
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2000);
}

function formatRupiah(angka) {
    return "Rp " + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function saveTransaction(game, paket, metode) {
    const riwayat = JSON.parse(localStorage.getItem('llc_riwayat') || '[]');
    riwayat.unshift({
        id: Date.now(),
        game: game,
        paket: paket.label,
        harga: paket.priceFormatted,
        metode: metode,
        tanggal: new Date().toLocaleString('id-ID'),
        status: 'Diproses'
    });
    localStorage.setItem('llc_riwayat', JSON.stringify(riwayat.slice(0, 30)));
}