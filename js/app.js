$(document).ready(function() {

var questionsArray = [
	{
		item: "What “Slap Bet” forfeit did Barney accept after prematurely slapping Marshall?",
		answers: ["  5 slaps now in a row", "  5 slaps that can be doled out from here to eternity", "  10 slaps right now in a row", "  10 slaps that can be doled out from here to eternity"],
		correct: 1
	},
	{
		item: "Who does Barney believe to be his father?",
		answers: ["  Merv Griffin", "  Dick Clark", "  Jim Perry", "  Bob Barker"],
		correct: 3
	},
	{
		item: "What did Lily and Marshall name the weird rodent in their apartment?",
		answers: ["  Cocamouse", "  Mouseroach", "  Ratacock", "  Cockamoo"],
		correct: 0
	},
	{
		item: "What is Ted’s occupation on the show?",
		answers: ["  A librarian", "  A police officer", "  An architect", "  A lawyer"],
		correct: 2
	},
	{
		item: "In what area of New York was Lily and Marshall's new apartment?",
		answers: ["  Dowistrepla", "  SoHo", "  Nolita", "  TriBeCa"],
		correct: 0
	}
],

var score = 0;
var currQuestion = 0;
displayQuestion();

function displayQuestion() {
	if (currQuestion < questionsArray.length) {
		var question = questionsArray[currQuestion];
		$("h3#item").html(question.item);
	}

}
});