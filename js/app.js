
let totalAlugados = 0;

function exibeQuantidadeAlugados () {
    totalAlugados++;
    console.log(`Total de jogos alugados ${totalAlugados}`);
}

function alterarStatus(id) {
    let game = document.getElementById('game-'+id);
    let imagemGame = game.querySelector('.dashboard__item__img');
    let botaoGame = game.querySelector('.dashboard__item__button');

 
if (imagemGame.classList.contains('dashboard__item__img--rented')) {
        let confirmacao = prompt('Digite "sim" para confirmar devolução!');
        if (confirmacao=='sim') {
            imagemGame.classList.remove('dashboard__item__img--rented');
            botaoGame.classList.remove('dashboard__item__button--return');
            botaoGame.textContent = 'Alugar';
        }
    } else {
        imagemGame.classList.add('dashboard__item__img--rented');
        botaoGame.classList.add('dashboard__item__button--return');
        botaoGame.textContent = 'Devolver';

        exibeQuantidadeAlugados();
    }
    
}