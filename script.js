/* ==== QUERIES ==== */


// All these querySelectors return a static (not live) Array-like object.

/* =Output Section= */
let outputParent = document.querySelector('.output-section');
// let outputCard = document.querySelector('.output-card');

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
let ch1NameOutput = document.querySelectorAll('.ch1-name-output');
let ch2NameOutput = document.querySelectorAll('.ch2-name-output');

/*=== Error Queries ====*/
let errorInputName = document.querySelectorAll('.error');
let errorInputNumb = document.querySelectorAll('.error-2');

/*=== OutPut Targets ====*/
let howCloseOutput1 = document.querySelector('.chall-approx-1');
let howCloseOutput2 = document.querySelector('.chall-approx-2');

/* ==== BUTTONS ==== */
let btnUpdate = document.querySelector('.update-btn');
let btnSubmit = document.querySelector('.submit-btn');
let btnReset = document.querySelector('.reset-btn');
let btnClear = document.querySelector('.clear-btn');
let btnX = document.querySelector('.btn-x');


btnClear.addEventListener('click', function() {
	clearTheInputs();
	revertAllOutputs();
	trueDisableON();
	function clearTheInputs() {
		function checkInputs() {
			if (minRange.value.length > 0 || maxRange.value.length > 0 || ch1NameInput.value.length > 0 || ch2NameInput.value.length > 0 || 
				ch1Guess.value.length > 0 || ch2Guess.value.length > 0) {
				emptyTheInput(allInputs);
				// btnClear.classList.remove("btn-active");
				console.log(trueRandomNumber);
			} else {
				console.log('CLEAR INVALID');
			}
		}
		checkInputs();
	}
})

btnReset.addEventListener('click', function() {
	emptyTheInput(allInputs);
	resetRandomNumber();
	revertAllOutputs();
	trueDisableON();
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
			alert('false');
			console.log(minRange.value)
			console.log(maxRange.value)
		}
	}
});

btnSubmit.addEventListener('click', function() {
	checkForNames();
	checkForNumbers();
	stayInRangeAlert();
	howClose()
	appendCard();
	function checkForNumbers() {
		if ( (ch1Guess.value.length > 0 && ch2Guess.value.length > 0) && (ch1Guess.value != false && ch2Guess.value != false )) {
			ch1CurGuess.innerText = ch1Guess.value;
			ch2CurGuess.innerText = ch2Guess.value;
			btnClear.className += " btn-active";
			trueDisableOFF();
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
			btnClear.className += " btn-active";
			btnReset.className += " btn-active";
			trueDisableOFF();
			console.log('name is valid');
		}
	}
});





/*=== TEMPORARILY GLOBAL FUNCTIONS && VARIABLES ====*/
function trueDisableON() {
	btnReset.disabled = true;
	btnClear.disabled = true;	
}

function trueDisableOFF() {
	btnReset.disabled = false;
	btnClear.disabled = false;		
}

function stayInRangeAlert() {
	if (((parseInt(minRange.value) <= parseInt(ch1Guess.value)) && (parseInt(ch1Guess.value) <= parseInt(maxRange.value))) && 
		((parseInt(minRange.value) <= parseInt(ch2Guess.value)) && (parseInt(ch2Guess.value) <= parseInt(maxRange.value)))){
		console.log('theyre in between');
	} else {
		console.log('theyre not in between');
	}
}

disableButtons();
function disableButtons(target) {
	if (minRange.value.length > 0 || maxRange.value.length > 0 || ch1NameInput.value.length > 0 || ch2NameInput.value.length > 0 || 
		ch1Guess.value.length > 0 || ch2Guess.value.length > 0) {
		console.log('false')
	} else {
		btnClear.className += " btn-disabled";
		btnReset.className += " btn-disabled";
		trueDisableON()
		console.log('true')
	}
}

function howClose() {
	let player1Guess = parseInt(ch1Guess.value);
	let player2Guess = parseInt(ch2Guess.value);
	console.log(player1Guess, player2Guess);
	howCloseEach(player1Guess, player2Guess);
	howCloseEach(null, player2Guess);

	function howCloseEach(challengerGuess1, challengerGuess2) {
		if (challengerGuess1 !== null) {
			if (challengerGuess1 === trueRandomNumber) {
				howCloseOutput1.innerText = 'Boom!';
				appendCard();
			} else if (challengerGuess1 > trueRandomNumber) {
				howCloseOutput1.innerText = "that's too high";
			} else {
				howCloseOutput1.innerText = "that's too low";
			}
		} else {
			if (challengerGuess2 === trueRandomNumber) {
				howCloseOutput2.innerText = 'Boom';
				appendCard();
			} else if (challengerGuess2 > trueRandomNumber) {
				howCloseOutput2.innerText = "that's too high";
			} else {
				howCloseOutput2.innerText = "that's too low";
			}
		}
	}
}

// btnX.addEventListener('click', function(event) {
// 	console.log(event.target);
// });

outputParent.addEventListener('click',function(event) {
	if (event.target.className === 'btn-x') {
		console.log('op target: ' + event.target)
		event.target.parentElement.parentElement.remove();
	}
})






//perhaps create an Array. as the condition is met, we push an element onto the array and then the append function appends the last element of the array onto the output section

function appendCard() {
	let outputCard = `
					<article class="output-card">
					<header class="">
						<span class="bold ch1-name-output">${ch1NameInput.value}</span>
						<span class="thin">vs</span>
						<span class="bold ch2-name-output">${ch2NameInput.value}</span>
					</header>
					<hr class="">
					<article class="output-center">
						<h1 class="">CHALLENGER 2 NAME</h1>
						<p>WINNER</p>
					</article>
					<hr class="">
					<footer class="">
						<section class="output-metrics">
							<section>
								<span class="bold">25</span>
								<span class="thin">GUESSES</span>
							</section>
							<section>
								<span class="bold">3.5</span>
								<span class="thin">MINUTES</span>
							</section>
						</section>
						<button class="btn-x">X</button>
					</footer>
				</article>`
	outputParent.innerHTML += outputCard;

	btnX.addEventListener('click', function(event) {
	console.log(event.target);
});

outputParent.addEventListener('click',function(event) {
	if (event.target.className === 'btn-x') {
		console.log('op target: ' + event.target)
		event.target.parentElement.parentElement.remove();
	}
})

	console.log('card should be appended.')
}

let trueRandomNumber;
let allInputs = Array.from(document.getElementsByTagName('input'));

function generateRandomNum(minRange, maxRange) {
	minRange = rangeLow.innerText;
	maxRange = rangeHigh.innerText;
	let randomNum = Math.floor((Math.random() * maxRange) + minRange) +1;
	console.log(randomNum)
	return randomNum;
}

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
	btnClear.classList.remove("btn-active");
	btnReset.classList.remove("btn-active");
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






