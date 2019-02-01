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
	// if () {};
	rangeLow.innerText = minRange.value;
	rangeHigh.innerText = maxRange.value;
});

// btnSubmit.addEventListener('click', function() {
// 	ch1CurGuess.innerText = ch1Guess.value;
// 	ch2CurGuess.innerText = ch2Guess.value;
// 	updateAll(ch1NameInput, ch1NameOutput);
// 	updateAll(ch2NameInput, ch2NameOutput);
// });



btnSubmit.addEventListener('click', function() {
	checkForNames()
	checkForNumbers()

	function checkForNumbers() {
		if ( ch1Guess.value.length > 0 && ch2Guess.value.length > 0 ) {
			ch1CurGuess.innerText = ch1Guess.value;
			ch2CurGuess.innerText = ch2Guess.value;
		} else {
			console.log('false');
		}
	}

	function checkForNames() {
		let invalidName = /[^a-z0-9]+/gi;
		if ((invalidName.test(ch1NameInput.value) || (ch1NameInput.value.length < 1) 
			|| (invalidName.test(ch2NameInput.value) || (ch2NameInput.value.length < 1)))) {
			console.log('name is invalid')
		} else {
			updateAll(ch1NameInput, ch1NameOutput);
			updateAll(ch2NameInput, ch2NameOutput);
			console.log('name is valid')
		}
	}
});


// updateColorRed(errorInputName, errorInputNumb, ch1NameOutput)
// updateVisibility(errorInputName);



// ==== FUNCTIONALITY ==== //

//target specific outputs with specific inputs
function updateAll(query, output) {
 	let qValue = query.value;
	return changeContent(qValue, output);
}
function changeContent(input, output) {
	let changeHTML = element => element.innerHTML = input;
	output.forEach(changeHTML);
}










































// let visibilityHidden = (element) => {element.style.visibility = 'hidden'};
// let visibilityShow = (element) => {element.style.visibility = 'visible'};


// //HOFs
// //modify n arguments including nodeLists --currently changes visibility to hidden
// function updateVisibility(...inputs) {
// 	//array of Nodelists
// 	let visibilityHidden = (element) => {element.style.visibility = 'hidden'};
// 	return inputs.map(element => element.forEach(visibilityHidden));
// }

// //modify n arguments including nodeLists --currently changes colors to red
// // function updateColorRed(...inputs) {
// // 	//array of Nodelists
// // 	let changeColor = (element) => {element.style.color = 'blue'}
// // 	return inputs.map(element => element.forEach(changeColor));
// // }

// toArray(errorInputName, errorInputNumb, ch1NameOutput)

// function toArray(...inputs) {
// 	//array of Nodelists
// 	let convertToArr = (element) => {Array.from(element)}
// 	let inputArr = inputs.map(convertToArr);
// 	console.log(inputArr);
// }



//change non-forms to forms in HTML
//convert nodeLists to Arrays and then forEach the new arrays
//arrow function w/o {} implicitly returns, with {} needs return keyword
















