
var reponse1 = document.getElementById("reponse1");
var reponse2 = document.getElementById("reponse2");
var reponse3 = document.getElementById("reponse3");
var reponse4 = document.getElementById("reponse4");



function afficher1(){

    vider4();
    vider3();
    vider2();

    reponse1.textContent = "ma réponse 1";

}

function vider1(){

    reponse1.textContent = "";

}


function afficher2(){

    vider1();
    vider3();
    vider4();

    reponse2.textContent = "ma réponse 2";
}

function vider2(){

    reponse2.textContent = "";
}

function afficher3(){

    vider2();
    vider1();
    vider4();

    reponse3.textContent = "ma réponse 3";
}

function vider3(){

    reponse3.textContent = "";
}

function afficher4(){

    vider3();
    vider1();
    vider2();


    reponse4.textContent = "ma réponse 4";
}


function vider4(){

    reponse4.textContent = "";
}
