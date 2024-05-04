let thElements = document.querySelectorAll('th');

thElements.forEach(function(th) {
    th.addEventListener('mouseover', function() {
        this.style.marginRight = '30px';
        this.style.color = 'rgb(70, 70, 11)';
        this.style.transitionDuration = '1s';
        this.style.transitionTimingFunction = 'ease-in-out';
    });

    th.addEventListener('mouseout', function() {
        this.style.marginRight = '';
        this.style.color = '';
    });
});

let trElements = document.querySelectorAll('tr');

trElements.forEach(function(tr) {
    tr.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#db890d';
    });

    tr.addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
    });
});