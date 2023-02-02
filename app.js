import { onEvent, semDinheiro, dinheiroDisponivel } from "./code.org.js";

//pergunta ao usuário quanto ele quer economizar
let economia = prompt("Quanto você quer economizar?");
export let carteira = economia;
export const CUSTO = { comida: 15, brinquedo: 30, circo: 50 };

/**
 * @type Array<{tipo: string, valor: number, dia: Date}>
 */
let extrato = [];

//mostra o valor digitado pelo usuário na tela
document.getElementById("valor").innerHTML = economia;

//quando clicar em comprar, atualiza o valor da carteira e o extrato
onEvent("comida", "click", () => {
  if (carteira - CUSTO.comida >= 0) {
    dinheiroDisponivel();
    atualizaCarteira("comida");
    atualizaExtrato("comida");
  } else {
    semDinheiro();
  }
});

onEvent("brinquedo", "click", () => {
  if (carteira - CUSTO.brinquedo >= 0) {
    dinheiroDisponivel();
    atualizaCarteira("brinquedo");
    atualizaExtrato("brinquedo");
  } else {
    semDinheiro();
  }
});
onEvent("circo", "click", () => {
  if (carteira - CUSTO.circo >= 0) {
    dinheiroDisponivel();
    atualizaCarteira("circo");
    atualizaExtrato("circo");
  } else {
    semDinheiro();
  }
});

//imprime o extrato
onEvent("extrato", "click", () => {
  if (Object.values(extrato).every((el) => el.valor == 0)) {
    alert("Você ainda não gastou nada...");
  } else {
    let resultado = "";
    extrato.forEach((lancamento) => {
      resultado += `
      <b>Item: ${lancamento.tipo}</b>
      Valor: R$ ${lancamento.valor}
      Data: ${lancamento.dia}
      `;
    });
    alert(resultado);
  }
});

//zera os gastos
onEvent("resetar", "click", () => {
  document.getElementById("valor").innerHTML = economia;
  carteira = economia;
  extrato = [];
});

//pergunta novamente ao usuário quanto ele quer economizar
onEvent("redefinir", "click", () => {
  economia = prompt("Quanto você quer economizar?");
  carteira = economia;
  document.getElementById("valor").innerHTML = economia;
  extrato = [];
});

//funções de atualizar carteira e extrato
const atualizaCarteira = (id) => {
  carteira -= CUSTO[id];
  document.getElementById("valor").innerHTML = carteira;
};

const atualizaExtrato = (id) => {
  extrato.push({
    tipo: id,
    valor: CUSTO[id],
    dia: new Date().toLocaleDateString(),
  });
};
