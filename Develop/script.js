// Assignment Code
let generateBtn = document.querySelector("#generate");
let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let num = [0,1,2,3,4,5,6,7,8,9];
let specialChar = ['~', '@', '#', '$', '%', '^', '&', '*', '`', '_', '-', '+', '=', ':', ';', '<', '>', '?', '/'];

// Write password to the #password input
function writePassword() {
  // Generate a password
  let password = generatePassword();
  // Select the password input field
  let passwordText = document.querySelector("#password");
  // Set the generated password as the value of the input field
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // String to store all possible characters for the password
  let all = "";

  // Prompt user to choose a password length
  let length = parseInt(window.prompt("Pick a password length from 8-128."));

  // Validate password length
  if (length < 8 || length > 128) {
    alert("Error: Please choose a password length between 8-128 characters.");
    // If user enters an invalid length, prompt again
    let input = window.prompt("Please enter a password length between 8-128 characters: ");
    length = parseInt(input);
    // If user still enters an invalid length, show an error and return
    if (length < 8 || length > 128) {
      return alert("Error: Please try again");
    }
  }

  // Confirming to include lowercase
  if (window.confirm("Do you want your password to include lowercase letters?")) {
    // Add lowercase characters to the possible characters
    all += lowerCase;
  }

  // Confirming to include uppercase
  if (window.confirm("Do you want your password to include uppercase letters?")) {
    // Add uppercase characters to the possible characters
    all += upperCase;
  }

  // Confirming to include numbers
  if (window.confirm("Do you want your password to include numbers?")) {
    // Add numbers to the possible characters
    all += num;
  }

  // Confirming to include special characters
  if (window.confirm("Do you want your password to include special characters?")) {
    // Add special characters to the possible characters
    all += specialChar;
  }

  // String to store the final password
  let allPw = "";

  // Generate the password by randomly selecting characters from the 'all' string
  for (let i = 0; i < length; i++) {
    allPw += all.charAt(Math.floor(Math.random() * all.length));
  }

  // Return the generated password
  return allPw;
}
