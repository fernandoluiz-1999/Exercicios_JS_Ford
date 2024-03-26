// Escreva     um     programa que leia     as     medidas     dos     lados     de     um     triângulo     e    escreva    se    ele    é    Equilátero,    Isósceles    ou  Escaleno. 
// Sendo    que:    
// − Triângulo    Equilátero:    possui    os    3    lados    iguais.
// − Triângulo    Isóscele:    possui    2    lados    iguais.
// − Triângulo    Escaleno:    possui    3    lados    diferentes.




//entrada de dados
// = informar as 3 medidas de um triangulo
const ladoA = 90;
const ladoB = 90;
const ladoC = 90;

//processamento
// = verificar se o triangulo tem os 3 lados igual ou 2 lados iguais ou os 3 lados diferentes
// = para isso temos que utilizar os operadores lógicos && || ! 

if (ladoA === ladoB && ladoB === ladoC) {
    //saida de dados
    // = informar se o triangulo é equilátero, escaleno ou isócele
    // = motrar a saída do programa na console
    console.log("O triângulo é Equilátero pois tem as 3 medidas iguais!");
} else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
    //saida de dados
    // = informar se o triangulo é equilátero, escaleno ou isócele
    // = motrar a saída do programa na console
    console.log("O triângulo é Isósceles pois tem pelo menos 2 lados iguais!")
} else {
    //saida de dados
    // = informar se o triangulo é equilátero, escaleno ou isócele
    // = motrar a saída do programa na console
    console.log("O triângulo é Escaleno pois possui todos os lados diferentes!")
}

//saida de dados
// = informar se o triangulo é equilátero, escaleno ou isócele
// = motrar a saída do programa na console











//let anguloA = parseFloat(prompt("Informe o ãngulo A: "));

//let anguloB = parseFloat(prompt("Informe o ãngulo B: "));

//let anguloC = parseFloat(prompt("Informe o ãngulo C: "));

//if (anguloA === anguloB && anguloA === anguloC) {
//    alert(`O triãngulo é equilátero`)
//} else if (anguloA === anguloB || anguloA === anguloC || anguloB === anguloC) {
//    alert(`O triãngulo é isósceles`)
//} else {
//    alert(`O triãngulo é escaleno`)
//}