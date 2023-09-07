// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var num = [0,1,2,3,4,5,6,7,8,9];
var specialChar = ['~', '@', '#', '$', '%', '^', '&', '*', '`', '_', '-', '+', '=', ':', ';', '<', '>', '?', '/'];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var all = "";  // All possible character variables availables for input

  // Create a variable named "length" and assign value for input, convert to integer using parseInt().
  var length = parseInt(window.prompt("Pick a numerical password length from 8-128."));

  // If input is less 8 or more than 128 show an error message prompt user to enter proper numercial value
  // if an error is produced again reset and return "undefined"
  if (length < 8 || length > 128) {
    alert("Error: Please enter a password length between 8 - 128 characters.");
    var input = window.prompt("Please enter a numerical password length between 8-128 characters: ");
    length = parseInt(input);
    if (length < 8 || length > 128) {
        return alert("Error: Invalid input, please try again");
    }
}

}
// function generatePassword() {
//   // if (len < 8 || len > 128) {
//   //   alert("Choose a length between 8 to 128");
//   //   return null;
//   // }
// }

// function codeX () {
//   var x = prompt("LENGTH")
//   if (x > 8) {
//   console.log(x)
// } else {
//   alert("Length must be greater than 8")
//   return null;
// }

// if(upperCase) {
//   console.log(upperCase)
// }
// }

// codeX()

//when prompted
//Then I confirm