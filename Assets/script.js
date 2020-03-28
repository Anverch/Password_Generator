// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// condition for the password 
function generatePassword() {
    var userLength = parseInt(prompt("How long should your password be?"));

    // Checks for the password length to be between 8 to 50
    if (userLength < 8 || userLength > 50 || !userLength) {
        return "Length is not enough";
    }

    // Asks for additional criteria to be included in the password  
    var lowerCase = confirm("Include lower case?");
    var upperCase = confirm("Include upper case?");
    var numeric = confirm("Include numbers?");
    var symbols = confirm("Include symbols?");

    // Defines characters that can be included in the password
    var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbersCase = "0123456789";
    var symbolsCase = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

    // Contains generated password
    var generatedPassword = "";

    // Loops while generated password length is less then users length 
    while (generatedPassword.length < userLength) {
        // Checks if lower case is selected 
        if (lowerCase === true) {
            // Selects random lower case character 
            var lowerCaseIndex = Math.floor(Math.random() * lowerCaseChars.length);
            generatedPassword = generatedPassword + lowerCaseChars[lowerCaseIndex];
        }

        // Checks if upper case is selected 
        if (upperCase === true) {
            // Selects random upper case character
            var upperCaseIndex = Math.floor(Math.random() * upperCaseChars.length);
            generatedPassword = generatedPassword + upperCaseChars[upperCaseIndex];
        }

        // Checks if numeric character is selected
        if (numeric === true) {
            // Selects random numeric character 
            var numCaseIndex = Math.floor(Math.random() * numbersCase.length);
            generatedPassword = generatedPassword + numbersCase[numCaseIndex];
        }

        // Checks if symbol is selected
        if (symbols === true) {
            // Selects random symbol character
            var symbolCaseIndex = Math.floor(Math.random() * symbolsCase.length);
            generatedPassword = generatedPassword + symbolsCase[symbolCaseIndex];
        }
    }

    // Selects only specified user length from the generated password
    return generatedPassword.substring(0, userLength);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);