let NUM_OF_ROWS = 40;
let NUM_OF_COLUMNS = 40;
let penColor = "#000000"
let opacity = "FF"
let opacityDecrease = true

const screenContainer = document.querySelector(".screen-container")

const colorSelector = document.querySelector(".color-selector")
colorSelector.addEventListener('change', (event) => {
    if (event.target.value === "eraser") {
            penColor = "#FFFFFF"}
        else if (event.target.value === "red") {
            penColor = "#FF0000"}
        else if (event.target.value === "blue") {
            penColor = "#0000FF"}
        else if (event.target.value === "green") {
            penColor = "#157d15"}
        else if (event.target.value ==="rainbow") {
            penColor = "rainbow"}
        else {penColor = "#000000"}
   
    console.log(penColor)
})

const opacitySelector = document.querySelector("#opacity")
opacitySelector.addEventListener('input', (event) => {
    opacity = Math.floor(event.target.value * 25.5).toString(16)
    console.log(opacity)
})

const resetButton = document.querySelector(".reset-button")
resetButton.addEventListener("click", (event) => {
    NUM_OF_COLUMNS = resolution.value
    NUM_OF_ROWS = resolution.value
    generateGrid()  
})

const resolution = document.querySelector("#resolution")
resolution.addEventListener('input', (event) => {
    NUM_OF_COLUMNS = event.target.value
    NUM_OF_ROWS = event.target.value
})

const generateGrid = () => {
    while (screenContainer.firstChild) {
        screenContainer.removeChild(screenContainer.firstChild);
    }

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
                if (penColor === "rainbow") {
                    event.target.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0') + opacity
                } else {
                event.target.style.backgroundColor = penColor + opacity
                }
            })
            rowContainer.appendChild(pixel)
        }

        screenContainer.appendChild(rowContainer)
    }
}

generateGrid()