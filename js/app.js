
function alterarStatus(id) {
    let game = document.getElementById('game-'+id);
    let imagemGame = game.querySelector('.dashboard__item__img');
    let botaoGame = game.querySelector('.dashboard__item__button');
    
    if (imagemGame.classList.contains('dashboard__item__img--rented')) {
        imagemGame.classList.remove('dashboard__item__img--rented');
        botaoGame.classList.remove('dashboard__item__button--return');
        botaoGame.textContent = 'Alugar';
    } else {
        imagemGame.classList.add('dashboard__item__img--rented');
        botaoGame.classList.add('dashboard__item__button--return');

        botaoGame.textContent = 'Devolver';

    }
    
}