// Assignment Code
//create character sets
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(lowercase);
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
console.log(uppercase);
var numeric = ['0','1','2','3','4','5','6','7','8','9'];
console.log(numeric);
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_","+", "-","=","[","]", "{", "}",  ".", "<", ">", "/", "?", "~"];
console.log(specialChar)

//set global variables
var passwordLength = 0; // to store user's choice of password length
console.log(passwordLength);
var tryAgain = true; //boolean for retry = true or false
console.log(tryAgain);
var passwordCharacters = [];  //to store character sets during user choice
console.log(passwordCharacters)
var passwordBuild = []; //to store user's password 
console.log(passwordBuild)

//things to learn 
//https://makersaid.com/alphabet-array-in-javascript-tutorial/
// Generates an alphabet array
// let alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
// Outputs ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// console.log(alphabet);

var generateBtn = document.querySelector("#generate");

//select length of password from 8-128 characters
function lengthPW(){
  passwordLength = prompt("Enter a password length between 8 and 128 characters.")
  if(passwordLength<8){
    alert("Your password length is too short");
    incompletePW()
  }
  else if (passwordLength>128){
    alert('Your password length is too long.');
    incompletePW()
  }
  else{ 
    console.log(passwordLength);
    return passwordLength;
  }
};

//select whether to include lowercase letters in password
function lowercasePW(){
  var answer = confirm("Do you want lowercase letters?")
  console.log(answer)
  if(answer == true){
    alert("Your password will contain lowercase letters");
    passwordCharacters = passwordCharacters.concat(lowercase);
    console.log(`added lowercase letters ${passwordCharacters} for a length of ${passwordCharacters.length}`)
  }
  else if (answer == false){
    alert('Your password will NOT contain lowercase letters.');
    console.log(`did NOT add lowercase letters ${passwordCharacters} for a length of ${passwordCharacters.length}`)
  }
  else{
  console.log(passwordCharacters)
  }
}

//select whether to include uppercase letters in password
function uppercasePW(){
  var answer = confirm("Do you want uppercase letters?")
  if(answer == true){
    alert("Your password will contain uppercase letters");
    passwordCharacters = passwordCharacters.concat(uppercase);
    console.log(`added uppercase letters ${passwordCharacters} for a length of ${passwordCharacters.length}`);
  }
  else{ 
    alert('Your password will NOT contain uppercase letters.');
    console.log(`did NOT add uppercase letters ${passwordCharacters} for a length of ${passwordCharacters.length}`);
  }
}

//select whether to include numbers in password
function numericPW(){
  var answer = confirm("Do you want numbers?")
  if(answer == true){
    alert("Your password will contain numbers");
    passwordCharacters = passwordCharacters.concat(numeric);
    console.log(`added numbers ${passwordCharacters} for a length of ${passwordCharacters.length}`);
  }
  else{ 
    alert('Your password will NOT contain numbers.');
    console.log(`did NOT add numbers ${passwordCharacters} for a length of ${passwordCharacters.length}`);
  }
}

//select whether to include special characters in password
function specialCharPW(){
  var answer = confirm("Do you want special characters?")
  if(answer == true){
    alert("Your password will contain special characters");
    passwordCharacters = passwordCharacters.concat(specialChar);
    console.log(`added special characters ${passwordCharacters} for a length of ${passwordCharacters.length}`);
  }
  else{ 
    alert('Your password will NOT contain numbers.');
    console.log(`did NOT add special characters ${passwordCharacters} for a length of ${passwordCharacters.length}`);
  }
}

//check to make sure at least one set of characters was selected
function checkArray()
  {
    if (passwordCharacters.length >0){
      return
    }
    else {
      alert('You have to select at least one set of characters')
      incompletePW()
    }
  }

  //build the password of the specified length with random selections from the specified character sets
function buildPW(){
  for (let i = 0; i<passwordLength;i++){
    // console.log(i);
   
    var randChar = Math.floor(Math.random()*passwordCharacters.length);

    passwordBuild.push(passwordCharacters[randChar]);
    // console.log(passwordCharacters.length)
    // console.log(randChar)
    // passwordBuild.push(passwordCharacters[Math.random(passwordCharacters.length)]);
    console.log(passwordCharacters.length)

  }
  console.log(passwordBuild)
//for loop by length, select random from array, push to final pw array
}

// main function to generate password
function generatePassword(){
  passwordCharacters = [];
  passwordLength = 0
  passwordBuild = [];
  passwordLength = lengthPW();
  if (tryAgain == true){
    lowercasePW();
    uppercasePW();
    numericPW();
    specialCharPW();
    checkArray();
    buildPW();
    console.log(passwordBuild.join(''));
    return passwordBuild.join('');

  }
  else {
    return
  }
}
  


// Write password to the #password input
function writePW() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePW);

//try again loop if password is not complete
function incompletePW(){
  tryAgain = confirm('Would you like to try again?')
  if (tryAgain == true){
    console.log(tryAgain);
    generatePassword();
    return tryAgain;

  }
  else {
    alert('Goodbye!');
    console.log(tryAgain)
    // return tryAgain;
  }
  
}

// generatePassword();

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page