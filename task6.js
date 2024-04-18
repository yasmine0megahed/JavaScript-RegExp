
var usernamePattern = /^[A-Z a-z]{5,25}$/
var username = document.getElementById('username')
var erruser = document.getElementById("usererror")


document.getElementById('username').addEventListener('blur', function (e) {
    if ((username.value.match(usernamePattern) == null)) {
        console.log(this)

        console.log(erruser)
        erruser.style.display = "block";
        this.style.borderColor = "red"
        this.focus()
        this.select()

    } else {
        this.style.borderColor = "green"
        erruser.style.display = "none";
        password.focus()
    }

})

//---------------------------------------------------------------------------------
//password


var passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.+[@#$%_-]).{8,}/

var password = document.getElementById('password')
var errpassword = document.getElementById("passworderror")

document.getElementById('password').addEventListener('blur', function (e) {
    if ((password.value.match(passwordPattern) == null)) {
        console.log(this)

        console.log(errpassword)
        errpassword.style.display = "block";
        this.style.borderColor = "red"
        this.focus()
        this.select()

    } else {
        this.style.borderColor = "green"
        errpassword.style.display = "none";
        email.focus()
    }

})


//---------------------------------------------------------------------------------
//email


var emailPattern = /\S+@\S+\.(\S){3,}/i  //S any thing not space (non-space)
var email = document.getElementById('email')
var erremail = document.getElementById("emailerror")

document.getElementById('email').addEventListener('blur', function (e) {
    if ((email.value.match(emailPattern) == null)) {
        console.log(this)

        console.log(erremail)
        erremail.style.display = "block";
        this.style.borderColor = "red"
        this.focus()
        this.select()

    } else {
        this.style.borderColor = "green"
        erremail.style.display = "none";
        phone.focus()
    }
}

)
//---------------------------------------------------------------------------------
//phone


var phonePattern = /^(010|011|012|015)\d{8}$/
var phone = document.getElementById('phone')
var errphone = document.getElementById("phoneerror")
var errgender = document.getElementById("gendererror")
var gender = document.getElementById("gender")
document.getElementById('phone').addEventListener('blur', function (e) {
    if ((phone.value.match(phonePattern) == null)) {
        console.log(this)

        console.log(errphone)
        errphone.style.display = "block";

        this.style.borderColor = "red"
        this.focus()
        this.select()

    } else {
        this.style.borderColor = "green"
        errphone.style.display = "none";


    }
})
//---------------------------------------------------------------------------------


document.getElementById("submit").addEventListener('click', function (e) {  //submit
    if ((username.value.match(usernamePattern) != null)
        && (password.value.match(passwordPattern) != null)
        && (email.value.match(emailPattern) != null)
        && (phone.value.match(phonePattern) != null)
        && ((document.getElementById("male").checked == true) || (document.getElementById("female").checked == true))) {
        errgender.style.display = "none"
        window.location.href = 'done.html';   //twdene l link l maktob
    } else {
        errgender.style.display = "block"
    }
}
)
