function getInputForm(){
    maxGetal = document.getElementById("maxGetal").value;
    hoeveelGetallen =document.getElementById("maxoef").value;
    myPrint();
}
let maxGetal;
let hoeveelGetallen;
let array1 = [];
let array2 = [];
let array3 = [];
function myPrint(){
    let resultaat = "";
    let x = 0
    let y = 1
    while(x<hoeveelGetallen){
        array1.push(Math.floor(Math.random() * maxGetal))
        array2.push(Math.floor(Math.random() * maxGetal))
        array3.push(array1[x]+array2[x])
        // document.write(`${array1[x]}+${array2[x]} = ${array3[x]}<br>`)
        resultaat = document.getElementById("cards")
        resultaat.innerHTML += `
        <div class="card col-3 g-2">
          <div class="card-body">
            <h5 class="card-title text-center">Oefening ${y}</h5>
            <div class="accordion-item">
            <h2 class="accordion-header" id="heading${x}">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${x}" aria-expanded="false" aria-controls="collapse${x}">
               ${array1[x]}+${array2[x]} = 
              </button>
            </h2>
            <div id="collapse${x}" class="accordion-collapse collapse" aria-labelledby="heading${x}" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                ${array1[x]}+${array2[x]} = ${array3[x]}
              </div>
            </div>
        </div>
          </div>
        </div>
    `
        x++;
        y++
    }
}