<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Click the Button Fast </title>
<style>
    body {
        background: linear-gradient(135deg, #ffb6f0, #c4a1ff);
        font-family: 'Poppins', sans-serif;
        color: white;
        text-align: center;
        padding-top: 50px;
    }
    h1 {
        font-size: 2.5rem;
        margin-bottom: 10px;
    }
    button {
        background-color: #ff4f9f;
        color: white;
        border: none;
        padding: 15px 30px;
        font-size: 1.2rem;
        border-radius: 12px;
        cursor: pointer;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        transition: 0.2s;
    }
    button:hover {
        background-color: #ff2a87;
        transform: scale(1.05);
    }
    #score {
        font-size: 1.5rem;
        margin-top: 20px;
    }
</style>
</head>
<body>

<h1>💅 Click the Button Fast 💅</h1>
<p>How many times can you click in <b>5 seconds</b>?</p>
<button id="clickBtn" disabled>Click Me!</button>
<div id="score">Score: 0</div>
<br>
<button onclick="startGame()">Start Game</button>

<script>
let score = 0;
let timeLeft = 5;
let gameActive = false;

document.getElementById("clickBtn").addEventListener("click", function() {
    if (gameActive) {
        score++;
        document.getElementById("score").innerText = "Score: " + score;
    }
});

function startGame() {
    score = 0;
    timeLeft = 5;
    document.getElementById("score").innerText = "Score: 0";
    gameActive = true;
    document.getElementById("clickBtn").disabled = false;

    let timer = setInterval(function() {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(timer);
            gameActive = false;
            document.getElementById("clickBtn").disabled = true;
            alert("Time's up! Your score: " + score);
        }
    }, 1000);
}
</script>

</body>
</html>