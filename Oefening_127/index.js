let getal = Number(prompt("geef een getal in"));
while(getal >100){
    getal = Number(prompt("mag niet groter dan 100 zijn"));
}
let teller = 1;

for(teller;teller <= getal;teller++){
    if(teller%2==0){
        console.log(teller);
    }
}