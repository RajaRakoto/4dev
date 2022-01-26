const target = document.getElementById('entry-point');
const wordList = ['developpeur', 'artiste', 'photographe', 'musicien'];
let wordIndex = 0;
let letterIndex = 0;
let wordCounter = wordList.length;
let typingSpeed = 100; //ms
let readDelay = 2 * 1000; //second * 1000

//dynamic text generator
const typing = () => {
	const letter = document.createElement('span');
	letter.innerText = wordList[wordIndex][letterIndex];
	target.appendChild(letter);

	setTimeout(() => {
		letter.remove();
	}, readDelay);
};

const typingLoop = () => {
	//exec anomym function / 60ms
	setTimeout(() => {
		if (wordIndex == wordCounter) {
			//reinitialiser le compteur de mot a 0 (STEP 3)
			setTimeout(() => {
				wordIndex = 0;
				typingLoop();
			}, 1);
		} else if (letterIndex < wordList[wordIndex].length) {
			//typing core (STEP 1)
			typing();
			letterIndex++;
			typingLoop();
		} else {
			//(STEP 2)
			letterIndex = 0; //reinitialiser le compteur de lettre a 0
			wordIndex++; //changer de mot
			setTimeout(() => {
				//attribuer un temps d'attente (de suppression) avant de reexecuter typingLoop()
				typingLoop();
			}, readDelay);
		}
	}, typingSpeed);
};

typingLoop();
