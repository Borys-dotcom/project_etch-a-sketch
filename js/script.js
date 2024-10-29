let container = document.querySelector("#mainContainer");
let size = document.getElementById('inputSize');
let startBtn = document.querySelector("#startButton");

startBtn.addEventListener("click", () =>{
    createGrid();
    
    // for(i=0; i<=2; i++){
    //     let rowDiv = document.createElement("div");
    //     rowDiv.classList.add("rowDiv");
    //     rowDiv.style.height = "10px";
    //     rowDiv.style.width = "10px";
    //     rowDiv.style.border = "2px solid red";
    //     container.appendChild(rowDiv);
    // }  

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
            cellDiv.style.backgroundColor = "gray";
            rowDiv.appendChild(cellDiv);
        }
    }

}