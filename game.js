/* ================================
   TFT ITEM FORGE — Game Engine v3 (Ranked Edition)
   🎮 Features: Sound FX, Confetti, Combo Multiplier,
   Power-ups, Floating Scores, Achievements, Screen Effects, Rank System
   ================================ */

// ==================== CDN ====================
const CDN_BASE = 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/maps/tft/icons/items/hexcore/';

// ==================== FALLBACK IMAGES ====================
// Base64 encoded placeholder image (64x64 purple hexagon with "?" mark)
const FALLBACK_IMG = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHJ4PSIxMiIgZmlsbD0iIzMzNTI1OCIgc3Ryb2tlPSIjNjBBQkM0IiBzdHJva2Utd2lkdGg9IjIiLz48dGV4dCB4PSIzMiIgeT0iNDAiIGZvbnQtc2l6ZT0iMjAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZmlsbD0iI0ZGRkZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iIGZvbnQtd2VpZ2h0PSJib2xkIj7/PC90ZXh0Pjwvc3ZnPg==';

// Helper function to set image with fallback
function setImageWithFallback(imgElement, src, alt) {
    imgElement.src = src;
    imgElement.alt = alt || '';
    imgElement.onerror = function() {
        this.src = FALLBACK_IMG;
        this.onerror = null; // Prevent infinite loop
    };
}

// ==================== RANK SYSTEM ====================
const TFT_RANKS = [
    { min: 5000, name: "CHALLENGER", color: "#ff4e50", icon: "https://raw.githubusercontent.com/CommunityDragon/Canis/master/tier-icons/challenger.png" },
    { min: 3500, name: "GRANDMASTER", color: "#ff7675", icon: "https://raw.githubusercontent.com/CommunityDragon/Canis/master/tier-icons/grandmaster.png" },
    { min: 2500, name: "MASTER", color: "#e91e63", icon: "https://raw.githubusercontent.com/CommunityDragon/Canis/master/tier-icons/master.png" },
    { min: 1500, name: "DIAMOND", color: "#00d2ff", icon: "https://raw.githubusercontent.com/CommunityDragon/Canis/master/tier-icons/diamond.png" },
    { min: 1000, name: "PLATINUM", color: "#4db6ac", icon: "https://raw.githubusercontent.com/CommunityDragon/Canis/master/tier-icons/platinum.png" },
    { min: 600,  name: "GOLD", color: "#fbc02d", icon: "https://raw.githubusercontent.com/CommunityDragon/Canis/master/tier-icons/gold.png" },
    { min: 300,  name: "SILVER", color: "#bdc3c7", icon: "https://raw.githubusercontent.com/CommunityDragon/Canis/master/tier-icons/silver.png" },
    { min: 0,    name: "IRON", color: "#a1887f", icon: "https://raw.githubusercontent.com/CommunityDragon/Canis/master/tier-icons/iron.png" }
];

