document.addEventListener("DOMContentLoaded", function () {
    const teamMembers = document.querySelectorAll(".team-member");

    teamMembers.forEach(function (member) {
        member.addEventListener("click", function () {
            const memberId = this.id;
            const memberInfoDiv = document.getElementById("memberInfo");
            memberInfoDiv.classList.remove("hidden");
            memberInfoDiv.innerHTML = "<h2>Member Info</h2><p>Info about member " + memberId + "</p>";
        });
    });
});
