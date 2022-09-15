/**let nummer = 67;
let i = 1;
let poging = 0;


for(i;i<=nummer;i++){
    let getal = Number(prompt("raad het getal:"));
    poging++;
    if(getal<nummer){
        console.log("raad opnieuw is hoger");
    }else if(getal==nummer){
        console.log("Juist geraden in",poging,"keer");
        break;
    }else{
        console.log("het getal is lager");
    }

}**/
let teRadenGetal = Number(prompt("Te raden getal?"));
var raadGetal =Number(prompt("Geef een getal in?"));
let counter = 0;
for(let teller=1;teller > 0;teller++){
    if(raadGetal < teRadenGetal){
        console.log("getal is groter");
        counter++;
        raadGetal =Number(prompt("Geef een getal in?"));
    }else if(raadGetal > teRadenGetal){
        console.log("getal is kleiner");
        counter++;
        raadGetal =Number(prompt("Geef een getal in?"));
    }else{
        counter++;
        console.log("gevonden, het getal is", raadGetal, "en je hebt", counter, "geraden");
        teller = -1;
    }

}