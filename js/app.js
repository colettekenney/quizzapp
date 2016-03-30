$(document).ready(function() {

	$(".start").click(function() {
		$(".quizIntro").hide();
		$(".quizQuestions").show();
	});


//This is the Questions Array that contains 5 objects

var questionsArray = [
	{
		title: "What “Slap Bet” forfeit did Barney accept after prematurely slapping Marshall?",
		answers: ["  5 slaps now in a row", "  5 slaps that can be doled out from here to eternity", "  10 slaps right now in a row", "  10 slaps that can be doled out from here to eternity"],
		correct: 1
	},
	{
		title: "Who does Barney believe to be his father?",
		answers: ["  Merv Griffin", "  Dick Clark", "  Jim Perry", "  Bob Barker"],
		correct: 3
	},
	{
		title: "What did Lily and Marshall name the weird rodent in their apartment?",
		answers: ["  Cockamouse", "  Mouseroach", "  Ratacock", "  Cockamoo"],
		correct: 0
	},
	{
		title: "What is Ted’s occupation on the show?",
		answers: ["  A librarian", "  A police officer", "  An architect", "  A lawyer"],
		correct: 2
	},
	{
		title: "In what area of New York was Lily and Marshall's new apartment?",
		answers: ["  Dowistrepla", "  SoHo", "  Nolita", "  TriBeCa"],
		correct: 0
	}
];

//These are Global Variables needed to run through the questionsArray
//and keep track of the score

var score = 0;
var curQuestion = 0;

//First we have to call the displayQuestion function:
displayQuestion();

//This is the displayQuestion() function:
function displayQuestion() {
	if (curQuestion < questionsArray.length) {
		var objectNum = questionsArray[curQuestion];
		$(".quizTitle h2").html(objectNum.title);
		var quizAnswers = "";
		for(var i=0; i<objectNum.answers.length; i++) {
			quizAnswers += "<li><input type='radio' id='" +i+ "'>" +objectNum.answers[i]+ "</label></li>";
		}
		$(".quizAnswers ul").html(quizAnswers);
	} else {
		$(".quizTitle h2").html("Quiz Complete! You Scored " +score+ " out of " + questionsArray.length);
		$(".quizAnswers ul").html("<button>Try Again?</button>");
		$("#submit").hide();
	}	
}

//This is a jQuery function to receive the users quizAnswer once they click
//Submit and then checkAnswer() function is called to check it and score it
$(".quizAnswers").on('click','#submit',function() {
	var userAnswer = $(':checked');
	checkAnswer(userAnswer);
});

//This is the checkAnswer() function to check and score the user's answer
function checkAnswer(userAnswer) {
	var objectNum = questionsArray[curQuestion];
	if (userAnswer == objectNum.correct) {
		score++;
	}
	curQuestion++;
	displayQuestion();
}

//This is jQuery function so the user can Try Again
$(".quizAnswers ul").on('click','button', function() {
	score = 0;
	curQuestion = 0;
	$(".quizIntro").show();
	$(".quizQuestions").hide();
	displayQuestion();
});

});