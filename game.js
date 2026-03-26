/* ================================
   TFT ITEM FORGE — Game Engine v2
   🎮 Enhanced with: Sound FX, Confetti, Combo Multiplier,
   Power-ups, Floating Scores, Achievements, Screen Effects
   ================================ */

// ==================== CDN ====================
const CDN_BASE = 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/maps/tft/icons/items/hexcore/';

// ==================== ITEM DATA ====================

const BASE_ITEMS = [
    { id: 'bf', name: 'B.F. Sword', img: CDN_BASE + 'tft_item_bfsword.tft_set13.png' },
    { id: 'bow', name: 'Recurve Bow', img: CDN_BASE + 'tft_item_recurvebow.tft_set13.png' },
    { id: 'rod', name: 'Needlessly Large Rod', img: CDN_BASE + 'tft_item_needlesslylargerod.tft_set13.png' },
    { id: 'tear', name: 'Tear of the Goddess', img: CDN_BASE + 'tft_item_tearofthegoddess.tft_set13.png' },
    { id: 'vest', name: 'Chain Vest', img: CDN_BASE + 'tft_item_chainvest.tft_set13.png' },
    { id: 'cloak', name: 'Negatron Cloak', img: CDN_BASE + 'tft_item_negatroncloak.tft_set13.png' },
    { id: 'belt', name: "Giant's Belt", img: CDN_BASE + 'tft_item_giantsbelt.tft_set13.png' },
    { id: 'glove', name: 'Sparring Gloves', img: CDN_BASE + 'tft_item_sparringgloves.tft_set13.png' },
];

const COMBINED_ITEMS = {
    'bf+bf': { name: 'Deathblade', img: CDN_BASE + 'tft_item_deathblade.tft_set13.png' },
    'bf+bow': { name: 'Giant Slayer', img: CDN_BASE + 'tft_item_madredsbloodrazor.tft_set13.png' },
    'bf+rod': { name: 'Hextech Gunblade', img: CDN_BASE + 'tft_item_hextechgunblade.tft_set13.png' },
    'bf+tear': { name: 'Edge of Night', img: CDN_BASE + 'tft_item_guardianangel.tft_set13.png' },
    'bf+vest': { name: 'Steadfast Heart', img: CDN_BASE + 'tft_item_nightharvester.tft_set13.png' },
    'bf+cloak': { name: 'Bloodthirster', img: CDN_BASE + 'tft_item_bloodthirster.tft_set13.png' },
    'bf+belt': { name: "Sterak's Gage", img: CDN_BASE + 'tft_item_steraksgage.tft_set13.png' },
    'bf+glove': { name: 'Infinity Edge', img: CDN_BASE + 'tft_item_infinityedge.tft_set13.png' },
    'bow+bow': { name: 'Red Buff', img: CDN_BASE + 'tft_item_rapidfirecannon.tft_set13.png' },
    'bow+rod': { name: "Guinsoo's Rageblade", img: CDN_BASE + 'tft_item_guinsoosrageblade.tft_set13.png' },
    'bow+tear': { name: 'Void Staff', img: CDN_BASE + 'tft_item_voidstaff.tft_tft14_5.png' },
    'bow+vest': { name: "Titan's Resolve", img: CDN_BASE + 'tft_item_titansresolve.tft_set13.png' },
    'bow+cloak': { name: "Kraken's Fury", img: CDN_BASE + 'tft_item_krakenslayer.tft_tft14_5.png' },
    'bow+belt': { name: "Nashor's Tooth", img: CDN_BASE + 'tft_item_leviathan.tft_set13.png' },
    'bow+glove': { name: 'Last Whisper', img: CDN_BASE + 'tft_item_lastwhisper.tft_set13.png' },
    'rod+rod': { name: "Rabadon's Deathcap", img: CDN_BASE + 'tft_item_rabadonsdeathcap.tft_set13.png' },
    'rod+tear': { name: "Archangel's Staff", img: CDN_BASE + 'tft_item_archangelsstaff.tft_set13.png' },
    'rod+vest': { name: 'Crownguard', img: CDN_BASE + 'tft_item_crownguard.tft_set13.png' },
    'rod+cloak': { name: 'Ionic Spark', img: CDN_BASE + 'tft_item_ionicspark.tft_set13.png' },
    'rod+belt': { name: 'Morellonomicon', img: CDN_BASE + 'tft_item_morellonomicon.tft_set13.png' },
    'rod+glove': { name: 'Jeweled Gauntlet', img: CDN_BASE + 'tft_item_jeweledgauntlet.tft_set13.png' },
    'tear+tear': { name: 'Blue Buff', img: CDN_BASE + 'tft_item_bluebuff.tft_set13.png' },
    'tear+vest': { name: 'Adaptive Helm', img: CDN_BASE + 'tft_item_adaptivehelm.tft_set13.png' },
    'tear+cloak': { name: 'Chalice of Power', img: CDN_BASE + 'tft_item_chalice.tft_set13.png' },
    'tear+belt': { name: 'Spirit Visage', img: CDN_BASE + 'tft_item_spiritvisagerr.tft_tft14_5.png' },
    'tear+glove': { name: 'Hand of Justice', img: CDN_BASE + 'tft_item_unstableconcoction.tft_set13.png' },
    'vest+vest': { name: 'Bramble Vest', img: CDN_BASE + 'tft_item_bramblevest.tft_set13.png' },
    'vest+cloak': { name: 'Gargoyle Stoneplate', img: CDN_BASE + 'tft_item_gargoylestoneplate.tft_set13.png' },
    'vest+belt': { name: 'Sunfire Cape', img: CDN_BASE + 'tft_item_redbuff.tft_set13.png' },
    'vest+glove': { name: "Striker's Flail", img: CDN_BASE + 'tft_item_powergauntlet.tft_set13.png' },
    'cloak+cloak': { name: "Dragon's Claw", img: CDN_BASE + 'tft_item_dragonsclaw.tft_set13.png' },
    'cloak+belt': { name: 'Evenshroud', img: CDN_BASE + 'tft_item_spectralgauntlet.tft_set13.png' },
    'cloak+glove': { name: 'Quicksilver', img: CDN_BASE + 'tft_item_quicksilver.tft_set13.png' },
    'belt+belt': { name: "Warmog's Armor", img: CDN_BASE + 'tft_item_warmogsarmor.tft_set13.png' },
    'belt+glove': { name: "Protector's Vow", img: CDN_BASE + 'tft_item_frozenheart.tft_set13.png' },
    'glove+glove': { name: "Thief's Gloves", img: CDN_BASE + 'tft_item_thiefsgloves.tft_set13.png' },
};

