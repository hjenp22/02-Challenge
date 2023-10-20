//code for homework here
var generate = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var minLength = parseInt(
    prompt("Enter the length of the password between 8 and 128 characters"));
  var maxLength = 128;
}

if (isNaN(minLength) || minLength < 8 || minLength > 128) {
  alert("Please enter a valid password length between 8 and 128 characters");
  return; 
}

var includeLowercase = confirm("Include lowercase characters?");
var includeUppercase = confirm("Include uppercase characters?");
var includeNumeric = confirm("Include numeric characters?");
var includeSpecial = confirm("Include special characters?");

var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*_()+-=[]{}|;:,.<>?";

var allChars = "";
var password = "";

if (includeLowercase) {
  allChars += lowercaseChars;
}
if (includeUppercase) {
  allChars += uppercaseChars;
}
if (includeNumeric) {
  allChars += numericChars;
}
if (includeSpecial) {
  allChars += specialChars;
}

if (allChars === "") {
  alert("Please select one character type for password.");
  return allChars;
}

for (var i = 0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random() * charset.length);
  password += charset.charAt(randomIndex);
}
  return password;

  writePassword();