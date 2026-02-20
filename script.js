// MoralKids Application State
const appState = {
    stars: 0,
    currentCountry: 'us',
    ageGroup: '5-6',
    badges: {
        honesty: 0,
        kindness: 0,
        civic: 0,
        reader: 0
    },
    completedActivities: []
};

// Country-specific content
const countryContent = {
    us: {
        trafficSide: 'right',
        currency: 'dollars',
        greetings: 'Hello!',
        civicExamples: ['Waiting in line', 'Saying please and thank you', 'Recycling']
    },
    uk: {
        trafficSide: 'left',
        currency: 'pounds',
        greetings: 'Hello!',
        civicExamples: ['Queuing politely', 'Saying sorry', 'Keeping to the left']
    },
    in: {
        trafficSide: 'left',
        currency: 'rupees',
        greetings: 'Namaste!',
        civicExamples: ['Respecting elders', 'Removing shoes indoors', 'Sharing with neighbors']
    },
    jp: {
        trafficSide: 'left',
        currency: 'yen',
        greetings: 'Konnichiwa!',
        civicExamples: ['Bowing respectfully', 'Taking off shoes', 'Being quiet in public']
    },
    br: {
        trafficSide: 'right',
        currency: 'reais',
        greetings: 'Olá!',
        civicExamples: ['Warm greetings', 'Sharing food', 'Beach cleanup']
    },
    au: {
        trafficSide: 'left',
        currency: 'dollars',
        greetings: 'G\'day!',
        civicExamples: ['Fair go', 'Helping mates', 'Protecting nature']
    },
    ca: {
        trafficSide: 'right',
        currency: 'dollars',
        greetings: 'Hello!',
        civicExamples: ['Being polite', 'Helping others', 'Protecting wildlife']
    },
    ng: {
        trafficSide: 'right',
        currency: 'naira',
        greetings: 'Hello!',
        civicExamples: ['Respecting elders', 'Community help', 'Hospitality']
    }
};

// Game Data
const games = {
    honesty: {
        title: "Truth Finder",
        questions: [
            {
                q: "You broke a vase by accident. What do you do?",
                options: ["🙈 Hide it", "🤥 Lie about it", "✅ Tell the truth", "🏃 Run away"],
                correct: 2,
                moral: "Telling the truth helps fix mistakes!"
            },
            {
                q: "You find a toy that isn't yours. What should you do?",
                options: ["🎁 Keep it", "👀 Look for owner", "🗑️ Throw it", "🎨 Paint it"],
                correct: 1,
                moral: "Being honest means returning things to their owners!"
            },
            {
                q: "Did you finish your homework?",
                options: ["😅 Say yes (but didn't)", "✅ Tell the truth", "🤷 Pretend to be sick", "📱 Blame the dog"],
                correct: 1,
                moral: "Honesty builds trust with your parents and teachers!"
            }
        ]
    },
    sharing: {
        title: "Sharing is Caring",
        questions: [
            {
                q: "Your friend forgot their lunch. What do you do?",
                options: ["🍕 Eat in front of them", "🤝 Share your food", "😋 Hide and eat", "📱 Call their mom"],
                correct: 1,
                moral: "Sharing shows you care about others!"
            },
            {
                q: "You have two candies. Your sibling has none. What do you do?",
                options: ["🍬 Eat both", "🎁 Give one away", "🙈 Hide them", "🎭 Pretend you have none"],
                correct: 1,
                moral: "Sharing makes everyone happy!"
            }
        ]
    },
    civic: {
        title: "Traffic Hero",
        questions: [
            {
                q: "What does a red light mean?",
                options: ["🏃 Go fast", "🛑 Stop", "🚶 Walk", "🎵 Sing"],
                correct: 1,
                moral: "Following traffic rules keeps everyone safe!"
            },
            {
                q: "Where should you throw trash?",
                options: ["🚮 In the bin", "🌳 On the ground", "💨 Out the window", "🌊 In the river"],
                correct: 0,
                moral: "Keeping our environment clean is everyone's job!"
            },
            {
                q: "You see someone drop their wallet. What do you do?",
                options: ["💰 Keep it", "🏃 Run away", "📢 Tell them", "👀 Ignore it"],
                correct: 2,
                moral: "Good citizens help others!"
            }
        ]
    },
    recycle: {
        title: "Eco Warrior",
        questions: [
            {
                q: "Which bin is for paper?",
                options: ["🔵 Blue bin", "🟢 Green bin", "🟡 Yellow bin", "🔴 Red bin"],
                correct: 0,
                moral: "Recycling helps save trees!"
            },
            {
                q: "What should you do with old toys you don't use?",
                options: ["🗑️ Throw away", "🎁 Donate them", "🔥 Burn them", "🌊 Flush them"],
                correct: 1,
                moral: "Donating helps other children and reduces waste!"
            }
        ]
    }
};

