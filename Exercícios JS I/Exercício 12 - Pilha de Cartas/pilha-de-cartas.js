const pilhaCartas = [2, 4, 6, 'Jack', 9, 'As', 'As', 9, 3]

opcao = ""

do {
  let cartas = ''
  for(i = 0; i< pilhaCartas.length; i++){
    cartas += pilhaCartas[i] + " "
  }

  opcao = prompt("---PILHA DE CARTAS---" +
  "\nCartas no baralho:" + pilhaCartas.length +
  "\nEscolha:" + 
  "\n1.Adicionar uma carta." +
  "\n2.Puxar uma carta." + 
  "\n3.Sair.")

  switch(opcao) {
    case "1":
      let cartaNova = prompt("Informe o nome da carta que será inserida na lista: ")
      pilhaCartas.push(cartaNova)
      break
    case "2":
      if(pilhaCartas.length === 0){
        alert("Não há nenhuma carta no baralho.")
      } else {
        let cartaRetirada = pilhaCartas.pop()
        alert("A carta que você retirou foi " + cartaRetirada)
      }
      break
    case "3":
      alert("Encerrando...")
      break
    default:
      alert("Opção inválida!")
  }

} while (opcao !== "3")