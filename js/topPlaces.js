// Select all th elements
let thElements = document.querySelectorAll('th');

// Add mouseover and mouseout event listeners to each th element
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

// Select all tr elements
let trElements = document.querySelectorAll('tr');

// Add mouseover and mouseout event listeners to each tr element
trElements.forEach(function(tr) {
    tr.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#db890d';
    });

    tr.addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
    });
});