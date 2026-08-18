const NUM_OF_ROWS = 40;
const NUM_OF_COLUMNS = 40;
let penColor = "black"

const mainContainer = document.querySelector(".main-container")

const colorSelector = document.querySelector(".color-selector")
colorSelector.addEventListener('change', (event) => {
    penColor = event.target.value
    console.log(penColor)
})

const resetButton = document.querySelector(".reset-button")
resetButton.addEventListener("click", (event) => {
    let pixel_list = document.querySelectorAll(".pixel")
    pixel_list.forEach(pixel => {
        pixel.style.backgroundColor = ""
    })  
})

for (i = 0; i < NUM_OF_ROWS; i++) {
    const rowContainer = document.createElement("div")
    rowContainer.style.height = "15px"
    rowContainer.style.display = "flex"
    rowContainer.style.flex = 1

    for (j = 0; j < NUM_OF_COLUMNS; j++) {
        const pixel = document.createElement("div")
        pixel.className = "pixel"
        pixel.style.backgroundClip = "grey"
        pixel.style.display = "flex"
        pixel.style.flex = 1
        pixel.addEventListener("mouseenter", (event) => {
            event.target.style.backgroundColor = penColor
        })
        rowContainer.appendChild(pixel)
    }

    mainContainer.appendChild(rowContainer)
}