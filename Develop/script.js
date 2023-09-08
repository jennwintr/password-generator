// Assignment Code
let generateBtn = document.querySelector("#generate");
let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let num = [0,1,2,3,4,5,6,7,8,9];
let specialChar = ['~', '@', '#', '$', '%', '^', '&', '*', '`', '_', '-', '+', '=', ':', ';', '<', '>', '?', '/'];


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  let all = ""; 

  let len = parseInt(window.prompt("Pick a password length from 8-128."));

  if (len < 8 || len > 128) {
    alert("Error: Please choose a password length between 8-128 characters.");
    let input = window.prompt("Please enter a password length between 8-128 characters: ");
    length = parseInt(input);
    if (len < 8 || len > 128) {
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

let pw = "";
for (var i = 0; i < length; i++) {
  pw += all.charAt(Math.floor(Math.random() * all.length));
}
return pw;

}
