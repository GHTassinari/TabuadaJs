function gerarTabuada() {
  const numero = Number(document.getElementById("valor").value);
  const saida = document.getElementById("saida");

  if (!numero || numero < 0) {
      saida.innerHTML = "Por favor, insira um número válido e positivo.";
      return;
  }

  let resultado = "<strong>Tabuada:</strong><br>";
  for (let i = 1; i <= 10; i++) {
      resultado += `${numero} x ${i} = ${numero * i}<br>`;
  }

  saida.innerHTML = resultado;
}
