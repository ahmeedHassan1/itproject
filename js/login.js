document
    .getElementById("openPopup")
    .addEventListener("click", function () {
        document.getElementById("overlay").style.display = "block";
        document.getElementById("registerPopup").style.display = "block";
    });

document
    .getElementById("closePopup")
    .addEventListener("click", function () {
        document.getElementById("overlay").style.display = "none";
        document.getElementById("registerPopup").style.display = "none";
    });

document.addEventListener("click", function (event) {
    let registerPopup = document.getElementById("registerPopup");
    let openPopupButton = document.getElementById("openPopup");

    if (!registerPopup.contains(event.target) && event.target !== openPopupButton) {
        registerPopup.style.display = "none";
        document.getElementById("overlay").style.display = "none";
    }
});


document.getElementById("password").addEventListener("input", function () {
    const password = this.value;

    // Check password length
    const lengthIcon = document.getElementById("lengthIcon");
    const lengthText = document.getElementById("lengthText");
    const isLengthValid = password.length >= 8;
    if (isLengthValid) {
        lengthIcon.classList.remove("fa-times");
        lengthIcon.classList.add("fa-check");
        lengthText.style.color = "green";
    } else {
        lengthIcon.classList.remove("fa-check");
        lengthIcon.classList.add("fa-times");
        lengthText.style.color = "red";
    }

    // Check uppercase letter
    const uppercaseIcon = document.getElementById("uppercaseIcon");
    const uppercaseText = document.getElementById("uppercaseText");
    const hasUppercase = /[A-Z]/.test(password);
    if (hasUppercase) {
        uppercaseIcon.classList.remove("fa-times");
        uppercaseIcon.classList.add("fa-check");
        uppercaseText.style.color = "green";
    } else {
        uppercaseIcon.classList.remove("fa-check");
        uppercaseIcon.classList.add("fa-times");
        uppercaseText.style.color = "red";
    }

    // Check lowercase letter
    const lowercaseIcon = document.getElementById("lowercaseIcon");
    const lowercaseText = document.getElementById("lowercaseText");
    const hasLowercase = /[a-z]/.test(password);
    if (hasLowercase) {
        lowercaseIcon.classList.remove("fa-times");
        lowercaseIcon.classList.add("fa-check");
        lowercaseText.style.color = "green";
    } else {
        lowercaseIcon.classList.remove("fa-check");
        lowercaseIcon.classList.add("fa-times");
        lowercaseText.style.color = "red";
    }

    // Check number
    const numberIcon = document.getElementById("numberIcon");
    const numberText = document.getElementById("numberText");
    const hasNumber = /\d/.test(password);
    if (hasNumber) {
        numberIcon.classList.remove("fa-times");
        numberIcon.classList.add("fa-check");
        numberText.style.color = "green";
    } else {
        numberIcon.classList.remove("fa-check");
        numberIcon.classList.add("fa-times");
        numberText.style.color = "red";
    }

    // Check special character
    const specialCharIcon = document.getElementById("specialCharIcon");
    const specialCharText = document.getElementById("specialCharText");
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    if (hasSpecialChar) {
        specialCharIcon.classList.remove("fa-times");
        specialCharIcon.classList.add("fa-check");
        specialCharText.style.color = "green";
    } else {
        specialCharIcon.classList.remove("fa-check");
        specialCharIcon.classList.add("fa-times");
        specialCharText.style.color = "red";
    }
});

document.getElementById("confirmPassword").addEventListener("input", function () {
    const confirmPassword = this.value;
    const password = document.getElementById("password").value;
    const passMatchIcon = document.getElementById("passMatchIcon");
    const passMatchText = document.getElementById("passMatchText");
    const passwordsMatch = password === confirmPassword;

    if (passwordsMatch) {
        passMatchIcon.classList.remove("fa-times");
        passMatchIcon.classList.add("fa-check");
        passMatchText.style.color = "green";
    } else {
        passMatchIcon.classList.remove("fa-check");
        passMatchIcon.classList.add("fa-times");
        passMatchText.style.color = "red";
    }

    const registerButton = document.getElementById("registerButton");
    registerButton.disabled = !(passwordsMatch && isPasswordValid());
});

document
    .getElementById("registrationForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        window.location.href = "../pages/login.html";
    });

function isPasswordValid() {
    const password = document.getElementById("password").value;
    return password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password);
}