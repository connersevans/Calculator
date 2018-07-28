// GLOBAL VARIABLES
 var sum = 0;
 var num = 0;
 var count = 0;
 var operation = 0;
 var copy = 0;
 var equal = 0;

// FUNCTION DECLARATIONS
$('#addButton').click(add);
$('#subtractButton').click(subtract);
$('#multiplyButton').click(multiply);
$('#divideButton').click(divide);
$('#equalsButton').click(equals);
$('#clearButton').click(clear);

$('#button1').click(one);
$('#button2').click(two);
$('#button3').click(three);
$('#button4').click(four);
$('#button5').click(five);
$('#button6').click(six);
$('#button7').click(seven);
$('#button8').click(eight);
$('#button9').click(nine);
$('#button0').click(zero);


// OPERATION FUNCTIONS
 function add() {
 	operation = 1;
 	copy = 1;
 	equal = 0;
 	$('#display').val(sum);
 }

 function subtract() {
 	operation = 2;
 	copy = 2;
 	equal = 0;
 	$('#display').val(sum);
 }

 function multiply() {
 	operation = 3;
 	copy = 3;
 	equal = 0;
 	$('#display').val(sum);
 }

function divide() {
	operation = 4;
	copy = 4;
	equal = 0;
	$('#display').val(sum);
}

function equals() {
	if (equal == 1) {
		if (copy == 1) {
			sum = Number(sum) + Number(num);
		}
		else if (copy == 2) {
			sum = Number(sum) - Number(num);
		}
		else if (copy == 3) {
			sum = Number(sum) * Number(num);
		}
		else if (copy == 4) {
			sum = Number(sum) / Number(num);
		}
		else {

		}
	}
	$('#display').val(sum);
	equal = 1;
}

function clear() {
	sum = 0;
	count = 0;
	opeartion = 0;
	copy = 0;
	equal = 0;
	$('#display').val(sum);
}


// NUMBER FUNCTIONS
function one() {

	if (equal == 1) {
		clear();
	}

	var which = $('#button1');
	var value = which.val();

	if (count == 0) {
		sum = value;
		num = value;
	}
	else if (operation == 0 && count > 0) {

		if (copy == 1) {
			sum = Number(sum) - Number(num);
		}
		else if (copy == 2) {
			sum = Number(sum) + Number(num);
		}
		else if (copy == 3) {
			sum = Number(sum) / Number(num);
		}
		else if (copy == 4) {
			sum = Number(sum) * Number(num);
		}
		else {

		}
		num = "" + num + value;
		num = Number(num);

		if (copy == 0) {
		sum = Number(num);
		}

		operation = copy;

	}
	else {
		num = value;
	}

	if (operation == 1) {
		sum = Number(sum) + Number(num);
	}
	else if (operation == 2) {
		sum = Number(sum) - Number(num);
	}
	else if (operation == 3) {
		sum = Number(sum) * Number(num);
	}
	else if (operation == 4) {
		sum = (Number(sum) / Number(num));
	}
	else {

	}


	count++;
	operation = 0;
	equal = 0;
	$('#display').val(num);
}

function two() {

	if (equal == 1) {
		clear();
	}

	var which = $('#button2');
	var value = which.val();
	if (count == 0) {
		sum = value;
		num = value;
	}
	else if (operation == 0 && count > 0) {

		if (copy == 1) {
			sum = Number(sum) - Number(num);
		}
		else if (copy == 2) {
			sum = Number(sum) + Number(num);
		}
		else if (copy == 3) {
			sum = Number(sum) / Number(num);
		}
		else if (copy == 4) {
			sum = Number(sum) * Number(num);
		}
		else {

		}
		num = "" + num + value;
		num = Number(num);

		if (copy == 0) {
		sum = Number(num);
		}

		operation = copy;

	}
	else {
		num = value;
	}

	if (operation == 1) {
		sum = Number(sum) + Number(num);
	}
	else if (operation == 2) {
		sum = Number(sum) - Number(num);
	}
	else if (operation == 3) {
		sum = Number(sum) * Number(num);
	}
	else if (operation == 4) {
		sum = (Number(sum) / Number(num));
	}
	else {

	}


	count++;
	operation = 0;
	equal = 0;
	$('#display').val(num);
}

