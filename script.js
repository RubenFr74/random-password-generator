// Special characters for the function created
const specialCharacters = "!@#$%^&*()";
const generateButton = document.getElementById('generate')
generateButton.addEventListener('click', writePassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Prompts that come up after you click generate password
function generatePassword() {

  var randomPasswordGenerated = '';

  var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 12 but less than 128.");

  if (passwordLength >= 12 && passwordLength <= 128){

  
  var numbers = confirm("Do you want numbers in your password?");

  var lowerCases = confirm("Do you want lowercases in your password?");

  var upperCases = confirm("Do you want uppercases in your password?");

  var special = confirm("Do you want special characters in your password?");

  // loop getting random characters
  for (let i = 0; i < (parseInt(passwordLength)); i++) {
    randomPasswordGenerated += getRandomCharacter(numbers, lowerCases, upperCases, special)
  }


  return randomPasswordGenerated;
  } else {return generatePassword ()}

}
// Random character generating function
function getRandomCharacter (isNumber, isLower, isUpper, isSpecial) {
  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }
  
  };
  
  var randomNumberPicked = Math.floor(Math.random() * 4);
  // If Random number is 0 then choose a random number unless isNumber is false
  if (randomNumberPicked === 0 && isNumber) {
    
    return functionArray.getNumbers()
  } 
  // If Random number is 1 then choose a random lowercase letter unless isLower is false
  else if (randomNumberPicked === 1 && isLower) {
    return functionArray.getLowerCases()
  } 
  // If Random number is 2 then choose a random uppercase letter unless isUpper is false
  else if (randomNumberPicked === 2 && isUpper) {
    return functionArray.getUpperCases()
  } 
  // If Random number is 3 then choose a random special character unless isSpecial is false
  else if (randomNumberPicked === 3 && isSpecial) {
    return functionArray.getSpecialCharacters()
  } 
  // If a random is chosen but the extra condition doesnt apply then reroll for random number
  else {
    return getRandomCharacter(isNumber, isLower, isUpper, isSpecial);
  }

}