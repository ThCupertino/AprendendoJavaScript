const palavraUsuario = prompt("Digite uma palavra e eu irei informar se é ou não um palíndromo: ")
let palindromo = ''


for(let i = palavraUsuario.length - 1; i >= 0; i--) {
  palindromo += palavraUsuario[i]
}

if(palavraUsuario === palindromo) {
  alert("É UM PALÍNDROMO! " + palavraUsuario + " AO CONTRÁRIO É " + palindromo)
} else {
  alert("NÃO É UM PALÍNDROMO. " + palavraUsuario + " AO CONTRÁRIO É " + palindromo)
}