function three() {

	if (equal == 1) {
		clear();
	}

	var which = $('#button3');
	var value = which.val();

	if (count == 0) {
		sum = value;
		num = value;
	}
	else if (operation == 0 && count > 0) {

		if (copy == 1) {
			sum = Number(sum) - Number(num);
		}
		else if (copy == 2) {
			sum = Number(sum) + Number(num);
		}
		else if (copy == 3) {
			sum = Number(sum) / Number(num);
		}
		else if (copy == 4) {
			sum = Number(sum) * Number(num);
		}
		else {

		}
		num = "" + num + value;
		num = Number(num);

		if (copy == 0) {
		sum = Number(num);
		}

		operation = copy;

	}
	else {
		num = value;
	}

	if (operation == 1) {
		sum = Number(sum) + Number(num);
	}
	else if (operation == 2) {
		sum = Number(sum) - Number(num);
	}
	else if (operation == 3) {
		sum = Number(sum) * Number(num);
	}
	else if (operation == 4) {
		sum = (Number(sum) / Number(num));
	}
	else {

	}


	count++;
	operation = 0;
	equal = 0;
	$('#display').val(num);
}

function four() {

	if (equal == 1) {
		clear();
	}

	var which = $('#button4');
	var value = which.val();

	if (count == 0) {
		sum = value;
		num = value;
	}
	else if (operation == 0 && count > 0) {

		if (copy == 1) {
			sum = Number(sum) - Number(num);
		}
		else if (copy == 2) {
			sum = Number(sum) + Number(num);
		}
		else if (copy == 3) {
			sum = Number(sum) / Number(num);
		}
		else if (copy == 4) {
			sum = Number(sum) * Number(num);
		}
		else {

		}
		num = "" + num + value;
		num = Number(num);

		if (copy == 0) {
		sum = Number(num);
		}

		operation = copy;

	}
	else {
		num = value;
	}

	if (operation == 1) {
		sum = Number(sum) + Number(num);
	}
	else if (operation == 2) {
		sum = Number(sum) - Number(num);
	}
	else if (operation == 3) {
		sum = Number(sum) * Number(num);
	}
	else if (operation == 4) {
		sum = (Number(sum) / Number(num));
	}
	else {

	}


	count++;
	operation = 0;
	equal = 0;
	$('#display').val(num);
}

function five() {

	if (equal == 1) {
		clear();
	}

	var which = $('#button5');
	var value = which.val();

	if (count == 0) {
		sum = value;
		num = value;
	}
	else if (operation == 0 && count > 0) {

		if (copy == 1) {
			sum = Number(sum) - Number(num);
		}
		else if (copy == 2) {
			sum = Number(sum) + Number(num);
		}
		else if (copy == 3) {
			sum = Number(sum) / Number(num);
		}
		else if (copy == 4) {
			sum = Number(sum) * Number(num);
		}
		else {

		}
		num = "" + num + value;
		num = Number(num);

		if (copy == 0) {
		sum = Number(num);
		}

		operation = copy;

	}
	else {
		num = value;
	}

	if (operation == 1) {
		sum = Number(sum) + Number(num);
	}
	else if (operation == 2) {
		sum = Number(sum) - Number(num);
	}
	else if (operation == 3) {
		sum = Number(sum) * Number(num);
	}
	else if (operation == 4) {
		sum = (Number(sum) / Number(num));
	}
	else {

	}


	count++;
	operation = 0;
	equal = 0;
	$('#display').val(num);
}

function six() {

	if (equal == 1) {
		clear();
	}

	var which = $('#button6');
	var value = which.val();

	if (count == 0) {
		sum = value;
		num = value;
	}
	else if (operation == 0 && count > 0) {

		if (copy == 1) {
			sum = Number(sum) - Number(num);
		}
		else if (copy == 2) {
			sum = Number(sum) + Number(num);
		}
		else if (copy == 3) {
			sum = Number(sum) / Number(num);
		}
		else if (copy == 4) {
			sum = Number(sum) * Number(num);
		}
		else {

		}
		num = "" + num + value;
		num = Number(num);

		if (copy == 0) {
		sum = Number(num);
		}

		operation = copy;

	}
	else {
		num = value;
	}

	if (operation == 1) {
		sum = Number(sum) + Number(num);
	}
	else if (operation == 2) {
		sum = Number(sum) - Number(num);
	}
	else if (operation == 3) {
		sum = Number(sum) * Number(num);
	}
	else if (operation == 4) {
		sum = (Number(sum) / Number(num));
	}
	else {

	}


	count++;
	operation = 0;
	equal = 0;
	$('#display').val(num);
}

