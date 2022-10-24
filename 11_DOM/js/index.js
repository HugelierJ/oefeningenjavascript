/** 1 **/
// alert(document.body.innerHTML);
// alert(document.documentElement.innerHTML);/* Dit toont de volledige html document van het HEAD*/

/** 2 **/
// document.getElementById("p02").innerHTML= document.getElementById("h101").firstChild.nodeValue; /* dit steekt alles van de h1 in een p tag*/

/**                                              3  HEEL BELANGERIJK !!!!!!!!!!!!! **/
// document.body.onload = addElement;
//
// function addElement(){
//     //een nieuwe div creëeren met de property createElement
//     var newDiv = document.createElement("div");
//     //toevoegen van tekst aan de nieuwe div
//     var newContent = document.createTextNode("Hallo, Full Stack!");
//     //voeg de tekst toe aan de nieuwe div
//     newDiv.appendChild(newContent);
//     //voeg de div VOOR!! de reeds bestaande div toe in de DOM (Document Object Model)
//     var currentDiv = document.getElementById("1");
//     document.body.insertBefore(newDiv,currentDiv);//dit zorgt de de div aangemaakt wordt boven de reeds bestaande div
// }

/** 4 **/
// document.write("Hallo iedereen");
// document.write(("klaar"));
//
// document.writeln("Hallo iedereen");
// document.writeln(("klaar"));
//
// document.write("\t\tHallo\nworld\n");
// document.write("\"Hallo iedereen welkom.\"\n")
// document.write('Smiley face: \&#128515;\n')//Emoji's werken ook alleen maar als de <pre> tags rond het javascript script bestand staan.
let cursisten = ["Tom","Tim","Bart","Els"]

document.body.onload = addList;
function addList(){
    var newUl = document.createElement("ul");//hier maak je een <ul>
    document.body.appendChild(newUl);//hier hang je de <ul> vast aan de body tag anders zweeft hij in het niets rond.
    for(let item in cursisten){//hier ga je zolang door de loop totdat hij alle elementen is afgelopen.
        var newLi = document.createElement("li");//hier creëer je elke keer een nieuwe <li>
        newUl.appendChild(newLi);//hier zorg je dat <li> vast word gehangen aan je <ul>
        newLi.innerHTML += cursisten[item];//hier vul je de <li> elke keer op als hij door de loop gaat.
    }
}