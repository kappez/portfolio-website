import * as texts from "./texts.js";

function changeText(text) {
  if (text == "esport") {
    document.getElementById("aboutlefttext").innerHTML = `<p>${texts.esportText}</p>`;
  } else if (text == "products") {
    document.getElementById("aboutlefttext").innerHTML = `<p>${texts.productsText}</p>`;
  } else if (text == "development"){
    document.getElementById("aboutlefttext").innerHTML = `<p>${texts.developmentText}</p>`;
  } else {
    alert('No bueno, no value in string from button');
  }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

window.changeText = changeText;