// Zorg ervoor dat je het alfabet in een array inleest in kleine letters. Gebruik hiervoor
// een lus
// • Zorg ervoor dat je deze array naar een andere array kopieert en dat deze opgevuld is
// met het alfabet in hoofdletters
// Gebruik een Built-in functie hiervoor
//
let otherRow       = [];
let emptyRow       = [];
let x              = 0;
for(let i=97;i<=122;i++&&x++){
    emptyRow.push(String.fromCharCode(i));
    otherRow.push(emptyRow[x].toUpperCase());
}
console.log(emptyRow)
console.log(otherRow)