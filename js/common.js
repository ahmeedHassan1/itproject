window.onload = function () {
    fetch('../components/nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        });
    let loaderContainer = document.querySelector('.loader-wrapper');
    loaderContainer.classList.add('loaded');
    setTimeout(function () {
        loaderContainer.style.display = 'none';
    }, 3000);
};