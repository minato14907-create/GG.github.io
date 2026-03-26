/* ============================================================
   TFT ITEM FORGE — Game Engine v3 (Fixed & Ranked Edition)
   ============================================================ */

const CDN_BASE = 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/maps/tft/icons/items/hexcore/';

// ข้อมูล Rank พร้อมรูปภาพ
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

// --- ฟังก์ชันอัปเดต Rank ---
function updateRankDisplay(score) {
    const rank = TFT_RANKS.find(r => score >= r.min) || TFT_RANKS[TFT_RANKS.length - 1];
    
    // อัปเดตในหน้าจอเล่นเกม (Mini)
    const miniIcon = document.getElementById('rank-icon-mini');
    const nameDisplay = document.getElementById('rank-name-display');
    if (miniIcon) miniIcon.src = rank.icon;
    if (nameDisplay) {
        nameDisplay.innerText = rank.name;
        nameDisplay.style.color = rank.color;
    }

    // อัปเดตในหน้าจอสรุปผล (Result)
    const resultIcon = document.getElementById('result-rank-icon');
    const resultName = document.getElementById('result-rank-name');
    if (resultIcon) resultIcon.src = rank.icon;
    if (resultName) {
        resultName.innerText = rank.name;
        resultName.style.color = rank.color;
    }
}

// --- แก้ไขระบบตรวจสอบคำตอบ (Fix Item Logic Bug) ---
function checkAnswer(selectedKey) {
    if (gameState.isAnswered) return;
    gameState.isAnswered = true;
    clearTimer();

    // บัคส่วนใหญ่อยู่ที่การเปรียบเทียบ Key 
    // เราต้องมั่นใจว่า key จากฐานข้อมูล และ key จากตัวเลือก ถูกเรียงอักษรเหมือนกัน
    const isCorrect = selectedKey === gameState.currentAnswer;
    const correctItem = COMBINED_ITEMS[gameState.currentAnswer];
    const dropZone = document.getElementById('drop-zone');

    if (isCorrect) {
        gameState.correct++;
        gameState.streak++;
        
        // คำนวณคะแนน
        const combo = getComboMultiplier(gameState.streak);
        const points = Math.round((100 + (gameState.timeLeft * 10)) * combo.mult);
        gameState.score += points;

        // อัปเดตระบบ Rank ทุกครั้งที่คะแนนเปลี่ยน
        updateRankDisplay(gameState.score);

        // แสดง Effect ต่างๆ (เหมือนโค้ดเดิมของคุณ)
        playSound('correct');
        spawnConfetti(dropZone.getBoundingClientRect().left + 50, dropZone.getBoundingClientRect().top + 50);
        showFeedback(true, `+${points}`, `🔥 Streak: ${gameState.streak}`);
    } else {
        gameState.wrong++;
        gameState.streak = 0;
        if (gameState.mode === 'endless') { gameState.lives--; updateLives(); }
        
        playSound('wrong');
        const wrongItem = selectedKey ? COMBINED_ITEMS[selectedKey] : null;
        showFeedback(false, 'ผิด!', selectedKey === null ? '⏰ หมดเวลา!' : '', wrongItem, correctItem);
    }

    // อัปเดตคะแนนบนจอ
    document.getElementById('score-display').textContent = gameState.score;
    document.getElementById('streak-display').textContent = `${gameState.streak} 🔥`;

    setTimeout(() => {
        hideFeedback();
        gameState.currentQuestion++;
        loadQuestion();
    }, 2000);
}

// --- ฟังก์ชัน Helper สำหรับจัดการ Item Key (ป้องกัน A+B != B+A) ---
function getNormalizedKey(id1, id2) {
    return [id1, id2].sort().join('+');
}

// (นำฟังก์ชันอื่นๆ เช่น loadQuestion, startGame, powerups จากโค้ดเดิมของคุณมาใส่ต่อด้านล่างได้เลยครับ)