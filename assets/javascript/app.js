window.onload = function() {
    $("#start-btn").on("click", reset);
  };

//Global Variables

var correctAn;
var incorrectAn;
var unanswered;
var questionOne;
var questionTwo;
var questionThree;
var questionFour;

var timerNum = 121;
var intervalID;

//Function for timer counting down from 120 seconds

//$("#start-btn").on("click", reset);

function reset() {
    timerNum = 120;
}

function run() {
    intervalID = setInterval(decrement, 1000);
}

function decrement() {
    timerNum--;
    $("#timer").html(timerNum);

    if (timerNum === 0) {
        stop();
    }
}

function stop() {
    clearInterval(intervalID);
}
run();

//Need to write the main game function 