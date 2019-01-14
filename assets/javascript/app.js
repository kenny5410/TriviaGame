$(document).ready(function() {
//Global Variables
var correctAn = 0;
var incorrectAn = 0;
var unanswered = 6;
var timerNum = 10;
var intervalID;

//Function for timer counting down from 60 seconds
function run() {
    intervalID = setInterval(decrement, 1000);
}

//Hide contents
$(window).on("load", hide);

$("#start-btn").on("click", function() {
    $(this).hide();
    show();
    run();
});

//Final Results
function results() {
    $("#correct-answers").html('Correct answers: ' + correctAn);
    $("#incorrect-answers").html('Incorrect answers: ' + incorrectAn);
    $("#unanswered").html('Unanswered: ' + unanswered);
    $("#results").show();
}

function decrement() {
    timerNum--;
    $("#timer").html(timerNum);

    if (timerNum === 0) {
        stop();
        results();
        $(".questions").hide();
        $("#countdown").hide();   
    }
}

function stop() {
    clearInterval(intervalID);
}

//Hide function
function hide() {
    $(".questions").hide();
    $("#results").hide();
}

//Show function
function show() {
    $(".questions").show();
    $("#countdown").show();
    $("#timer").show();
}

//Question click functions
$('input[type=radio]').on("change", function() {
    if ($("input[type=radio][name=options]:checked").val() === "correct") {
        correctAn++;
        unanswered--;
    }else if($("input[type=radio][name=options]:checked").val() === "incorrect"){
        incorrectAn++;
        unanswered--;
    }
});

});