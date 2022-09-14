let yearOfBirth = prompt("What is your birth year?");
yearOfBirth = Number(yearOfBirth);
//lange notatie
yearOfBirth = yearOfBirth + 1;
// shorthand notatie
yearOfBirth += 1;
// als variabel het zelfde is kan je shorthand notatie gebruiken.1998
console.log(yearOfBirth);
// externe getallen worden altijd als string ingevuld gebruik Number() om het te converteren.
yearOfBirth = "1973geboortejaar";
yearOfBirth =parseInt(yearOfBirth);
console.log(yearOfBirth);
//variabel altijd definiëren na een verandering.

let x = parseInt(6e32);
console.log(x);
//parseint stopt aan de eerste letter dat hij tegenkomt.

let y = Number("1998");

console.log(isNaN(y));

const pi = 3.14;
//const zorgt ervoor dat je het een vaste waarde geeft die je niet kan veranderen.