// ==================== SOUND FX (Web Audio API) ====================

const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;

function ensureAudio() {
    if (!audioCtx) audioCtx = new AudioCtx();
}

function playSound(type) {
    try {
        ensureAudio();
        const now = audioCtx.currentTime;

        if (type === 'correct') {
            // Bright ascending chime
            [523.25, 659.25, 783.99].forEach((freq, i) => {
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.type = 'sine';
                osc.frequency.value = freq;
                gain.gain.setValueAtTime(0.15, now + i * 0.08);
                gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.3);
                osc.connect(gain).connect(audioCtx.destination);
                osc.start(now + i * 0.08);
                osc.stop(now + i * 0.08 + 0.35);
            });
        } else if (type === 'wrong') {
            // Low descending buzz
            [300, 200].forEach((freq, i) => {
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.type = 'square';
                osc.frequency.value = freq;
                gain.gain.setValueAtTime(0.08, now + i * 0.12);
                gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.25);
                osc.connect(gain).connect(audioCtx.destination);
                osc.start(now + i * 0.12);
                osc.stop(now + i * 0.12 + 0.3);
            });
        } else if (type === 'combo') {
            // Escalating sparkle for combos
            [700, 900, 1100, 1300].forEach((freq, i) => {
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.type = 'sine';
                osc.frequency.value = freq;
                gain.gain.setValueAtTime(0.1, now + i * 0.05);
                gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.05 + 0.2);
                osc.connect(gain).connect(audioCtx.destination);
                osc.start(now + i * 0.05);
                osc.stop(now + i * 0.05 + 0.25);
            });
        } else if (type === 'powerup') {
            // Sweeping power-up
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(400, now);
            osc.frequency.exponentialRampToValueAtTime(1200, now + 0.3);
            gain.gain.setValueAtTime(0.12, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
            osc.connect(gain).connect(audioCtx.destination);
            osc.start(now);
            osc.stop(now + 0.45);
        } else if (type === 'tick') {
            // Timer warning tick
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.value = 880;
            gain.gain.setValueAtTime(0.06, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
            osc.connect(gain).connect(audioCtx.destination);
            osc.start(now);
            osc.stop(now + 0.1);
        } else if (type === 'achievement') {
            // Triumphant fanfare
            [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.type = 'triangle';
                osc.frequency.value = freq;
                gain.gain.setValueAtTime(0.12, now + i * 0.1);
                gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.5);
                osc.connect(gain).connect(audioCtx.destination);
                osc.start(now + i * 0.1);
                osc.stop(now + i * 0.1 + 0.55);
            });
        }
    } catch (e) { /* silently fail if audio not supported */ }
}

// ==================== CONFETTI SYSTEM ====================

