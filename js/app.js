$(document).ready(function() {

	$("#start").click(function() {
		$(".intro").hide();
		$(".quiz").show();
	});


//This is the Questions Array that contains 5 objects//

/*var questionsArray = [
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
		answers: ["  Cocamouse", "  Mouseroach", "  Ratacock", "  Cockamoo"],
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
],

//var score = 0;
var currQuestion = 0;
displayQuestion();

function displayQuestion() {
	if (currQuestion < questionsArray.length) {
		var objectNum = questionsArray[currQuestion];
		$("h3.title").html(objectNum.title);
		var answers = "";
		for(i=0; i<objectNum.answers.length; i++) {
			answers += "<li><input type='radio' id='" +i+ "'>" +objectNum.answers[i]+ "</label></li>";
		}
		$(".objectNum ul").html(answers);
	} else {
		$("h3.title").html("Quiz Complete! You Scored " +score+ " out of " + questionsArray.length);
		$(".objectNum ul").html("<button>Try Again?</button>");
	}	
}
*/
});