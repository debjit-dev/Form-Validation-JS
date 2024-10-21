document.querySelector(".formsubmit").addEventListener("click", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const phone = document.getElementById("phone_no").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const cpassword = document.getElementById("confirm_password").value;

    const usernameRegex = /^[A-Za-z0-9 ]{3,20}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/;
    const emailRegex = /^[A-Za-z0-9]+(?:[.%_+][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;
    const phoneRegex = /^[6-9][\d]{9}$/;

    document.querySelectorAll(".error").forEach((curElem) => (curElem.textContent = ""));

    let isValid = true;

    if (!usernameRegex.test(username)) {
        document.getElementById("usernameerror").innerHTML = "Please provide a valid username";
        isValid = false;
    }
    if (!phoneRegex.test(phone)) {
        document.getElementById("phoneerror").innerHTML = "Please provide a valid phone number";
        isValid = false;
    }
    if (!emailRegex.test(email)) {
        document.getElementById("emailerror").innerHTML = "Please provide a valid email";
        isValid = false;
    }
    if (!passwordRegex.test(password)) {
        document.getElementById("passworderror").innerHTML = "Please provide a valid password";
        isValid = false;
    }
    if (password != cpassword) {
        document.getElementById("cpassworderror").innerHTML = "Passwords must match";
        isValid = false;
    }

    let userdata = [];


    if (isValid) {
        
        let userdoc = document.getElementsByClassName("clean");
        Array.from(userdoc).forEach((curelem) => userdata.push(curelem.value));
        Array.from(userdoc).forEach((curelem) => (curelem.value = ""));

        console.log(userdata);

        alert("Registration Successful");
        
    }
});
