export const onEvent = (id, event, fn) => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener(event, fn, false);
  }
};

export const dinheiroDisponivel = () => {
  document.getElementById("dinheiro").classList =
    "dinheiro badge rounded-pill text-bg-dark fs-5";
};

export const semDinheiro = () => {
  document.getElementById("dinheiro").classList =
    "dinheiro badge rounded-pill text-bg-danger fs-5";
  alert("Você não tem dinheiro pra isso!");
};