function spawnConfetti(x, y, count = 30, colors) {
    const container = document.getElementById('confetti-container');
    const defaultColors = ['#00e5ff', '#b44aff', '#ff3355', '#00ff88', '#ffd700', '#ff6b35'];
    const palette = colors || defaultColors;

    for (let i = 0; i < count; i++) {
        const el = document.createElement('div');
        el.className = 'confetti-piece';
        const size = Math.random() * 8 + 4;
        const angle = (Math.random() * 360) * (Math.PI / 180);
        const velocity = Math.random() * 300 + 150;
        const dx = Math.cos(angle) * velocity;
        const dy = Math.sin(angle) * velocity - 200;
        const rotation = Math.random() * 720 - 360;

        el.style.cssText = `
            left: ${x}px; top: ${y}px;
            width: ${size}px; height: ${size * (Math.random() * 0.5 + 0.5)}px;
            background: ${palette[Math.floor(Math.random() * palette.length)]};
            border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
            --dx: ${dx}px; --dy: ${dy}px; --rot: ${rotation}deg;
        `;
        container.appendChild(el);
        setTimeout(() => el.remove(), 1200);
    }
}

function spawnScreenConfetti(count = 60) {
    const w = window.innerWidth;
    const h = window.innerHeight;
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            spawnConfetti(Math.random() * w, Math.random() * h * 0.5, 3);
        }, i * 20);
    }
}

// ==================== FLOATING SCORE ====================

function spawnFloatingText(text, x, y, color = '#00e5ff', size = '1.5rem') {
    const el = document.createElement('div');
    el.className = 'floating-text';
    el.textContent = text;
    el.style.cssText = `left:${x}px; top:${y}px; color:${color}; font-size:${size};`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1000);
}

// ==================== SCREEN FLASH ====================

function screenFlash(color = 'rgba(0, 255, 136, 0.15)') {
    const flash = document.getElementById('screen-flash');
    flash.style.background = color;
    flash.classList.add('active');
    setTimeout(() => flash.classList.remove('active'), 400);
}

// ==================== COMBO MULTIPLIER ====================

function getComboMultiplier(streak) {
    if (streak >= 15) return { mult: 4.0, label: 'LEGENDARY', color: '#ffd700', glow: 'rgba(255,215,0,0.5)' };
    if (streak >= 10) return { mult: 3.0, label: 'UNSTOPPABLE', color: '#ff3355', glow: 'rgba(255,51,85,0.5)' };
    if (streak >= 7) return { mult: 2.5, label: 'DOMINATING', color: '#b44aff', glow: 'rgba(180,74,255,0.5)' };
    if (streak >= 5) return { mult: 2.0, label: 'ON FIRE!', color: '#ff6b35', glow: 'rgba(255,107,53,0.5)' };
    if (streak >= 3) return { mult: 1.5, label: 'NICE!', color: '#00e5ff', glow: 'rgba(0,229,255,0.5)' };
    return { mult: 1.0, label: '', color: '', glow: '' };
}

function updateComboDisplay() {
    const combo = getComboMultiplier(gameState.streak);
    const comboEl = document.getElementById('combo-display');
    if (combo.mult > 1) {
        comboEl.style.display = 'flex';
        comboEl.querySelector('.combo-mult').textContent = `x${combo.mult}`;
        comboEl.querySelector('.combo-label').textContent = combo.label;
        comboEl.style.setProperty('--combo-color', combo.color);
        comboEl.style.setProperty('--combo-glow', combo.glow);
        comboEl.classList.add('pop');
        setTimeout(() => comboEl.classList.remove('pop'), 400);
    } else {
        comboEl.style.display = 'none';
    }
}

// ==================== POWER-UPS ====================

let powerUps = { fiftyFifty: 1, extraTime: 1, skip: 1 };

function resetPowerUps() {
    powerUps = { fiftyFifty: 1, extraTime: 1, skip: 1 };
    updatePowerUpButtons();
}

function updatePowerUpButtons() {
    document.getElementById('pu-5050').disabled = powerUps.fiftyFifty <= 0;
    document.getElementById('pu-time').disabled = powerUps.extraTime <= 0;
    document.getElementById('pu-skip').disabled = powerUps.skip <= 0;
    document.getElementById('pu-5050-count').textContent = powerUps.fiftyFifty;
    document.getElementById('pu-time-count').textContent = powerUps.extraTime;
    document.getElementById('pu-skip-count').textContent = powerUps.skip;
}

function useFiftyFifty() {
    if (powerUps.fiftyFifty <= 0 || gameState.isAnswered) return;
    powerUps.fiftyFifty--;
    updatePowerUpButtons();
    playSound('powerup');

    const cards = document.querySelectorAll('.choice-card');
    const wrongCards = [...cards].filter(c => c.getAttribute('data-key') !== gameState.currentAnswer);
    const toRemove = wrongCards.sort(() => Math.random() - 0.5).slice(0, 3);
    toRemove.forEach(c => {
        c.classList.add('eliminated');
        c.style.pointerEvents = 'none';
    });

    spawnFloatingText('50/50 ✂️', window.innerWidth / 2, 150, '#b44aff', '2rem');
}

