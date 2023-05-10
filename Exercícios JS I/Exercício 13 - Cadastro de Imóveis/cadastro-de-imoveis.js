let opcao = ''
const imoveis = []

do {
  opcao = prompt("---CADASTRO DE IMÓVEIS---" + 
  "\nImóveis cadastrados: " + imoveis.length +
  "\n1.Salvar um imóvel." +
  "\n2.Mostrar todos os imóveis salvos." + 
  "\n3.Sair.")

  switch(opcao) {
    case '1':
      const imovel = {}
      imovel.nome = prompt("Informe o nome do proprietário: ")
      imovel.quartos = prompt("Informe a quantidade de quartos no imóvel: ")
      imovel.banheiros = prompt("Informe a quantidade de banheiros no imóvel: ")
      imovel.possuiGaragem = prompt("O imóvel em questão possui garagem? [S/N]")

      const confirmacao = confirm(
        "Salvar este imóvel?\n" +
        "\nProprietário: " + imovel.nome +
        "\nQuantidade de quartos: " + imovel.quartos +
        "\nQuantidade de banheiros: " + imovel.banheiros +
        "\nPossui garagem: " + imovel.possuiGaragem
      )
      if(confirmacao) {
        imoveis.push(imovel)
      } else {
        alert("Voltando ao menu...")
      }
      break
    case '2':
      if(imoveis.length !== 0) {
        for(let i = 0; i < imoveis.length; i++) {
          alert(
            (i+ 1) + "º Imóvel: " +
            "\nProprietário: " + imoveis[i].nome +
            "\nQuartos: " + imoveis[i].quartos +
            "\nBnaheiros: " + imoveis[i].banheiros + 
            "\nPossui garagem? " + imoveis[i].possuiGaragem
            )
        }
    } else {
      alert("Ainda não foi registrado nenhum imóvel")
    }
      break
    case '3':
      alert("Finalizando...")
      break
    default:
      alert("Esta não é uma opção válida.")
      break
  }
} while (opcao !== '3')