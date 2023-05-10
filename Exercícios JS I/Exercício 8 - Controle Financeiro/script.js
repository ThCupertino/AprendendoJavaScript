const quantiaInicial = parseFloat(prompt("Informe a quantidade inicial de dinheiro:"))
let quantiaFinal = quantiaInicial


let opcao = ''

do {
  opcao = prompt(
  "Quantidade inicial disponível: R$" + quantiaFinal + "\n" +
  "1.Depositar dinheiro. \n" +
  "2.Sacar dinheiro. \n" +
  "3.Sair."
  )
  switch (opcao) {
  case '1':
    let depositar = parseFloat(prompt("Insira a quantia que deseja depoositar: "))
    quantiaFinal += depositar
    break
  case '2':
    let sacar = parseFloat(prompt("Informe a quantia a ser sacada: "))
    quantiaFinal -= sacar
    break
  case '3':
    alert("Encerrando...")
    break
  default:
    alert("Entrada inválida!")
  }
} while (opcao !== '3')

alert("Informações finais: \n" +
"Quantia atual: R$" + quantiaFinal)
