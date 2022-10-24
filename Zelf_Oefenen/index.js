// Oefening 111 en 112

/**let leefTijd = Number(prompt("Geef uw leeftijd in:"));

if (leefTijd>=18){
    console.log("je bent",leefTijd,"jaar oud u mag deelnemen.")
    let aantalVakjes = Number(prompt("Hoeveel vakjes wilt u spelen, 12, 10, 8, 6, 4, 2"));
    if(aantalVakjes === 12){
        console.log("12 vakjes is 20€ aub")
    }else if(aantalVakjes === 10){
        console.log("10 akjes is 18€ aub")
    }else if(aantalVakjes === 8){
        console.log("8 vakjes is 16€ aub")
    }else if(aantalVakjes === 6){
        console.log("6 vakjes is 14€ aub")
    }else if(aantalVakjes === 4){
        console.log("4 vakjes is 8€ aub")
    }else{
        console.log("2 vakjes is 4€")
    }

}else{
    console.log("u bent te jong om deel te nemen.")
}**/

// Oefening 113 & oefening 114

/**let geboorteJaar = Number(prompt("Geef uw geboortejaar in:"));
let huidigJaar = Number(prompt("Geef het huidig jaar in:"));

if (huidigJaar - geboorteJaar >=18){
    console.log("vanaf nu mag ik alles beslissen");
}else if(huidigJaar - geboorteJaar <1){
    console.log("Het geboortejaar kan niet hoger zijn dan het huidig jaar.")
}else {
    console.log("mijn ouders beslissen alles.")
}**/


//Oefening 121

/**let aantalGetallen = Number(prompt("Geef aan hoeveel getallen u wilt optellen."));
let som = 0;

for(i=1;i<=aantalGetallen;i++){
    let getal = Number(prompt("geef uw getal"+i+"in."));
    som = som + getal;
}
console.log("de som van",aantalGetallen,"getallen is",som);**/

//Oefening 122

/**const aantalSterren = Number(prompt("Geef een hoeveelheid sterren aan:"));
const helft = aantalSterren/2;
let ster = "*";
let i = 1;

for (i;i<=helft;i++){
    console.log(ster)
    ster += "*";
}
ster = ster.substring(0,ster.length-1);
for(i;i<=helft;i++){
    console.log(ster)
    ster = ster.substring(0,ster.length-1)
}
**/

//EXAMENOEFENINGEN
/**1.
 Vraag aan de gebruiker een zin in te geven. Druk deze zin in hoofdletters af op het scherm.
 Voorbeeld:
 Geef een zin in: full stack developers**/

/**let volledigeZin = prompt("Geef een zin in:");

console.log(volledigeZin.toUpperCase())**/
//-----------------------------------------------------------

/**2.
 Vraag aan de gebruiker om een begingetal en een eindgetal in te geven. Zorg ervoor dat je een onderstaand resultaat kan bereiken.
 Voorbeeld:
 Geef een begingetal in: 2
 Geef een eindgetal in: 6
 Resultaat: 2*3*4*5*6 = 720**/


//EXAMENOEFENING
/**let getal = Number(prompt("Geef een begin getal in:"));//2
const eindGetal = Number(prompt("Geef een eind getal in:"));//6
let product = getal;
let tekst = "";

// product wordt gelijkgesteld aan getal voor de eerste log, daarna wordt product vermenigvuldigd met getal voor het te berekenen.
for(getal;getal<=eindGetal;getal++){
    if(product!==getal){//2*3=6
        product = product * getal;
    }//2x3x4x5x6=720
    tekst = tekst + getal + "x";
}
console.log(tekst.substring(0,tekst.length-1)+"="+product);**/



//Schrijf een programma waar je een eindGetal vraagt aan de gebruiker en als volgt afdrukt op het scherm.
 //   Voorbeeld:Geef een getal in: 8
    // Resultaat:1+2-3+4-5+6-7+8 = 6

let eindGetal = Number(prompt("geef een eind getal in:"));
let som =0;
let tekst ="";

for(i=1;i<=eindGetal;i++){
    if(i%2==0 ||i==1){
        som = (som) + (i);
        tekst = " "+tekst +"+"+i;
    }else{
        som = (som) - (i);
        tekst =tekst +"-"+i;
    }
}console.log(tekst.substring(1,tekst.length)+"="+som)