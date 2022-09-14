let onderwijs = prompt("geef uw instelling in?");
switch (onderwijs){
    case "vdab":
        console.log("cursus gegeven door vdab.");
        break;
    case ("syntra"):
        console.log("cursus gegeven door syntra");
        break;
    default:
        console.log("Cursus gegeven door een andere instelling");
}
//vergeet de break niet tussen de cases. de default staat tlijd op het einde.
//break zorgt ervoor dat het programma niet de volledige lijst afgaat wanneer de conditie voldaan is.
/**VERKORTE NOTATIE IF STATEMENT **/
let getal1 = 2;
let getal2 = 3;
//een vraagteken staat voor: dan en een dubbelpunt staat voor: of. handig voor korte code.
//

getal1>getal2 ? console.log("getal1 is groter") : console.log("getal2 is groter.");
/**ORIGINELE VORM**/
if(getal1>getal2){
    console.log("getal1 is groter");
}else{
    console.log("getal2 is groter");
}