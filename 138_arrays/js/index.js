// Lees een array van namen in en probeer ze achteraf alfabetisch te sorteren en
// weer te geven op het scherm.

let emptyRow    = [];
let aantalNamen = Number(prompt("Hoeveel namen wilt u ingeven"));
for(let i=0;i<aantalNamen;i++){
    emptyRow.push(prompt("Geef de naam in:"));
}
console.log(emptyRow.sort())