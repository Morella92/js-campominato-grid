console.log('Prato minato')

let cellSide = 10
console.log(cellSide)

let cellNumber= cellSide * cellSide
console.log(cellNumber)

let gridElement = document.getElementById('grid')
console.log(gridElement)

const startButton = document.querySelector('.start-button')
console.log(startButton)

startButton.addEventListener('click', function(){

    for (let i = 0; i < cellNumber; i++) {
        let number = i + 1;
        console.log(number);
      
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = `calc(100% / ${cellSide})`;
        cell.innerHTML = number;
      
        gridElement.appendChild(cell);
    }
    
    const cellElements = document.querySelectorAll('.cell')
    // console.log(celleElements)
    
    for (let i = 0; i < cellElements.length; i++) {
        const cella = cellElements[i]
    
        cella.addEventListener('click', function () {
            console.log(i + 1)

            if (cella.style.backgroundColor === "purple") {
                cella.style.backgroundColor = "";
            } else {
                cella.style.backgroundColor = "purple";
            }
        })
    }
})


function onClick() {
	console.log(i + 1)
}
  