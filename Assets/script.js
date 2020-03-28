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
    var length = parseInt(prompt("How long should your password be?"));

    //primary condition
    if (length < 8 || length > 50 || !length) {
        return "Length is not enough";
    }
    //secondary conditions 
    var lowerCase = confirm("Include lower case?");
    var upperCase = confirm("Include upper case?");
    var numeric = confirm("Include numbers?");
    var symbols = confirm("Include symbols?");

    // defined variables 
    var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbersCase = "0123456789";
    var symbolsCase = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

    var generatedPassword = "";

    while (generatedPassword.length < length) {
        if (lowerCase === true) {
            var lowerCaseIndex = Math.floor(Math.random() * lowerCaseChars.length);
            generatedPassword = generatedPassword + lowerCaseChars[lowerCaseIndex];
        }

        if (upperCase === true) {
            var upperCaseIndex = Math.floor(Math.random() * upperCaseChars.length);
            generatedPassword = generatedPassword + upperCaseChars[upperCaseIndex];
        }

        if (numeric === true) {
            var numCaseIndex = Math.floor(Math.random() * numbersCase.length);
            generatedPassword = generatedPassword + numbersCase[numCaseIndex];
        }

        if (symbols === true) {
            var symbolCaseIndex = Math.floor(Math.random() * symbolsCase.length);
            generatedPassword = generatedPassword + symbolsCase[symbolCaseIndex];
        }
    }
    return generatedPassword.substring(0, length);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);