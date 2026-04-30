// ==================== UI & ANIMASI ====================

// Particles
function initParticles() {
    const pz = document.getElementById('particleZone');
    if (!pz) return;
    
    for (let i = 0; i < 150; i++) {
        let p = document.createElement('div');
        p.classList.add('particle');
        let s = Math.random() * 4 + 1;
        p.style.width = s + 'px';
        p.style.height = s + 'px';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = Math.random() * (14 - 6) + 6 + 's';
        p.style.animationDelay = Math.random() * 15 + 's';
        pz.appendChild(p);
    }
}

// Online counter smooth
let curOn = 1482, tarOn = 1482;

function getTar() {
    let h = new Date().getHours();
    if (h >= 19 && h <= 22) return Math.floor(Math.random() * (2500 - 1900 + 1) + 1900);
    if (h >= 23 || h <= 4) return Math.floor(Math.random() * (750 - 450 + 1) + 450);
    if (h >= 5 && h <= 10) return Math.floor(Math.random() * (1150 - 750 + 1) + 750);
    return Math.floor(Math.random() * (1700 - 1150 + 1) + 1150);
}

function loadStored() {
    let s = localStorage.getItem('llc_online_smooth');
    let ts = localStorage.getItem('llc_online_time');
    
    if (s && ts && (Date.now() - parseInt(ts)) < 3600000) {
        curOn = parseInt(s);
        tarOn = curOn;
    } else {
        curOn = getTar();
        tarOn = curOn;
        localStorage.setItem('llc_online_smooth', curOn);
        localStorage.setItem('llc_online_time', Date.now());
    }
    const onlineCount = document.getElementById('onlineCount');
    if (onlineCount) onlineCount.innerHTML = Math.floor(curOn).toLocaleString();
}

function smoothUp() {
    if (Math.random() < 0.3) tarOn = getTar();
    let d = tarOn - curOn;
    let stp = Math.min(Math.max(d, -10), 10);
    curOn += stp;
    if (Math.abs(d) < 5) curOn = tarOn;
    localStorage.setItem('llc_online_smooth', Math.floor(curOn));
    localStorage.setItem('llc_online_time', Date.now());
    const onlineCount = document.getElementById('onlineCount');
    if (onlineCount) onlineCount.innerHTML = Math.floor(curOn).toLocaleString();
}

function updateTime() {
    let h = new Date().getHours();
    let txt = "";
    if (h >= 19 && h <= 22) txt = "🔥 Jam sibuk! 🔥";
    else if (h >= 23 || h <= 4) txt = "🌙 Sepi, chat admin tetap aktif";
    else if (h >= 5 && h <= 10) txt = "☀️ Pagi hari, mulai ramai";
    else txt = "⭐ Waktu normal, pelayanan cepat";
    const peakTimeInfo = document.getElementById('peakTimeInfo');
    if (peakTimeInfo) peakTimeInfo.innerHTML = `${txt} | ${h.toString().padStart(2, '0')}:00`;
}

// Dark mode
function initDarkMode() {
    let dark = false;
    const darkBtn = document.getElementById('darkModeBtn');
    if (!darkBtn) return;
    
    darkBtn.onclick = () => {
        dark = !dark;
        if (dark) {
            document.body.classList.add('dark-mode');
            darkBtn.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            document.body.classList.remove('dark-mode');
            darkBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }
    };
}

// Sidebar
function initSidebar() {
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeSidebarBtn');
    const overlay = document.getElementById('overlay');
    const sidebar = document.getElementById('sidebar');
    
    if (menuBtn) {
        menuBtn.onclick = () => {
            if (sidebar) sidebar.classList.add('open');
            if (overlay) overlay.classList.add('show');
        };
    }
    
    if (closeBtn) {
        closeBtn.onclick = () => {
            if (sidebar) sidebar.classList.remove('open');
            if (overlay) overlay.classList.remove('show');
        };
    }
    
    if (overlay) {
        overlay.onclick = () => {
            if (sidebar) sidebar.classList.remove('open');
            if (overlay) overlay.classList.remove('show');
        };
    }
}

// Badge scroll ke game section
function initBadgeScroll() {
    document.querySelectorAll('.badge-premium[data-game]').forEach(badge => {
        badge.addEventListener('click', () => {
            let game = badge.dataset.game;
            const section = document.getElementById(`section-${game}`);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// Sembunyikan loading screen
function hideLoadingScreen() {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }, 1500);
}

// Inisialisasi semua UI
function initUI() {
    hideLoadingScreen();
    initParticles();
    loadStored();
    updateTime();
    initDarkMode();
    initSidebar();
    initBadgeScroll();
    
    setInterval(smoothUp, 12000);
    setInterval(updateTime, 60000);
}