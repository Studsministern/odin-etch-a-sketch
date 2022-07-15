function createGridSquares(divsPerSide) {
    for(let c = 0; c < divsPerSide; c++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'row';

        for(let r = 0; r < divsPerSide; r++) {
            const gridDiv = document.createElement('div');
            gridDiv.className = 'grid';
            rowDiv.appendChild(gridDiv);
        }

        container.appendChild(rowDiv);
    }
}

const container = document.querySelector('.container');

createGridSquares(16);