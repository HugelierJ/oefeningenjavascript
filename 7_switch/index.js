let leefTijd = Number(prompt("Geef uw huidige leeftijd in."))
let aantalVakjes = Number(prompt("Hoeveel vakjes wenst u te spelen, 12 , 10 , 8, 6 of 4."));

if (leefTijd >= 18) {
    console.log("u mag meedoen met nationale spelen.");
    switch (aantalVakjes) {
        case 12:
            window.alert("een bulletin van 12 vakjes kost 20€");
            break;
        case 10:
            window.alert("een bulletin van 10 vakjes kost 18€");
            break;
        case 8:
            window.alert("een bulletin van 8 vakjes kost 16€");
            break;
        case 6:
            window.alert("een bulletin van 6 vakjes kost 12€");
            break;
        case 4:
            window.alert("een bulletin van 4 vakjes kost 8€");
            break;
        default :
            window.alert("Gelieve een keuze te maken");
        }
} else
    console.log("mijn ouders regelen het wel.");
