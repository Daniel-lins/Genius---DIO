let order = [];
let clickOrder = [];
let score = 0;

// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul


const blue = document.querySelector('.blue');
const red = document.querySelector('red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
//cria a ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickOrder = [];

    for(let i  in order) {
        let elementColor = createElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}
//acende a proxima cor
let lightColor = (elemnt, number) => {
    number = number * 500;
    setTimeout(() => {
        elemnt.classList.add('selected');
    }, number - 250); 

    setTimeout(   () => {

        elemnt.classList.remove('selected')
    });

}
// Checa se os botões clicados são os mesmo ada ordem gerado pelo jogo
let checkOrder = () => {

    for(let i in clickOrder) {
        if(clickOrder(i) != order[i]) {
            lose();
            break;

        }
    }
}

if(clickOrder.length == order.length) {
    alert(`Pontuação: ${score}<br>Você acertou ! Iniciando próximo nível!`);
    nextLevel();
}