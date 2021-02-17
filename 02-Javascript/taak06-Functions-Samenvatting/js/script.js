var score = 0;
let getal1;

function makeRandomNumber(){
    return Math.floor(Math.random()*99+1);
}

function showRandomNumber1(){
    let randomGetal = makeRandomNumber()
    document.querySelector(".getal1").innerHTML = randomGetal;
    return randomGetal;
}

function showRandomNumber2(){
    let randomGetal = makeRandomNumber()
    document.querySelector(".getal2").innerHTML = randomGetal;
    return randomGetal;
}

getal1 = showRandomNumber1();
getal2 = showRandomNumber2();

function geefAntwoord(checkValue){
    if(checkValue=="hoger"){
        if(getal1 > getal2){
            score++;
        }
        else{
            score--;
        }
    } else if(checkValue=="lager"){
        if(getal1 < getal2){
            score++;
        }
        else{
            score--;
        }
    }
    document.getElementById("score").innerHTML = score;
    getal1 = showRandomNumber1();
    getal2 = showRandomNumber2();
}


