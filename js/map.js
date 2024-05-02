const map = document.getElementById('map');
const tooltip = document.getElementById('tooltip');

const cityData = {
    alexandria: { name: 'Alexandria', monuments: 11, x: 205, y: 40  },
    ismailia: { name: 'Ismailia', monuments: 1, x: 315, y: 60  },
    aswan: { name: 'Aswan', monuments: 16, x: 340, y: 380  },
    asyut: { name: 'Asyut', monuments: 2, x: 265, y: 230  },
    luxor: { name: 'Luxor', monuments: 34, x: 325, y: 310  },
    redSea: { name: 'Red Sea', monuments: 1, x: 370, y: 300  },
    beheira: { name: 'Beheira', monuments: 3, x: 230, y: 60  },
    beniSuef: { name: 'Beni Suef', monuments: 1, x: 245, y: 145  },
    portSaid: { name: 'Port Said', monuments: 0, x: 320, y: 25  },
    southSinai: { name: 'South Sinai', monuments: 1, x: 380, y: 150  },
    giza: { name: 'Giza', monuments: 15, x: 255, y: 90  },
    dakahlia: { name: 'Dakahlia', monuments: 0, x: 278, y: 35  },
    damietta: { name: 'Damietta', monuments: 0, x: 287, y: 15  },
    sohag: { name: 'Sohag', monuments: 2, x: 290, y: 265  },
    suez: { name: 'Suez', monuments: 1, x: 310, y: 85  },
    sharqia: { name: 'Al-Sharqia', monuments: 2, x: 290, y: 50  },
    northSinai: { name: 'North Sinai', monuments: 0, x: 370, y: 70  },
    gharbia: { name: 'Gharbia', monuments: 0, x: 260, y: 43  },
    fayoum: { name: 'Fayoum', monuments: 5, x: 245, y: 120  },
    cairo: { name: 'Cairo', monuments: 31, x: 285, y: 100  },
    qalyubia: { name: 'Al-Qalyubia', monuments: 0, x: 270, y: 70  },
    qena: { name: 'Qena', monuments: 1, x: 330, y: 285  },
    kafrElSeikh: { name: 'Kafr El-Sheikh', monuments: 0, x: 255, y: 20  },
    newValley: { name: 'New Valley', monuments: 8, x: 170, y: 330  },
    menia: { name: 'Menia', monuments: 8, x: 220, y: 180  },
    matrouh: { name: 'Matrouh', monuments: 2, x: 120, y: 110  },
    menofia: { name: 'Menofia', monuments: 0, x: 260, y: 60  },
};

Object.keys(cityData).forEach(cityId => {
    const city = cityData[cityId];
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", city.x);
    circle.setAttribute("cy", city.y);
    circle.setAttribute("r", 5); 
    circle.setAttribute("fill", "black"); 
    circle.setAttribute("id", cityId); 
    map.appendChild(circle);
});

map.addEventListener('mouseover', showTooltip);
map.addEventListener('mouseout', hideTooltip);

function showTooltip(event) {
    const circle = event.target.closest('circle');
    if (circle && circle.id && cityData[circle.id]) {
        const cityName = cityData[circle.id].name;
        const monuments = cityData[circle.id].monuments;
        tooltip.textContent = `${cityName}: ${monuments} archeological sites`;
        tooltip.style.left = `${event.pageX}px`;
        tooltip.style.top = `${event.pageY}px`;
        tooltip.style.display = 'block';
    }
}

function hideTooltip() {
    tooltip.style.display = 'none';
}
