'use strict';
let numberToFound = Math.floor(Math.random()*(20-1)+1)
console.log(numberToFound)

// How to select element from document: document.QuerySelector
console.log(document.querySelector('.message'))

// What we get from document.querySelector('.message') is whole html element. To get data which we requiered we have to use: .textContnet
console.log(document.querySelector(".message").textContent)

// To gather an input from input form we have to use .value
console.log(document.querySelector(".message").value)

function checkNumber() {
    const numberToCheck = Number(document.querySelector(".guess").value)
    if (Number(document.querySelector(".score").textContent) == 0) {
        document.querySelector(".message").textContent = "You lost. Try again."
        document.body.style.backgroundColor = "red"
    }   else  if (numberToCheck === numberToFound) {
        document.querySelector(".message").textContent = "That is correct number!"
        document.querySelector(".highscore").textContent = document.querySelector(".score").textContent
        document.body.style.backgroundColor = "green"
    }  else if (numberToCheck < numberToFound) {
        document.querySelector(".message").textContent = "📉 To Low. Try again."
        document.querySelector(".score").textContent = Number(document.querySelector(".score").textContent) - 1
    } else if (numberToCheck > numberToFound) {
        document.querySelector(".message").textContent = "📈 To High. Try again."
        document.querySelector(".score").textContent = Number(document.querySelector(".score").textContent) - 1
    }
}

function resetGame() {
    document.querySelector(".score").textContent = 20
    document.querySelector(".message").textContent = "Start guessing..."
    document.querySelector(".guess").value = ""
    numberToFound = Math.floor(Math.random()*(20-1)+1)
}
