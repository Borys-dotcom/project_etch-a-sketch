let container = document.querySelector("#mainContainer");
let size = document.getElementById('inputSize');
let startBtn = document.querySelector("#startButton");
let restartBtn = document.querySelector("#restartButton");
let colorDivs = document.querySelectorAll('.cellDiv');


startBtn.addEventListener("click", () =>{

    if ((Math.floor(Number(size.value)) !== Number(size.value)) || 
        Number(size.value) <= 0){
            alert("Enter correct value of grid size!");
        }
    else createGrid(); 

});

restartBtn.addEventListener("click", () =>{
    clearGrid(); 
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

            cellDiv.style.backgroundColor = undefined;
            // cellDiv.style.backgroundColor = "black";
            // cellDiv.style.opacity = 0;
            
            rowDiv.appendChild(cellDiv);
        }
    }
    let colorDivs = document.querySelectorAll('.cellDiv');

    colorDivs.forEach((cellDiv) => {
        
        cellDiv.addEventListener("mouseover", () =>{
            console.log(cellDiv.style.backgroundColor);
            if (cellDiv.style.backgroundColor === ""){
                let colorRed = Math.floor(Math.random()*255);
                let colorGreen = Math.floor(Math.random()*255);
                let colorBlue = Math.floor(Math.random()*255);
                cellDiv.style.backgroundColor = `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`;
                cellDiv.style.opacity = 1;
            }


            // let opacityTemp = Number(cellDiv.style.opacity);
            // opacityTemp += 0.1;
            // cellDiv.style.opacity = opacityTemp;
        });
    });
}

function clearGrid(){
    let colorDivs = document.querySelectorAll('.cellDiv');
    colorDivs.forEach((cellDiv) => {
        cellDiv.remove();
    });
}