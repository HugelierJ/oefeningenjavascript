window.onload = function(){
    /* vastnemen van documenten en variabelen */
    let binnen = document.querySelector("#binnen");
    let buiten = document.querySelector("#buiten");
    let x = 0;
    let z = 0;

    binnen.onmousemove = function (){
        binnen.innerHTML = x+=1;
    }
    binnen.onmouseover = function (){
        binnen.style.backgroundColor = "#FAC";
    }
    binnen.onmouseout = function (){
        binnen.style.backgroundColor = "yellow";
    }
    binnen.onmousedown = function (){
        binnen.innerHTML = z-=1;
    }
    binnen.onmouseup = function (){
        binnen.innerHTML = z+=5;
    }
    binnen.onmouseleave = function (){
        binnen.innerHTML = x-=5;
    }
    binnen.onmousewheel = function (){
        binnen.style.backgroundColor ="green";
    }
    binnen.ondblclick = function (){
        buiten.innerHTML += "double click<br>";
    }
    window.addEventListener("contextmenu",function(event){
        if (event.button == 2){
            buiten.innerHTML += "right click";
        }
    })}
    /* 0 - Main Button
    *  1 - wheel button (middle button if present)
    *  2 - Secondary button
    *  3 - Fourth button (Back button)
    *  4 - fifth button (Forward button)*   */
