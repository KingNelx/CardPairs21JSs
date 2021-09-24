let cards  = []
let has21Card = false
let isAlive = false
let message = " "
let sum = 0
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector(".cards-el")

console.log(cards)
function getRandomCard(){
   let randomNumber =  Math.floor(Math.random() *13) + 1
   if(randomNumber > 10){
        return 10
   }else if (randomNumber === 1){
        return 11
   }else{
       return randomNumber
   }
}

function start(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame(){
    cardEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if(sum <= 20){
        message = ("Do you want to draw a new card?")
    }else if(sum === 21){
        message= ("You hit a Pair of 21! , You Won !")
        has21Card = true
    }else{
        message = ("Your out of the game")
        isAlive = false
    }
    
    messageEl.textContent = message
}


function newCard(){
    let cardVar = getRandomCard()
    sum += cardVar
    cards.push(cardVar)
    console.log(cards)
    renderGame()
}

 