function updateRankDisplay(score) {
    const rank = TFT_RANKS.find(r => score >= r.min) || TFT_RANKS[TFT_RANKS.length - 1];
    
    // อัปเดตในหน้าจอเล่นเกม (Mini)
    const miniIcon = document.getElementById('rank-icon-mini');
    const nameDisplay = document.getElementById('rank-name-display');
    if (miniIcon) miniIcon.src = rank.icon;
    if (nameDisplay) {
        nameDisplay.textContent = rank.name;
        nameDisplay.style.color = rank.color;
    }

    // อัปเดตในหน้าจอสรุปผล (Result)
    const resultIcon = document.getElementById('result-rank-icon');
    const resultName = document.getElementById('result-rank-name');
    if (resultIcon) resultIcon.src = rank.icon;
    if (resultName) {
        resultName.textContent = rank.name;
        resultName.style.color = rank.color;
    }
}

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
    'bf+tear': { name: 'Spear of Shojin', img: CDN_BASE + 'tft_item_spearofshojin.tft_set13.png' },
    'bf+vest': { name: 'Edge of Night', img: CDN_BASE + 'tft_item_guardianangel.tft_set13.png' },
    'bf+cloak': { name: 'Bloodthirster', img: CDN_BASE + 'tft_item_bloodthirster.tft_set13.png' },
    'bf+belt': { name: "Sterak's Gage", img: CDN_BASE + 'tft_item_steraksgage.tft_set13.png' },
    'bf+glove': { name: 'Infinity Edge', img: CDN_BASE + 'tft_item_infinityedge.tft_set13.png' },
    'bow+bow': { name: 'Red Buff', img: CDN_BASE + 'tft_item_rapidfirecannon.tft_set13.png' },
    'bow+rod': { name: "Guinsoo's Rageblade", img: CDN_BASE + 'tft_item_guinsoosrageblade.tft_set13.png' },
    'bow+tear': { name: 'Statikk Shiv', img: CDN_BASE + 'tft_item_statikkshiv.tft_set13.png' },
    'bow+vest': { name: "Titan's Resolve", img: CDN_BASE + 'tft_item_titansresolve.tft_set13.png' },
    'bow+cloak': { name: "Runaan's Hurricane", img: CDN_BASE + 'tft_item_runaanshurricane.tft_set13.png' },
    'bow+belt': { name: "Nashor's Tooth", img: CDN_BASE + 'tft_item_nashorstooth.tft_set13.png' },
    'bow+glove': { name: 'Last Whisper', img: CDN_BASE + 'tft_item_lastwhisper.tft_set13.png' },
    'rod+rod': { name: "Rabadon's Deathcap", img: CDN_BASE + 'tft_item_rabadonsdeathcap.tft_set13.png' },
    'rod+tear': { name: "Archangel's Staff", img: CDN_BASE + 'tft_item_archangelsstaff.tft_set13.png' },
    'rod+vest': { name: 'Crownguard', img: CDN_BASE + 'tft_item_crownguard.tft_set13.png' },
    'rod+cloak': { name: 'Ionic Spark', img: CDN_BASE + 'tft_item_ionicspark.tft_set13.png' },
    'rod+belt': { name: 'Morellonomicon', img: CDN_BASE + 'tft_item_morellonomicon.tft_set13.png' },
    'rod+glove': { name: 'Jeweled Gauntlet', img: CDN_BASE + 'tft_item_jeweledgauntlet.tft_set13.png' },
    'tear+tear': { name: 'Blue Buff', img: CDN_BASE + 'tft_item_bluebuff.tft_set13.png' },
    'tear+vest': { name: "Protector's Vow", img: CDN_BASE + 'tft_item_frozenheart.tft_set13.png' },
    'tear+cloak': { name: 'Adaptive Helm', img: CDN_BASE + 'tft_item_adaptivehelm.tft_set13.png' },
    'tear+belt': { name: 'Redemption', img: CDN_BASE + 'tft_item_redemption.tft_set13.png' },
    'tear+glove': { name: 'Hand of Justice', img: CDN_BASE + 'tft_item_handofjustice.tft_set13.png' },
    'vest+vest': { name: 'Bramble Vest', img: CDN_BASE + 'tft_item_bramblevest.tft_set13.png' },
    'vest+cloak': { name: 'Gargoyle Stoneplate', img: CDN_BASE + 'tft_item_gargoylestoneplate.tft_set13.png' },
    'vest+belt': { name: 'Sunfire Cape', img: CDN_BASE + 'tft_item_sunfirecape.tft_set13.png' },
    'vest+glove': { name: 'Steadfast Heart', img: CDN_BASE + 'tft_item_nightharvester.tft_set13.png' },
    'cloak+cloak': { name: "Dragon's Claw", img: CDN_BASE + 'tft_item_dragonsclaw.tft_set13.png' },
    'cloak+belt': { name: 'Evenshroud', img: CDN_BASE + 'tft_item_evenshroud.tft_set13.png' },
    'cloak+glove': { name: 'Quicksilver', img: CDN_BASE + 'tft_item_quicksilver.tft_set13.png' },
    'belt+belt': { name: "Warmog's Armor", img: CDN_BASE + 'tft_item_warmogsarmor.tft_set13.png' },
    'belt+glove': { name: 'Guardbreaker', img: CDN_BASE + 'tft_item_powergauntlet.tft_set13.png' },
    'glove+glove': { name: "Thief's Gloves", img: CDN_BASE + 'tft_item_thiefsgloves.tft_set13.png' },
};

// ==================== SOUND FX ====================

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
    } catch (e) { /* silently fail */ }
}

// ==================== CONFETTI ====================

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
    setTimeout(() => el.remove(), 1200);
}

// ==================== SCREEN EFFECTS ====================

