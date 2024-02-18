function hideElementById(elementId){
    const element=document.getElementById(elementId)
    element.classList.add('hidden')
    }

    function showElementById(elementId){
        const element=document.getElementById(elementId)
        element.classList.remove('hidden')
    } 

    function setBackgroundColorById(elementId){
    const element=document.getElementById(elementId)
    element.classList.add("bg-orange-400")
    }
    function removeBackgroundColorbyId(elementId){
        const element=document.getElementById(elementId)
        element.classList.remove('bg-orange-400')
    }
    function getNewScoreValueById(elementId){
        const element=document.getElementById(elementId)
        const elementText=element.innerText
        const value=parseInt(elementText)
        return(value)
    }
    function setNewScoreValueById(elementId,value){
const element=document.getElementById(elementId)
element.innerText=value

    }

    function getRandomAlphabets(){
    
        // set alphabets
        const alphaString='abcdefghijklmnopqrstuvwxyz'
        const alphabet=alphaString.split('')
        
        // get randome number
        const random=Math.random()*25
        const index=Math.round(random)
        // console.log(index)
    const Alphabets=alphabet[index]
    return(Alphabets)
    }