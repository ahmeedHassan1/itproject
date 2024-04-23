let aElements = document.querySelectorAll("a:not(.map)");

aElements.forEach((aElement) => {

    let overlay = document.createElement("div");
    let span = aElement.querySelector('span');

    overlay.style.position = "absolute";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "linear-gradient(to top, black, transparent)";
    overlay.style.opacity = "0";
    overlay.style.zIndex = "4";
    overlay.style.transition = "opacity 0.5s";

    aElement.appendChild(overlay);

    aElement.addEventListener("mouseover", () => {
        overlay.style.opacity = "1";
        span.style.opacity = '1';
    });

    aElement.addEventListener("mouseout", () => {
        overlay.style.opacity = "0";
        span.style.opacity = '0';
    });
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});