function seven() {

	if (equal == 1) {
		clear();
	}

	var which = $('#button7');
	var value = which.val();

	if (count == 0) {
		sum = value;
		num = value;
	}
	else if (operation == 0 && count > 0) {

		if (copy == 1) {
			sum = Number(sum) - Number(num);
		}
		else if (copy == 2) {
			sum = Number(sum) + Number(num);
		}
		else if (copy == 3) {
			sum = Number(sum) / Number(num);
		}
		else if (copy == 4) {
			sum = Number(sum) * Number(num);
		}
		else {

		}
		num = "" + num + value;
		num = Number(num);

		if (copy == 0) {
		sum = Number(num);
		}

		operation = copy;

	}
	else {
		num = value;
	}

	if (operation == 1) {
		sum = Number(sum) + Number(num);
	}
	else if (operation == 2) {
		sum = Number(sum) - Number(num);
	}
	else if (operation == 3) {
		sum = Number(sum) * Number(num);
	}
	else if (operation == 4) {
		sum = (Number(sum) / Number(num));
	}
	else {

	}


	count++;
	operation = 0;
	equal = 0;
	$('#display').val(num);
}

function eight() {

	if (equal == 1) {
		clear();
	}

	var which = $('#button8');
	var value = which.val();

	if (count == 0) {
		sum = value;
		num = value;
	}
	else if (operation == 0 && count > 0) {

		if (copy == 1) {
			sum = Number(sum) - Number(num);
		}
		else if (copy == 2) {
			sum = Number(sum) + Number(num);
		}
		else if (copy == 3) {
			sum = Number(sum) / Number(num);
		}
		else if (copy == 4) {
			sum = Number(sum) * Number(num);
		}
		else {

		}
		num = "" + num + value;
		num = Number(num);

		if (copy == 0) {
		sum = Number(num);
		}

		operation = copy;

	}
	else {
		num = value;
	}

	if (operation == 1) {
		sum = Number(sum) + Number(num);
	}
	else if (operation == 2) {
		sum = Number(sum) - Number(num);
	}
	else if (operation == 3) {
		sum = Number(sum) * Number(num);
	}
	else if (operation == 4) {
		sum = (Number(sum) / Number(num));
	}
	else {

	}


	count++;
	operation = 0;
	equal = 0;
	$('#display').val(num);
}

function nine() {

	if (equal == 1) {
		clear();
	}

	var which = $('#button9');
	var value = which.val();

	if (count == 0) {
		sum = value;
		num = value;
	}
	else if (operation == 0 && count > 0) {

		if (copy == 1) {
			sum = Number(sum) - Number(num);
		}
		else if (copy == 2) {
			sum = Number(sum) + Number(num);
		}
		else if (copy == 3) {
			sum = Number(sum) / Number(num);
		}
		else if (copy == 4) {
			sum = Number(sum) * Number(num);
		}
		else {

		}
		num = "" + num + value;
		num = Number(num);

		if (copy == 0) {
		sum = Number(num);
		}

		operation = copy;

	}
	else {
		num = value;
	}

	if (operation == 1) {
		sum = Number(sum) + Number(num);
	}
	else if (operation == 2) {
		sum = Number(sum) - Number(num);
	}
	else if (operation == 3) {
		sum = Number(sum) * Number(num);
	}
	else if (operation == 4) {
		sum = (Number(sum) / Number(num));
	}
	else {

	}


	count++;
	operation = 0;
	equal = 0;
	$('#display').val(num);
}

function zero() {

	if (equal == 1) {
		clear();
	}

	var which = $('#button0');
	var value = which.val();

	if (count == 0) {
		sum = value;
		num = value;
	}
	else if (operation == 0 && count > 0) {

		if (copy == 1) {
			sum = Number(sum) - Number(num);
		}
		else if (copy == 2) {
			sum = Number(sum) + Number(num);
		}
		else if (copy == 3) {
			sum = Number(sum) / Number(num);
		}
		else if (copy == 4) {
			sum = Number(sum) * Number(num);
		}
		else {

		}
		num = "" + num + value;
		num = Number(num);

		if (copy == 0) {
		sum = Number(num);
		}

		operation = copy;

	}
	else {
		num = value;
	}

	if (operation == 1) {
		sum = Number(sum) + Number(num);
	}
	else if (operation == 2) {
		sum = Number(sum) - Number(num);
	}
	else if (operation == 3) {
		sum = Number(sum) * Number(num);
	}
	else if (operation == 4) {
		sum = (Number(sum) / Number(num));
	}
	else {

	}


	count++;
	operation = 0;
	equal = 0;
	$('#display').val(num);
}
