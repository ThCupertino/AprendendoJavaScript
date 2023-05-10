const turista = prompt("Eai, turista! Qual o seu nome? ")
let cidades = ''
let contagem = 0

let continuar = prompt("Você visitou alguma cidade? [S/N]")
while (continuar === 'S') {
  let cidade = prompt("Qual o nome da cidade visitada? ")
  cidades += "- " + cidade + "\n"
  continuar = prompt("Você visitou alguma cidade? [S/N]")
  contagem++
} 

if (contagem > 0) {
  alert("Nome: " + turista + "\n" +
  "Número de cidades visitadas: " + contagem + "\n" + 
  "Cidades visitadas: \n" + cidades)
} else {
  alert("Nenhuma cidade cadastrada.")
}
