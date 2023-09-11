const container = document.querySelector('#container');
const resetBtn = document.querySelector('#reset');
const rainbowBtn = document.querySelector('#rainbow');
const blackBtn = document.querySelector('#black');
const shadeBtn = document.querySelector('#shade');

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
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = 'black';
        });
    });
    
    shadeListener();
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

function startShading() {
    const grid = document.querySelectorAll('.gridEl');
    
        grid.forEach((element) => { 
            let rgb = 255;
                element.addEventListener('mouseover', () => {
                        rgb -= 25.5;
                        element.style.backgroundColor = getShadeVal(rgb);
                });
        });


    blackListener();

};


function clearGrid() {
    const grid = document.querySelectorAll('.gridEl');
    grid.forEach((element) => element.remove());
};


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

function shadeListener() {

    shadeBtn.addEventListener('click', () => {
        startShading();
    });
};

function getRandomRGB() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
};



function getShadeVal(rgbValue) {

        return `rgb(${rgbValue}, ${rgbValue}, ${rgbValue})`;
};


resetBtn.addEventListener('click', () => {
    clearGrid();
    let gridSize = prompt("hej",);
    getGrid(gridSize);
    container.style.cssText = "border-bottom: 1px solid red; border-right: 1px solid red;";
    startTracking();
});                  

