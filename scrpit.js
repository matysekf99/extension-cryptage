var alphabet;
var textarea = document.getElementById('t1');
var bouton1 = document.getElementById('boutton1');
var bouton2 = document.getElementById('boutton2');
var textarea2 = document.getElementById('retourtxt');
var value1;
var value2;
var retour;
var retour2;
var value;
var xi;
var x;
var y;
var long;
var retourfi;


function fcryp(){
    alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    value1 = textarea.value;
    value2 = value1.toLowerCase();
    long = value2.length; 
    retour = "";
    for(var i = 0; i< long; i++){
        xi = value2[i];
        if(xi == " "){
            retour += " "; 
        }
        else if(alphabet.indexOf(xi)==(-1)){
            retour += xi; 
        }
        else{
            x = alphabet.indexOf(xi);
            y = (7*x+12)%26;
            retour += alphabet[y];
        }
    }
    textarea2.innerHTML = retour;
}

function fdecryp(){
    alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    value1 = textarea.value;
    value = value1.toLowerCase();
    var yi;
    var x;
    var y;
    var long = value.length; 
    retour2 = "";
    for(var i = 0; i< long; i++){
        yi = value[i];
        if(yi == " "){
            retour2 += " "; 
        }
        else if(alphabet.indexOf(yi)==(-1)){
            retour2 += yi; 
        }
        else{
            y = alphabet.indexOf(yi);
            x = (15*y+2)%26;
            retour2 += alphabet[x];
        }
    }
    textarea2.innerHTML = retour2;
}



bouton1.addEventListener('click', fcryp);
bouton2.addEventListener('click', fdecryp);


const copyButton = document.getElementById("bouttoncpie");
const textToCopy = document.getElementById("retourtxt");

copyButton.addEventListener("click", function() {
  textToCopy.select();
  document.execCommand("copy");
});



