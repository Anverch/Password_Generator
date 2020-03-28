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


    }

    // for (var i = 0; i < length; i++) {
    //     //generating random lower case

    //     //generating random upper case

    //     //generating random number
    //     var numCaseIndex = Math.floor(Math.random() * numbersCase.length);
    //     randomPasswordNum = randomPasswordNum + numbersCase[numCaseIndex];

    //     //generating random symbol
    //     var symbolCaseIndex = Math.floor(Math.random() * symbolsCase.length);
    //     randomPasswordSymbol = randomPasswordSymbol + symbolsCase[symbolCaseIndex];

    // }

    return finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);