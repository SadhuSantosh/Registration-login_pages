function Validation() {
    var f = document.getElementById("fname").value;
    var p = document.getElementById("Phone").value;
    var l = document.getElementById("lname").value;
    var a = document.getElementById("company").value;
    var b = document.getElementById("business").value;
    var c = document.getElementById("zip").value;
    var d = document.getElementById("code").value;

    var letterNumber = /^\d{10}$/;
    var onlytext = /^[a-zA-Z]+$/;
    var fivedigit = /^\d{5}$/;
    var pcode = /^\+\d{2}$/

    if (!(f.match(onlytext))) {
        document.getElementById("fnameerror").innerHTML = "*First Name should contain only letters";
        return false;
    } else {
        document.getElementById("fnameerror").innerHTML = "";
    }
    if (!(l.match(onlytext))) {
        document.getElementById("lnameerror").innerHTML = "*Last Name should contain only letters";
        return false;
    } else {
        document.getElementById("lnameerror").innerHTML = "";
    }
    if (!(a.match(onlytext))) {
        document.getElementById("companyerror").innerHTML = "*Company should contain only letters";
    } else {
        document.getElementById("companyerror").innerHTML = "";
    }
    if (!(b.match(onlytext))) {
        document.getElementById("businesserror").innerHTML = "*Business Arena should contain only letters";
        return false;
    } else {
        document.getElementById("businesserror").innerHTML = "";
    }
    if (!(c.match(fivedigit))) {
        document.getElementById("ZIPCODE").innerHTML = "*ZIP code should contain exact 5 digits";
        return false;
    } else {
        document.getElementById("ZIPCODE").innerHTML = "";
    }
    if (!(d.match(pcode))) {
        document.getElementById("codephone").innerHTML = "*Country should be in +xx format";
        return false;
    } else {
        document.getElementById("codephone").innerHTML = "";
    }
    if (!(p.match(letterNumber))) {
        document.getElementById("errorphone").innerHTML = "*Phone Number should have 10 digits";
        return false;
    } else {
        document.getElementById("errorphone").innerHTML = "";
    }


}