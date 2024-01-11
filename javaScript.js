function validarFormulario() {
  var campoA = document.getElementById("campoA").value;
  var campoB = document.getElementById("campoB").value;

  campoA = parseFloat(campoA);
  campoB = parseFloat(campoB);

  var mensagemElement = document.getElementById("mensagem");

  if (campoB > campoA) {
    mensagemElement.textContent = "Formulário válido! B é maior que A.";
    mensagemElement.className = "mensagem valido";
  } else {
    mensagemElement.textContent =
      "Formulário inválido! B deve ser maior que A.";
    mensagemElement.className = "mensagem invalido";
  }

  return false;
}
