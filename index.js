const mode = new Mode();
const newCards = new Cards();


gameSettings = document.querySelector('.game-settings');
cardsContainer = document.querySelector('.cards-container'); 
playButton = document.querySelector('#play-button');

playButton.addEventListener('click', displayGameBoard);

function displayGameBoard() {
    gameSettings.classList.add('hide-view');
    cardsContainer.classList.remove('hide-view')
    setUpCards();
}

function setUpCards() {
    const cards = newCards.dealCards(mode.easy)
    cardsContainer.innerHTML = cards.map(card => {
        return `<img class='panda-card' src='./assets/cards/${card}' alt='cute panda' />`
    })
}