function screenFlash(color) {
    const flash = document.getElementById('screen-flash');
    flash.style.background = color;
    flash.classList.add('flash');
    setTimeout(() => flash.classList.remove('flash'), 300);
}

// ==================== PARTICLES ====================

function initParticles() {
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    for (let i = 0; i < 50; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 3 + 1,
            color: ['#00e5ff', '#b44aff', '#ff3355'][Math.floor(Math.random() * 3)]
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = 0.3;
            ctx.fill();
        });
        ctx.globalAlpha = 1;
        requestAnimationFrame(animate);
    }
    animate();
}

// ==================== SCREENS ====================

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function goHome() { showScreen('start-screen'); }

// ==================== POWER-UPS ====================

let powerUps = { fiftyFifty: 1, extraTime: 1, skip: 1 };

function resetPowerUps() {
    powerUps = { fiftyFifty: 1, extraTime: 1, skip: 1 };
    document.getElementById('pu-5050-count').textContent = '1';
    document.getElementById('pu-time-count').textContent = '1';
    document.getElementById('pu-skip-count').textContent = '1';
    document.querySelectorAll('.pu-btn').forEach(btn => btn.style.opacity = '1');
}

function useFiftyFifty() {
    if (powerUps.fiftyFifty <= 0 || gameState.isAnswered) return;
    powerUps.fiftyFifty--;
    document.getElementById('pu-5050-count').textContent = powerUps.fiftyFifty;
    if (powerUps.fiftyFifty <= 0) document.getElementById('pu-5050').style.opacity = '0.4';
    
    playSound('powerup');
    const choices = document.querySelectorAll('.choice-card');
    const wrongChoices = Array.from(choices).filter(c => c.getAttribute('data-key') !== gameState.currentAnswer);
    const toHide = wrongChoices.sort(() => Math.random() - 0.5).slice(0, 3);
    toHide.forEach(c => { c.style.opacity = '0.2'; c.style.pointerEvents = 'none'; });
}

function useExtraTime() {
    if (powerUps.extraTime <= 0 || gameState.isAnswered) return;
    powerUps.extraTime--;
    document.getElementById('pu-time-count').textContent = powerUps.extraTime;
    if (powerUps.extraTime <= 0) document.getElementById('pu-time').style.opacity = '0.4';
    
    playSound('powerup');
    gameState.timeLeft += 5;
    updateTimerDisplay();
}

function useSkip() {
    if (powerUps.skip <= 0 || gameState.isAnswered) return;
    powerUps.skip--;
    document.getElementById('pu-skip-count').textContent = powerUps.skip;
    if (powerUps.skip <= 0) document.getElementById('pu-skip').style.opacity = '0.4';
    
    playSound('powerup');
    checkAnswer(null);
}

// ==================== COMBO SYSTEM ====================

function getComboMultiplier(streak) {
    if (streak >= 20) return { mult: 4, label: 'LEGENDARY' };
    if (streak >= 15) return { mult: 3, label: 'GODLIKE' };
    if (streak >= 10) return { mult: 2.5, label: 'UNSTOPPABLE' };
    if (streak >= 7) return { mult: 2, label: 'ON FIRE' };
    if (streak >= 5) return { mult: 1.5, label: 'ON A ROLL' };
    return { mult: 1, label: '' };
}

function updateComboDisplay() {
    const combo = getComboMultiplier(gameState.streak);
    const el = document.getElementById('combo-display');
    if (combo.mult > 1) {
        el.style.display = 'block';
        el.innerHTML = `<span class="combo-label">${combo.label}</span><span class="combo-mult">x${combo.mult}</span>`;
        el.classList.add('active');
    } else {
        el.style.display = 'none';
        el.classList.remove('active');
    }
}

// ==================== QUESTIONS ====================

function generateQuestions(count) {
    const keys = Object.keys(COMBINED_ITEMS);
    const questions = [];
    for (let i = 0; i < count; i++) {
        questions.push(keys[Math.floor(Math.random() * keys.length)]);
    }
    return questions;
}

// ==================== GAME STATE ====================

