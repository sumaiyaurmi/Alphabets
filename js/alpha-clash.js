// function play(){
// // step-1;hide the home screen.to hide the screnn add the class hidden to the home section
// const homeSection=document.getElementById('Home')
// homeSection.classList.add('hidden')

// // show the playground
// const playSection=document.getElementById('Play-bord')
// playSection.classList.remove('hidden')

// }
function handleKeyboardButtonPress(){
console.log("pressed")

}


document.addEventListener('keyup',handleKeyboardButtonPress())

function continuePlay(){
    const alphabets=getRandomAlphabets()
    
    const currentAlphabet=document.getElementById('current-alpha')
    currentAlphabet.innerText=alphabets
    
    // alphabets bg-color
    setBackgroundColorById(alphabets )
    }
    
    function play(){
    hideElementById('Home')
    showElementById('Play-bord')
    continuePlay()
    }
    