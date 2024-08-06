

let champdetext = document.getElementById("champdetext");
let boutton = document.getElementById("boutton");
let maliste = document.getElementById("maliste");



boutton.addEventListener("click", function(){

    var newElement = document.createElement("li"); // creation d'un nouveau element de type liste li
    newElement.textContent = champdetext.value; // on attribue une valeur a notre nouvel element 
    newElement.addEventListener('click', function(){
    newElement.remove();
    });
    document.getElementById("maliste").appendChild(newElement); // on ajoute a la fin de notre  liste a nouveau element li
    
});



   