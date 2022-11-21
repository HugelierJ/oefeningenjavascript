/*i zal vorige of volgende slide bepalen*/
var index = 0;
function show_slide(){
    //index zorgt voor de aangeklikte foto
    // index +=1;
    //alle image tags inladen
    let images = document.getElementsByClassName("image");
    //alle dots inladen
    let dots = document.getElementsByClassName("dot");
    //verberg alle afbeeldingen
    for(let i = 0; i< images.length;i++){
        images[i].style.display = "none";
    }
    //verberg de active class van de dot
    for(let i=0;i<dots.length;i++){
        dots[i].className = dots[i].className.replace(" active","");

    }
    //wanneer de index groter is dan het aantal images zet deze dan terug op 0.
    if(index > images.length-1){
        index=0;
    }
    //wanneer de index kleiner is dan 0 zet ze dan gelijk met de lengte van de images (aantal)
    if(index <0){
        index = images.length-1;
    }
    //toon enkel de vorige en de volgende image
    images[index].style.display="block";//tonen van image
    //actief maken van de huidige dot
    dots[index].className += " active";//tonen van dots
}
// i kan 0.1.2 zijn.
function showdot(i){
    index = i;//niet optellen maar gewoon gelijk stellen.
    show_slide();
}
//i zal -1 of 1 zijn.
function showbtn(i){
    index += i;
    show_slide();
}
window.addEventListener("onload", show_slide(index));