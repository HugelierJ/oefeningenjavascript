const getal = Number(prompt("geef een getal in:"));
let fac = 1;
let i = 1;

for (i; i <= getal; i++) {
    fac *= i;
    // fac = fac * i

}
console.log(fac);