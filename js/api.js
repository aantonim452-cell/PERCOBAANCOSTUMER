// ==================== INISIALISASI & API ====================

// Close modal ketika klik di luar
function initModalClickOutside() {
    window.onclick = e => {
        const orderModal = document.getElementById("orderModal");
        const videoModal = document.getElementById("videoModal");
        const paymentModal = document.getElementById("modalPayment");
        
        if (e.target === orderModal) closeModal();
        if (e.target === videoModal) closeVideoModal();
        if (e.target === paymentModal) closePaymentModal();
    };
}

// Navigasi sidebar (mencegah default)
function initSidebarNavigation() {
    // Sidebar links
    const sidebarHome = document.getElementById('sidebarHome');
    const sidebarRiwayat = document.getElementById('sidebarRiwayat');
    const sidebarPanduan = document.getElementById('sidebarPanduan');
    const sidebarDashboard = document.getElementById('sidebarDashboard');
    
    // Quick menu buttons
    const riwayatBtn = document.getElementById('riwayatBtn');
    const panduanBtn = document.getElementById('panduanBtn');
    const dashboardBtn = document.getElementById('dashboardBtn');
    
    const overlay = document.getElementById('overlay');
    const sidebar = document.getElementById('sidebar');
    
    const closeSidebar = () => {
        if (sidebar) sidebar.classList.remove('open');
        if (overlay) overlay.classList.remove('show');
    };
    
    if (sidebarHome) {
        sidebarHome.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            closeSidebar();
        });
    }
    
    if (sidebarRiwayat) {
        sidebarRiwayat.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'pages/riwayat.html';
        });
    }
    
    if (sidebarPanduan) {
        sidebarPanduan.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'pages/panduan.html';
        });
    }
    
    if (sidebarDashboard) {
        sidebarDashboard.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'pages/dashboard.html';
        });
    }
    
    if (riwayatBtn) {
        riwayatBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'pages/riwayat.html';
        });
    }
    
    if (panduanBtn) {
        panduanBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'pages/panduan.html';
        });
    }
    
    if (dashboardBtn) {
        dashboardBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'pages/dashboard.html';
        });
    }
}

// Simpan versi ke localStorage
function saveAppVersion() {
    if (typeof APP_VERSION !== 'undefined') {
        localStorage.setItem('llc_version', APP_VERSION);
    }
}

// Inisialisasi utama
function init() {
    renderPaymentMethods();
    renderAllGames();
    initFormListeners();
    initUI();
    initModalClickOutside();
    initSidebarNavigation();
    saveAppVersion();
    
    console.log("✅ LLC STORE - Inisialisasi selesai");
}

// Jalankan setelah DOM loaded
document.addEventListener('DOMContentLoaded', init);