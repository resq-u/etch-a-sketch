const container = document.querySelector('#container');

function getGrid(){
    for (let i = 0; i < 16; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList.add('gridEl');
        container.appendChild(gridElement);
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

//console.log(grid);

/*
grid.forEach((gridEl) => {
    gridEl.addEventListener("mousover", (e) => console.log("helo"))
});
*/