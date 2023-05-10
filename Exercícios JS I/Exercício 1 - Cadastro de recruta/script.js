const nome = window.prompt("Informe seu nome: ")
const sobrenome = window.prompt("Informe seu sobrenome: ")
const campoDeEstudo = window.prompt("Informe seu campo de estudo: ")
const nascimento = window.prompt("Informe seu ano de nascimento: ")
const anoAtual = 2023
const idade = anoAtual - nascimento

document.write("Seu nome é " + nome + " " + sobrenome)
document.write("<br>Você está cursando " + campoDeEstudo)
document.write("<br>Você tem " + idade + " anos")
