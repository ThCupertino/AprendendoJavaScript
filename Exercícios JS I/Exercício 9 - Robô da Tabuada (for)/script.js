let numeroTabuada = parseInt(prompt("---Olá. Eu sou o Robô da tabuada.---" +
"\nQual número você quer visualizar a tabuada? "))

let tabuada = ''

for(let i = 1; i <= 20; i++) {
  tabuada += "\n" + numeroTabuada + " x " + i + " = " + (numeroTabuada * i)
}

alert(tabuada)