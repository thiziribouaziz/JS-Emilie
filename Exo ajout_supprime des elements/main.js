

var maliste = document.getElementById("maliste");



function ajouter_un_element(){

var newElement = document.createElement("li"); // creation d'un nouveau element de type liste li
 newElement.textContent = "nouveau Element"; // on attribue une valeur a notre nouvel element 
 document.getElementById("maliste").appendChild(newElement); // on ajoute a la fin de notre  liste a nouveau element li
  
 
}

function supprimer_un_element(){

 var parentElement = document.getElementById("maliste"); // on recupere notre liste (parent)
 parentElement.removeChild(parentElement.lastChild); // on supprime le dernier enfant 

}





