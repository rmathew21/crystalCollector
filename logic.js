// Global Variables

// Crystal Variables
let crystal = {
    blue:
    {
        name: "Blue",
        value: 0
    },
    green:
    {
        name: "Green",
        value: 0
    },
    red:
    {
        name: "Red",
        value: 0
    },
    yellow:
    {
        name: "Yellow",
        value: 0
    }
};

// Scores (Current and Target)
let currentScore = 0;
let targetScore = 0;

// Wins and Losses
let winCount = 0;
let lossCount = 0;

// FUNCTIONS

// Helper Function for getting random numbers
let getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Starts the Game (and restarts the game)
let startGame = function () {

    // Reset the Current Score
    currentScore = 0;

    // Set a new Target Score (between 19 and 120)
    targetScore = getRandom(19, 120);

    // Set different values for each of the crystals (between 1 and 12)
    crystal.blue.value = getRandom(1, 12);
    crystal.red.value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);

    // Change the HTML to reflect all of these changes
    $("#your-score").text(currentScore);
    $("#target-score").text(targetScore);

    // Testing Console
    console.log("--------------------------");
    console.log("Target Score: " + targetScore);
    console.log("Blue: " + crystal.blue.value + " | Green: " + " | Red: " + crystal.red.value +
        " | Yellow: " + crystal.yellow.value);
    console.log("--------------------------");
};

// Check if User Won or Lost and Reset the Game
let checkWin = function () {

    // Check if currentScore is larger than targetScore
    if (currentScore > targetScore) {
        alert("Sorry. You lost!");
        console.log("You Lost");

        // Add to Loss Counter
        lossCount++;

        // Change Loss Count HTML
        $("#loss-count").text(lossCount);

        // Restart the game
        startGame();
    }

    else if (currentScore === targetScore) {
        alert("Congratulations! You Won!");
        console.log("You Won!");

        // Add to Win Counter
        winCount++;

        // Change Win Count HTML
        $("#win-count").text(winCount);

        // Restart the game
        startGame();
    }
};

// Respond to clicks on ther crystals
let addValues = function (clickedCrystal) {

    // Change currentScore
    currentScore += clickedCrystal.value;

    // Change the HTML to reflect changes in currentScore
    $("#your-score").text(currentScore);

    // Call the checkWin Function
    checkWin();

    // Testing Console
    console.log("Your score: " + currentScore);
};

// Main Process

// Starts the Game the First Time.
startGame();

$("#blue").click(function () {
    addValues(crystal.blue);
});

$("#red").click(function () {
    addValues(crystal.red);
});

$("#green").click(function () {
    addValues(crystal.green);
});

$("#yellow").click(function () {
    addValues(crystal.yellow);
});
