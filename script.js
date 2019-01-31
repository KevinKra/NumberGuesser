/* ==== QUERIES ==== */

/* =Range Queries= */
let minRange = document.querySelector('.min-range');
let maxRange = document.querySelector('.max-range');
let rangeLow = document.querySelector('.r-low');
let rangeHigh = document.querySelector('.r-high');

/* =Challenger Queries= */
let ch1NameInput = document.querySelector('.ch-1-name');
let ch2NameInput = document.querySelector('.ch-2-name');
let ch1Guess = document.querySelector('.ch-1-guess');
let ch2Guess = document.querySelector('.ch-2-guess');

let ch1CurGuess = document.querySelector('.ch-1-cur-guess'); 
let ch2CurGuess = document.querySelector('.ch-2-cur-guess');
let ch1NameOutput = document.querySelectorAll('.ch1-name-output')
let ch2NameOutput = document.querySelectorAll('.ch2-name-output')


/*=== Error Queries ====*/
let errorInputName = document.querySelectorAll('.error')
let errorInputNumb = document.querySelectorAll('.error-2')


/* ==== BUTTONS ==== */
let btnUpdate = document.querySelector('.update-btn');
let btnSubmit = document.querySelector('.submit-btn');
let btnReset = document.querySelector('.reset-btn');
let btnClear = document.querySelector('.clear-btn');


btnUpdate.addEventListener('click', function() {
	rangeLow.innerText = minRange.value;
	rangeHigh.innerText = maxRange.value;
});

btnSubmit.addEventListener('click', function() {
	ch1CurGuess.innerText = ch1Guess.value;
	ch2CurGuess.innerText = ch2Guess.value;
	updateAll(ch1NameInput, ch1NameOutput);
	updateAll(ch2NameInput, ch2NameOutput);
});

function updateAll(query, output) {
 	let qValue = query.value;
	return changeContent(qValue, output);
}

function changeContent(input, output) {
	let changeHTML = element => element.innerHTML = input;
	output.forEach(changeHTML);
}

//
 
		// errorInputName.style.color = 'red';
		// errorInputNumb.style.color = 'red';

checkInput(ch1NameInput, ch1Guess);

function checkInput(...inputs) {
	let inputArray = inputs;
	typeof(inputArray);
	console.log(inputArray)
	if (inputs.value === "") {

		errorInputName.style.color = 'red';
		errorInputNumb.style.color = 'red';
	}
}


















