const container = document.querySelector('#container');
const newBtn = document.querySelector('#reset');
const rainbowBtn = document.querySelector('#rainbow')

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
        rainbowListener();
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = 'black';
        });
    });

};

function startRainbowing() {

    const grid = document.querySelectorAll('.gridEl');

    grid.forEach((element) => { 
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = getRandomRGB();

        });
    });

};

function clearGrid() {
    const grid = document.querySelectorAll('.gridEl');
    grid.forEach((element) => element.remove());
};

newBtn.addEventListener('click', () => {
    clearGrid();
    let wat = prompt("hej",);
    getGrid(wat);
    startTracking();  
});                  

function rainbowListener() {

    rainbowBtn.addEventListener('click', () => {
        startRainbowing();
    });
};
function getRandomRGB() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
};
