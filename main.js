const container = document.querySelector('#container');
const btn = document.querySelector('button');

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

btn.addEventListener('click', () => {
    clearGrid();
    let wat = prompt("hej",);
    getGrid(wat);
    startTracking();
});


function startTracking() {

    const grid = document.querySelectorAll('.gridEl');

    grid.forEach((element) => { 
        element.addEventListener('mouseover', () => {
            const coloredEl = document.querySelector('#colored');
            element.setAttribute('id', 'colored');
        });
    });

};

function clearGrid() {
    const grid = document.querySelectorAll('.gridEl');

    grid.forEach((element) => element.remove());
};