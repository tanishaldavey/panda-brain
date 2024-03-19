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
    const cards = newCards.shuffleCards()

    const board = cardsContainer.innerHTML = cards.map(card => {
        return `
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                    <img class="panda-card" src="./assets/back-of-card.jpeg">
                    </div>
                    <div class="flip-card-back">
                        <img class='panda-card' src='./assets/cards/${card}' alt='cute panda' />
                    </div>
                </div>
            </div>
        `
    }).join(' ');
    return board;
}