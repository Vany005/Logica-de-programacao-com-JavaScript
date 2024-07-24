let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
//Essa função foi criada para evitar código repetido, ela centraliza a lógica de exibir as mensagens iniciais do jogo.
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}
//sorteia um número secreto
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}
//Limpa o campo de entrada
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
//essa função é chamada quando o botão é clicado
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1; //reinicia o contador de tentativa para 1.
    exibirMensagemInicial(); //exibe a mensagem inicial do jogo
    document.getElementById('reiniciar').setAttribute('disabled', true)//desabilita o botão ''Novo Jogo''
}



/*aprendemos como usar o JavaScript para manipular o HTML e dar vida ao nosso projeto! 
Vimos como usar o document.querySelector() para selecionar elementos HTML, como <h1> e <p>,
 e o innerHTML para alterar o conteúdo desses elementos. Com isso,
 conseguimos colocar um título chamativo "Jogo do número secreto" e
 uma mensagem "Escolha um número entre 1 e 10" na nossa página, 
deixandoa mais interativa e próxima da experiência de um site real
*/

