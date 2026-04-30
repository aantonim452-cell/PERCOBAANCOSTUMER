// ==================== KONFIGURASI GAME ====================
// DATA HARGA REAL (berdasarkan screenshot toko)

// Data game lengkap dengan harga manual
const gameData = {
    // ========== HIGGS DOMINO ==========
    higgs: {
        name: "HIGGS DOMINO",
        sub: "Beli 60K/B · Jual 56K/B",
        img: "https://play-lh.googleusercontent.com/0AfLM4u9VMWMwZK6jeC1ax4mWdM4eQAl3N5jWl2AParMUK65WOEXF_owy6fbtnJS5XY",
        prices: [
            ["100M", "Rp 7.840", "Rp 5.660"],
            ["200M", "Rp 15.360", "Rp 11.419"],
            ["300M", "Rp 22.560", "Rp 17.275"],
            ["400M", "Rp 29.439", "Rp 23.228"],
            ["500M", "Rp 36.000", "Rp 29.280"],
            ["600M", "Rp 42.240", "Rp 35.428"],
            ["700M", "Rp 48.160", "Rp 41.675"],
            ["800M", "Rp 53.760", "Rp 48.019"],
            ["900M", "Rp 59.039", "Rp 54.460"],
            ["1B", "Rp 60.000", "Rp 56.000"]
        ],
        downloadLink: "https://s.topinterface.net/data/sharePage.do",
        tutorialLink: "https://www.youtube.com/embed/higgsgamesdomino"
    },
    
    // ========== ROYAL DOMINO (KEMBALI NORMAL) ==========
    royal: {
        name: "ROYAL DOMINO",
        sub: "Beli 64K/B · Jual 61K/B",
        img: "https://ts2.mm.bing.net/th?q=ROYAL%20DREAM%20DOMINO",
        prices: [
            ["100M", "Rp 7.840", "Rp 5.660"],
            ["200M", "Rp 15.360", "Rp 11.419"],
            ["300M", "Rp 22.560", "Rp 17.275"],
            ["400M", "Rp 29.439", "Rp 23.228"],
            ["500M", "Rp 36.000", "Rp 29.280"],
            ["600M", "Rp 42.240", "Rp 35.428"],
            ["700M", "Rp 48.160", "Rp 41.675"],
            ["800M", "Rp 53.760", "Rp 48.019"],
            ["900M", "Rp 59.039", "Rp 54.460"],
            ["1B", "Rp 64.000", "Rp 61.000"]
        ],
        downloadLink: "https://api-1.chillaxgaming.com/rd14248172",
        tutorialLink: "https://www.youtube.com/embed/royal"
    },
    
    // ========== BOS DOMINO ==========
    bos: {
        name: "BOS DOMINO",
        sub: "Beli 4K/B · Jual 3K/B (Min 10B)",
        img: "https://dl.memuplay.com/new_market/img/com.vivid.domino.icon.2023-11-24-13-29-36.png",
        prices: [
            ["10B", "Rp 40.000", "Rp 30.000"],
            ["20B", "Rp 79.000", "Rp 59.000"],
            ["30B", "Rp 117.000", "Rp 87.000"],
            ["40B", "Rp 154.000", "Rp 114.000"],
            ["50B", "Rp 190.000", "Rp 140.000"],
            ["60B", "Rp 225.000", "Rp 165.000"],
            ["70B", "Rp 259.000", "Rp 189.000"],
            ["80B", "Rp 292.000", "Rp 212.000"],
            ["90B", "Rp 324.000", "Rp 234.000"],
            ["100B", "Rp 355.000", "Rp 255.000"]
        ],
        downloadLink: "https://i.fordomino.com/share/sharePage?&shareType=101&languageType=2",
        tutorialLink: "https://www.youtube.com/embed/bosdomino"
    },
    
    // ========== BERFIST ==========
    berfist: {
        name: "BERFIST",
        sub: "Beli 35K/B · Jual 31K/B",
        img: "https://play-lh.googleusercontent.com/mvFrMMdovquq71B-ta-JVKBdw4Zbs2RmPxe8EVFyGiXAtHAm_p0x3940NqDmFGk6vg",
        prices: [
            ["100M", "Rp 4.550", "Rp 3.100"],
            ["200M", "Rp 8.960", "Rp 6.200"],
            ["300M", "Rp 13.160", "Rp 9.300"],
            ["400M", "Rp 17.170", "Rp 12.400"],
            ["500M", "Rp 21.000", "Rp 15.500"],
            ["600M", "Rp 24.640", "Rp 18.600"],
            ["700M", "Rp 28.090", "Rp 21.700"],
            ["800M", "Rp 31.360", "Rp 24.800"],
            ["900M", "Rp 34.440", "Rp 27.900"],
            ["1B", "Rp 35.000", "Rp 31.000"]
        ],
        downloadLink: "https://play.google.com/store/apps/details?id=com.neptune.bearfish",
        tutorialLink: "https://www.youtube.com/embed/berfish"
    }
};

// Daftar metode pembayaran
const paymentMethods = [
    { id: "qris", name: "QRIS", icon: "fa-qrcode" },
    { id: "dana", name: "DANA", icon: "fa-android" },
    { id: "ovo", name: "OVO", icon: "fa-android" },
    { id: "bri", name: "BRI", icon: "fa-university" },
    { id: "bni", name: "BNI", icon: "fa-university" },
    { id: "bca", name: "BCA", icon: "fa-university" },
    { id: "mandiri", name: "Mandiri", icon: "fa-university" },
    { id: "cimb", name: "CIMB", icon: "fa-university" },
    { id: "jago", name: "Jago", icon: "fa-university" },
    { id: "seabank", name: "SeaBank", icon: "fa-university" }
];

// Nomor rekening / metode pembayaran
const bankNumbers = {
    qris: "QRIS",
    dana: "081234567890",
    ovo: "085678912345",
    bri: "88810123456789",
    bni: "1234567890",
    bca: "3940123456",
    mandiri: "12300987654321",
    cimb: "7001234567890",
    jago: "111234567890",
    seabank: "333456789012"
};

// Versi aplikasi (update setiap ada perubahan harga)
const APP_VERSION = "1.2.0";

console.log("✅ LLC STORE v" + APP_VERSION + " - Data harga loaded");