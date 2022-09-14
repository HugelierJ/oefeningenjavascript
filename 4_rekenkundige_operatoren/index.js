let  quotient,rest, som, product, verschil;
let  getal1 = Number(prompt("geef uw 1ste getal in"));
let  getal2 = Number(prompt("geef uw 2de getal in"));

rest = getal1%getal2;
som = getal1 + getal2;
quotient = getal1 / getal2;
product = getal1 * getal2;
verschil = getal1 - getal2;

console.log("%c de uitkomt is:","color:cyan", som);
console.log("%c de uitkomt is:", "color:yellow", quotient);
console.log("%c de uitkomt is:", "color:green", product);
console.log("%c de uitkomt is:","color:red", verschil);
console.log("de uitkomt is", rest);



