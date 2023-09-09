const container = document.querySelector('#container');
const btn = document.querySelector('button');

function getGrid(){
number = 32;
number *= number;

    for (let i = 0; i < number ; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList.add('gridEl');
        container.appendChild(gridElement);
        gridElement.style.cssText = `height: ${(number**(1/2)/number)*100}%; `;
        gridElement.style.cssText = `width: ${(number**(1/2)/number)*100}%;`;

    }
};

getGrid();
const grid = document.querySelectorAll('.gridEl');

grid.forEach((element) => { 
    element.addEventListener('mouseover', () => {
        const coloredEl = document.querySelector('#colored');
        element.setAttribute('id', 'colored');
    });
});
