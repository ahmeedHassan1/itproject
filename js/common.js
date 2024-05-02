window.onload = function () {
    const storedColor = localStorage.getItem('themeColor');
    if (storedColor) {
        applyTheme(storedColor);
    }
    fetch('../components/nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        });
};

function toggleTheme() {
    const root = document.documentElement;
    const currentColor = getComputedStyle(root).getPropertyValue('--nav-background');
    let newColor;

    if (currentColor.trim() === '#9d7b47') {
        newColor = '#614418';
    } else {
        newColor = '#9d7b47';
    }

    localStorage.setItem('themeColor', newColor);

    applyTheme(newColor);
}

function applyTheme(color) {
    const root = document.documentElement;

    root.style.setProperty('--nav-background', color);
    root.style.setProperty('--text', color === '#9d7b47' ? '#fef0d9' : '#e3af58');
    root.style.setProperty('--border', color === '#9d7b47' ? '#e7c89e' : '#8f6429');
    root.style.setProperty('--background', color === '#9d7b47' ? '#906642' : '#754923');
    root.style.setProperty('--button-hover', color === '#9d7b47' ? '#59391d' : '#935b2a');
}