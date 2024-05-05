let currentImage = 1;

document.getElementById("switchButton").addEventListener("click", function () {
    let image = document.getElementById("image");

    if (currentImage === 1) {
        image.src = "../images/luxor/luxor2.jpg";
        currentImage = 2;
    } else if (currentImage === 2) {
        image.src = "../images/luxor/luxor3.jpg";
        currentImage = 3;
    } else {
        image.src = "../images/luxor/luxor1.jpg";
        currentImage = 1;
    }
});
document.getElementById("switchButton2").addEventListener("click", function () {
    let image2 = document.getElementById("image2");

    if (currentImage === 1) {
        image2.src = "../images/luxor/hatshpsut2.jpg";
        currentImage = 2;
    } else if (currentImage === 2) {
        image2.src = "../images/luxor/hatshpsut3.jpg";
        currentImage = 3;
    } else {
        image2.src = "../images/luxor/hatshpsut1.jpg";
        currentImage = 1;
    }
});
document.addEventListener("DOMContentLoaded", function () {
    let preButton = document.getElementById("preButton");

    preButton.addEventListener("click", function () {
        window.location.href = "../pages/aswan.html";
    });
});
