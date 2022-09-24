// Assignment Code
var generateBtn = document.querySelector("#generate"); 
console.log(generateBtn)
//character variables 
var upperCase = [ 
  "A",
  "B", 
  "C", 
  "D", 
  "E", 
  "F", 
  "G", 
  "H", 
  "I", 
  "J", 
  "K", 
  "L", 
  "M", 
  "N", 
  "O", 
  "P", 
  "Q", 
  "R", 
  "S", 
  "T", 
  "U", 
  "V", 
  "W", 
  "X",
  "Y", 
  "Z", 
] 
var lowerCase = [ 
  "a", 
  "b", 
  "c", 
  "d", 
  "e", 
  "f", 
  "g", 
  "h", 
  "i", 
  "j",
  "k", 
  "l", 
  "m", 
  "n", 
  "o", 
  "p", 
  "q", 
  "r", 
  "s", 
  "t", 
  "u", 
  "v", 
  "w", 
  "x", 
  "y", 
  "z", 
]
var specialCharacter = [ 
  "`", 
  "~", 
  "!", 
  "@", 
  "#", 
  "$", 
  "%", 
  "^", 
  "&", 
  "*", 
  "(", 
  ")", 
  "-", 
  "_", 
  "=", 
  "+", 
  ";", 
  ":", 
  "'", 
  ",", 
  "<", 
  ".", 
  ">", 
  "?", 
  "/", 
]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; 

function generatePassword() {  

  var finalPassword = ''; 

  var length= prompt("How many characters would you like your password to contain?"); 

  if (length <8 || length >128 || isNaN(length) == true) {

    alert("password must be between 8-128 chracters"); 
    generatePassword()

  } 
  console.log(length) 
  var possibleChars = [];
  var hasUppercase= confirm("click ok to include uppercase chracters\n cancel to exclude"); 
  if(hasUppercase) { 
   possibleChars= possibleChars.concat(upperCase)} 
  

  var hasLowercase= confirm("click ok to include lowercase characters\n cancel to exclude"); 
  if(hasLowercase) { 

  possibleChars= possibleChars.concat(lowerCase); 
  } 

  var hasSpecialCharacters= confirm("click ok to include special characters\n cancel to exclude"); 
  if(hasSpecialCharacters) {  
  possibleChars= possibleChars.concat(specialCharacter); 
  } 

  var hasNumbers= confirm ("click ok to to include numbers\n cancel to exlude");  
  if(hasNumbers) { 

  possibleChars= possibleChars.concat(numbers); 
  }

  console.log("These are the possible characters",possibleChars)

  if (
    !hasUppercase  && 
    !hasLowercase  && 
    !hasSpecialCharacters && 
    !hasNumbers 
    ) { 
      alert("Must select at least one character type"); 
    }  
    console.log(possibleChars) 
    for(var  i = 0; i < length; i ++) { 
      console.log(i)  
      finalPassword += possibleChars[Math.floor(Math.random()*possibleChars.length)]; 
       //console.log (randomNum1); 
      //console.log(possibleChars[randomNum1])
      } 
    return finalPassword; 
    
    

}  
// Write password to the #password input
function writePassword() { 
  console.log("click"); 
  var password = generatePassword(); 
  console.log(password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword); 



