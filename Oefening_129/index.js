const getal = Number(prompt("Geef uw eindgetal in."));
let priemGetal = "";
let x = 1;

for(x;x <= getal;x++) {
    if(x/2==0) {
    priemGetal = priemGetal + x;
    console.log(priemGetal);
    }
}
