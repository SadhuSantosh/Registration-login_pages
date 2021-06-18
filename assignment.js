function noblankvalues() {
    var noblanks = document.getElementsByClassName("noblanks");
    var d = document.getElementById("phone");
    var pass = document.getElementById("pass");
    var passwordval = /^(?=.*[0-9])(?=.*[a-z])(?=.*[@_-])(?=.*[A-Z]).{8,20}$/;
    var letterNumber = /^\d{10}$/;
    var onlytext = /^[a-zA-Z]+$/;
    for (var i = 0; i < noblanks.length; i++) {
        if (noblanks[i].value.trim() == "") {
            alert("Text boxes cannot accept blank values.");
            noblanks[i].style.border = "solid 3px red";
            return false;
        } else if (!(noblanks[i].value.match(onlytext))) {
            alert("Names should olny contain alphabets.");
            noblanks[i].style.border = "solid 3px red";
            return false;
        }
    }
    if (!(d.value.match(letterNumber))) {
        alert("phone number should have 10 numbers only");
        d.style.border = "solid 3px red";

        return false;
    } else if (!(pass.value.match(passwordval))) {
        alert("password should match all the constraints");
        pass.style.border = "solid 3px red";

        return false;
    }

}

function fileValidation() {
    var file = document.getElementById('file');
    var filePath = file.value;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
    if (!allowedExtensions.exec(filePath)) {
        alert("invalid file extension. Allows only .jpg, .jpeg and .png files");
        file.style.border = "solid 3px red";
        return false;
    }

}

function fileValidation2() {
    var file = document.getElementById('file2');
    var filePath = file.value;
    var allowedExtensions = /(\.pdf|\.docx)$/i;
    if (!allowedExtensions.exec(filePath)) {
        alert("invalid file extension. Allows only .pdf and .docx files");
        file.style.border = "solid 3px red";
        return false;
    }

}

function shouldnotsame() {
    var a = document.getElementById("fname").value;
    var b = document.getElementById("lname").value;
    var c = document.getElementById("pass").value;

    if (c.includes(a) || c.includes(a)) {
        alert("password should not contain First Name or Last Name ");
    }
    if (a == b) {
        alert("firstname and last name should not be same");
    }

}