let leefTijd = Number(prompt("Voer hier uw leeftijd in."));


if(leefTijd>=18){
    let aantalVakjes = Number(prompt("Volledig bulletin?, tik 12 in"));
    console.log("je bent", leefTijd ,"jaar oud. Je mag deelnemen aan de spelen van de Nationale Loterij");
    if(aantalVakjes === 12 ){
        (console.log("20 euro aub"));
    }else if(aantalVakjes === 10){
        (console.log("18 euro aub"));
    }else if(aantalVakjes === 8){
        (console.log("16 euro aub"));
    }else if(aantalVakjes === 6){
        (console.log("12 euro aub"));
    }else if(aantalVakjes === 4){
        (console.log("2 euro aub"));
    }else {
        (console.log("16 euro aub"));
    }

}else if(leefTijd<18) {
    console.log("%cOm deel te nemen aan de spelen van de Nationale Loterij moet je minimum 18 jaar oud zijn.", "color:red");
}