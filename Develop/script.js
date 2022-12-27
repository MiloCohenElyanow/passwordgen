// Assignment Code
var generateBtn = document.querySelector("#generate");

var numberOfCharacters;


var okToUseSpecialChars;
var useNums;
var useLowerCase;
var useUpperCase;


var finalPassword = "";

var specialChars = ["!","@","#","$","%","^","&","*","(","(","_","-","+","=","{","}","[","]","|",";",":","<",",",">",".","?","/",];
var nums = ["1","2","3","4","5","6","7","8","9","0",];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];




function generatePassword(){
  numberOfCharacters = parseInt(prompt("please enter number of characters you want: ")); // input for number of characters write while statement to continuesly ask question until input is between 8 128 characters


  while (numberOfCharacters <=8 || numberOfCharacters >= 128){
    console.log("your password length must be between 8 and 128 characters"); // checking that number of characters is between 8 and 128 and if its not console logging that and asking for the number of characters again, this will loop until the number of characters is between 8 and 128.
    numberOfCharacters = parseInt(prompt("please enter number of characters you want: "));
  }

  okToUseSpecialChars = confirm("Do you want to use special characters?"); //asking these questions to evaluate them to true or false.
  useNums = confirm("use numbers?");
  useLowerCase = confirm("use lowercase?");
  useUpperCase = confirm("use uppercase?");

  while(okToUseSpecialChars===false && useNums===false && useLowerCase===false && useUpperCase===false){ // checking to see if no criteria were selected
    alert("you must select at least one defining criteria");
    okToUseSpecialChars = confirm("Do you want to use special characters?"); //asking these questions to evaluate them to true or false.
    useNums = confirm("use numbers?");
    useLowerCase = confirm("use lowercase?");
    useUpperCase = confirm("use uppercase?");
  }
  var temparray=[]; // defining temp array in the function will make sure it gets reset everytime the function is called, to create new passwords with different variables.

  if(okToUseSpecialChars === true){ // when these if statements are excecuted if you press the ok button, it evaluates to true, and when they evaluate to true we add the corresponding array to a blank array. This way we can randomly generate characters from the selected arrays without having to go through the arrays individualy for each different type of character, that would include 16 if statements, this way we only need to use 4 and only need to use them once for each password we generate.
    temparray.push(...specialChars); //special characters checker
  }else{
    console.log("specialchars will not be used");}

  if(useNums === true){
    temparray.push(...nums); // use numbers checker
  }else{
    console.log("numbers will not be used");}

  if(useLowerCase === true){
    temparray.push(...lowerCase); // use lowercase characters checker
  }else{
    console.log("lower case characters will not be used");}

  if(useUpperCase === true){
    temparray.push(...upperCase);// use uppercase characters checker
  }else{
    console.log("Upper case characters will not be used");}

  while(okToUseSpecialChars===false && useNums===false && useLowerCase===false && useUpperCase===false){
    console.log("you must select at least one defining criteria");
    okToUseSpecialChars = confirm("Do you want to use special characters?"); //asking these questions to evaluate them to true or false.
    useNums = confirm("use numbers?");
    useLowerCase = confirm("use lowercase?");
    useUpperCase = confirm("use uppercase?");
  }

  // after these if statements the password array of useable characters is built so we can move on to selecting random characters from that array to build the actual password

  for(i=0; i<numberOfCharacters; i++){ // i will iterate this code block for every number 0 through number of characters.
  var rndnum = Math.floor(Math.random() * temparray.length +1);
  finalPassword += temparray[rndnum];
  }
  return finalPassword;
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password\n");

  passwordText.value = ("   "); // trying to reset the password box so the passwords dont stack but i cant figure it out.............. bruh........
  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);

writePassword();

console.log(okToUseSpecialChars, useNums, useLowerCase, useUpperCase); // just logging the response we got to check it if we want to

console.log(finalPassword); // logging the final password

