//defaults al cargar la pagina
const defaultSize= 16
const defaultMode= "color"
const defaultColor= "black"
let currentSize = defaultSize
let currentMode = defaultMode
let currentColor = defaultColor

//cambiar cantidad de grids
function setSize(newSize){
    currentSize = newSize
}

function changeSize(value) {
    setSize(value)
    updateSizeValue(value)
    reloadGrid()
}
  
function updateSizeValue(value) {
    sizeInput.innerHTML = `${value} x ${value}`
}
  
function reloadGrid() {
    createGrid(currentSize)
}
  

//selectores
const grid = document.querySelector(".squareContainer")
const squares = document.querySelectorAll(".squares")
const blackOption = document.getElementById("black")
const eraser = document.getElementById("eraser")
const rainbow = document.getElementById("rainbow")
const customColor = document.getElementById("mixer")
const slider = document.getElementById("slider")
const sizeInput = document.getElementById("size")

//botones
blackOption.onclick = () => currentMode = "black"
eraser.onclick = () => currentMode = "eraser"
rainbow.onclick = () => currentMode = "rainbow"
customColor.onclick = () => currentMode ="mixer"

//slider
sizeInput.innerHTML = `${currentSize} x ${currentSize}`
slider.onmousemove = (e) => updateSizeValue(e.target.value)
slider.onchange = (e) => changeSize(e.target.value)


function createGrid(currentSize){
    grid.style.gridTemplateColumns = `repeat(${currentSize}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${currentSize}, 1fr)`
    let squaresToRemove = grid.querySelectorAll("div")
    squaresToRemove.forEach((div) => div.remove())
    amount = (currentSize*currentSize)

    for (i=0; i<amount; i++){
        const newSquare = document.createElement("div")
        newSquare.classList.add("squares")
        newSquare.addEventListener("mouseover", colorChange)
        grid.appendChild(newSquare)
    }
}

//logica
function colorChange(e){
    if(currentMode === "black" || currentMode === defaultMode){
        e.target.style.backgroundColor = "black"
    }
    else if (currentMode === "eraser"){
        e.target.style.backgroundColor="white"
    }
    else if (currentMode==="rainbow"){
        let x = Math.floor(Math.random() * 256)
        let y =  Math.floor(Math.random() * 256)
        let z = Math.floor(Math.random() * 256)
        let randomColor = "rgb(" + x + "," + y + "," + z + ")"
        e.target.style.backgroundColor= randomColor
    }
    else if (currentMode==="mixer"){
    //falta incluir el rgb mixer       
    }
}


window.onload=()=> createGrid(defaultSize)