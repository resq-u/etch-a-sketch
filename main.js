const container = document.querySelector('#container');
const resetBtn = document.querySelector('#reset');
const rainbowBtn = document.querySelector('#rainbow');
const blackBtn = document.querySelector('#black');

function getGrid(number){
if (number > 100) return;
number *= number;

    for (let i = 0; i < number ; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList.add('gridEl');
        container.appendChild(gridElement);
        gridElement.style.cssText = `height: ${(number**(1/2)/number)*100}%;`;
        gridElement.style.cssText = `width: ${(number**(1/2)/number)*100}%;`;
    };
};

function startTracking() {
    const grid = document.querySelectorAll('.gridEl');

    grid.forEach((element) => { 
        //console.log(rainbowListener());
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = 'black';
        });
    });
    rainbowListener();
};

function startRainbowing() {

    const grid = document.querySelectorAll('.gridEl');

    grid.forEach((element) => { 
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = getRandomRGB();
        });
    });
    blackListener();
};

function clearGrid() {
    const grid = document.querySelectorAll('.gridEl');
    grid.forEach((element) => element.remove());
};

resetBtn.addEventListener('click', () => {
    clearGrid();
    let gridSize = prompt("hej",);
    getGrid(gridSize);
    startTracking();
});                  

function blackListener() {

    blackBtn.addEventListener('click', () => {
        startTracking();
    });
};

function rainbowListener() {

    rainbowBtn.addEventListener('click', () => {
        startRainbowing();
    });
};

function getRandomRGB() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
};

