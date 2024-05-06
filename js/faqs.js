    const toggles = document.querySelectorAll('.toggle');
    
    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            answer.classList.toggle('show');
        });
    });