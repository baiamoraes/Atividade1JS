var palavra1 = ("Ovo");
var palavraFormatada1 = palavra1.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '')
var palavraInvertida1 = ""

var palavra2 = ("alife");
var palavraFormatada2 = palavra2.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '')
var palavraInvertida2 = ""



for (var i = palavraFormatada1.length - 1; i >= 0; i--) {
  palavraInvertida1 += palavraFormatada1.charAt(i)
}

if (palavraFormatada1 === palavraInvertida1) {
  console.log("A palavra é um palíndromo.")
} else {
  console.log("A palavra não é um palíndromo.")
}



for (var i = palavraFormatada2.length - 1; i >= 0; i--) {
    palavraInvertida2 += palavraFormatada2.charAt(i)
  }
  
  if (palavraFormatada2 === palavraInvertida2) {
    console.log("A palavra é um palíndromo.")
  } else {
    console.log("A palavra não é um palíndromo.")
  }
  