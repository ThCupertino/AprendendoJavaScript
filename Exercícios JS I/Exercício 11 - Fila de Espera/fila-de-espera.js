let listaPacientes = []
let opcao = ''

do {
  let pacientes = ''
  for(let i = 0; i < listaPacientes.length; i++) {
    pacientes += (i+1) + "º " + listaPacientes[i] + "\n"
  }
  
  opcao = prompt("---LISTA DE PACIENTES--- \n" + 
  pacientes + 
  "\nEscolha uma ação:" +
  "\n1.Novo paciente." +
  "\n2.Consultar paciente." + 
  "\n3.Excluir paciente." +
  "\n4.Sair.")
  switch (opcao) {
    case '1':
      let novoPaciente = prompt("Informe o nome do novo paciente: ")
      listaPacientes.push(novoPaciente)
      break
    case '2':
      let consultarPaciente = listaPacientes.shift()
      if (consultarPaciente) {
        alert("O primeiro paciente da lista é " + consultarPaciente + " e ele será removido da lista.")
      } else {
        alert("A lista está vazia.")
      }
      break
    /*case '3':
      let remocao = prompt("Informe o nome que você deseja remover: ")
      if(listaPacientes.includes(remocao)) {
        listaPacientes.remove(remocao)
      } else {
        alert("Este nome não está na lista.")
      }
      break*/
    case '4':
      alert("Até logo. Encerrando...")
      break
    default:
      alert("Essa não é uma opção válida.")
  }
} while (opcao != '4')
