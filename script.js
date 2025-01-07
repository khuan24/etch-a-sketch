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

function resetOpacity() {
    // set the opacity of all grid squares to 0%
    const squareList = document.querySelectorAll(".grid-square")
    squareList.forEach((sq) => {
        sq.style.opacity = 0
    })
}

function startSketch() {
    // set event listeners for mouseovers on every grid square
    // on mouse hover, increase opacity by 10%
    const squareList = document.querySelectorAll(".grid-square")
    squareList.forEach((sq) => {
        sq.addEventListener('mouseover', () => {
            if (sq.style.opacity < 0.9) {
                sq.style.opacity = +sq.style.opacity + 0.1
            }   
        })
    })

    const resetBtn = document.querySelector(".reset")
    resetBtn.addEventListener('click', resetOpacity)
}

makeGrid()
startSketch()