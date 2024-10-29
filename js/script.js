let container = document.querySelector("#mainContainer");
let size = document.getElementById('inputSize');
let startBtn = document.querySelector("#startButton");
let colorDivs = document.querySelectorAll('.cellDiv');

// colorDivs.forEach((cellDiv) => {
    
//     console.log("click");
//     cellDiv.addEventListener("click", () =>{
//         cellDiv.style.backgroundColor = "black";
//         console.log("click");
//     });
// });


startBtn.addEventListener("click", () =>{
    createGrid(); 
});

function createGrid(){
    
    let cellWidth = container.clientWidth/Number(size.value);
    let cellHeight = container.clientHeight/Number(size.value);
    
    for (j=0; j<size.value; j++){
       
        let rowDiv = document.createElement("div");
        rowDiv.classList.add("rowDiv");
        rowDiv.style.display = "flex";
        rowDiv.style.flexDirection = "row";
        container.appendChild(rowDiv);


        for (i=0; i<size.value; i++){
            let cellDiv = document.createElement("div");
            cellDiv.classList.add("cellDiv");
            cellDiv.style.height = `${cellWidth}px`;
            cellDiv.style.width = `${cellHeight}px`;
            cellDiv.style.backgroundColor = "black";
            cellDiv.style.opacity = 0;
            rowDiv.appendChild(cellDiv);
        }
    }
    let colorDivs = document.querySelectorAll('.cellDiv');

    colorDivs.forEach((cellDiv) => {
        
        cellDiv.addEventListener("mouseover", () =>{
            let opacityTemp = Number(cellDiv.style.opacity);
            opacityTemp += 0.1;
            cellDiv.style.opacity = opacityTemp;
        });
    });
}

