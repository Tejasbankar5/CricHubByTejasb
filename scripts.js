const emojis = ['😊', '😂', '👍', '🏏', '🔥', '🎉', '🙌'];

const points = {
    'Tejas': 0,
    'Daksh': 0,
    'Rutunj': 0,
    'Abhishek': 0,
    'Pratik': 0,
    'You': 0
};

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
        { user: 'CricHub Bot', text: `Hello ${favoritePlayer} fan! Let's start the chat. ${getRandomEmoji()}` },
        { user: 'Tejas', text: `Hey everyone! Excited for the match today. ${getRandomEmoji()}` },
        { user: 'Daksh', text: `Absolutely! Go MS Dhoni! ${getRandomEmoji()}` },
        { user: 'Rutunj', text: `I am ready for some exciting cricket! ${getRandomEmoji()}` },
        { user: 'Abhishek', text: `Dhoni is the best! Kohli is struggling,Ro KO can't win i think${getRandomEmoji()}` },
        { user: 'Pratik', text: `Looking forward to seeing India lift the trophy again! ${getRandomEmoji()}` },
        { user: 'CricHub Bot', text: 'Will India win against South Africa tomorrow?' },
        { user: 'Tejas', text: `Yes, they will win! Virat Kohli might be struggling now, but he'll be the best in the finals. ${getRandomEmoji()}` },
        { user: 'Daksh', text: `I agree, but it will be a tough match. ${getRandomEmoji()}` },
        { user: 'Rutunj', text: `Let's hope for the best! Fingers crossed, aur bhai dhoni bhai retired hai  ${getRandomEmoji()}` },
        { user: 'CricHub Bot', text: `Discuss India's possible tactics and matchups.` },
        { user: 'Tejas', text: `I think Bumrah is gem. ${getRandomEmoji()}` },
        { user: 'Daksh', text: `What about Rohit Sharma's strategy? ${getRandomEmoji()}` },
        { user: 'Rutunj', text: `Rohit will show karma to sa bowlers. ${getRandomEmoji()}` },
        { user: 'Abhishek', text: `We need a solid middle order performance. ${getRandomEmoji()}` },
        { user: 'Pratik', text: `And good fielding will be crucial. ${getRandomEmoji()}` },
        { user: 'CricHub Bot', text: `What's the best moment of the match for you?` },
        { user: 'Daksh', text: `When Dhoni hits a six to finish the game! ${getRandomEmoji()}` },
        { user: 'Tejas', text: `A hat-trick by Bumrah would be epic! ${getRandomEmoji()}` },
        { user: 'Rutunj', text: `Watching Kohli score a century in the finals. ${getRandomEmoji()}` },
        { user: 'Abhishek', text: `A tight last over finish. ${getRandomEmoji()}` },
        { user: 'Pratik', text: `Seeing young talent shine. ${getRandomEmoji()}` },
        { user: 'Daksh', text: `Looking forward to seeing India lift the trophy again! ${getRandomEmoji()}` },
        { user: 'CricHub Bot', text: 'Will India win against South Africa tomorrow?' },
        { user: 'Tejas', text: `Lets hope the best there may be some glitches in our software so leave the room ! will see after india's victory.${getRandomEmoji()}` },
        
    ];

    let messageIndex = 0;
    const messageInterval = setInterval(() => {
        if (messageIndex < messages.length) {
            addMessageToChat(chatBox, messages[messageIndex].user, messages[messageIndex].text);
            updatePoints(messages[messageIndex].user);
            messageIndex++;
        } else {
            clearInterval(messageInterval);
        }
    }, 3000);
}

function addMessageToChat(chatBox, user, text) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `<span class="user">${user}:</span> <span class="text">${text}</span>`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
    const userInput = document.getElementById('user-input');
    if (userInput.value.trim() !== '') {
        const chatBox = document.getElementById('chat-box');
        addMessageToChat(chatBox, 'You', userInput.value);
        updatePoints('You');
        userInput.value = '';
    }
}

function updatePoints(user) {
    if (points[user] !== undefined) {
        points[user] += 10;
        displayPoints();

        // Check if any user has reached 50 points
        if (points[user] >= 50) {
            showGameOver(user);
        }
    }
}

function displayPoints() {
    const pointsList = document.getElementById('points-list');
    pointsList.innerHTML = '';
    for (const user in points) {
        const li = document.createElement('li');
        li.textContent = `${user}: ${points[user]} points`;
        pointsList.appendChild(li);
    }
}

function getRandomEmoji() {
    return emojis[Math.floor(Math.random() * emojis.length)];
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('hidden-section');
        section.classList.remove('active-section');
    });
    document.getElementById(sectionId).classList.add('active-section');
    document.getElementById(sectionId).classList.remove('hidden-section');
}

// Function to show the game over section and declare a winner
function showGameOver(winner) {
    showSection('game-over');
    const winnerInfo = document.getElementById('winner-info');
    winnerInfo.innerHTML = `
        <h3>Player of the Match: ${winner}</h3>
        <p>Congratulations ${winner}! You've won the Player of the Match!</p>
        <p>Interview time! How do you feel?</p>
        <p>Friends' Reactions: ${getRandomEmoji()} ${getRandomEmoji()} ${getRandomEmoji()}</p>
    `;
    // Show popup notification to all users
    showPopupNotification(`${winner} has won the Player of the Match!`);
}

// Function to simulate a popup notification
function showPopupNotification(message) {
    alert(message); // Replace with your custom popup logic
}

const features = [
    'Real-time cricket discussions',
    'Engage with friends and fellow fans',
    'Earn points and compete for the Player of the Match',
    'Live updates and notifications',
    'Dark mode for better viewing experience'
];

const featuresList = document.getElementById('features-list');
features.forEach(feature => {
    const li = document.createElement('li');
    li.textContent = feature;
    featuresList.appendChild(li);
});