// Video Data
const videos = {
    honesty: {
        title: "The Honest Lion",
        duration: "5:30",
        description: "Leo the Lion learns why telling the truth makes him the king of the jungle!",
        moral: "Honesty makes you brave and trustworthy"
    },
    sharing: {
        title: "Bear Shares His Honey",
        duration: "4:45",
        description: "Benny the Bear discovers that sharing his honey makes him more friends than keeping it all.",
        moral: "Sharing brings more joy than keeping"
    },
    civic: {
        title: "Traffic Safety Squad",
        duration: "6:15",
        description: "Join the Safety Squad as they teach road rules and civic duties!",
        moral: "Following rules keeps everyone safe"
    },
    kindness: {
        title: "Elephant Helps a Friend",
        duration: "5:00",
        description: "Ella the Elephant helps a tiny mouse, proving that kindness comes in all sizes.",
        moral: "Kindness is never too big or too small"
    }
};

// Story Data
const stories = {
    boywhocriedwolf: {
        title: "The Boy Who Cried Wolf",
        content: `
            <h2>The Boy Who Cried Wolf</h2>
            <div class="story-illustration">🐑🐺👦</div>
            <p>Once upon a time, there was a young shepherd boy who watched over his sheep on a hillside near a village.</p>
            <p>The boy was lonely and wanted attention. He thought of a mischievous plan to trick the villagers.</p>
            <p>"Wolf! Wolf! The wolf is chasing the sheep!" he shouted at the top of his lungs.</p>
            <p>The villagers came running up the hill to help him drive the wolf away. But when they arrived, they found no wolf.</p>
            <p>The boy laughed at the sight of their angry faces. "It was just a joke!" he said.</p>
            <p>The next day, the boy tried the same trick again. "Wolf! Wolf!" he cried. Again, the villagers ran to help, and again they found no wolf.</p>
            <p>Later that week, a real wolf came from the forest. The boy was terrified and cried out, "Wolf! Wolf! Please help!"</p>
            <p>But this time, the villagers thought he was trying to fool them again. No one came to help.</p>
            <p>The wolf scattered the sheep, and the boy learned a hard lesson: <strong>No one believes a liar, even when they tell the truth.</strong></p>
        `,
        moral: "Always tell the truth. Once you lose trust, it's hard to get it back."
    },
    goldenax: {
        title: "The Golden Axe",
        content: `
            <h2>The Golden Axe</h2>
            <div class="story-illustration">🪓✨🌊</div>
            <p>Once upon a time, a poor woodcutter was chopping wood near a river. Suddenly, his axe slipped from his hand and fell into the deep water.</p>
            <p>The woodcutter sat on the bank and cried, "My axe! My only axe is gone! How will I feed my family now?"</p>
            <p>Mercury, the messenger of the gods, appeared. "Why do you cry?" he asked.</p>
            <p>"My axe fell in the river," sobbed the woodcutter.</p>
            <p>Mercury dived into the river and brought up a golden axe. "Is this yours?" he asked.</p>
            <p>"No," said the honest woodcutter. "That is not my axe."</p>
            <p>Mercury dived again and brought up a silver axe. "Is this yours?" he asked.</p>
            <p>"No," said the woodcutter. "Mine was just a simple iron axe."</p>
            <p>Mercury dived a third time and brought up the woodcutter's old iron axe.</p>
            <p>"Yes! That's mine!" cried the woodcutter joyfully.</p>
            <p>Mercury was so pleased with the woodcutter's honesty that he gave him all three axes as a reward.</p>
        `,
        moral: "Honesty is always rewarded, even if not immediately."
    },
    antgrasshopper: {
        title: "The Ant and the Grasshopper",
        content: `
            <h2>The Ant and the Grasshopper</h2>
            <div class="story-illustration">🐜🦗❄️</div>
            <p>One bright summer day, a grasshopper was hopping about, singing and playing in a field.</p>
            <p>He saw an ant working hard, carrying a heavy grain of wheat to her nest.</p>
            <p>"Why are you working so hard on such a beautiful day?" asked the grasshopper. "Come and play with me!"</p>
            <p>"I am storing food for winter," said the ant. "I suggest you do the same."</p>
            <p>"Why worry about winter?" laughed the grasshopper. "There's plenty of food now!"</p>
            <p>The ant continued working. The grasshopper continued playing.</p>
            <p>When winter came, the ground was covered in snow. The grasshopper could find no food and was very hungry.</p>
            <p>He saw the ant and her family warm and well-fed in their nest. "Please," he begged, "can you spare some food?"</p>
            <p>The ant shook her head. "You sang all summer," she said. "Now you can dance all winter."</p>
        `,
        moral: "Work hard and plan for the future. Don't waste time when you should be preparing."
    }
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    updateStarDisplay();
    updateBadges();
    
    // Check for saved country
    const savedCountry = localStorage.getItem('moralKids_country');
    if (savedCountry) {
        document.getElementById('countrySelect').value = savedCountry;
        appState.currentCountry = savedCountry;
    }
});

