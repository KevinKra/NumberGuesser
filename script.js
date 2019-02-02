/* ==== QUERIES ==== */


// All these querySelectors return a static (not live) Array-like object.
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



btnClear.addEventListener('click', function() {
	function clearTheInputs() {
		function checkInputs() {
			if (minRange.value.length > 0 || maxRange.value.length > 0 || ch1NameInput.value.length > 0 || ch2NameInput.value.length > 0 || 
				ch1Guess.value.length > 0 || ch2Guess.value.length > 0) {
				emptyTheInput(allInputs);
				console.log(trueRandomNumber);
			} else {
				console.log('CLEAR INVALID');
			}
		}
		checkInputs();
	}
	clearTheInputs();
	revertAllOutputs();
})

//keeping it in outer scope in the event future / other implementations need access to functionality.

btnReset.addEventListener('click', function() {
	emptyTheInput(allInputs);
	resetRandomNumber();
	revertAllOutputs();
	//resetRandomNumber needs to return a new random Number;
	function resetRandomNumber() {
		return trueRandomNumber = generateRandomNum(minRange, maxRange)
		console.log(trueRandomNumber);
	}
})








btnUpdate.addEventListener('click', function() {
	checkForNumbers();

	function checkForNumbers() {
		if ( (minRange.value.length > 0 && maxRange.value.length > 0) && ( parseInt(minRange.value) < parseInt(maxRange.value) ) ) {
			rangeLow.innerText = minRange.value;
			rangeHigh.innerText = maxRange.value;
			trueRandomNumber = generateRandomNum(minRange.value, maxRange.value);
		} else {
			console.log('false');
			console.log(minRange.value)
			console.log(maxRange.value)
		}
	}
});

btnSubmit.addEventListener('click', function() {
	checkForNames();
	checkForNumbers();

	function checkForNumbers() {
		if ( ch1Guess.value.length > 0 && ch2Guess.value.length > 0 ) {
			// console.log("1output is: " + ch1Guess[0] );
			// console.log("2output type is: " + typeof(ch1Guess));
			// // console.log("3output array is: " + Array.isArray(ch1Guess));
			ch1CurGuess.innerText = ch1Guess.value;
			ch2CurGuess.innerText = ch2Guess.value;
		} else {
			alert("Please enter valid names and inputs in all the fields.")
		}
	}

	function checkForNames() {
		let invalidName = /[^a-z0-9]+/gi;
		if ((invalidName.test(ch1NameInput.value) || (ch1NameInput.value.length < 1) 
			|| (invalidName.test(ch2NameInput.value) || (ch2NameInput.value.length < 1)))) {
			console.log('name is invalid');
			alert("Please enter alpha-numeric names only.")
		} else {
			updateAll(ch1NameInput, ch1NameOutput);
			updateAll(ch2NameInput, ch2NameOutput);
			console.log('name is valid');
		}
	}
});



/*=== TEMPORARILY GLOBAL FUNCTIONS && VARIABLES ====*/

let trueRandomNumber;
let allInputs = Array.from(document.getElementsByTagName('input'));

function generateRandomNum(minRange, maxRange) {
	minRange = rangeLow.innerText;
	maxRange = rangeHigh.innerText;
	let randomNum = Math.floor((Math.random() * maxRange) + minRange) +1;
	console.log(randomNum)
	return randomNum;
}


// function emptyTheInput(element) {
// 	element.value = '';
// }


function emptyTheInput(array) {
	for (let i = 0; i < array.length; i++) {
		array[i].value = '';
	}
}

function revertAllOutputs() {
	updateAll(null, ch1NameOutput, 'Challenger 1 Name');
	updateAll(null, ch2NameOutput, 'Challenger 2 Name');
	ch1CurGuess.innerText = 0;
	ch2CurGuess.innerText = 0;
}

//target specific DOM outputs with specific DOM inputs
function updateAll(query, output, string) {
 	if (query === null) {
 		return changeContent(null, output, string);
 	} else {
 		let qValue = query.value;
 		return changeContent(qValue, output, string);
 	}
}
function changeContent(input, output, string) {
	// console.log("input is: " + input );
	// console.log("string argument is : " + string);
	let changeHtml;
	if (input === null) {
		changeHTML = element => element.innerHTML = string;
	} else {
		changeHTML = element => element.innerHTML = input;
	}
	output.forEach(changeHTML);
}





// function updateAll(query, output, string) {
//  	let qValue = query.value;
// 	return changeContent(qValue, output, string);
// }
// function changeContent(input, output, string) {
// 	console.log("input is: " input );
// 	let changeHTML = element => element.innerHTML = input;
// 	output.forEach(changeHTML);
// }
// updateColorRed(errorInputName, errorInputNumb, ch1NameOutput)
// updateVisibility(errorInputName);











































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
















