// Escreva um algoritmo que permita a leitura dos nomes de 10 pessoas e armazene os nomes
// lidos em um vetor. Após isto, o algoritmo deve permitir a leitura de mais 1 nome qualquer de
// pessoa (para efetuar uma busca) e depois escrever a mensagem ACHEI, se o nome estiver
// entre os 10 nomes lidos anteriormente (guardados no vetor), ou NÃO ACHEI caso contrário.

function buscarNomes() {

    let nomes = [];
    
    for (let i = 0; i < 10; i++) {
        
        nomes[1] = window.prompt('Digite um nome');
        // nomes.push(window.prompt('Digite um nome'))
        
    }

    const nomeBuscado = window.prompt('Digite o nome que deseja buscar');

    // if (nomes.includes(nomeBuscado))
    if (nomes.indexOf(nomeBuscado) >= 0) {
        
        window.alert('ACHEI');

    } else {

        window.alert('NÃO ACHEI');
        // nomes.indexOf(nomeBuscado) retorna -1 se for falso
    }
}



//let frutas = ['banana', 'maça', 'abacaxi', 'laranja', 'limão', 'amora']

//console.log(frutas[0]);
//console.log(frutas[1]);
//console.log(frutas[2]);
//console.log(frutas[3]);

//for (let i = 0; i < frutas.length; i++) {
//    console.log(frutas[i], i);
//}

//for (inicialização de um contador/condição inicial let contador = 0; condição de parada/comparação contador < 4; incremento contador += 1)