/** Numerieke Arrays **/
let cursist = [] /** Lege Array **/
let cursisten = ['Tom','Tim','Bart','Els']/* array van strings */
let cursusJaar = [2018,2019,2020,2023]/* array van Numbers */
// let cursusJaar = new Array(2018,2019,2020,2023) /* optionele schrijfwijze */
// console.log(cursisten)
// console.log(cursisten.length)
// console.log(cursusJaar[1]);
let divResultaat = document.getElementById("resultaat");
divResultaat.innerHTML = cursisten[0]

/** Associatieve Arrays **/
let leerling = {
    "Voornaam":'Tom',
    "Familienaam": 'Vanhoutte',
    "Plaats": 'Roeselare',
    "Telefoon":'050112233',
}
console.log(leerling["Naam"])

/** Meerdimensionale Arrays **/
let courseTeacher = [
    ['HTML5','Tom Vanhoutte'],
    ['CSS3','Tom Vanhoutte'],
    ['PHP','Tim Vanpimperzele'],
    ['JAVASCRIPT','Nie moeilijk']
]
console.log(courseTeacher[2][1])

let familienaam = document.getElementById("familienaam");/* Aanvullen van een ID is mogelijk */
familienaam.innerHTML = leerling["Familienaam"];
familienaam.innerHTML += " " + leerling["Voornaam"];

/** elementen toevoegen/verwijderen aan een array **/
cursisten.push('Marieke');/* toegevoegd aan het EINDE van de array*/
console.log(cursisten)

cursisten.unshift('Thomas');/* Toevoegen aan het BEGIN van de array */
console.log(cursisten)

cursisten.pop();/* Verwijderen laatste element */
console.log(cursisten)

cursisten.shift();/* verwijderen eerste element */
console.log(cursisten)

cursisten.sort();/* Sorteren van een array */
console.log(cursisten)

cursisten.reverse();/* gaat in omgekeerde volgorde sorteren */
console.log(cursisten)

let zin = "Full Stack Developers";
zin.split("")/* aantonen waar je wilt splitten*/
console.log(zin[0])
let test = zin.split(" ") /* je moet het element dat je split wel opnieuw in een variabel steken */
console.log(test)

zin.toLowerCase();
zin.toString();

/** Arrays en Loops **/
for(let i=0;i<cursisten.length;i++){/* we gaan van i=0 dus 0 tot de lengte van de cursisten */
    console.log(cursisten[i]);
}

let i = 0;
while (i<cursisten.length){
    console.log(cursisten[i]);
    i++;
}

for(let item in cursisten){
    console.log(item,':',cursisten[item])
}

cursisten.forEach(mijnFunctie)

function mijnFunctie(value,index){
    console.log(index,":",value);
}
let getal1 = 5;
let getal2 = 6;

function som(a,b){
    return a+b;
}
function product(a,b){
    return a*b;
}
let resultaat = product(getal1,getal2);
console.log(resultaat);

let numbers = [1,2,3,4,5];
let multiply = numbers.map(x => x*2);/* je vermenigvuldigd alles met een variabel getal en het begint en eindigt altijd in een Array */
console.log(multiply);

