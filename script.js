'use strict';
let numberToFound = Math.floor((Math.random()*20)+1)
let score = 20
console.log(numberToFound)

// How to select element from document: document.QuerySelector
console.log(document.querySelector('.message'))

// What we get from document.querySelector('.message') is whole html element. To get data which we requiered we have to use: .textContnet
console.log(document.querySelector(".message").textContent)

// To gather an input from input form we have to use .value
console.log(document.querySelector(".message").value)

function checkNumber() {
    if (!document.querySelector(".guess").value)
        {document.querySelector(".message").textContent = "Please chose a number."} else {
            const numberToCheck = Number(document.querySelector(".guess").value)
            if (numberToCheck === numberToFound) {
                document.querySelector(".message").textContent = "That is correct number!"
                if (score > Number(document.querySelector('.highscore').textContent)) document.querySelector('.highscore').textContent = score
                document.body.style.backgroundColor = "green"
            }  
            
            else if (numberToCheck < numberToFound) {
                document.querySelector(".message").textContent = "📉 To Low. Try again."
                score--
                document.querySelector(".score").textContent = score
            } 
            
            else if (numberToCheck > numberToFound) {
                document.querySelector(".message").textContent = "📈 To High. Try again."
                score--
                document.querySelector(".score").textContent = score
            }
            
            if (Number(document.querySelector(".score").textContent) == 0) {
                document.querySelector(".message").textContent = "You lost. Try again."
                document.body.style.backgroundColor = "red"
            }      
        }
    }

function resetGame() {
    score = 20
    document.querySelector(".score").textContent = score
    document.querySelector(".message").textContent = "Start guessing..."
    document.querySelector(".guess").value = ""
    numberToFound = Math.floor((Math.random()*20)+1)
    console.log(numberToFound)
    document.body.style.backgroundColor = "grey"
}

// Creation of event listener
document.querySelector(".check").addEventListener("click", checkNumber)

document.querySelector(".again").addEventListener("click", resetGame)