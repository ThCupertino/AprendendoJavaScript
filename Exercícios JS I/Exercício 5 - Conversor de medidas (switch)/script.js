let valorMedida = prompt("Informe um valor em metros: ")
const unidadeMedida = prompt("Para qual medida você quer converter: \n1. milímetro (mm) \n2. centímetro (cm) \n3. decímetro (dm) \n4. decâmetro (dam) \n5. hectômetro (hm) \n6. quilômetro (km)")

switch (unidadeMedida) {
  case "1":
    console.log("RESULTADO: " + valorMedida + "M = " + valorMedida * 1000 + "mm")
    break
  case "2":
    console.log("RESULTADO: " + valorMedida + "M = " + valorMedida * 100 + "cm")
    break
  case "3":
    console.log("RESULTADO: " + valorMedida + "M = " + valorMedida * 10 + "dm")
    break
  case "4":
    console.log("RESULTADO: " + valorMedida + "M = " + valorMedida / 10 + "dam")
    break
  case "5":
    console.log("RESULTADO: " + valorMedida + "M = " + valorMedida / 100 + "hm")
    break
  case "6":
    console.log("RESULTADO: " + valorMedida + "M = " + valorMedida / 1000 + "km")
    break
  default: 
    console.log("Essa não é uma opção válida.")
}

