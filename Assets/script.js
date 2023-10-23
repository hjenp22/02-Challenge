var generate = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var minLength = parseInt(prompt("Enter the length of the password between 8 and 128 characters"));

  var isValidLength = !isNaN(minLength) && minLength >= 8 && minLength <= 128;

  if (!isValidLength) {
    alert("Please enter a valid password length between 8 and 128 characters");
  }

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  var allChars = buildCharacterSet(includeLowercase, includeUppercase, includeNumeric, includeSpecial);
  var isValidChars = allChars !== "";

  if (!isValidChars) {
    alert("Please select at least one character type for the password.");
  }

  if (isValidLength && isValidChars) {
    return generateRandomPassword(allChars, minLength);
  }
}

function buildCharacterSet(includeLowercase, includeUppercase, includeNumeric, includeSpecial) {
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*_()+-=[]{}|;:,.<>?";

  var allChars = "";

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

  return allChars;
}

function generateRandomPassword(allChars, minLength) {
  var password = "";

  for (var i = 0; i < minLength; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  return password;
}

generate.addEventListener("click", writePassword);
