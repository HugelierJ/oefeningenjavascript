/** OEFENING 1 **/
// let legeBak = [];
// let getal = Number(prompt("Geef een  getal in:"))
// while(getal>=0){
//     legeBak.push(getal);
//     getal = Number(prompt("Geef een negatief getal in voor te stoppen"))
// }
// console.table(legeBak)
//
// let position = Number(prompt("Het hoeveelste getal wilt u zien:"))
// while(position>legeBak.length) {
//     position = Number(prompt("Het hoeveelste getal wilt u zien probeer een lager getal:"))
// }
// document.write(legeBak[position]);

/** OEFENING 2 **/
// let array1 = [];
// let array2 = [];
// let array3 = [];
// for (let i=0;i<=10;i++){
//     array1.push(i)
//     array2.push(i)
//     array3.push(array1[i]+array2[i]);
//     console.log(array1[i],"+",array2[i],"=",array3[i])
// }

/** OEFENING 3 **/

// let array1 = [];
// let array2 = [];
// let array3 = [];
//
// for (let i = 0 ;i<11;i++){
//     array1.push(Math.floor(Math.random() * 100) + 1);
//     array2.push(Math.floor(Math.random() * 100) + 1);
//     array3.push(array1[i]+array2[i]);
//     console.log(array1[i],"+",array2[i],"=",array3[i])
// }

/** OEFENING 4 **/

// let array = [];
// let aantalNaam = (prompt("Vul de namen 1 per 1 in:"));
// array.push(aantalNaam)
// for (let i=0;i<array.length;i++){
//     array.push(aantalNaam[i]);
//     aantalNaam = (prompt("Vul de namen 1 per 1 in:"));
//     array.push(aantalNaam[i]);
//     console.log(array);
// }


/** VERBETERINGEN**/
/** Tom Oefening 1 **/
// getal = 0;
// getallenArray = [];
// let teller = 1;
//
// while(getal >=0){
//     getal = Number(prompt(`Geef getal ${teller} in`));
//     getallenArray.push(getal);
//     teller++;
// }
// getallenArray.pop()//this removes the last number(The negative number)
// console.table(getallenArray);
//
// let index = Number(prompt("Het hoeveelste getal wens je te zien?"));
// document.write(getallenArray[index]);

/** Tom Oefening 2 **/
// let array1 = [];
// let array2 = [];
// let array3 = [];
// for (let i=0;i<=10;i++){
//     array1.push(i)
//     array2.push(i)
//     array3.push(i+i);
//     document.write(`${i} + ${i} = ${i+i}<br>`)
// }

/** Tom Oefening 3 **/
// let array1 = [];
// let array2 = [];
// let array3 = [];
// let x = 0
//
// maxGetal = Number(prompt("Geef een maximum getal in:"))
//
// while(x<11){
//     array1.push(Math.floor(Math.random() * maxGetal))
//     array2.push(Math.floor(Math.random() * maxGetal))
//     array3.push(array1[x]+array2[x])
//     document.write(`${array1[x]}+${array2[x]} = ${array3[x]}<br>`)
//     x++
// }
/** Tom Oefening 4 **/
