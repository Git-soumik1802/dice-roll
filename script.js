let player1Score = 0;
let player2Score = 0;
let currentPlayer = 1;

function rollDice() {
    const playerRoll = Math.floor(Math.random() * 6) + 1;
    const diceElement = document.getElementById(`dice${currentPlayer}`);

    // Simulate rolling animation
    diceElement.style.animation = 'none';
    void diceElement.offsetWidth; // Trigger a reflow
    diceElement.style.animation = null;

    diceElement.innerHTML = '';
    for (let i = 0; i < playerRoll; i++) {
        const dot = document.createElement('span');
        dot.className = 'dot';
        diceElement.appendChild(dot);
    }

    if (currentPlayer === 1) {
        player1Score += playerRoll;
        document.getElementById("score1").textContent = player1Score;
        currentPlayer = 2;
    } else {
        player2Score += playerRoll;
        document.getElementById("score2").textContent = player2Score;
        currentPlayer = 1;
    }

    // Check if both players have rolled, then determine the winner
    if (player1Score >= 20 || player2Score >= 20) {
        determineWinner();
        document.getElementById("rollButton").disabled = true;
    }
}

function determineWinner() {
    if (player1Score > player2Score) {
        alert("Player 1 wins!");
    } else if (player2Score > player1Score) {
        alert("Player 2 wins!");
    } else {
        alert("It's a tie!");
    }
}

function resetGame() {
    player1Score = 0;
    player2Score = 0;
    currentPlayer = 1;

    document.getElementById("score1").textContent = "0";
    document.getElementById("score2").textContent = "0";
    document.getElementById("dice1").innerHTML = '';
    document.getElementById("dice2").innerHTML = '';
    document.getElementById("rollButton").disabled = false;
}

resetGame(); // Initialize the game


