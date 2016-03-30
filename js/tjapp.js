$(document).ready(function(){

	var questions = [
		{
			title: 'What color is the sky?',
			answers: ['Blue','Red','Green','Orange'],
			correct: 0
		},
		{
			title: 'What color is the grass?',
			answers: ['Blue','Red','Green','Orange'],
			correct: 2
		},
		{
			title: 'What color is the fire truck?',
			answers: ['Blue','Red','Green','Orange'],
			correct: 1
		},
		{
			title: 'What color is the sun?',
			answers: ['Blue','Red','Green','Orange'],
			correct: 3
		}
	];

	var score = 0;
	var curQuestion = 0;
	displayQuestion();

	function displayQuestion(){
		if(curQuestion < questions.length){
			var question = questions[curQuestion];
			$('h2.title').html(question.title);
			var html = "";
			for (var i = 0; i < question.answers.length; i++) {
				html += "<li><input type='radio' id='"+i+"' name='answer'><label for='"+i+"'>"+question.answers[i]+"</label></li>";
			}
			$('.question ul').html(html);
		} else {
			$('h2.title').html('Quiz Complete! You scored '+score+' out of '+questions.length);
			$('.question ul').html('<button>Try Again?</button>');
		}
	}

	function checkAnswer(answer){
		var question = questions[curQuestion];
		if(question.correct == answer){
			score++;
		}
		curQuestion++;
		displayQuestion();
	}

	$('.question ul').on('click','input',function(){
		var answer = $(this).attr('id');
		checkAnswer(answer);
	});

	$('.question ul').on('click','button',function(){
		score = 0;
		curQuestion = 0;
		displayQuestion();
	});

