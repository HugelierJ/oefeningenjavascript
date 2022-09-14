let birthYear = Number(prompt("Gelieve uw geboortejaar in te vullen."));
let currentYear = Number(prompt("Geef het huidige jaartal op."));


if (currentYear - birthYear >=18) {
    console.log("Vanaf nu mag,kan en beslis ik alles,binnen de wettelijke grenzen.");
}else if (currentYear - birthYear <0) {
    console.log("je kan niet ouder zijn dan het huidige jaartal.")
}else{
    console.log("gelukkig heb ik mijn ouders die alles voor me regelen.");
}
