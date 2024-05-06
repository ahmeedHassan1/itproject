const teamMembers = document.querySelectorAll(".team-member");

const memberInfo = {
    'semsem': '20235016 shaghoof sahb sahbo w gd3',
    'hassan': '20235005 can work t7t el dght w gd3',
    'fady': '20235084 helw w cute w rekhm w gd3',
    'bahaa': '20235003 msh 3arf w gad3',
    'asser': '20235013 dma8y f el trawa w gd3',
    'ayten': '20235023 cute w gd3',
    'basmala': '20235029  b7b icecream w gd3',
};

teamMembers.forEach(function (member) {
    member.addEventListener("click", function () {
        const memberId = this.id;
        const memberInfoDiv = document.getElementById("memberInfo");
        memberInfoDiv.classList.remove("hidden");

        const info = memberInfo[memberId];

        memberInfoDiv.innerHTML = "<h2>Member Info</h2><p>" + info + "</p>";
    });
});
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function() {
    const searchTerm = this.value.toLowerCase();

    teamMembers.forEach(function(member) {
        const memberId = member.id;
        const memberName = memberId.toLowerCase();
        const memberInfoText = memberInfo[memberId].toLowerCase();

        if (memberName.includes(searchTerm) || memberInfoText.includes(searchTerm)) {
            member.style.display = "block"; 
        } else {
            member.style.display = "none"; 
        }
    });
});