topFilms = [
    "The Godfather",
    "The Shawshank Redemption",
    "Schindler's List",
    "Raging Bull",
    "Casablanca"
];
var item = "";

fillTable();



function fillTable(){

document.querySelector(".film1-ranking").innerHTML = 1;
document.querySelector(".film1-naam").innerHTML = topFilms[0];
document.querySelector(".film2-ranking").innerHTML = 2;
document.querySelector(".film2-naam").innerHTML = topFilms[1];
document.querySelector(".film3-ranking").innerHTML = 3;
document.querySelector(".film3-naam").innerHTML = topFilms[2];
document.querySelector(".film4-ranking").innerHTML = 4;
document.querySelector(".film4-naam").innerHTML = topFilms[3];
document.querySelector(".film5-ranking").innerHTML = 5;
document.querySelector(".film5-naam").innerHTML = topFilms[4];
}

function moveUp(cijfer, richting){
   
    if(cijfer == 0 && richting == "up" || cijfer == 4 && richting == "down" ){
        alert("Kan niet!");   
    }
    if((cijfer == 0 && richting == "down") || (cijfer == 1 && richting == "up")){
        item = topFilms[0];
      
        topFilms[0] = topFilms[1];
        topFilms[1] = item;

    }
    if((cijfer == 1 && richting == "down") || (cijfer == 2 && richting == "up")){
        item = topFilms[1];
      
        topFilms[1] = topFilms[2];
        topFilms[2] = item;
        }
    if((cijfer == 2 && richting == "down") || (cijfer == 3 && richting == "up")){
        item = topFilms[2];
      
        topFilms[2] = topFilms[3];
        topFilms[3] = item;
        }
    if((cijfer == 3 && richting == "down") || (cijfer == 4 && richting == "up")){
        item = topFilms[3];
      
        topFilms[3] = topFilms[4];
        topFilms[4] = item;
        }

fillTable();
    
}


function resetList(){
    topFilms = [
        "The Godfather",
        "The Shawshank Redemption",
        "Schindler's List",
        "Raging Bull",
        "Casablanca"
    ];
    fillTable();
}