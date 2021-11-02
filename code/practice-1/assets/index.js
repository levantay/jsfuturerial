function checkNumber(value) {
    if(typeof parseInt(value) !== "number") {
        return false
    }
    return true
}

// input number

var value = prompt("Please input a number")
console.log(value)

const isNumber = checkNumber(value)

if (!isNumber) {
    alert("Please input a number")
    prompt("Please input a number")
} else if (parseInt(value) < 0 ) {
    alert ("please input positive number")
    prompt("Please input a number")
} else (
    alert("congratusion! you did it")
)

// Input email 
let email = prompt("Please input your email");

if (email.length > 8 || email.charAt(0) === '@' || email.charAt(email.length-1) === '@' || email.indexOf('@') === -1) {
  alert("Your email is not valid")
  prompt("please input your email")
}
else {
  alert("Congrats!")
}
    
    






