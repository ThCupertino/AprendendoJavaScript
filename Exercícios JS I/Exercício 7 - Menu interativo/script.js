let escolhaUsuario = '5'


do {
  escolhaUsuario = prompt(
  "---MENU---" + 
  "\nEscolha uma opção: " +
  "\n1. Criar dado" + 
  "\n2. Alterar dado" +
  "\n3. Excluir dado" + 
  "\n4. Histórico de entradas" +
  "\n5. Encerrar."
  )
  if (escolhaUsuario === '5') {
    alert("Você escolheu encerrar.")
    alert("Encerrando...")
  } else {
    alert("Você escolheu a opção " + escolhaUsuario)
  }
} while (escolhaUsuario !== '5')
