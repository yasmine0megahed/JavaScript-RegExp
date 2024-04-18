


//user name


var usernamePattern=/^[A-Z a-z]{5,25}$/
var username=document.getElementById('username').value
console.log(username)
var usernameTest=username.match(usernamePattern)
console.log(usernameTest)

//---------------------------------------------------------------------------------
//password


var passwordPattern=/(?=.+[A-Z])(?=.+[a-z])(?=.+[@#$%_-])(?=.+[0-9]).{8,}/
var password=document.getElementById('password').value
console.log(password)
var passwordTest=password.match(passwordPattern)
console.log(passwordTest)


//---------------------------------------------------------------------------------
//email


var emailPattern=/\S+@\S+\.(\S){3,}/i  //S any thing not space (non-space)
var email=document.getElementById('email').value
console.log(email)
var emailTest=email.match(emailPattern)
console.log(emailTest)


//---------------------------------------------------------------------------------
//phone


var phonePattern=/^(010|011|012|015)\d{8}$/
var phone=document.getElementById('phone').value
console.log(phone)
var phoneTest=phone.match(phonePattern)
console.log(phoneTest)

