function validate() {
  

  let email = document.getElementById("email");
  let password = document.getElementById("pword");
  let pnumber = document.getElementById("phno");
  validatePhone(pnumber);
  validateMail(email);
  validatePass(password);


   if (validatePhone(pnumber) && validateMail(email) && validatePass(password)) {
    return true;
  } else {
    return false;
   }
}

function validatePhone(pnumber) {
  let regex = /^([7-9])([\d]){2}([-\. ])?([\d]){3}([-\. ])?([\d]){4}$/;

  if (pnumber.value === "") {
    document.getElementById("phexi").innerHTML =
      '<i class="bi-exclamation-circle "><p style="color:red;display:inline;">ph no cannot be empty</p></i>';
    return false;
  }
  if (!regex.test(pnumber.value)) {
    document.getElementById("phexi").innerHTML =
      '<i class="bi-exclamation-circle "><p style="color:red;display:inline;"> Invalid</p></i>';

    return false;
  } else {
    document.getElementById("phexi").innerHTML =
      '<i class="bi-check-circle " style="color:green;"><p style="color:green;display:inline;"> valid number</p></i>';

    return true;
  }
}

function validateMail(email) {
  let regex =
    /^([a-zA-Z0-9\.\-_#&@]+)([@])([a-zA-Z0-9\.-]+)([\.])([a-zA-Z]{3,6})(\.([a-zA-Z]{2,6}))?$/;

  if (email.value === "") {
    document.getElementById("exi").innerHTML =
      '<i class="bi-exclamation-circle "><p style="color:red;display:inline;"> email cannot be empty</p></i>';
    return false;
  }
  if (!regex.test(email.value)) {
    document.getElementById("exi").innerHTML =
      '<i class="bi-exclamation-circle "><p style="color:red;display:inline;"> Invalid email</p></i>';

    return false;
  } else {
    document.getElementById("exi").innerHTML =
      '<i class="bi-check-circle " style="color:green;"><p style="color:green;display:inline;"> valid mail</p></i>';

    return true;
  }
}

function validatePass(password) {
  let regex = /^([a-zA-Z0-9\.!#_*-@])+$/;

  if (password.value === "") {
    document.getElementById("exi-2").innerHTML =
      '<i class="bi-exclamation-circle "><p style="color:red;display:inline;"> password cannot be empty</p></i>';
    return false;
  }

  if (!regex.test(password.value)) {
    document.getElementById("exi-2").innerHTML =
      '<i class="bi-exclamation-circle "><p style="color:red;display:inline;"> invalid password</p></i>';

    return false;
  }
  if (password.value.length < 8) {
    document.getElementById("exi-2").innerHTML =
      '<i class="bi-exclamation-circle"><p style="color:red; display:inline;">Password length should be ≥ 8</p></i>';
    password.style.border = "red 3px solid";
    return false;
  } else if (password.value.length <= 10) {
    document.getElementById("exi-2").innerHTML =
      '<i class="bi-exclamation-circle text-warning"><p style="color:orange; display:inline;"></p></i>';
    password.style.border = "orange  3px solid";
    return false;
  } else if (password.value.length >= 10) {
    document.getElementById("exi-2").innerHTML =
      '<i class="bi-hand-thumbs-up-fill  text-success "><p style="color:green; display:inline;"></p></i>';
    password.style.border = "green 3px solid";
    return true;
  } else {
    document.getElementById("exi-2").innerHTML =
      '<i class="bi-hand-thumbs-up " style="color:green;"><p style="color:green;display:inline;"> valid</p></i>';

    return true;
  }
}


function toseek() {
  let seek = document.getElementById("seek");
  let password = document.getElementById("pword");

  if (password.type === "password") {
    password.type = "text";
    seek.innerHTML = '<i class="bi-eye-slash" style="color:black;"></i>';
  } else {
    password.type = "password";
    seek.innerHTML = '<i class="bi-eye" style="color:black;"></i>';
  }
}


