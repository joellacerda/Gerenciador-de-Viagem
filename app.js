import {
  onEvent,
  setProperty,
  noMoreMoney,
  moneyAvailable,
} from "./code.org.js";

let economia = prompt("Quanto você quer economizar?");
let carteira = economia;
const CUSTO = { comida: 15, brinquedo: 30, circo: 50 };
let extrato = { comida: 0, brinquedo: 0, circo: 0 };

//mostra o valor digitado pelo usuário na tela
document.getElementById("valor").innerHTML = economia;

//quando clicar em comprar, atualiza o valor da carteira e o extrato
onEvent("comida", "click", () => {
  if (carteira - CUSTO.comida >= 0) {
    moneyAvailable();
    carteira -= CUSTO.comida;
    document.getElementById("valor").innerHTML = carteira;
    extrato.comida += CUSTO.comida;
  } else {
    noMoreMoney();
  }
});

onEvent("brinquedo", "click", () => {
  if (carteira - CUSTO.brinquedo >= 0) {
    moneyAvailable();
    carteira -= CUSTO.brinquedo;
    document.getElementById("valor").innerHTML = carteira;
    extrato.brinquedo += CUSTO.brinquedo;
  } else {
    noMoreMoney();
  }
});
onEvent("circo", "click", () => {
  if (carteira - CUSTO.circo >= 0) {
    moneyAvailable();
    carteira -= CUSTO.circo;
    document.getElementById("valor").innerHTML = carteira;
    extrato.circo += CUSTO.circo;
  } else {
    noMoreMoney();
  }
});

//imprime o extrato
onEvent("extrato", "click", () => {
  if (Object.values(extrato).every((el) => el == 0)) {
    alert("Você ainda não gastou nada...");
  } else {
    alert(
      `Você gastou R$ ${extrato.comida} com comida, R$ ${extrato.brinquedo} com brinquedo, e R$ ${extrato.circo} com circo.\nVocê tem R$ ${carteira} na carteira.`
    );
  }
});

onEvent("resetar", "click", () => {
  document.getElementById("valor").innerHTML = economia;
  carteira = economia;
  extrato = { comida: 0, brinquedo: 0, circo: 0 };
});

onEvent("redefinir", "click", () => {
  economia = prompt("Quanto você quer economizar?");
  carteira = economia;
  document.getElementById("valor").innerHTML = economia;
  extrato = { comida: 0, brinquedo: 0, circo: 0 };
});
