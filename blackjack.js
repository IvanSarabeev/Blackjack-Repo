let player = {
    name:"Ivan Sarabeev",
    chips:145,
}
let cardsArray = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomNum = Math.floor(Math.random() * 13) + 1;
    if(randomNum > 10) {
        return 10
    } else if(randomNum === 1) {
        return 11
    } else {
        return randomNum
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cardsArray = [firstCard, secondCard];
    sum = firstCard + secondCard;    
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0 ; i < cardsArray.length; i++) {
        cardsEl.textContent += cardsArray[i] + " " ;
    }
    sumEl.textContent = "Sum: " + sum;
    if(sum <= 20) {
        message = "Do you want to draw a new card";
        isAlive = false;
    }else if(sum === 21) {
        message = 'You\'ve got Blackjack!';
        hasBlackJack = true;
    }else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if(isAlive === true && hasBlackJack === false){
        let newCard = getRandomCard();
        sum += newCard;
        cardsArray.push(newCard);
        console.log(cardsArray);
        renderGame();
    }
}


let hasCompletedCourse = true;
let givesCertificate = true;

function generateCertificate() {
    console.log("Generating certificate...");
}

if(hasCompletedCourse === true && givesCertificate === true){
    generateCertificate();
}

let hasSolvedChallenge = false;
let hasHintsLeft = false;


if(hasSolvedChallenge === false && hasHintsLeft === false){
    showSolution();
}

function showSolution() {
    console.log("Showing the solution...");
}

let likeDocumentaries = true;
let likesStartups = true;

if(likeDocumentaries === true || likesStartups === true){
    recommendMovie();
}

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like it!");
}

let age = 22;

if(age <= 21) { 
    console.log("You canno't enter the nightclub");
} else {
    console.log("Welcome !");
}

let ageCard = 100;

if(ageCard < 100) {
    console.log("Not elegible");
} else if (ageCard === 100) {
    console.log("Here is your birthday card from the King!");
} else {
    console.log("Not elegible, you have already gotten one");
}
