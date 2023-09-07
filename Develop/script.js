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
  var all = ""; 

  var length = parseInt(window.prompt("Pick a password length from 8-128."));

  if (length < 8 || length > 128) {
    alert("Error: Please choose a password length between 8 - 128 characters.");
    var input = window.prompt("Please enter a password length between 8-128 characters: ");
    length = parseInt(input);
    if (length < 8 || length > 128) {
        return alert("Error: Please try again");
    }
}

// Confirming to include lowercase
if (
  window.confirm("Do you want your password to include lowercase letters?")
) {
  all += lowerCase;
}

// Confirming to include uppercase
if (
  window.confirm("Do you want your password to include uppercase letters?")
) {
  all += upperCase
}

// Confirming to inlcude numbers
if (
  window.confirm("Do you want your password to include numbers?")
) {
  all += num;
}

// Confirming to include special characters
if (
  window.confirm("Do you want your password to include special characters?")
) {
  all += specialChar;
}

var pw = "";
for (var i = 0; i < length; i++) {
  pw += all.charAt(Math.floor(Math.random() * all.length));
}
return pw;

}
