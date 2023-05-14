const btdeTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const trocarImagembt = document.querySelector(".sol-escuro");

btdeTema.addEventListener("click", () => {
  const verificarclasseescuro = body.classList.contains("escuro");

  body.classList.toggle("escuro");

  if (verificarclasseescuro) {
    trocarImagembt.setAttribute("src", "./src/imagens/sun.png");
  } else {
    trocarImagembt.setAttribute("src", "./src/imagens/moon.png");
  }
});
