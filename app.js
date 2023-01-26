import { onEvent, setProperty, noMoreMoney } from "./code.org.js";

const economia = prompt("Quanto você quer economizar?");
let carteira = economia;
const comida = 15;
const brinquedo = 30;
const circo = 50;
let extrato = [];

document.getElementById("valor").innerHTML = economia;

onEvent("comida", "click", () => {
  if (carteira - comida >= 0) {
    carteira -= comida;
    document.getElementById("valor").innerHTML = carteira;
    extrato.push(`Comprou comida. Restante na carteira: R$ ${carteira}.\n`);
  } else {
    alert("Você não tem dinheiro pra isso!");
    noMoreMoney();
  }
});
onEvent("brinquedo", "click", () => {
  if (carteira - brinquedo >= 0) {
    carteira -= brinquedo;
    document.getElementById("valor").innerHTML = carteira;
    extrato.push(`Comprou brinquedo. Restante na carteira: R$ ${carteira}.\n`);
  } else {
    alert("Você não tem dinheiro pra isso!");
    noMoreMoney();
  }
});
onEvent("circo", "click", () => {
  if (carteira - circo >= 0) {
    carteira -= circo;
    document.getElementById("valor").innerHTML = carteira;
    extrato.push(
      `Comprou ingresso pro circo. Restante na carteira: R$ ${carteira}.\n`
    );
  } else {
    alert("Você não tem dinheiro pra isso!");
    noMoreMoney();
  }
});

onEvent("extrato", "click", () => alert(extrato));
