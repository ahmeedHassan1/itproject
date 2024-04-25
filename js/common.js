window.onload = function () {
    let loaderContainer = document.querySelector('.loader-wrapper');
    loaderContainer.classList.add('loaded');
    setTimeout(function () {
        loaderContainer.style.display = 'none';
    }, 3000);
};