function useExtraTime() {
    if (powerUps.extraTime <= 0 || gameState.isAnswered) return;
    powerUps.extraTime--;
    updatePowerUpButtons();
    playSound('powerup');

    gameState.timeLeft = Math.min(gameState.timeLeft + 5, 15);
    updateTimerDisplay();
    spawnFloatingText('+5s ⏰', window.innerWidth / 2, 150, '#00e5ff', '2rem');
}

function useSkip() {
    if (powerUps.skip <= 0 || gameState.isAnswered) return;
    powerUps.skip--;
    updatePowerUpButtons();
    playSound('powerup');

    clearTimer();
    gameState.currentQuestion++;
    spawnFloatingText('SKIP ⏭️', window.innerWidth / 2, 150, '#ffd700', '2rem');
    setTimeout(() => loadQuestion(), 300);
}

// ==================== ACHIEVEMENTS ====================

const ACHIEVEMENTS = [
    { id: 'first_correct', name: 'เริ่มต้นดี!', icon: '🌟', desc: 'ตอบถูกครั้งแรก', check: s => s.correct >= 1 },
    { id: 'streak_3', name: 'ร้อนแรง!', icon: '🔥', desc: 'Streak 3', check: s => s.streak >= 3 },
    { id: 'streak_5', name: 'ไม่ชิลแล้ว!', icon: '⚡', desc: 'Streak 5', check: s => s.streak >= 5 },
    { id: 'streak_10', name: 'หยุดไม่อยู่!', icon: '💥', desc: 'Streak 10', check: s => s.streak >= 10 },
    { id: 'perfect_5', name: 'ไร้ที่ติ!', icon: '💎', desc: '5 ข้อแรกถูกหมด', check: s => s.correct >= 5 && s.wrong === 0 },
    { id: 'speed_demon', name: 'Speed Demon!', icon: '⚡', desc: 'ตอบถูกภายใน 2 วินาที', check: s => s._lastTimeLeft >= 8 && s._lastCorrect },
    { id: 'score_1000', name: 'พันคะแนน!', icon: '🏅', desc: 'ได้ 1000 คะแนน', check: s => s.score >= 1000 },
    { id: 'score_3000', name: 'สามพัน!', icon: '🏆', desc: 'ได้ 3000 คะแนน', check: s => s.score >= 3000 },
    { id: 'comeback', name: 'กลับมาแกร่ง!', icon: '💪', desc: 'Streak 3 หลังตอบผิด', check: s => s._comeback },
];

let unlockedAchievements = new Set();
let achievementQueue = [];
let showingAchievement = false;

function loadAchievements() {
    try {
        const saved = JSON.parse(localStorage.getItem('tft_achievements') || '[]');
        unlockedAchievements = new Set(saved);
    } catch { unlockedAchievements = new Set(); }
}

function saveAchievements() {
    localStorage.setItem('tft_achievements', JSON.stringify([...unlockedAchievements]));
}

function checkAchievements() {
    ACHIEVEMENTS.forEach(a => {
        if (!unlockedAchievements.has(a.id) && a.check(gameState)) {
            unlockedAchievements.add(a.id);
            saveAchievements();
            achievementQueue.push(a);
        }
    });
    processAchievementQueue();
}

function processAchievementQueue() {
    if (showingAchievement || achievementQueue.length === 0) return;
    showingAchievement = true;
    const a = achievementQueue.shift();
    showAchievementToast(a);
    playSound('achievement');
    setTimeout(() => {
        showingAchievement = false;
        processAchievementQueue();
    }, 2500);
}

function showAchievementToast(achievement) {
    const toast = document.getElementById('achievement-toast');
    toast.querySelector('.ach-icon').textContent = achievement.icon;
    toast.querySelector('.ach-name').textContent = achievement.name;
    toast.querySelector('.ach-desc').textContent = achievement.desc;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2200);
}

// ==================== GAME STATE ====================

let gameState = {
    mode: 'quiz',
    currentQuestion: 0,
    totalQuestions: 15,
    score: 0,
    streak: 0,
    bestStreak: 0,
    correct: 0,
    wrong: 0,
    lives: 3,
    questions: [],
    currentAnswer: null,
    timerInterval: null,
    timeLeft: 10,
    isAnswered: false,
    _lastTimeLeft: 0,
    _lastCorrect: false,
    _comeback: false,
    _wasWrong: false,
};

let lastMode = 'quiz';

// ==================== PARTICLES ====================

