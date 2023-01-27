import {
  onEvent,
  setProperty,
  noMoreMoney,
  moneyAvailable,
} from "./code.org.js";

let economia = prompt("Quanto você quer economizar?");
let carteira = economia;
const comida = 15;
const brinquedo = 30;
const circo = 50;
let extrato = [];

document.getElementById("valor").innerHTML = economia;

onEvent("comida", "click", () => {
  if (carteira - comida >= 0) {
    moneyAvailable();
    carteira -= comida;
    document.getElementById("valor").innerHTML = carteira;
    extrato.push(`Comprou comida. Restante na carteira: R$ ${carteira}.\n`);
  } else {
    noMoreMoney();
  }
});
onEvent("brinquedo", "click", () => {
  if (carteira - brinquedo >= 0) {
    moneyAvailable();
    carteira -= brinquedo;
    document.getElementById("valor").innerHTML = carteira;
    extrato.push(`Comprou brinquedo. Restante na carteira: R$ ${carteira}.\n`);
  } else {
    noMoreMoney();
  }
});
onEvent("circo", "click", () => {
  if (carteira - circo >= 0) {
    moneyAvailable();
    carteira -= circo;
    document.getElementById("valor").innerHTML = carteira;
    extrato.push(
      `Comprou ingresso pro circo. Restante na carteira: R$ ${carteira}.\n`
    );
  } else {
    noMoreMoney();
  }
});

onEvent("extrato", "click", () => {
  if (extrato.length == 0) {
    alert("Você ainda não gastou nada...");
  } else {
    alert(extrato);
  }
});

onEvent("resetar", "click", () => {
  document.getElementById("valor").innerHTML = economia;
  extrato = [];
});

onEvent("redefinir", "click", () => {
  economia = prompt("Quanto você quer economizar?");
  document.getElementById("valor").innerHTML = economia;
  extrato = [];
});
