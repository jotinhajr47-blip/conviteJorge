const btnPresentes = document.getElementById("btn-presentes");
const modal = document.getElementById("modal-presentes");
const btnFechar = document.getElementById("fechar-modal");

btnPresentes.addEventListener("click", function () {
  modal.classList.add("aberto");
});

btnFechar.addEventListener("click", function () {
  modal.classList.remove("aberto");
});

modal.addEventListener("click", function (evento) {
  if (evento.target === modal) {
    modal.classList.remove("aberto");
  }
});

const video = document.getElementById("video-capa");
const btnSom = document.getElementById("btn-som");

btnSom.addEventListener("click", function () {
  video.muted = !video.muted;
  video.play();

  if (video.muted) {
    btnSom.textContent = "🔇 Ativar som";
  } else {
    btnSom.textContent = "🔊 Desativar som";
  }
});