let gameState = null;
let lastMode = 'quiz';

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
    };

    resetPowerUps();
    document.getElementById('score-display').textContent = '0';
    document.getElementById('streak-display').textContent = '0 🔥';
    document.getElementById('combo-display').style.display = 'none';

    // เริ่มต้น Rank Display
    updateRankDisplay(0);

    if (mode === 'endless') {
        document.querySelector('.progress-bar-container').style.display = 'none';
        document.getElementById('lives-container').style.display = 'flex';
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

    setImageWithFallback(document.getElementById('q-img-1'), comp1.img, comp1.name);
    document.getElementById('q-name-1').textContent = comp1.name;
    setImageWithFallback(document.getElementById('q-img-2'), comp2.img, comp2.name);
    document.getElementById('q-name-2').textContent = comp2.name;

    if (gameState.mode === 'quiz') {
        const progress = ((gameState.currentQuestion) / gameState.totalQuestions) * 100;
        document.getElementById('progress-bar').style.width = progress + '%';
        document.getElementById('progress-text').textContent = `${gameState.currentQuestion + 1} / ${gameState.totalQuestions}`;
    }

    const dropZone = document.getElementById('drop-zone');
    dropZone.className = 'drop-zone';
    dropZone.innerHTML = `<div class="drop-zone-inner"><span class="drop-icon">?</span><span class="drop-text">ลากมาวางที่นี่</span></div>`;

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
        
        const img = document.createElement('img');
        img.className = 'choice-img';
        img.setAttribute('draggable', 'false');
        setImageWithFallback(img, item.img, item.name);
        
        card.innerHTML = '';
        card.appendChild(img);
        card.innerHTML += `<span class="item-name">${item.name}</span>`;
        card.addEventListener('dragstart', handleDragStart);
        card.addEventListener('dragend', handleDragEnd);
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

    if (isCorrect) {
        gameState.correct++;
        gameState.streak++;
        if (gameState.streak > gameState.bestStreak) gameState.bestStreak = gameState.streak;

        const combo = getComboMultiplier(gameState.streak);
        const timeBonus = gameState.timeLeft * 10;
        const streakBonus = Math.min(gameState.streak, 10) * 20;
        const basePoints = 100 + timeBonus + streakBonus;
        const points = Math.round(basePoints * combo.mult);
        gameState.score += points;

        // อัปเดต Rank ทุกครั้งที่ตอบถูก
        updateRankDisplay(gameState.score);

        playSound('correct');
        if (gameState.streak >= 3) { playSound('combo'); spawnScreenConfetti(40); }
        screenFlash('rgba(0, 255, 136, 0.12)');

        dropZone.classList.add('correct');
        const correctImg = document.createElement('img');
        correctImg.className = 'drop-result-img';
        setImageWithFallback(correctImg, correctItem.img, correctItem.name);
        dropZone.innerHTML = `<div class="drop-zone-inner"></div>`;
        dropZone.querySelector('.drop-zone-inner').appendChild(correctImg);
        dropZone.querySelector('.drop-zone-inner').innerHTML += `<span class="item-name" style="color:var(--neon-green);font-weight:700">${correctItem.name}</span>`;

        const dzRect = dropZone.getBoundingClientRect();
        const comboText = combo.mult > 1 ? ` (x${combo.mult})` : '';
        spawnFloatingText(`+${points}${comboText}`, dzRect.left + dzRect.width / 2, dzRect.top, '#00ff88', combo.mult > 1 ? '2rem' : '1.5rem');
        spawnConfetti(dzRect.left + dzRect.width / 2, dzRect.top + dzRect.height / 2, 25);

        updateComboDisplay();
        showFeedback(true, `+${points}`, combo.mult > 1 ? `🔥 ${combo.label} x${combo.mult}` : `🔥 Streak: ${gameState.streak}`);

        document.querySelectorAll('.choice-card').forEach(card => {
            if (card.getAttribute('data-key') === gameState.currentAnswer) card.classList.add('correct-answer');
        });
    } else {
        gameState.wrong++;
        gameState.streak = 0;
        if (gameState.mode === 'endless') { gameState.lives--; updateLives(); }

        playSound('wrong');
        screenFlash('rgba(255, 51, 85, 0.12)');
        document.body.classList.add('screen-shake');
        setTimeout(() => document.body.classList.remove('screen-shake'), 400);

        dropZone.classList.add('wrong');
        const wrongImg = document.createElement('img');
        wrongImg.className = 'drop-result-img';
        setImageWithFallback(wrongImg, correctItem.img, correctItem.name);
        dropZone.innerHTML = `<div class="drop-zone-inner"></div>`;
        dropZone.querySelector('.drop-zone-inner').appendChild(wrongImg);
        dropZone.querySelector('.drop-zone-inner').innerHTML += `<span class="item-name" style="color:var(--neon-red);font-weight:700">${correctItem.name}</span>`;

        updateComboDisplay();
        const wrongItem = selectedKey ? COMBINED_ITEMS[selectedKey] : null;
        const detail = selectedKey === null ? '⏰ หมดเวลา!' : '';
        showFeedback(false, 'ผิด!', detail, wrongItem, correctItem);

        document.querySelectorAll('.choice-card').forEach(card => {
            if (card.getAttribute('data-key') === gameState.currentAnswer) card.classList.add('correct-answer');
            else if (card.getAttribute('data-key') === selectedKey) card.classList.add('wrong-answer');
        });
    }

    document.getElementById('score-display').textContent = gameState.score;
    document.getElementById('score-display').classList.add('pop');
    setTimeout(() => document.getElementById('score-display').classList.remove('pop'), 400);

    document.getElementById('streak-display').textContent = `${gameState.streak} 🔥`;
    if (isCorrect) {
        document.getElementById('streak-display').classList.add('pop');
        setTimeout(() => document.getElementById('streak-display').classList.remove('pop'), 400);
    }

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
        setImageWithFallback(document.getElementById('fb-wrong-img'), wrongItem.img, wrongItem.name);
        document.getElementById('fb-wrong-name').textContent = wrongItem.name;
        setImageWithFallback(document.getElementById('fb-correct-img'), correctItem.img, correctItem.name);
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

    // อัปเดต Rank ในหน้าผลลัพธ์
    updateRankDisplay(gameState.score);

    let badge, title;
    if (accuracy >= 90) { badge = '🏆'; title = 'TFT Master!'; }
    else if (accuracy >= 70) { badge = '⭐'; title = 'เก่งมาก!'; }
    else if (accuracy >= 50) { badge = '👍'; title = 'ไม่เลว!'; }
    else { badge = '💪'; title = 'ฝึกต่อนะ!'; }

    document.getElementById('result-badge').textContent = badge;
    document.getElementById('result-title').textContent = title;

    if (isNewHigh && gameState.score > 0) {
        document.getElementById('new-high-score').style.display = 'block';
        spawnScreenConfetti(80);
        playSound('achievement');
    } else {
        document.getElementById('new-high-score').style.display = 'none';
    }

    showScreen('result-screen');
}

