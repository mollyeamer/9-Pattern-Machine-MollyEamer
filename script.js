//create two input boxes
//create a third input box with a color selector
const rows = document.getElementById("inputnumber1");
const columns = document.getElementById("inputnumber2");
const submitbutton = document.getElementById("submitbutton");
const colorchoice = document.getElementById("thecolorbox");
const gridofboxes = document.getElementById("gridofboxes");


submitbutton.addEventListener("click", makeGrid);


function makeGrid(){
  //figure out number of rows
  const numRows = rows.value;
  //figure out number of columns
  const numColumns = columns.value;
  console.log(numRows, numColumns);
  
  for (let i=0; i<numRows; i++) {
    const newColor = colorchoice.value;
    let newRow = document.createElement('div');
    newRow.classList.add('row');
    newRow.setAttribute('id', 'row${i}');
    gridofboxes.appendChild(newRow);
    

  for (let j=0; j < numColumns; j++) {
   let newBox = document.createElement('div');
    newBox.classList.add('box');
    newBox.setAttribute('id', 'box0$(i)${j}');
    newRow.appendChild(newBox);
    newBox.style.backgroundColor = newColor;
    newBox.addEventListener("click", changeColor);
    newBox.addEventListener("mouseover", changeColor);
    
    }
  }
  //figure out what color to make them all
}

//make boxes clickable 
function changeColor(event){
  const newColor = colorchoice.value;
  if (event.type == "click" || (event.type == "mouseover" && event.buttons == 1)) { 

  event.target.style.backgroundColor = newColor;
}
}
//when box is clicked - change color to new selected color 

