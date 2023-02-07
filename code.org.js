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

export const setContent = (id, content) => {
  document.getElementById(id).innerHTML = content;
};

export const scrollToBottom = () => {
  window.scrollTo({
    left: 0,
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
};

export const showElement = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.classList.remove("hidden");
  }
};

export const hideElement = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.classList.add("hidden");
  }
};

// let beforeScreen = "paginaPrincipal";
// export const setScreen = (id) => {
//   hideElement(beforeScreen);
//   showElement(id);
//   beforeScreen = id;
// };
