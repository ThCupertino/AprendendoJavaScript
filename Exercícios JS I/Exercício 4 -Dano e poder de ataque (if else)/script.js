const atacante = prompt("Informe o nome do primeiro personagem: ")
const poderAtaque = parseFloat(prompt("Informe o poder de ataque do personagem: "))


const defensor = prompt("Informe o nome do segundo personagem: ")
let pontosVida = prompt("Informe a vida deste personagem: ")
const poderDefesa = prompt("Informe os pontos de defesa do personagem: ")
const escudo = prompt("Esse personagem tem um escudo? [S/N]")

let dano = 0

if (poderAtaque > poderDefesa && escudo === 'N') {
  dano = poderAtaque - poderDefesa
} else if (poderAtaque > poderDefesa && escudo === 'S') {
  dano = (poderAtaque - poderDefesa) / 2
}

pontosVida -= dano

console.log(dano)
console.log(pontosVida)

document.write("A quantidade de dano causada foi " + dano +
"<br> O defensor agora tem " + pontosVida + " pontos de vida. <br>" +
atacante + " : " + poderAtaque + "<br>" +
"Quantidade de dano: " + dano + "<br>" + 
defensor + " : " + pontosVida)


