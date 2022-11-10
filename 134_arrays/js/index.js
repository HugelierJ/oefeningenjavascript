// We maken onze klaslijst. Vraag aan de gebruiker hoeveel namen hij wil ingeven en
// vul deze in een array.
// • Zorg ervoor dat je de namen onder elkaar afdrukt op de volgende manier.
//  Dirk
// Sam
//  Luc
// Bob

let aantalNamen = Number(prompt("Hoeveel namen wenst u in te geven:"));
let array       = [];
let x           = 0

for(let i=1;i<=aantalNamen;i++&&x++){
    naam = prompt("Geef de naam in:")
    if (i%2===0){
        array.push(naam);
        document.write(`&nbsp;${array[x]}<br>`);
    }
    else{
        array.push(naam);
        document.write(`${array[x]}<br>`)
    }
}
