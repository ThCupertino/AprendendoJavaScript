const veiculoUm = document.getElementById("veiculoUm")
const velocidadeUm = document.getElementById("velocidadeUm")

const veiculoDois = document.getElementById("veiculoDois")
const velocidadeDois = document.getElementById("velocidadeDois")

if (velocidadeUm > velocidadeDois) {
  document.write("O veículo " + veiculoUm + " é o mais rápido.")
} else if (velocidadeUm < velocidadeDois) {
  document.write("O veículo " + veiculoDois + " é o mais rápido.")
} else {
  document.write("Os veículos possuem a mesma velocidade.")
}