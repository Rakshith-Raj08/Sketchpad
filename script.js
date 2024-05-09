const container = document.getElementById("container");

function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}

function makeRows(rowNum) {
    for (let r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        row.classList.add("gridRow");
        container.appendChild(row);
    }
}

function makeColumns(cellNum) {
    const rows = document.querySelectorAll(".gridRow");
    rows.forEach(row => {
        for (let j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            newCell.classList.add("cell");
            row.appendChild(newCell);
        }
    });
}

let previousColorDiv = null;


function createColorPicker(colors) {
    const colorPicker = document.getElementById("colorPicker");
    colors.forEach(color => {
        let colorDiv = document.createElement("div");
        colorDiv.classList.add("color");
        colorDiv.style.backgroundColor = color;
        colorDiv.addEventListener("click", function() {
            const selectedColor = colorDiv.style.backgroundColor;
            if (previousColorDiv !== null) {
                previousColorDiv.classList.remove("selected");
            }
            // Add border to the selected color block
            colorDiv.classList.add("selected");
            // Update the previousColorDiv variable
            previousColorDiv = colorDiv;
            document.querySelectorAll(".cell").forEach(cell => {
                cell.addEventListener("mouseover", function() {
                    cell.style.backgroundColor = selectedColor;
                });
            });
        });
        colorPicker.appendChild(colorDiv);
    });
}

defaultGrid();

// Create color picker with some default colors
createColorPicker(["red", "green", "blue", "yellow", "purple","black","white","orange","pink"]);