// Navigation
function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionName).classList.add('active');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Age Group Selection
function setAgeGroup(age) {
    appState.ageGroup = age;
    saveState();
    
    // Visual feedback
    const ageCards = document.querySelectorAll('.age-card');
    ageCards.forEach(card => {
        card.style.transform = 'scale(0.95)';
        setTimeout(() => {
            card.style.transform = '';
        }, 200);
    });
    
    alert(`Great! You're in the ${age} age group! Let's start learning! 🌟`);
    showSection('games');
}

// Country Change
function changeCountry() {
    const select = document.getElementById('countrySelect');
    appState.currentCountry = select.value;
    localStorage.setItem('moralKids_country', appState.currentCountry);
    
    const country = countryContent[appState.currentCountry];
    alert(`${country.greetings} Welcome! You'll learn about ${country.civicExamples[0]} and other good habits! 🌍`);
}

// Star Management
function addStars(amount, category) {
    appState.stars += amount;
    
    // Update badge progress
    if (category && appState.badges[category] !== undefined) {
        appState.badges[category] = Math.min(appState.badges[category] + 20, 100);
    }
    
    updateStarDisplay();
    updateBadges();
    saveState();
    showCelebration(amount);
}

function updateStarDisplay() {
    document.getElementById('starCount').textContent = appState.stars;
    document.getElementById('totalStars').textContent = appState.stars;
}

function updateBadges() {
    Object.keys(appState.badges).forEach(badge => {
        const progressBar = document.getElementById(`progress-${badge}`);
        if (progressBar) {
            progressBar.style.width = `${appState.badges[badge]}%`;
        }
        
        // Unlock badge at 100%
        const badgeElement = document.getElementById(`badge-${badge}`);
        if (appState.badges[badge] >= 100 && badgeElement) {
            badgeElement.style.background = 'linear-gradient(135deg, #fef3c7, #fcd34d)';
            badgeElement.style.border = '3px solid #f59e0b';
        }
    });
}

// Celebration
function showCelebration(amount) {
    const celebration = document.getElementById('celebration');
    document.getElementById('earnedStars').textContent = amount;
    celebration.classList.add('active');
    
    // Create confetti
    for (let i = 0; i < 50; i++) {
        createConfetti();
    }
}

function closeCelebration() {
    document.getElementById('celebration').classList.remove('active');
    // Remove confetti
    document.querySelectorAll('.confetti').forEach(c => c.remove());
}

function createConfetti() {
    const colors = ['#fcd34d', '#f87171', '#60a5fa', '#a78bfa', '#34d399'];
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
    confetti.style.animationDelay = Math.random() * 2 + 's';
    document.getElementById('celebration').appendChild(confetti);
}

// Games
let currentGame = null;
let currentQuestion = 0;

function openGame(gameType) {
    currentGame = games[gameType];
    currentQuestion = 0;
    
    const modal = document.getElementById('gameModal');
    const container = document.getElementById('gameContainer');
    
    showQuestion();
    modal.classList.add('active');
}

