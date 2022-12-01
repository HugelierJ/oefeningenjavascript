// function jsonLink(){//xhr is een algemene benaming voor een request.
//     const xhr = new XMLHttpRequest();
//     xhr.onload = loadDoc;
//     xhr.open("GET","https://restcountries.com/v3.1/all",true);//true = asynchroon laden   &  false = synchroon laden
//     //null wordt verstuurd bij de request (vraag naar de server), omdat de status van de server en het json bestand op dat ogenblik nog NIET is gekend. Vanaf nu altijd een null inzetten.
//     xhr.send(null);
// }
//
// function loadDoc(){
//     const overzicht = document.querySelector("#overzicht");
//     let landen = JSON.parse(this.responseText);
//     let naam ;
//     let flag;
//     for (var i = 0 ; i < landen.length ; i++){
//         naam = landen[i]["name"]["common"];
//         flag = landen[i]["flags"]["png"];
//         overzicht.innerHTML += `
//             <div id="hoverName${i}" class="col-lg-3 gap-2 g-3">
//                  <div class="card">
//                       <img src="${flag}" class="card-img-top img-fluid" alt="...">
//                       <div class="card-body text-center">
//                         <h5 class="card-title">Hover for the answer</h5>
//                         <p class="card-text">${naam}</p>
//                       </div>
//                  </div>
//             </div>`
//         naam = "";
//         flag = "";
//     }
// }

function toonLanden(){
    let xhr = new XMLHttpRequest();
    /* REQUEST */
    xhr.open("GET","https://restcountries.com/v3.1/all",true);
    xhr.send();
    /* RESPONSE */
    /* callback function*/
    xhr.onload = function (){
        if (xhr.status == 200){
            /* response in een variabele zetten */
            let countries = JSON.parse(this.response);
            let i = 0;
            countries.forEach(country => {
                /* card zelf toevoegen */
                let countryCard = document.createElement("div");
                countryCard.classList.add("card","col-lg-3","mb-3");
                countryCard.style.cssText = "width: 18rem;";
                /* toevoegen van img tag */
                const countryCardImage = document.createElement("img");
                countryCardImage.src = country.flags.png;
                countryCardImage.setAttribute("id",`imgtag${i}`);
                countryCardImage.addEventListener("click",removeDnone)
                countryCard.appendChild(countryCardImage);
                /* toevoegen van p tag */
                const countryName = document.createElement("p");
                countryName.setAttribute("id","theflag");
                countryName.classList.add("d-none","text-center");
                countryName.innerHTML = country.name.common;
                countryCard.appendChild(countryName);
                i++
                /* Namen zichtbaar maken */
                function removeDnone(){
                    countryName.classList.remove("d-none")
                }

                /* toevoegen van de volledige card aan onze feed*/
                document.querySelector("#countryfeed").appendChild(countryCard);
            })

        }

    }

}
