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
    var errors = [];
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

    var finalPassword = "";

    while (finalPassword.length < length) {
        if (lowerCase === true) {
            var lowerCaseIndex = Math.floor(Math.random() * lowerCaseChars.length);
            finalPassword = finalPassword + lowerCaseChars[lowerCaseIndex];
        }

        if (upperCase === true) {
            var upperCaseIndex = Math.floor(Math.random() * upperCaseChars.length);
            finalPassword = finalPassword + upperCaseChars[upperCaseIndex];
        }

        if (numeric === true) {
            var numCaseIndex = Math.floor(Math.random() * numbersCase.length);
            finalPassword = finalPassword + numbersCase[numCaseIndex];
        }

        if (symbols === true) {
            var symbolCaseIndex = Math.floor(Math.random() * symbolsCase.length);
            finalPassword = finalPassword + symbolsCase[symbolCaseIndex];
        }
    }
    return finalPassword.substring(0, length);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);