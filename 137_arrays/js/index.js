//  Zorg ervoor dat je 2 arrays inleest met willekeurige getallen. De arrays tellen elk 10
// getallen.
//  Zorg ervoor dat een array wordt gemaakt in de derde array met enkel met enkel en
// alleen de even getallen vanuit de 2 vorige arrays.
//  Daarnaast geef je de som van de oneven getallen ook terug van de eerste 2 arrays

let otherRow       = [];
let emptyRow       = [];
let evenRow        = [];
let som            = 0;
let result         = "";

for(let i=0;i<=9;i++){
    emptyRow.push(Math.floor(Math.random()*100) +1)
    otherRow.push(Math.floor(Math.random()*100) +1)
    if (emptyRow[i]%2===0){
        evenRow.push(emptyRow[i])
    }
    if(otherRow[i]%2===0){
        evenRow.push(otherRow[i])
    }
    if(emptyRow[i]%2!==0){
        som += emptyRow[i]
    }
    if(otherRow[i]%2!==0){
        som += otherRow[i]
    }
}
result+=som
console.log("Random number array1:",emptyRow)
console.log("Random number array2:",otherRow)
console.log("Even number array:",evenRow)
console.log("sum of all uneven numbers:",result)