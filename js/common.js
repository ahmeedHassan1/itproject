window.onload = function () {
    // Load the navbar
    fetch('../components/nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        });
};