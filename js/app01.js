/*
Nome      : app01
Finalidade: Curso de Lógica de programação: praticando com desafios
Observação: 02 Projeto AluGames
Data      : 19/09/2024
*/

const read = require('readline-sync');
const { pare, ok, pula } = require('./app00.js');
const color = require('@colors/colors');
console.clear();

//# 3 #######################################################################
console.log("3 - Crie um programa que verifica se uma palavra ou frase é um palíndromo");
const sePalindromo = (str) => (Array.from(str).reverse().join("") === str) ? "Verdadeiro" : "Falso";
    
let validaPalavra = read.question("Informe a palavra: ");
console.log(sePalindromo(validaPalavra));
pula();
pare();

//# 4 #######################################################################
console.log("Crie um programa com uma função que receba três números como argumentos e os retorne em ordem crescente. Exiba os números ordenados");
pula();

function ordenaNumeros(sequencia) {
    let numeros = sequencia.split(' ');
    numeros.sort((a,b) => a - b);
    return numeros;
}
console.log("Informe numeros separados por ' ' espaco:  ")
let sequencia = read.question("" );

console.log(ordenaNumeros(sequencia));
pula();
console.log('End-of-Job'.green);
