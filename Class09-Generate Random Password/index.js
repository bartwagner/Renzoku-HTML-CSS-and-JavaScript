let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generatePassaword = document.getElementById("btngeneratepassword-el");
let divFirstPassword = document.getElementById("divfirstpassword-el");
let divSecondPassword = document.getElementById("divsecondpassword-el");
let inputLengthPassword = document.getElementById("inputlengthpassword-el");
let symboloNumber = document.getElementById("btnsymbolonumber-el");

generatePassaword.addEventListener("click", function(){
    let firstPassword = "";
    let secondPassword = "";
    if(inputLengthPassword.value > 4 && inputLengthPassword.value < 21){
        for(let i = 0; i < inputLengthPassword.value; i++){
            firstPassword += characters[Math.floor(Math.random()*characters.length)];
            secondPassword += characters[Math.floor(Math.random()*characters.length)];
        }
        
        divFirstPassword.textContent = firstPassword;
        divSecondPassword.textContent = secondPassword;
    }
    else{
        alert("insert number between 5 until 20")
    }
})

symboloNumber.addEventListener("click", function () {
    let newArray = [];
    
    for (let i = 0; i < characters.length; i++) {
        
        if (("a" <= characters[i] && characters[i] <= "z")
         || ("A" <= characters[i] && characters[i] <= "Z"))
        {
            newArray.push(characters[i]);
        }
    }
    characters = [];
    characters = newArray;
})

function onlynumber(digitize) {
   let theEvent = digitize || window.event;
   let key = theEvent.keyCode || theEvent.which;
   let regex = /^[0-9.]+$/;
   
   key = String.fromCharCode(key);
   
   if( !regex.test(key) ) {
      theEvent.returnValue = false;     
      if(theEvent.preventDefault){
          theEvent.preventDefault();
      }
   }
}

function copyDivToClipboard(value) {
    let range = document.createRange();
    
    range.selectNode(document.getElementById(value));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
}