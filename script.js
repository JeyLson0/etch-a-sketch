//Variables
let rangeBar = document.querySelector('#range_bar');
let slider = document.querySelector('#grid_slider');
let rangeValue = document.querySelector('#range_value');
let gridValue = slider.value;
let gridBox = document.querySelector('#grid');
let gridList = gridBox.querySelectorAll('div')
let gridBoxNum = gridBox.getElementsByClassName('pixel')
let pixelNum = gridBoxNum.length

insertDivs();
function insertDivs() {
    let totalGridDivs = gridValue * gridValue;
    for (i=0; i<totalGridDivs; i++) {
        let gridDivs = document.createElement('div');
        gridDivs.classList.add('pixel')
        gridBox.appendChild(gridDivs);
    }
    pixelNum = gridBoxNum.length;
    console.log(pixelNum)

    if (totalGridDivs != pixelNum) {
        let excessDivs = pixelNum - totalGridDivs;
        for(i=0; i<excessDivs; i++) {
            gridBox.removeChild(gridBox.firstElementChild);
        }
    }
    pixelNum = gridBoxNum.length;
    console.log(pixelNum)
}

//Range bar
rangeValue.textContent= `${slider.value} x ${slider.value}`;
slider.oninput = function Range() {
    rangeValue.textContent = `${slider.value} x ${slider.value}`;
    gridValue = slider.value;
    insertDivs();
}





/* gridRange();
function gridRange() {

} */

//GRID and grid size



//function will fill divContainer 
