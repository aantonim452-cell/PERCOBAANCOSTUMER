// HARGA PAKET
const PRICE_PLANS = [
    { days: 14, price: 50000, label: "14 Hari", priceFormatted: "Rp 50.000" },
    { days: 30, price: 70000, label: "30 Hari", priceFormatted: "Rp 70.000" },
    { days: 60, price: 100000, label: "60 Hari", priceFormatted: "Rp 100.000" }
];

// DAFTAR GAME DENGAN GAMBAR ASLI (dari link yang Anda berikan)
const GAMES = [
    { id: "pubg", name: "PUBG Mobile", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1L1oeq0O83iQLxZPgGa0667Ppae27slZsdj_orTTxQ&s=10", desc: "ESP, Aimbot, No Recoil" },
    { id: "freefire", name: "Free Fire", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRIanj8jNJDFOzMixdsXW9ES6L3k2h-hvvAHu1eIFtuw&s", desc: "Diamond Hack, Wallhack" },
    { id: "mlbb", name: "Mobile Legends", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjGrXZQoyfip2gmYpnC8pMPGdQ4JkBiRd9EBbQ3saBuQ&s=10", desc: "Map Hack, Skin Unlocker" },
    { id: "codm", name: "Call of Duty", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTESeKStEAEoqjIE_JGXqk5I-X1xytLcjK1DxG4Hdu91A&s=10", desc: "Radar, Aim Assist" },
    { id: "genshin", name: "Genshin Impact", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRguULEwY0seVomZv6CStI9KcP9rs1xxOdblgHSWFHn5g&s=10", desc: "God Mode, Damage Multi" },
    { id: "valorant", name: "Valorant", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlTuataF1tUc9MNpLuz82cipmVwJnAKXLQpdRm6CScC4O1jPgxNX6zm2nv&s=10", desc: "TriggerBot, ESP" },
    { id: "farlight", name: "Farlight 84", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPqUbbk0QisICb8Arx6bPeIG9WuZfKfyIEYyfXy0BK7A&s=10", desc: "Aimbot, Fly Hack" }
];

const PAYMENT_METHODS = ["QRIS", "DANA", "OVO", "BRI", "BCA", "Mandiri"];

function showToast(msg) {
    const toast = document.getElementById("toastMsg");
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2000);
}