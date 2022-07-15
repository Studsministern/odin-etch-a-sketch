function removeGridSquares() {
}

function createGridSquares(side) {
    while(container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    
    for(let c = 0; c < side; c++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'row';

        for(let r = 0; r < side; r++) {
            const gridDiv = document.createElement('div');
            gridDiv.className = 'grid';
            rowDiv.appendChild(gridDiv);
        }

        container.appendChild(rowDiv);
    }
}

const changeButton = document.querySelector('.change-resolution');
const container = document.querySelector('.container');

let divsPerSide = 16;

changeButton.addEventListener('click', () => {
    do {
        divsPerSide = parseInt(prompt('How many grid squares per side (maximum 100)?', divsPerSide));
        console.log(divsPerSide);
    } while(typeof divsPerSide !== 'number' || divsPerSide > 100 || divsPerSide < 1);
    removeGridSquares();
    createGridSquares(divsPerSide);
});

createGridSquares(divsPerSide);