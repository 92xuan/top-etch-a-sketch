const NUM_OF_ROWS = 16
const NUM_OF_COLUMNS = 16
const PIXEL_SIZE = "24px"

const mainContainer = document.querySelector(".main-container")

for (i = 0; i < NUM_OF_ROWS; i++) {
    const rowContainer = document.createElement("div")
    rowContainer.style.height = "15px"
    rowContainer.style.display = "flex"

    for (j = 0; j < NUM_OF_COLUMNS; j++) {
        const pixel = document.createElement("div")
        pixel.style.backgroundClip = "grey"
        pixel.textContent = "x"
        pixel.style.height = PIXEL_SIZE
        pixel.style.width = PIXEL_SIZE
        rowContainer.appendChild(pixel)
    }

    mainContainer.appendChild(rowContainer)
}