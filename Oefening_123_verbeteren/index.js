const aantalLijnen = Number(prompt("geef een aantal lijnen in:"));
const helft = aantalLijnen/2;
let ster = "*";

//een variabel kan je ook declareren in een for.
for(let i=1;i<=helft;i++){
    console.log((ster));
    ster = ster + "*";
}
//substring start punt en eindpunt functie Length. geef de lengte van een string terug.
ster = ster.substring(0,ster.length-1);
for(let i=1;i<=helft;i++){
    console.log(ster);
    ster = ster.substring(0,ster.length-1);
}