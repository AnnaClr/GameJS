let listaDeNumerosSorteados = [];
const numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
// console.log(numeroSecreto);

function exibirTextoNaTela(tag, texto) {
  document.querySelector(tag).innerHTML = texto;
  // responsiveVoice.speak(texto, 'Brazilian Portuguese Female');
}

exibirTextoNaTela("h1", "Jogo do Número Secreto!");
exibirTextoNaTela("p", "Escolha um número entre 1 e 100:");

function gerarNumeroAleatorio() {
  if (listaDeNumerosSorteados.length === numeroLimite) {
    listaDeNumerosSorteados = [];
  }

  let numeroEscolhido;
  do {
    numeroEscolhido = Math.floor(Math.random() * 100) + 1;
  } while (listaDeNumerosSorteados.includes(numeroEscolhido));

  listaDeNumerosSorteados.push(numeroEscolhido);
  // console.log(listaDeNumerosSorteados);
  return numeroEscolhido;
}

function verificarChute() {
  const chute = Number(document.querySelector("input").value);

  if (isNaN(chute) || chute < 1 || chute > 100) {
    exibirTextoNaTela("p", "Por favor, insira um número entre 1 e 100.");
    document.querySelector("input").value = '';
    return;
  }

  let mensagem;

  if (chute === numeroSecreto) {
    mensagem = `Você descobriu o número secreto com ${tentativas} tentativa${tentativas > 1 ? "s" : ""}!`;
    exibirTextoNaTela("h1", "Acertou!");
    exibirTextoNaTela("p", mensagem);
  } else {
    mensagem = chute > numeroSecreto ? "O número secreto é menor" : "O número secreto é maior";
    tentativas++;
    exibirTextoNaTela("p", mensagem);
    document.querySelector("input").value = '';
  }
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  tentativas = 1;
  // console.log(numeroSecreto);
  exibirTextoNaTela("h1", "Jogo do Número Secreto!");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 100:");
  document.querySelector("input").value = '';
}

exibirTextoNaTela("h1", "Jogo do Número Secreto!");
exibirTextoNaTela("p", "Escolha um número entre 1 e 100:");