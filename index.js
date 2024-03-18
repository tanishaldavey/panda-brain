gameSettings = document.querySelector('.game-settings');
cardsContainer = document.querySelector('.cards-container'); 
playButton = document.querySelector('#play-button');

playButton.addEventListener('click', displayGameBoard);

function displayGameBoard() {
    gameSettings.classList.add('hide-view');
    cardsContainer.classList.remove('hide-view')
}