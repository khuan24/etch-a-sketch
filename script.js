const gridContainer = document.querySelector(".grid-container")
const dimension = 16

function makeGrid() {
    // create a 16 x 16 grid of divs inside the gridContainer

    for (let i=1; i<=dimension*dimension; i++) {
        gridContainer.appendChild(document.createElement("div"))
    }
}

makeGrid()