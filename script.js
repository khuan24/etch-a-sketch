const gridContainer = document.querySelector(".grid-container")
const dimension = 16

function makeGrid() {
    // create a 16 x 16 grid of square divs inside the gridContainer

    for (let i=0; i<dimension; i++) {
        const row = document.createElement("div")
        row.className = "grid-row"
        gridContainer.appendChild(row)
        for (let j=0; j<dimension; j++) {
            const square = document.createElement("div")
            square.className = "grid-square"
            row.appendChild(square)
        }
        
    }
}

makeGrid()