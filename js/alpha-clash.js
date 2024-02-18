// function play(){
// // step-1;hide the home screen.to hide the screnn add the class hidden to the home section
// const homeSection=document.getElementById('Home')
// homeSection.classList.add('hidden')

// // show the playground
// const playSection=document.getElementById('Play-bord')
// playSection.classList.remove('hidden')

// }
function handleKeyboardButtonPress(event) {
  // presed key
  const pressedKey = event.key;

if(pressedKey === 'Escape'){
  gameOver()
}
  // key expected key
  const currentAlphabet = document.getElementById("current-alpha");
  const currentAlphabetText = currentAlphabet.innerText;
  const expectedKey = currentAlphabetText.toLowerCase();
  //   condition
  if (pressedKey === expectedKey) {
    const currentScore = getNewScoreValueById("current-score");
    const newScore = currentScore + 1;
    setNewScoreValueById("current-score", newScore);
    // --------------------------------------------
    // // update score
    // // 1. get the current Score
    // const currentScoreElement = document.getElementById("current-score");
    // const currentScoreText = currentScoreElement.innerText;
    // // 2. convet it in number
    // const currentScore = parseInt(currentScoreText);
    // //  3.increase the score
    // const newScore = currentScore + 1;
    // // display the new score in the button
    // currentScoreElement.innerText = newScore;
    // ----------------------------------------------------------
    // start a new round
    removeBackgroundColorbyId(expectedKey);
    continuePlay();
  } else {
    const currentLife = getNewScoreValueById("current-life");
    const newLife = currentLife - 1;
    setNewScoreValueById("current-life", newLife);

    if (newLife === 0) {
      gameOver();
    }

    //-----------------------------------------------
    // score er moto .just decressed
    // const currentLifeElement=document.getElementById('current-life');
    //    const currentLifeText=currentLifeElement.innerText;
    //    console.log(currentAlphabetText)
    //    const currentLife=parseInt(currentLifeText);
    // const newLife=currentLife-1;
    // currentLifeElement.innerText=newLife
    // ------------------------------------------------
  }
}

document.addEventListener("keyup", handleKeyboardButtonPress);

function continuePlay() {
  const alphabets = getRandomAlphabets();

  const currentAlphabet = document.getElementById("current-alpha");
  currentAlphabet.innerText = alphabets;

  // alphabets bg-color
  setBackgroundColorById(alphabets);
}

function play() {
  hideElementById("Home");
  hideElementById("final-score");
  showElementById("Play-bord");

  setNewScoreValueById("current-score",0 );
  setNewScoreValueById("current-life", 5);

  const currentAlphabet = document.getElementById("current-alpha");
  const currentAlphabetText = currentAlphabet.innerText;
  const expectedKey = currentAlphabetText.toLowerCase();
removeBackgroundColorbyId(expectedKey);

  continuePlay();
}
function gameOver() {
  hideElementById("Play-bord");
  showElementById("final-score");


  const lastScore =getNewScoreValueById("current-score");
  setNewScoreValueById('game-score', lastScore)
  console.log(lastScore);
}
