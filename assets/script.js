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

confirm("Do you want to generate a new password?");
alert("Enter the length of password (must be between 8 and 128 characters)");
alert("Check box for uppercase letters");
alert("Check box for lowercase letters");
alert("Check box for numbers");
alert("Check box for special characters")

function generatePassword() {
  var passLength = document.querySelector("#length").value;
  var upper = document.querySelector("#letters1").checked;
  var lower = document.querySelector("#letters2").checked;
  var nums = document.querySelector("#numbers").checked;
  var specialCharacters = document.querySelector("#specialChar").checked;
  var upperStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerStr = upperStr.toLowerCase();
  var numStr = "0123456789";
  var specialCharStr = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var resultsStr = ""
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
  for (var ii = 0; ii < passLength; ii++) {
    resultsStr += combined.charAt(Math.floor(Math.random() * combined.length));
    return resultsStr;
  }
}


