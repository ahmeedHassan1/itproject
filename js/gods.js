    const godSelector = document.getElementById("godSelector");

    godSelector.addEventListener("change", function() {
        const selectedGod = this.value;

        const godInfoDivs = document.querySelectorAll(".god-info");
        godInfoDivs.forEach(function(div) {
            div.classList.remove("active");
        });
        const selectedGodInfo = document.getElementById(selectedGod + "-info");
        selectedGodInfo.classList.add("active");
    });