function initParticles() {
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    let particles = [];
    const PARTICLE_COUNT = 50;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    class Particle {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.5 + 0.1;
            this.hue = Math.random() > 0.5 ? 185 : 275;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${this.hue}, 100%, 70%, ${this.opacity})`;
            ctx.fill();
        }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(0, 229, 255, ${0.03 * (1 - dist / 150)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        particles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(animate);
    }
    animate();
}

// ==================== SCREEN MANAGEMENT ====================

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function goHome() {
    clearTimer();
    showScreen('start-screen');
    updateHighScoreDisplay();
}

function updateHighScoreDisplay() {
    const hs = localStorage.getItem('tft_high_score') || 0;
    document.getElementById('high-score-value').textContent = hs;
}

// ==================== CHEAT SHEET ====================

function showCheatSheet() {
    const table = document.getElementById('cs-table');
    let html = '<tr><th class="corner-cell"></th>';
    BASE_ITEMS.forEach(item => {
        html += `<th><img class="th-img" src="${item.img}" alt="${item.name}" />${item.name}</th>`;
    });
    html += '</tr>';
    BASE_ITEMS.forEach(rowItem => {
        html += `<tr><th><img class="th-img" src="${rowItem.img}" alt="${rowItem.name}" />${rowItem.name}</th>`;
        BASE_ITEMS.forEach(colItem => {
            const key = makeKey(rowItem.id, colItem.id);
            const combined = COMBINED_ITEMS[key];
            if (combined) {
                html += `<td><img class="td-img" src="${combined.img}" alt="${combined.name}" /><span class="td-name">${combined.name}</span></td>`;
            } else {
                html += `<td style="opacity:0.2">—</td>`;
            }
        });
        html += '</tr>';
    });
    table.innerHTML = html;
    showScreen('cheatsheet-screen');
}

// ==================== GAME LOGIC ====================

function makeKey(id1, id2) { return [id1, id2].sort().join('+'); }

function generateQuestions(count) {
    const keys = Object.keys(COMBINED_ITEMS);
    const shuffled = [...keys].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, keys.length));
}

function startGame(mode) {
    lastMode = mode;
    gameState = {
        mode,
        currentQuestion: 0,
        totalQuestions: mode === 'quiz' ? 15 : 999,
        score: 0, streak: 0, bestStreak: 0, correct: 0, wrong: 0,
        lives: 3,
        questions: generateQuestions(mode === 'quiz' ? 15 : 100),
        currentAnswer: null,
        timerInterval: null, timeLeft: 10, isAnswered: false,
        _lastTimeLeft: 0, _lastCorrect: false, _comeback: false, _wasWrong: false,
    };

    resetPowerUps();
    document.getElementById('score-display').textContent = '0';
    document.getElementById('streak-display').textContent = '0 🔥';
    document.getElementById('combo-display').style.display = 'none';
    document.getElementById('lives-container').style.display = mode === 'endless' ? 'block' : 'none';

    if (mode === 'endless') {
        document.querySelector('.progress-bar-container').style.display = 'none';
        updateLives();
    } else {
        document.querySelector('.progress-bar-container').style.display = 'block';
    }

    showScreen('game-screen');
    loadQuestion();
}

function loadQuestion() {
    if (gameState.mode === 'quiz' && gameState.currentQuestion >= gameState.totalQuestions) { endGame(); return; }
    if (gameState.mode === 'endless' && gameState.lives <= 0) { endGame(); return; }
    if (gameState.currentQuestion >= gameState.questions.length) {
        gameState.questions = gameState.questions.concat(generateQuestions(50));
    }

    gameState.isAnswered = false;
    const questionKey = gameState.questions[gameState.currentQuestion];
    const [comp1Id, comp2Id] = questionKey.split('+');
    const comp1 = BASE_ITEMS.find(i => i.id === comp1Id);
    const comp2 = BASE_ITEMS.find(i => i.id === comp2Id);
    gameState.currentAnswer = questionKey;

    document.getElementById('q-img-1').src = comp1.img;
    document.getElementById('q-img-1').alt = comp1.name;
    document.getElementById('q-name-1').textContent = comp1.name;
    document.getElementById('q-img-2').src = comp2.img;
    document.getElementById('q-img-2').alt = comp2.name;
    document.getElementById('q-name-2').textContent = comp2.name;

    if (gameState.mode === 'quiz') {
        const progress = ((gameState.currentQuestion) / gameState.totalQuestions) * 100;
        document.getElementById('progress-bar').style.width = progress + '%';
        document.getElementById('progress-text').textContent = `${gameState.currentQuestion + 1} / ${gameState.totalQuestions}`;
    }

    const dropZone = document.getElementById('drop-zone');
    dropZone.className = 'drop-zone';
    dropZone.innerHTML = `<div class="drop-zone-inner"><span class="drop-icon">?</span><span class="drop-text">ลากไอเท็มมาวางที่นี่</span></div>`;

    generateChoices(questionKey);
    startTimer();
}

function generateChoices(correctKey) {
    const grid = document.getElementById('choices-grid');
    grid.innerHTML = '';
    const wrongKeys = Object.keys(COMBINED_ITEMS).filter(k => k !== correctKey).sort(() => Math.random() - 0.5).slice(0, 5);
    const allChoices = [correctKey, ...wrongKeys].sort(() => Math.random() - 0.5);

    allChoices.forEach(key => {
        const item = COMBINED_ITEMS[key];
        const card = document.createElement('div');
        card.className = 'choice-card';
        card.setAttribute('data-key', key);
        card.setAttribute('draggable', 'true');
        card.innerHTML = `<img class="choice-img" src="${item.img}" alt="${item.name}" draggable="false" /><span class="item-name">${item.name}</span>`;
        card.addEventListener('dragstart', handleDragStart);
        card.addEventListener('dragend', handleDragEnd);
        card.addEventListener('touchstart', handleTouchStart, { passive: false });
        card.addEventListener('touchmove', handleTouchMove, { passive: false });
        card.addEventListener('touchend', handleTouchEnd, { passive: false });
        card.addEventListener('click', () => { if (!gameState.isAnswered) checkAnswer(key); });
        grid.appendChild(card);
    });

    const dropZone = document.getElementById('drop-zone');
    dropZone.addEventListener('dragover', handleDragOver);
    dropZone.addEventListener('dragenter', handleDragEnter);
    dropZone.addEventListener('dragleave', handleDragLeave);
    dropZone.addEventListener('drop', handleDrop);
}

// ==================== DRAG & DROP ====================

let draggedElement = null;
let draggedKey = null;

function handleDragStart(e) {
    if (gameState.isAnswered) return;
    draggedElement = this;
    draggedKey = this.getAttribute('data-key');
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', draggedKey);
    const ghost = this.cloneNode(true);
    ghost.style.position = 'absolute'; ghost.style.top = '-9999px'; ghost.style.transform = 'scale(1.1)';
    document.body.appendChild(ghost);
    e.dataTransfer.setDragImage(ghost, ghost.offsetWidth / 2, ghost.offsetHeight / 2);
    setTimeout(() => document.body.removeChild(ghost), 0);
}
function handleDragEnd() {
    this.classList.remove('dragging'); draggedElement = null; draggedKey = null;
    document.getElementById('drop-zone').classList.remove('drag-over');
}
function handleDragOver(e) { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; }
function handleDragEnter(e) { e.preventDefault(); if (!gameState.isAnswered) this.classList.add('drag-over'); }
function handleDragLeave() { this.classList.remove('drag-over'); }
function handleDrop(e) {
    e.preventDefault(); this.classList.remove('drag-over');
    const key = e.dataTransfer.getData('text/plain');
    if (key && !gameState.isAnswered) checkAnswer(key);
}

// ==================== TOUCH DRAG ====================

let touchDragElement = null;
let touchGhost = null;

function handleTouchStart(e) {
    if (gameState.isAnswered) return;
    e.preventDefault();
    const touch = e.touches[0];
    touchDragElement = this;
    draggedKey = this.getAttribute('data-key');
    touchGhost = this.cloneNode(true);
    touchGhost.classList.add('drag-ghost');
    const rect = this.getBoundingClientRect();
    touchGhost.style.width = rect.width + 'px';
    touchGhost.style.left = (touch.clientX - rect.width / 2) + 'px';
    touchGhost.style.top = (touch.clientY - rect.height / 2) + 'px';
    document.body.appendChild(touchGhost);
    this.classList.add('dragging');
}
function handleTouchMove(e) {
    if (!touchGhost) return; e.preventDefault();
    const touch = e.touches[0];
    touchGhost.style.left = (touch.clientX - touchGhost.offsetWidth / 2) + 'px';
    touchGhost.style.top = (touch.clientY - touchGhost.offsetHeight / 2) + 'px';
    const dz = document.getElementById('drop-zone');
    const r = dz.getBoundingClientRect();
    dz.classList.toggle('drag-over', touch.clientX >= r.left && touch.clientX <= r.right && touch.clientY >= r.top && touch.clientY <= r.bottom);
}
function handleTouchEnd(e) {
    if (!touchGhost) return; e.preventDefault();
    const touch = e.changedTouches[0];
    const dz = document.getElementById('drop-zone');
    const r = dz.getBoundingClientRect();
    dz.classList.remove('drag-over');
    if (touch.clientX >= r.left && touch.clientX <= r.right && touch.clientY >= r.top && touch.clientY <= r.bottom && !gameState.isAnswered) {
        checkAnswer(draggedKey);
    }
    if (touchDragElement) touchDragElement.classList.remove('dragging');
    if (touchGhost) { document.body.removeChild(touchGhost); touchGhost = null; }
    touchDragElement = null; draggedKey = null;
}

// ==================== TIMER ====================

function startTimer() {
    clearTimer();
    gameState.timeLeft = 10;
    updateTimerDisplay();
    gameState.timerInterval = setInterval(() => {
        gameState.timeLeft--;
        updateTimerDisplay();
        if (gameState.timeLeft <= 3 && gameState.timeLeft > 0) playSound('tick');
        if (gameState.timeLeft <= 0) { clearTimer(); if (!gameState.isAnswered) checkAnswer(null); }
    }, 1000);
}

function clearTimer() {
    if (gameState.timerInterval) { clearInterval(gameState.timerInterval); gameState.timerInterval = null; }
}

function updateTimerDisplay() {
    const circle = document.getElementById('timer-circle');
    const text = document.getElementById('timer-text');
    const circumference = 2 * Math.PI * 45;
    const offset = circumference * (1 - gameState.timeLeft / 10);
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = offset;
    circle.style.stroke = gameState.timeLeft <= 3 ? 'var(--neon-red)' : '';
    circle.classList.toggle('warning', gameState.timeLeft <= 3);
    text.textContent = gameState.timeLeft;
    text.style.color = gameState.timeLeft <= 3 ? 'var(--neon-red)' : 'var(--neon-cyan)';
}

// ==================== ANSWER CHECK ====================

function checkAnswer(selectedKey) {
    if (gameState.isAnswered) return;
    gameState.isAnswered = true;
    clearTimer();

    const isCorrect = selectedKey === gameState.currentAnswer;
    const correctItem = COMBINED_ITEMS[gameState.currentAnswer];
    const dropZone = document.getElementById('drop-zone');

    // Track for achievements
    gameState._lastTimeLeft = gameState.timeLeft;
    gameState._lastCorrect = isCorrect;

    if (isCorrect) {
        gameState.correct++;
        gameState.streak++;
        if (gameState.streak > gameState.bestStreak) gameState.bestStreak = gameState.streak;

        // Comeback tracking
        if (gameState._wasWrong && gameState.streak >= 3) gameState._comeback = true;

        // Score with combo multiplier
        const combo = getComboMultiplier(gameState.streak);
        const timeBonus = gameState.timeLeft * 10;
        const streakBonus = Math.min(gameState.streak, 10) * 20;
        const basePoints = 100 + timeBonus + streakBonus;
        const points = Math.round(basePoints * combo.mult);
        gameState.score += points;

        // Visual & audio feedback
        playSound('correct');
        if (gameState.streak >= 3) { playSound('combo'); spawnScreenConfetti(40); }
        screenFlash('rgba(0, 255, 136, 0.12)');

        dropZone.classList.add('correct');
        dropZone.innerHTML = `<div class="drop-zone-inner">
            <img class="drop-result-img" src="${correctItem.img}" alt="${correctItem.name}" />
            <span class="item-name" style="color:var(--neon-green);font-weight:700">${correctItem.name}</span>
        </div>`;

        // Floating score at drop zone
        const dzRect = dropZone.getBoundingClientRect();
        const comboText = combo.mult > 1 ? ` (x${combo.mult})` : '';
        spawnFloatingText(`+${points}${comboText}`, dzRect.left + dzRect.width / 2, dzRect.top, '#00ff88', combo.mult > 1 ? '2rem' : '1.5rem');

        // Confetti at drop zone
        spawnConfetti(dzRect.left + dzRect.width / 2, dzRect.top + dzRect.height / 2, 25);

        updateComboDisplay();
        showFeedback(true, `+${points}`, combo.mult > 1 ? `🔥 ${combo.label} x${combo.mult}` : `🔥 Streak: ${gameState.streak}`);

        document.querySelectorAll('.choice-card').forEach(card => {
            if (card.getAttribute('data-key') === gameState.currentAnswer) card.classList.add('correct-answer');
        });

        gameState._wasWrong = false;
    } else {
        gameState.wrong++;
        gameState.streak = 0;
        gameState._wasWrong = true;
        if (gameState.mode === 'endless') { gameState.lives--; updateLives(); }

        playSound('wrong');
        screenFlash('rgba(255, 51, 85, 0.12)');
        document.body.classList.add('screen-shake');
        setTimeout(() => document.body.classList.remove('screen-shake'), 400);

        dropZone.classList.add('wrong');
        dropZone.innerHTML = `<div class="drop-zone-inner">
            <img class="drop-result-img" src="${correctItem.img}" alt="${correctItem.name}" />
            <span class="item-name" style="color:var(--neon-red);font-weight:700">${correctItem.name}</span>
        </div>`;

        updateComboDisplay();
        const wrongItem = selectedKey ? COMBINED_ITEMS[selectedKey] : null;
        const detail = selectedKey === null ? '⏰ หมดเวลา!' : '';
        showFeedback(false, 'ผิด!', detail, wrongItem, correctItem);

        document.querySelectorAll('.choice-card').forEach(card => {
            if (card.getAttribute('data-key') === gameState.currentAnswer) card.classList.add('correct-answer');
            else if (card.getAttribute('data-key') === selectedKey) card.classList.add('wrong-answer');
        });
    }

    // Update score display
    const scoreEl = document.getElementById('score-display');
    scoreEl.textContent = gameState.score;
    scoreEl.classList.add('pop');
    setTimeout(() => scoreEl.classList.remove('pop'), 400);

    const streakEl = document.getElementById('streak-display');
    streakEl.textContent = `${gameState.streak} 🔥`;
    if (isCorrect) { streakEl.classList.add('pop'); setTimeout(() => streakEl.classList.remove('pop'), 400); }

    // Check achievements
    checkAchievements();

    setTimeout(() => { hideFeedback(); gameState.currentQuestion++; loadQuestion(); }, 2000);
}

function updateLives() {
    const display = document.getElementById('lives-display');
    let html = '';
    for (let i = 0; i < 3; i++) html += i < gameState.lives ? '❤️' : '🖤';
    display.innerHTML = html;
}

// ==================== FEEDBACK ====================

function showFeedback(isCorrect, text, detail, wrongItem, correctItem) {
    const overlay = document.getElementById('feedback-overlay');
    document.getElementById('feedback-icon').textContent = isCorrect ? '✅' : '❌';
    const textEl = document.getElementById('feedback-text');
    textEl.textContent = text;
    textEl.className = 'feedback-text ' + (isCorrect ? 'correct' : 'wrong');
    document.getElementById('feedback-detail').textContent = detail;

    const comparison = document.getElementById('feedback-comparison');
    if (!isCorrect && wrongItem && correctItem) {
        comparison.style.display = 'flex';
        document.getElementById('fb-wrong-img').src = wrongItem.img;
        document.getElementById('fb-wrong-name').textContent = wrongItem.name;
        document.getElementById('fb-correct-img').src = correctItem.img;
        document.getElementById('fb-correct-name').textContent = correctItem.name;
    } else {
        comparison.style.display = 'none';
    }

    overlay.classList.add('show');
}

function hideFeedback() { document.getElementById('feedback-overlay').classList.remove('show'); }

// ==================== END GAME ====================

function endGame() {
    clearTimer();
    const total = gameState.correct + gameState.wrong;
    const accuracy = total > 0 ? Math.round((gameState.correct / total) * 100) : 0;

    const prevHigh = parseInt(localStorage.getItem('tft_high_score') || '0');
    const isNewHigh = gameState.score > prevHigh;
    if (isNewHigh) localStorage.setItem('tft_high_score', gameState.score);

    document.getElementById('final-score').textContent = gameState.score;
    document.getElementById('final-correct').textContent = `${gameState.correct}/${total}`;
    document.getElementById('final-streak').textContent = gameState.bestStreak;

    let badge, title;
    if (accuracy >= 90) { badge = '🏆'; title = 'TFT Master!'; }
    else if (accuracy >= 70) { badge = '⭐'; title = 'เก่งมาก!'; }
    else if (accuracy >= 50) { badge = '👍'; title = 'ไม่เลว!'; }
    else { badge = '💪'; title = 'ฝึกต่อนะ!'; }

    document.getElementById('result-badge').textContent = badge;
    document.getElementById('result-title').textContent = title;

    // New high score celebration
    const newHighEl = document.getElementById('new-high-score');
    if (isNewHigh && gameState.score > 0) {
        newHighEl.style.display = 'block';
        spawnScreenConfetti(80);
        playSound('achievement');
    } else {
        newHighEl.style.display = 'none';
    }

    setTimeout(() => {
        document.getElementById('accuracy-bar').style.width = accuracy + '%';
        document.getElementById('accuracy-text').textContent = accuracy + '%';
    }, 300);

    showScreen('result-screen');
}

// ==================== INIT ====================

document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    loadAchievements();
    updateHighScoreDisplay();

    // SVG gradient for timer
    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.querySelector('.timer-ring');
    if (svg) {
        const defs = document.createElementNS(svgNS, 'defs');
        const grad = document.createElementNS(svgNS, 'linearGradient');
        grad.id = 'timer-gradient';
        grad.setAttribute('x1', '0%'); grad.setAttribute('y1', '0%');
        grad.setAttribute('x2', '100%'); grad.setAttribute('y2', '0%');
        const stop1 = document.createElementNS(svgNS, 'stop');
        stop1.setAttribute('offset', '0%'); stop1.setAttribute('stop-color', '#00e5ff');
        const stop2 = document.createElementNS(svgNS, 'stop');
        stop2.setAttribute('offset', '100%'); stop2.setAttribute('stop-color', '#b44aff');
        grad.appendChild(stop1); grad.appendChild(stop2);
        defs.appendChild(grad); svg.insertBefore(defs, svg.firstChild);
    }
});
