let infoEl = document.getElementById("info-el")
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let allCards = []
let sum = null
let isAlive = false
let gotBlackJack = false
let card = 0

function render() {
    sumEl.textContent = "SUM: " + sum
    cardsEl.textContent = "CARDS: "
    for (let i = 0; i < allCards.length; i++) {
        cardsEl.textContent += allCards[i] + " "
    }
    if (sum < 21) {
        messageEl.textContent = "Safe for now! Cross your fingers for that lucky "+(21-sum)+"! 🤞"
        infoEl.textContent="Go ahead and draw to see if you can get to 21!"
    }
    else if (sum === 21) {
        messageEl.textContent = "Blackjack! You've hit the jackpot! 🎉"
        gotBlackJack = true
        infoEl.textContent="Feeling lucky? Want to go again?"
    }
    else {
        messageEl.textContent = "Close call! Maybe next time! 🃏"
        isAlive = false
        infoEl.textContent="Keep your chin up, there's always another round! 💪"
    }

}
function newCard() {
    if (isAlive && gotBlackJack === false) {
        card = randomCard()
        allCards.push(card)
        sum += card
        render()
    }

}
function start() {
    if (isAlive === false||gotBlackJack) {
        sum = 0
        isAlive = true
        allCards=[]
        cardsEl.innerText="CARDS: "
        let firstCard = randomCard()
        let secondCard = randomCard()
        allCards.push(firstCard, secondCard)
        sum = firstCard + secondCard
        render()
    }
}
function randomCard() {
    let num = Math.floor(Math.random() * 13) + 1
    if (num === 1) {
        return 11;
    }
    else if (num === 11 || num === 12 || num === 13) {
        return 10
    }
    else {
        return num
    }
}