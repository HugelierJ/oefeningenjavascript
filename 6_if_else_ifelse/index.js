let getal1 = Number(prompt("getal1:"));
let getal2 = Number(prompt("getal2:"));

// Selectie        (conditie testen)
if(getal1>getal2){
    console.log(getal1, " is groter dan", getal2);
}else{
    console.log(getal1, "is kleinder dan", getal2);
}

let naam = prompt("geef u naam op");
let beroep = prompt("beroep?, bediende, arbeider, werkzoekend");

if(beroep === "bediende"){
    console.log("ok u bent bediende");
}else if(beroep === "arbeider"){
    console.log("ok u bent arbeider");
}else{
    console.log("u bent werkzoekend");
}
//else if kan je oneindig bij blijven zetten maar je begint altijd met een if en eindigt altijd met een else.

