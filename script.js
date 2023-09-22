// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var specialC = "!@#$%^&*()></=-+";

function generatePassword() {
  var lenght = prompt(
    "How long do you want your password to be?(8 to 128 characters)"
  );

  if (lenght < 8 || lenght > 128) {
    alert("Please enter a valid lenght between 8 to 128 characters");
    return "";
  }

  var validUpper = confirm("Include uppercase letters");
  var validLower = confirm("Include lowercase letters");
  var validNumber = confirm("Include numbers");
  var validSpecial = confirm("Include special characters");

  if (!validUpper && !validLower && !validNumber && !validSpecial) {
    alert("Please enter at least one charachter type");
    return "";
  }

  var charachter = "";
  if (validUpper) {
    charachter += upperCase;
  }
  if (validLower) {
    charachter += lowerCase;
  }
  if (validNumber) {
    charachter += number;
  }
  if (validSpecial) {
    charachter += specialC;
  }

  var password = "";
  for (i = 0; i < lenght; i++) {
    var randomPassword = Math.floor(Math.random() * charachter.length);
    password += charachter.charAt(randomPassword);
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
