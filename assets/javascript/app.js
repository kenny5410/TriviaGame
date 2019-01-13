window.onload = function() {
    $("#start-btn").on("click", reset);
  };
$(".questions").hide();

//Global Variables

var correctAn;
var incorrectAn;
var unanswered;
var questionOne;
var questionTwo;
var questionThree;
var questionFour;
var questionFive;
var questionSix;

var timerNum;
var intervalID;


//Function for timer counting down from 60 seconds
function reset() {
    timerNum = 60;
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

//Question click functions
function questionOneLogic() {
    $(".question-one-true").on("click", function(){
        questionOne === true;
        if (questionOne === true){
            incorrectAn++;
        }
        else {
            correctAn++;
        }
    })
    $(".question-one-false").click(function(){
        questionOne === false;
    })
}



$(".question-two-true").click(function(){
    questionTwo === true;
})
$(".question-two-false").click(function(){
    questionTwo === false;
})


//Question functions
/*function questionLogic() {
    function questionOneLogic() {
        if (questionOne === true){
            incorrectAn++;
        }
        else {
            correctAn++;
        }
    }
    function questionTwoLogic() {
        if (questionTwo === true){
            correctAn++;
        }
        else {
            incorrectAn++;
        }
    }
    function questionThreeLogic() {
        if (questionThree === true){
            correctAn++;
        }
        else {
            incorrectAn++;
        }
    }
    function questionFourLogic() {
        if (questionFour === true){
            incorrectAn++;
        }
        else {
            correctAn++;
        }
    }
    function questionFiveLogic() {
        if (questionFive === true){
            correctAn++;
        }
        else {
            incorrectAn++;
        }
    }
    function questionSixLogic() {
        if (questionSix === true){
            incorrectAn++;
        }
        else {
            correctAn++;
        }
    }
}*/

//Main game function
function initialize() {
    $("#start-btn").click(function() {
        $(".questions").show();
    })
    questionOneLogic()
}

initialize();