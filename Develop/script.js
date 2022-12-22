// Assignment Code
var generateBtn = document.querySelector("#generate");

var numberOfCharacters;
var okToUseSpecialChars;
var useNums;
var useLowerCase;
var useUpperCase;


var finalPassword = "";
var min = 0;
var max = 0;

var specialChars = ["!","@","#","$","%","^","&","*","(","(","_","-","+","=","{","}","[","]","|",";",":","<",",",">",".","?","/",];
var nums = ["1","2","3","4","5","6","7","8","9","0",];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];





function askQuestions(){
  numberOfCharacters = parseInt(prompt("please enter number of characters you want: "));

  okToUseSpecialChars = confirm("Do you want to use special characters?");
  useNums = confirm("use numbers?");
  useLowerCase = confirm("use lowercase?");
  useUpperCase = confirm("use uppercase?");

  return okToUseSpecialChars, useNums, useLowerCase, useUpperCase,numberOfCharacters;
}

function genPass(){
  if (okToUseSpecialChars){
    console.log("okaytousespecialchars is true");
  }
  else{
    console.log("okaytousespecialchars is false");
  }
}


/*function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
*/
// Add event listener to generate button
/*generateBtn.addEventListener("click", writePassword);*/
askQuestions();
genPass();

console.log(okToUseSpecialChars, useNums, useLowerCase, useUpperCase);













/*
 function pickRandChars(){
  for(i in numberOfCharacters){
    var x = math.random(0,3);
    if(x===0){
      max = Math.ceil(specialChars.length);
      min = Math.floor(0);
      console.log(Math.floor(Math.random() * (max-min + 1) + min ));
      }
    else if(x===1){
      max = Math.ceil(nums.length);
      min = Math.floor(0);
      console.log(Math.floor(Math.random() * (max-min +1) + min));
    }
    else if(x===2){
      max = Math.ceil(lowerCase.length);
      min = Math.floor(0);
      console.log(Math.floor(Math.random() * (max-min +1) + min));
    }
    else if(x===3){
      max = Math.ceil(upperCase.length);
      min = Math.floor(0);
      console.log(Math.floor(Math.random() * (max-min +1) + min));
    }
    else{
      console.log("the number picked was not in the exprected range");
    }
  }
} 
*/
//use global variables to list out all possible:
  //special characters
  //lowercase letters
  //uppercase letters
  //numbers


//use for loop to grab random characters x number of times from an array with all the available characters


// to set finalPassword use finalPassword+=


/*function generatePassword(){
  askQuestions();
}
*/



// Write password to the #password input
