$(document).ready(function() {
//This is the jQuery function that starts the quiz
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

//This is the displayQuestion() function only
//All it does is display the questions because the user has to click "submit"
//before the answer can be checked
function displayQuestion() {
	//The if statement cycles through all questions in the questionsArray
	if (curQuestion < questionsArray.length) {
		var objectNum = questionsArray[curQuestion]; //objectNum needed to cycle through questionsArray
		$(".quizTitle h2").html(objectNum.title);
		var quizAnswers = ""; //need to clear hard coded li's in HTML
		//The for loop enables all answers per question to be written to the HTML 
		for(var i=0; i<objectNum.answers.length; i++) {
			quizAnswers += "<li><input type='radio' id='" +i+ "'>" +objectNum.answers[i]+ "</label></li>";
		}
		$(".quizAnswers ul").html(quizAnswers); //writes all answers per question to HTML
		$("#submit").show(); //This is needed to show submit button with each question
		trackQuestion(); //Need to call trackQuestion() for circles at top to work
	} 
	//The else statement is executed once all questions in the questionsArray has been displayed
	else {
		$(".quizTitle h2").html("Quiz Complete! You Scored " +score+ " out of " + questionsArray.length);
		$(".quizAnswers ul").html(""); //needed to clear quiz answers from HTML
		$(".centerButton").html("<button>Try Again?</button>"); //adds Try Again button to HTML
		$("#submit").hide(); //This is needed to hide submit button when quiz done
	}	
}

//This is a jQuery function to receive the users quizAnswer once they click
//#submit and then the checkAnswer() function is called to check it and score it
$(".quizAnswers").on('click','#submit',function() {
	// var userAnswer is pointed to the 'id' because the 'id' is an integer
	// this is then compared to objectNum.correct (which is also an integer) when the
	// checkAnswer(userAnswer) function is called
	var userAnswer = $(':checked').attr('id');
	//console.log(userAnswer); //used console.log to see what userAnswer was returning
	checkAnswer(userAnswer);
});

//This is the checkAnswer() function to check and score the user's answer
function checkAnswer(userAnswer) {
	var objectNum = questionsArray[curQuestion]; //objectNum is needed again to cycle through questionsArray
	if (userAnswer == objectNum.correct) {
		score++;
	}
	curQuestion++;
	displayQuestion();
}

//This is the tracking bar at the top of the quizQuestions
function trackQuestion() {
	var openCircle = '<i class="fa fa-circle-o"></i>';
	var fullCircle = '<i class="fa fa-circle"></i>';
	
	function addCircles(circles){
		$('.track').html(circles);
	}

	if (curQuestion == 0) {
		addCircles(openCircle + fullCircle + fullCircle + fullCircle + fullCircle);
	} 
	else if (curQuestion == 1) {
		addCircles(fullCircle + openCircle + fullCircle + fullCircle + fullCircle);
	}
	else if (curQuestion == 2) {
		addCircles(fullCircle + fullCircle + openCircle + fullCircle + fullCircle);
	}
	else if (curQuestion == 3) {
		addCircles(fullCircle + fullCircle + fullCircle + openCircle + fullCircle);
	}
	else {
		addCircles(fullCircle + fullCircle + fullCircle + fullCircle + openCircle);
	}
}

//This is jQuery function so the user can Try Again
$(".centerButton").on('click','button', function() {
	score = 0;
	curQuestion = 0;
	$(".quizIntro").show();
	$(".quizQuestions").hide();
	displayQuestion();
});

});