function showQuestion() {
    const container = document.getElementById('gameContainer');
    const question = currentGame.questions[currentQuestion];
    
    container.innerHTML = `
        <h2 class="game-title">${currentGame.title}</h2>
        <div class="game-area">
            <div class="game-question">${question.q}</div>
            <div class="game-options">
                ${question.options.map((opt, idx) => `
                    <button class="game-option" onclick="answerQuestion(${idx})">${opt}</button>
                `).join('')}
            </div>
        </div>
        <p>Question ${currentQuestion + 1} of ${currentGame.questions.length}</p>
    `;
}

function answerQuestion(answerIndex) {
    const question = currentGame.questions[currentQuestion];
    const options = document.querySelectorAll('.game-option');
    
    // Disable all buttons
    options.forEach(opt => opt.disabled = true);
    
    if (answerIndex === question.correct) {
        options[answerIndex].classList.add('correct');
        
        setTimeout(() => {
            currentQuestion++;
            if (currentQuestion < currentGame.questions.length) {
                showQuestion();
            } else {
                finishGame();
            }
        }, 1500);
    } else {
        options[answerIndex].classList.add('wrong');
        options[question.correct].classList.add('correct');
        
        setTimeout(() => {
            showQuestion(); // Retry same question
        }, 2000);
    }
}

function finishGame() {
    const container = document.getElementById('gameContainer');
    container.innerHTML = `
        <div style="text-align: center; padding: 2rem;">
            <div style="font-size: 5rem; margin-bottom: 1rem;">🎉</div>
            <h2 class="game-title">Amazing Job!</h2>
            <p style="font-size: 1.25rem; color: #6b7280; margin-bottom: 2rem;">
                You learned: ${currentGame.questions[0].moral}
            </p>
            <button onclick="closeModal('gameModal'); addStars(5, 'honesty');" class="btn btn-primary">
                Collect 5 Stars! ⭐
            </button>
        </div>
    `;
}

// Videos
function playVideo(videoType) {
    const modal = document.getElementById('videoModal');
    const player = document.getElementById('videoPlayer');
    const video = videos[videoType];
    
    player.innerHTML = `
        <h2 style="font-family: 'Fredoka', sans-serif; color: #7c3aed; margin-bottom: 1rem;">
            ${video.title}
        </h2>
        <div class="video-player-placeholder">
            📺<br>
            <small style="font-size: 1rem;">Now Playing...</small>
        </div>
        <p style="margin: 1rem 0; font-size: 1.125rem;">${video.description}</p>
        <p style="color: #7c3aed; font-weight: 700; margin-bottom: 1rem;">
            Moral: ${video.moral}
        </p>
        <button onclick="closeModal('videoModal'); addStars(3, 'kindness');" class="btn btn-primary">
            I Watched It! (+3 Stars) ⭐
        </button>
    `;
    
    modal.classList.add('active');
}

// Stories
function readStory(storyId) {
    const modal = document.getElementById('storyModal');
    const reader = document.getElementById('storyReader');
    const story = stories[storyId];
    
    reader.innerHTML = `
        ${story.content}
        <div style="background: #f3e8ff; padding: 1.5rem; border-radius: 1rem; margin-top: 2rem; text-align: center;">
            <h3 style="color: #7c3aed; margin-bottom: 0.5rem;">🌟 Moral of the Story</h3>
            <p style="font-weight: 700; color: #5b21b6;">${story.moral}</p>
        </div>
        <div style="text-align: center; margin-top: 2rem;">
            <button onclick="closeModal('storyModal'); addStars(5, 'reader');" class="btn btn-primary">
                I Read It! (+5 Stars) ⭐
            </button>
        </div>
    `;
    
    modal.classList.add('active');
    
    // Mark as read
    if (!appState.completedActivities.includes(storyId)) {
        appState.completedActivities.push(storyId);
        saveState();
    }
}

// Modal Management
function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    currentGame = null;
    currentQuestion = 0;
}

// Close modal on outside click
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
    }
}

// Local Storage
function saveState() {
    localStorage.setItem('moralKids_state', JSON.stringify(appState));
}

function loadState() {
    const saved = localStorage.getItem('moralKids_state');
    if (saved) {
        const parsed = JSON.parse(saved);
        appState.stars = parsed.stars || 0;
        appState.badges = parsed.badges || { honesty: 0, kindness: 0, civic: 0, reader: 0 };
        appState.completedActivities = parsed.completedActivities || [];
        appState.ageGroup = parsed.ageGroup || '5-6';
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.remove('active');
        });
    }
});

