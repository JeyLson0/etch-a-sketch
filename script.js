//Global Variables
let rangeBar = document.querySelector('#range_bar');
let slider = document.querySelector('#grid_slider');
let rangeValue = document.querySelector('#range_value');
let gridValue = slider.value;
let gridBox = document.querySelector('#grid');
let gridBoxPix = gridBox.getElementsByClassName('pixel')
let pixelNum = gridBoxPix.length

//Pixel Function
pixelFunction();
function pixelFunction() {
    let totalGridDivs = gridValue * gridValue;
    for (i=0; i<totalGridDivs; i++) {
        let gridDivs = document.createElement('div');
        gridDivs.classList.add('pixel')
        gridDivs.setAttribute(`style`, `flex-basis: ${500/gridValue}px`)
        gridBox.appendChild(gridDivs);
    }
    pixelNum = gridBoxPix.length;
    if (totalGridDivs != pixelNum) {
        let excessDivs = pixelNum - totalGridDivs;
        for(i=0; i<excessDivs; i++) {
            gridBox.removeChild(gridBox.firstElementChild);
        }
    }
    pixelNum = gridBoxPix.length;

    //Mouse Event
    for (const pixels of gridBoxPix) {

        pixels.addEventListener('mousemove', (e) =>{
           pixels.style.backgroundColor = `${colorValue}`
        })
   }

}

//Range bar
rangeValue.textContent= `${slider.value} x ${slider.value}`;
slider.oninput = function Range() {
    rangeValue.textContent = `${slider.value} x ${slider.value}`;
    gridValue = slider.value;
    pixelFunction();
}

//Color Picker Value
let colorPicker = document.querySelector('#color_Picker')
let colorValue = colorPicker.value;
colorPicker.addEventListener("input", (e)=> {
    colorValue = e.target.value;
})

//Clear button

let clearButton = document.querySelector('#clear')
 clearButton.addEventListener('keydown', (e)=>{
    for (const pixels of gridBoxPix) {
        if (e.keycode = 67) {
              pixels.style.backgroundColor = `#FFFFFF`
               console.log(e)
          }
        }
    }, useCapture = true)
    clearButton.addEventListener('click', (e) => {
        for (const pixels of gridBoxPix) {
         pixels.style.backgroundColor = `#FFFFFF`
       }
    })
    



