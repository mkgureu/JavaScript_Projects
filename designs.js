/*function makeGrid creates the grid of squares on the page */
function makeGrid() {
    // Clearing the grid squares :https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
    pixelCanvas.innerHTML = '';
  
    // this is for the width and height of the grid 
    var height = inputHeight.value;
    var width = inputWidth.value;
  
    // Creating the rows and cells for the grid
    for (var i = 0; i < height; i++) {
      // make a new row and add the row to the table
      var row = document.createElement('tr');
      pixelCanvas.appendChild(row);
      for (var j = 0; j < width; j++) {
        // make a new cell and Im adding the cell to the current row
        var cell = document.createElement('td');
        row.appendChild(cell);
  
        // Added a click event listener to each cell that sets its background color
        cell.addEventListener('click', function(event) {
          // Set the background color of the clicked cell to the selected color
          event.target.style.backgroundColor = colorPicker.value;
        });
      }
    }
  }
   
  // Defining the global variables
  var sizePicker = document.getElementById('sizePicker');
  var inputHeight = document.getElementById('inputHeight');
  var inputWidth = document.getElementById('inputWidth');
  var pixelCanvas = document.getElementById('pixelCanvas');
  var colorPicker = document.getElementById('colorPicker');
  
  // Added a submit event listener to the form that creates the grid
  sizePicker.addEventListener('submit', function(event) {
    // Prevent the form from submitting:https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
    event.preventDefault();
    // Call back to the makeGrid function to create the grid
    makeGrid();
  });
  