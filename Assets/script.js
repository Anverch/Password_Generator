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
        return "Length not enough";
    }
    //secondary conditions 
    var lowerCase = confirm("Include lower case?");
    var upperCase = confirm("Include upper case?");
    var numeric = confirm("Include numbers?");
    var symbols = confirm("Include symbols?");
    //when conditions are false 
    if (!lowerCase) {
        errors.push("must have lower case");

    }
    if (!upperCase) {
        errors.push("must have upper case");

    }
    if (!numeric) {
        errors.push("must have numbers");

    }
    if (!symbols) {
        errors.push("must have symbols");

    }
    // defined variables 
    var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbersCase = "0123456789";
    var symbolsCase = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

    var randomPasswordLower = "";
    var randomPasswordUpper = "";
    var randomPasswordNum = "";
    var randomPasswordSymbol = "";

    for (var i = 0; i < length; i++) {
        //generating random lower case
        var lowerCaseIndex = Math.floor(Math.random() * lowerCaseChars.length);
        randomPasswordLower = randomPasswordLower + lowerCaseChars[lowerCaseIndex];

        //generating random upper case
        var upperCaseIndex = Math.floor(Math.random() * upperCaseChars.length);
        randomPasswordUpper = randomPasswordUpper + upperCaseChars[upperCaseIndex];

        //generating random number
        var numCaseIndex = Math.floor(Math.random() * numbersCase.length);
        randomPasswordNum = randomPasswordNum + numbersCase[numCaseIndex];

        //generating random symbol
        var symbolCaseIndex = Math.floor(Math.random() * symbolsCase.length);
        randomPasswordSymbol = randomPasswordSymbol + symbolsCase[symbolCaseIndex];

    }

    return randomPasswordLower + randomPasswordUpper + randomPasswordNum + randomPasswordSymbol;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);