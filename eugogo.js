function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;

	var correct = 0;


	if (question1 == "yes") {
		correct++;
}
	if (question2 == "yes") {
		correct++;
}	
	if (question3 == "yes") {
		correct++;
	}
	if (question4 == "yes") {
		correct++;
}
if (question5 == "yes") {
	correct++;
}


	var messages_nextstep = ["conservative management", "agressive management"]
	var messages_result = ["Inactive thyroid eye disease. ", "Active thyroid eye disease." ];
	var score;

	if (correct = 5) {
		score = 0;
	}

	if (correct  <= 4) {
		score = 1;
	}


	
	
	

	

	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("after_submit_invisible").style.visibility = "hidden";
	document.getElementById("message_result").innerHTML = messages_result[score];
	document.getElementById("message_nextstep").innerHTML = messages_nextstep[score];
	document.getElementById("number_correct").innerHTML = correct+" points" ;

	

	
}