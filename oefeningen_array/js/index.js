// Schrijf een programma waarmee je aan de gebruiker vraagt om getallen in te geven
// tot hij een negatief getal intikt. Lees de getallen in een array in.
// o Geef GETAL x in:
//  Vervolgens vraag je aan de gebruiker het hoeveelste getal hij wenst te zien op het
// scherm.

let getal           = 999999999999999999999999;
let emptyRow        = [];
let y               = 1;
while(getal>0){
    getal = Number(prompt(`geef getal ${y} in,om te stoppen voer een negatief getal in.`))
    emptyRow.push(getal)
    y++
}
emptyRow.pop();
let positie = Number(prompt("het hoeveelste getal wilt u zien:"))-1;

console.log(emptyRow)
console.log(emptyRow[positie]);