// Special Characters for the function
const specialCharacters = "!@#$%^&*()";
const generateButton = document.getElementById('generateBtn')
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Prompts that come up after you click generate password
function generatePassword() {
    var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 12 but less than 128.");
  
    var numbers = confirm("Do you want numbers in your password?");
  
    var lowerCases = confirm("Do you want lowercases in your password?");
  
    var upperCases = confirm("Do you want uppercases in your password?");
  
    var special = confirm("Do you want special characters in your password?");
  
    // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
    var minimumCount = 0;
  
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
