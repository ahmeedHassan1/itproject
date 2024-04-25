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

document
    .getElementById("registrationForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            document.getElementById("passwordMismatchAlert").style.display = "block";
            return;
        }

        window.location.href = "../pages/login.html";
    });