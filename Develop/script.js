// Assignment Code
var generateBtn = document.querySelector("#generate");

var numberOfCharacters;
var okToUseSpecialChars;
var useNums;
var useLowerCase;
var useUpperCase;


var finalPassword = "";
min = 0;
max = 0;

var specialChars = ["!","@","#","$","%","^","&","*","(","(","_","-","+","=","{","}","[","]","|",";",":","<",",",">",".","?","/",];
var nums = ["1","2","3","4","5","6","7","8","9","0",];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];





function askQuestions(){
  numberOfCharacters = parseInt(prompt("please enter number of characters you want: ")); // input for number of characters write while statement to continuesly ask question until input is between 8 128 characters

  okToUseSpecialChars = confirm("Do you want to use special characters?"); //asking these questions to evaluate them to true or false.
  useNums = confirm("use numbers?");
  useLowerCase = confirm("use lowercase?");
  useUpperCase = confirm("use uppercase?");

  return okToUseSpecialChars, useNums, useLowerCase, useUpperCase,numberOfCharacters; // returning the questions(true or false(boolean)) so they can be used anywhere in the code.
}



askQuestions();

console.log(okToUseSpecialChars, useNums, useLowerCase, useUpperCase);

console.log(finalPassword);





/*function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
*/
// Add event listener to generate button
/*generateBtn.addEventListener("click", writePassword);*/















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
