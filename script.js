const gridContainer = document.querySelector(".grid-container")

function makeGrid(n=16) {
    // create an n x n grid of square divs inside the gridContainer

    for (let i=0; i<n; i++) {
        const row = document.createElement("div")
        row.className = "grid-row"
        gridContainer.appendChild(row)
        for (let j=0; j<n; j++) {
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
}

function changeDimensions() {
    resetOpacity()
    gridContainer.innerHTML = ""
    const slider = document.querySelector(".dimension-slider")
    makeGrid(slider.value)
    startSketch()
}

makeGrid()
startSketch()

//listen for other inputs

const resetBtn = document.querySelector(".reset")
resetBtn.addEventListener('click', resetOpacity)

const slider = document.querySelector(".dimension-slider")
const rangeValue = document.querySelector(".range-value")
slider.addEventListener("input", (event) => {
    rangeValue.textContent = event.target.value
})

const changeBtn = document.querySelector(".slider-confirm")
changeBtn.addEventListener('click', changeDimensions)