function updateHighScoreDisplay() {
    const highScore = localStorage.getItem('tft_high_score') || '0';
    document.getElementById('high-score-value').textContent = highScore;
}

// ==================== CHEAT SHEET ====================

function showCheatSheet() {
    const overlay = document.createElement('div');
    overlay.className = 'cheatsheet-overlay';
    overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };
    
    let html = '<div class="cheatsheet"><h2>📖 TFT Item Cheat Sheet</h2><div class="cheatsheet-grid">';
    
    BASE_ITEMS.forEach(base => {
        html += `<div class="cs-item cs-base"><img src="${base.img}" alt="${base.name}" onerror="this.src='${FALLBACK_IMG}'"><span>${base.name}</span></div>`;
    });
    
    html += '</div><div class="cheatsheet-grid">';
    
    Object.entries(COMBINED_ITEMS).forEach(([key, item]) => {
        const [id1, id2] = key.split('+');
        const comp1 = BASE_ITEMS.find(i => i.id === id1);
        const comp2 = BASE_ITEMS.find(i => i.id === id2);
        html += `<div class="cs-item cs-combined">
            <div class="cs-recipe"><img src="${comp1.img}" alt="" onerror="this.src='${FALLBACK_IMG}'"><span>+</span><img src="${comp2.img}" alt="" onerror="this.src='${FALLBACK_IMG}'"></div>
            <span class="cs-arrow">→</span>
            <img src="${item.img}" alt="${item.name}" onerror="this.src='${FALLBACK_IMG}'">
            <span>${item.name}</span>
        </div>`;
    });
    
    html += '</div><button class="btn-secondary" onclick="this.parentElement.remove()">ปิด</button></div>';
    overlay.innerHTML = html;
    document.body.appendChild(overlay);
}

// ==================== INIT ====================

document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    updateHighScoreDisplay();

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
