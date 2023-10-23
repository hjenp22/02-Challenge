var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}

function generatePassword() {
  var minLength = parseInt(prompt("Enter the length of the password between 8 and 128 characters"));
  if (!isValidLength(minLength)) {
    alert("Please enter a valid password length between 8 and 128 characters");
    return "";
  }

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  var allChars = buildCharacterSet(includeLowercase, includeUppercase, includeNumeric, includeSpecial);
  var isValidChars = allChars.length > 0;

  if (!isValidChars) {
    alert("Please select at least one character type for the password.");
    return "";
  }

  return generateRandomPassword(minLength, allChars);
}

function isValidLength(length) {
  return length >= 8 && length <= 128;
}

function buildCharacterSet(lower, upper, numeric, special) {
  var allChars = "";
  if (lower) allChars += "abcdefghijklmnopqrstuvwxyz";
  if (upper) allChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numeric) allChars += "0123456789";
  if (special) allChars += "!@#$%^&*()_+-=[]{}|;':,.<>?/";

  return allChars;
}

function generateRandomPassword(length, characters) {
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }
  return password;
}

generateBtn.addEventListener("click", writePassword);
