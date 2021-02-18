topFilms = [
    "The Godfather",
    "The Shawshank Redemption",
    "Schindler's List",
    "Raging Bull",
    "Casablanca",
    "Citizen Kane",
    "Gone with the Wind",
    "The Wizard of Oz",
    "One Flew Over the Cuckoo's Nest",
    "Lawrence of Arabia"
];

var i;

for(i=0; i<topFilms.length;i++){
    document.getElementsByClassName("film-ranking")[i].innerHTML = i + 1;
    document.getElementsByClassName("film-naam")[i].innerHTML = topFilms[i];
}


function kiesFavorieteFilm(){
let selFilm = prompt("Wat is je favoriete film?")
    if(selFilm>1 && selFilm<=10){
        console.log(topFilms[selFilm - 1]);
        resetCell();
        document.getElementsByClassName("film-naam")[selFilm - 1].style.backgroundColor = 'Blue';
        document.getElementsByClassName("film-naam")[selFilm - 1].style.color = 'White';
        
    }
     
    else {
        alert("fout!!")
    }
}

function resetCell(){
    for(i=0; i<topFilms.length;i++){
        document.getElementsByClassName("film-naam")[i].style.color = 'black'
        document.getElementsByClassName("film-naam")[i].style.backgroundColor = 'lightskyblue'
    }
}



