document.getElementById('room-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const roomName = document.getElementById('room-name').value;
    const favoritePlayer = document.getElementById('favorite-player').value;
    const chatRoomTitle = document.getElementById('chat-room-title');
    chatRoomTitle.textContent = `Room: ${roomName}`;
    showSection('chat-room');
    initializeChat(favoritePlayer);
});

function initializeChat(favoritePlayer) {
    const chatBox = document.getElementById('chat-box');
    const messages = [
        { user: 'CricHub Bot', text: `Hello ${favoritePlayer} fan! Let's start the chat.` },
        { user: 'Tejas', text: 'Hey everyone! Excited for the match today.' },
        { user: 'Daksh', text: 'Absolutely! Go MS Dhoni!' },
        { user: 'Rutunj', text: 'I am ready for some exciting cricket!' },
        { user: 'CricHub Bot', text: 'Will India win against South Africa tomorrow?' },
    ];

    messages.forEach(message => addMessageToChat(chatBox, message.user, message.text));

    setTimeout(() => {
        addMessageToChat(chatBox, 'Tejas', 'Yes, they will win! Virat Kohli is in great form.');
        setTimeout(() => {
            addMessageToChat(chatBox, 'Daksh', 'I agree, but it will be a tough match.');
            setTimeout(() => {
                addMessageToChat(chatBox, 'Rutunj', 'Let\'s hope for the best! Fingers crossed.');
                setTimeout(() => {
                    addMessageToChat(chatBox, 'CricHub Bot', 'Who do you think will score the most runs for India?');
                }, 3000);
            }, 3000);
        }, 3000);
    }, 3000);
}

function addMessageToChat(chatBox, user, text) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.innerHTML = `<span class="user">${user}:</span> <span class="text">${text}</span>`;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
    if (userInput.value.trim()) {
        addMessageToChat(chatBox, 'You', userInput.value);
        userInput.value = '';
    }
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.remove('active-section');
        section.classList.add('hidden-section');
    });

    document.getElementById(sectionId).classList.add('active-section');
    document.getElementById(sectionId).classList.remove('hidden-section');
}

const features = [
    "Custom Rooms",
    "Live Reactions and Banter",
    "Predictions and Challenges",
    "Fantasy Cricket",
    "Trivia and Quizzes",
    "Augmented Reality (AR) Fun",
    "Points System and Leaderboards",
    "Player of the Match",
    "Achievements and Badges",
    "Personalized Content",
    "Post-Match Analysis"
];

const featuresList = document.getElementById('features-list');
features.forEach(feature => {
    const li = document.createElement('li');
    li.textContent = feature;
    featuresList.appendChild(li);
});
