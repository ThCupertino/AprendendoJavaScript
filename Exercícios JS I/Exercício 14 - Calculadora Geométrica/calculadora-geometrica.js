function areaTriangulo () {
  const base = prompt("Informe o tamanho da base deste triângulo: ")
  const altura = prompt("Informe a altura deste triângulo: ")
  return base * altura / 2
}

function areaRetangulo () {
  const base = prompt("Informe o tamanho da base deste retângulo: ")
  const altura = prompt("Informe a altura deste retângulo: ")
  return base * altura 
}

function areaQuadrado () {
  const lado = prompt("Informe o tamanho do lado deste quadrado: ")
  return lado * lado
}

function areaTrapezio () {
  const baseMaior = parseFloat(prompt("Informe o tamanho da maior base deste trapézio: "))
  const baseMenor = parseFloat(prompt("Informe o tamanho da menor base deste trapézio: "))
  const altura = prompt("Informe o tamanho da altura deste trapézio: ")
  return (baseMaior + baseMenor) * altura / 2
}

function areaCirculo () {
  const raio = prompt("Informe o raio deste círculo: ")
  return  3.14 * (raio * raio)
}


function exibirMenu() {
  return prompt(
  "---CALCULADORA GEOMÉTRICA---" +
  "\n1. Calcular área de um triângulo" + 
  "\n2. Calcular área de um retângulo" + 
  "\n3. Calcular área de um quadrado" + 
  "\n4. Calcular área de um trapézio" + 
  "\n5. Calcular área de um círculo" + 
  "\n6. Sair."
  )
}


function executar () {
  let opcao = ''

  do {
    opcao = exibirMenu()
    let resultado 

    switch(opcao) {
      case '1':
        resultado = areaTriangulo()
        break

      case '2':
        resultado = areaRetangulo()
        break

      case '3':
        resultado = areaQuadrado()
        break

      case '4':
        resultado = areaTrapezio()
        break

      case '5':
        resultado = areaCirculo()
        break

      case '6':
        alert("Encerrando...")
        break

      default:
        alert("Esta não é uma opção válida!")
        break
    }

    if(resultado) {
      alert('Resultado: ' + resultado)
    }

  } while (opcao !== "6")
}

executar()