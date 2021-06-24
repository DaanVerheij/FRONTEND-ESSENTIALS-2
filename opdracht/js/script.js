strAlfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var strInput = "";          //input string
var strCodeword = "";       //codeword string
var strCodewordFull = "";   //output string

arrInputPosities = [];      //array van input posities
arrCodewordPosities = [];   //array van codeword posities
arrOutputPosities = [];     //array van output posities

//Zet een string om naar een array met posities
function stringNaarPosities(str){
    outputArray = [];
    console.log(str);
    for (let i = 0; i < str.length; i++){
        for (let j = 0; j < strAlfabet.length; j++) {
            if(str[i].toUpperCase() == strAlfabet[j]){
                outputArray.push(j);
                // console.log("Letter: " + i + " = " + str[i] + " -> positie in alfabet = " + j);
            }
        }
    }
    console.log("berekende posities: " + outputArray.toString())
    return outputArray;
}

//Zet een array met posities om naar een string
function positiesNaarString(arr){
    var outputString = "";
    console.log(arr);
    for (let i = 0; i < arr.length; i++){
        var item = arr[i];
        console.log(strAlfabet[item]);
        outputString = outputString + strAlfabet[item];
    }
    //TODO: opdracht 1
    return outputString;
}

//Geeft een array terug waarbij het codeword herhaald wordt totdat de lengte overeenkomt met het te versleutelen bericht
//Dus als het bericht STUDENT (7 letters) is en het codeword KLAS dan krijg je KLASKLA (7 letters) terug van deze functie.
function vermenigvuldigCodeword(strInput, strCodeword){
    var outputString = "";
    
    var inputLength = strInput.length;//hier kijkt ie hoeveel karakters de waarde van strinput is, het is student dus het aantal karakters is 7
    var codewordLength = strCodeword.length;

    var intDiv = Math.floor(inputLength / codewordLength); //het aantal keer dat het codeword in zijn geheel in het bericht past
    //1 x het woord KLAS neerzetten
    var intMod = inputLength % codewordLength; //het aantal letters dat overblijft die nog moeten worden aangevuld 3 karakters over KLA

    //TODO: opdracht 2
// ik ga het codewoord per karakter in een array zetten. hiervoor gebruik ik een for loop
for(let i = 0; i < intDiv; i++){
        outputString += strCodeword//KLAS KLAS[0]
}

for(let i = 0; i < intMod; i++){
        outputString = outputString + strCodeword[i];    
}
return outputString;
console.log(outputString);
}

//functie die een een bericht versleuteld.
function versleutel(){
    strInput = document.querySelector("#input").value; 
    strCodeword = document.querySelector("#codeword").value;   

    console.log("input: " + strInput);
    console.log("codeword: " + strCodeword);

    strCodewordFull = vermenigvuldigCodeword(strInput, strCodeword);
    arrCodewordPosities = stringNaarPosities(strCodewordFull);
    arrInputPosities = stringNaarPosities(strInput);

    outputArray = [];
    for (let i = 0; i < arrInputPosities.length; i++) {
        if(arrInputPosities[i] + arrCodewordPosities[i] > 25){
            outputArray.push((arrInputPosities[i] + arrCodewordPosities[i])-25);
        }
        else{ 
            outputArray.push(arrInputPosities[i] + arrCodewordPosities[i]);
        }
        
    }


     console.log("versleuteld bericht: " + positiesNaarString(outputArray));
     document.querySelector("#output").value = positiesNaarString(outputArray);
    strCodewordFull = [];
}
    
    function ontsleutel(){

        outputString = document.querySelector("#output").value;//strOutput veranderd naar outputString
        strCodeword = document.querySelector("#codeword").value;
        

        strCodewordFull = vermenigvuldigCodeword(outputString, strCodeword);//strOutput veranderd naar outputString
        arrCodewordPosities = stringNaarPosities(strCodewordFull); 
        arrOutputPosities = stringNaarPosities(outputString);//arrInputPosities veranderd naar arrOutputPosities

        outputArray = [];
        for (let i = 0; i < arrOutputPosities.length; i++) {//arrInputPosities verander naar arrOutputPosities
            if(arrOutputPosities[i] - arrCodewordPosities[i] < 0){//arrInputPosities verander naar arrOutputPosities
                outputArray.push((arrOutputPosities[i] - arrCodewordPosities[i])+25);//arrInputPosities verander naar arrOutputPosities
            }
            else{ 
                outputArray.push(arrOutputPosities[i] - arrCodewordPosities[i]);//arrInputPosities verander naar arrOutputPosities
            }
            
        }
        console.log("ontsleuteld bericht: " + positiesNaarString(outputArray));//"versleuteld bericht" veranderd naar "ontsleuteld bericht"
        document.querySelector("#output").value = positiesNaarString(outputArray);
        
    }

    //TODO: opdracht 3
