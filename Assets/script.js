// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Prompts user for password criteria and outputs random password
function generatePassword() {
    var userLength = parseInt(prompt("How long should your password be?"));

    // Checks for the password length to be between 8 to 50
    if (userLength < 8 || userLength > 50 || !userLength) {
        return "Length is not enough";
    }

    // Asks for additional criteria to be included in the password  
    var usesLowerCase = confirm("Include lower case?");
    var usesUpperCase = confirm("Include upper case?");
    var usesNumeric = confirm("Include numbers?");
    var usesSymbols = confirm("Include symbols?");

    // Defines characters that can be included in the password
    var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numericChars = "0123456789";
    var symbolChars = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

    // Contains generated password
    var generatedPassword = "";

    // Loops while generated password length is less then users length 
    while (generatedPassword.length < userLength) {
        // Checks if lower case is selected 
        if (usesLowerCase) {
            // Selects random lower case character 
            var lowerCaseIndex = Math.floor(Math.random() * lowerCaseChars.length);
            generatedPassword = generatedPassword + lowerCaseChars[lowerCaseIndex];
        }

        // Checks if upper case is selected 
        if (usesUpperCase) {
            // Selects random upper case character
            var upperCaseIndex = Math.floor(Math.random() * upperCaseChars.length);
            generatedPassword = generatedPassword + upperCaseChars[upperCaseIndex];
        }

        // Checks if numeric character is selected
        if (usesNumeric) {
            // Selects random numeric character 
            var numericIndex = Math.floor(Math.random() * numericChars.length);
            generatedPassword = generatedPassword + numericChars[numericIndex];
        }

        // Checks if symbol is selected
        if (usesSymbols) {
            // Selects random symbol character
            var symbolIndex = Math.floor(Math.random() * symbolChars.length);
            generatedPassword = generatedPassword + symbolChars[symbolIndex];
        }
    }

    // Selects only specified user length from the generated password
    return generatedPassword.substring(0, userLength);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);