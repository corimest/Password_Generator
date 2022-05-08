// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

const numbers = ["1234567890"];
const lowers = ["abcdefghijklmnopqrstuvwxyz"]
const uppers = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
const specials = ["!@#$%^&*()_+~?><"]

// Write password to the #password input
function writePassword() {

//prompt password length
    var promptLength = window.prompt("How many characters would you like your password to be? Your password must be 8-128 characters");

      if (promptLength > 8 && promptLength < 128){
        window.alert("Thanks! We won't tell anyone.")
      }
      else if (promptLength < 8 || promptLength > 128) {
        window.alert("Oops! Let's try again. Remember, your password must be between 8 and 128 characters.");
      }


//prompt lowercase letters
    var promptLower = window.confirm("Would you like to use lowercase letters?")
      if (promptLower) {
        window.alert("Great! We will add some lowercase letters to your password!")
        password += lowers;
      }
      else if (!promptLower) {
        window.alert("No worries. We'll leave those out this time.")
      }
  

//prompt uppercase letters
    var promptUpper = window.confirm("Would you like to use uppercase letters?")
      if (promptUpper) {
        window.alert("Alrighty, then!")
        password += uppers
      }
      else if (!promptUpper) {
        window.alert("Ok. We never liked uppercase letters anyway.")
      }


//prompt numbers
    var promptNumbers = window.confirm("Would you like to add some numbers in there?")
      if (promptNumbers) {
        window.alert("Yep, we thought so!")
        password += numbers
      }
      else if (!promptNumbers){
        window.alert("We'll send them packing.")
      }


//prompt special characters
    var promptSpecial = window.confirm("Want to spice things up with some special characters?")
      if (promptSpecial) {
        window.alert("This password is going to be too hot to handle!")
        password += specials
      }
      else if (!promptSpecial) {
        window.alert("Too much spice gives us heartburn.")
      }

function generatePassword() {

  for (let i = 0; i<1 ; i++) {
    if (promptLower){
      password += lowers;
    }
    if (promptUpper){
      password += uppers;
    }
    if (promptNumbers){
      password += numbers;
    }
    if (promptSpecial){
      password += specials;
    }
  }
  return password;
};

var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;
    
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
