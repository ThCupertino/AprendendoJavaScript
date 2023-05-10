const vagas = []

function listarVaga() {
  const vasgasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
    textoFinal += indice + ". "
    textoFinal += vaga.nome
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
    return textoFinal
  }, "")
    
  alert(vasgasEmTexto)
}

function criarVaga() {
  const nome = prompt("Informe o nome desta vaga: ")
  const descricao = prompt("Adicione uma descrição para essa vaga: ")
  const dataLimite = prompt("Insita a data limite para as incrições desta vaga: ")

  const confirmacao = confirm(
    "Salvar esta vaga?" + 
    "\nNome da vaga: " + nome +
    "\nDescrição da vaga: " + descricao +
    "\nData limite para inscrição da vaga: " + dataLimite
  )

  if(confirmacao) {
    const novaVaga = {nome, descricao, dataLimite, candidatos: [] }
    vagas.push(novaVaga)
    alert("Vaga criada.")
  } else {
    alert("Voltando para o menu...")
  }
}

function visualizarVaga() {
  const indice = prompt("Informe o índice da vaga que deseja exibir:")

  if(indice >= vagas.length || indice < 0) {
    alert('Índice inválido.')
    return
  }
  const vaga = vagas[indice]

  const candidatosEmTexto = vaga.candidatos.reduce((textoFinal, candidato) => textoFinal + "\n - " + candidato, "")

  alert(
    "Vaga nº " + indice +
    "\nNome: " + vaga.nome +
    "\nDescrição: " + vaga.descricao +
    "\nData limite: " + vaga.dataLimite +
    "\nQuantidade de candidatos: " + vaga.candidatos.length +
    "\nCandidatos inscritos:" + candidatosEmTexto
  )
}

function inscreverCanditado() {
  const candidato = prompt("Informe o nome do candidato: ")
  const indice = prompt("Informe o índice da vaga que você quer se candidatar: ")
  const vaga = vagas[indice]

  const confirmacao = confirm(
    "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?" +
    "\nNome: " + vaga.nome + "\nDescrção: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
  )

  if(confirmacao) {
    vaga.candidatos.push(candidato)
    alert("Inscrição finalizada.")
  }
}

function excluirVaga() {
  const indice = prompt("Informe o indíce da vaga que você deseja excluir: ")
  const vaga = vagas[indice]

  const confirmacao = confirm(
    "Tem certeza que deseja excluir a vaga de índice " + indice + "?\n" +
    "\nNome: " + vaga.nome + "\nDescrção: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
  )

  if(confirmacao){
    vagas.splice(indice, 1)
    alert("Vaga excluída.")
  }
}

function exibirMenu() {
 const opcao = prompt("\n---VAGAS DE EMPREGO---" + 
 "\n1.Listar vagas disponíveis" + 
 "\n2.Criar uma nova vaga." + 
 "\n3.Visualisar uma vaga." + 
 "\n4.Inscrever um canditado em uma vaga." + 
 "\n5.Excluir uma vaga." + 
 "\n6.Sair"
 )

 return opcao
}

function executar() {
  let opcao = ''

  do {
    opcao = exibirMenu()

    switch(opcao){
      case '1':
        listarVaga()
        break
      case '2':
        criarVaga()
        break
      case '3':
        visualizarVaga()
        break
      case '4':
        inscreverCanditado()
        break
      case '5':
        excluirVaga()
        break
      case '6':
        alert("Encerrando...")
        break
      default:
        alert("Essa não é uma opção válida!")
        break
    }

  } while (opcao !== '6')
}

executar()
