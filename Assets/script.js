// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}
// condtions for the password //
function generatePassword() {
    var length = parseInt(prompt("How long should your password be?"));


    var errors = [];
    if (length < 8 || length > 50 || !length) {
        return "Length not enough";
    }

    var lowerCase = confirm("Include lower case?");
    var upperCase = confirm("Include upper case?");
    var numeric = confirm("Include numbers?");
    var symbols = confirm("Include symbols?");

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
    // 
    var lowerCaseChars = "qwertyuiopasdfghjklzxcvbnm";
    var randomPassword = "";
    for (var i = 0; i < length; i++) {
        var lowerCaseIndex = Math.floor(Math.random() * lowerCaseChars.length);
        randomPassword = randomPassword + lowerCaseChars[lowerCaseIndex];
    }
    return randomPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);