import * as texts from "./texts.js";

function changeText(text) {
  if (text == "esport") {
    document.getElementById("aboutlefttext").innerHTML = `<p>${texts.esportText}</p>`;
  } else if (text == "products") {
    document.getElementById("aboutlefttext").innerHTML = `<p>${texts.productsText}</p>`;
  } else if (text == "development"){
    document.getElementById("aboutlefttext").innerHTML = `<p>${texts.developmentText}</p>`;
  }
  else {
    alert('No bueno, no value in string from button');
  }
}

window.changeText = changeText;