let cards  = []
let has21Card = false
let isAlive = false
let message = " "
let sum = 0
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector(".cards-el")


let player = { // object of the player
    name: "Player",
    chips: 0,
}

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": $ " + player.chips

console.log(cards)
function getRandomCard(){  // trigger random numbers
   let randomNumber =  Math.floor(Math.random() *6) + 1
   if(randomNumber > 10){
        return 10
   }else if (randomNumber === 1){
        return 11
   }else{
       return randomNumber
   }
}

// when the player click start 2 random number cards will be given

function start(){
    player.chips = 0
        playerEl.textContent = player.name + ": $ " + player.chips
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
        sumEl.textContent = "Sum: " + sum
    }
    if(sum <= 20){
        message = ("Do you want to draw a new card?")
        player.chips += 50
        playerEl.textContent = player.name + ": $ " + player.chips

    }else if(sum === 21){ 
        message= ("You hit a Pair of 21! , You Won !")
        has21Card = true
    }else{
        message = ("Your out of the game")
        isAlive = false
        player.chips = 0
        playerEl.textContent = player.name + ": $ " + player.chips
    }
    
    messageEl.textContent = message
}


function newCard(){

    if(isAlive === true && has21Card === false){
        let cardVar = getRandomCard()
        sum += cardVar
        cards.push(cardVar)
        console.log(cards)
        renderGame()
    }else{
        noMoreDraw()
    }
}

function noMoreDraw(){
    if(confirm(" You Lose, You can not Draw more cards . ")){

    }
}

function rules(){

    if(confirm("The Rules are Simple, Draw a card, get sum of 21 and you win, !")){
    }
}

 


