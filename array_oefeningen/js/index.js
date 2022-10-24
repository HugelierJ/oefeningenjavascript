/** OEFENING 1 **/
// let legeBak = [];
//
// let getal = Number(prompt("Geef een  getal in:"))
//
// while(getal>=0){
//     legeBak.push(getal);
//     getal = Number(prompt("Geef een negatief getal in voor te stoppen"))
// }
// document.write(legeBak,"<br>")
// let position = Number(prompt("Het hoeveelste getal wilt u zien:"))
// while(position>legeBak.length) {
//     position = Number(prompt("Het hoeveelste getal wilt u zien probeer een lager getal:"))
// }
// document.write(legeBak[position]);

/** OEFENING 2 **/
// let array1 = [];
// let array2 = [];
// let array3 = [];
// for (let i=0;i<11;i++){
//     array1.push(i)
//     array2.push(i)
//     array3.push(array1[i]+array2[i]);
//     console.log(array1[i],"+",array2[i],"=",array3[i])
// }

/** OEFENING 3 **/

let array1 = [];
let array2 = [];
let array3 = [];

for (let i = 0 ;i<11;i++){
    array1.push(Math.floor(Math.random() * 100) + 1);
    array2.push(Math.floor(Math.random() * 100) + 1);
    array3.push(array1[i]+array2[i]);
    console.log(array1[i],"+",array2[i],"=",array3[i])
}

