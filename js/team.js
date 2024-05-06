const teamMembers = document.querySelectorAll(".team-member");

const memberInfo = {
    'semsem': '20235016 shaghoof sahb sahbo w gd3',
    'hassan': 'Info about hassan',
    'fady': 'Info about fady',
    'bahaa': 'Info about bahaa',
    'asser': 'Info about asser',
    'ayten': 'Info about ayten',
    'basmala': 'Info about basmala',
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