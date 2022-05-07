// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function to generate password
function generatePassword()

//promts and confirmations for perimeters of password
{
  var passLength = prompt("Enter the length of password (must be between 8 and 128 characters)");
  //alert when password length is outside perimeters
  if (passLength < 8 || passLength > 128) {
    alert("Password must be between 8 and 128 characters")
    return "Invalid password length"
  }
  var upper = confirm("Uppercase letters?");
  var lower = confirm("Lowercase letters?");
  var nums = confirm("Numbers?");
  var specialCharacters = confirm("Special characters?")

  //perimeters of possible password outcomes
  var upperStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerStr = upperStr.toLowerCase();
  var numStr = "0123456789";
  var specialCharStr = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  //results and combinations
  var resultsStr = "";
  var combined = "";
  if (upper) {
    combined += upperStr;
  }
  if (lower) {
    combined += lowerStr;
  }
  if (nums) {
    combined += numStr;
  }

  if (specialCharacters) {
    combined += specialCharStr;
  }


  //iteration loop to build password string

  for (var ii = 0; ii < passLength; ii++) {
    resultsStr += combined.charAt(Math.floor(Math.random() * combined.length));
  }
  //returns password generated by function

  return resultsStr;
}
//function stops after return

