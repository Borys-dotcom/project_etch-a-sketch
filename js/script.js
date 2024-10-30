let container = document.querySelector("#mainContainer");
let size = document.getElementById('inputSize');
let startBtn = document.querySelector("#startButton");
let restartBtn = document.querySelector("#restartButton");
let colorDivs = document.querySelectorAll('.cellDiv');
let colouringType = document.getElementsByName('typeOfColouring');
let selectedType = "";
let choiceTypeOpacity = document.getElementById('typeOpacity');
let choiceTypeColor = document.getElementById('typeColor');

startBtn.addEventListener("click", () =>{

    if (selectedType === ""){

            for (i=0; i<colouringType.length; i++){
                if (colouringType[i].checked){
                    selectedType = colouringType[i].value;
                    console.log(selectedType);
                }
            }
            if (selectedType === ""){
                alert("Choose corect type of game!");
            }

        else {

            if ((Math.floor(Number(size.value)) !== Number(size.value)) || 
                Number(size.value) <= 0){
                    alert("Enter correct value of grid size!");
                    selectedType = "";
                }
            else{
                createGrid();
                choiceTypeOpacity.disabled = true;
                choiceTypeColor.disabled = true;
                size.disabled = true;
            } 
        }
    }
    else alert('First you have to finish present game!');

});

restartBtn.addEventListener("click", () =>{
    selectedType = "";
    size.value = "";
    choiceTypeOpacity.disabled = false;
    choiceTypeColor.disabled = false;
    size.disabled = false;

    for (i=0; i<colouringType.length; i++){
        colouringType[i].checked = false;    
    }

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

            if (selectedType === "color"){
                cellDiv.style.backgroundColor = undefined;
            }

            if (selectedType === "opacity"){
                cellDiv.style.backgroundColor = "black";
                cellDiv.style.opacity = 0;
            }
            
            rowDiv.appendChild(cellDiv);
        }
    }
    let colorDivs = document.querySelectorAll('.cellDiv');

    colorDivs.forEach((cellDiv) => {
        
        cellDiv.addEventListener("mouseover", () =>{
            
            if (selectedType === "color"){
                if (cellDiv.style.backgroundColor === ""){
                    let colorRed = Math.floor(Math.random()*255);
                    let colorGreen = Math.floor(Math.random()*255);
                    let colorBlue = Math.floor(Math.random()*255);
                    cellDiv.style.backgroundColor = `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`;
                    cellDiv.style.opacity = 1;
                }
            }
            if (selectedType === "opacity"){
                let opacityTemp = Number(cellDiv.style.opacity);
                opacityTemp += 0.1;
                cellDiv.style.opacity = opacityTemp;
            }
        });
    });
}

function clearGrid(){
    let colorDivs = document.querySelectorAll('.cellDiv');
    colorDivs.forEach((cellDiv) => {
        cellDiv.remove();
    });
}