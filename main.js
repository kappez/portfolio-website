import * as texts from "./texts.js";

function changeText(text) {
  if (text == "esport") {
    document.getElementById("aboutlefttext").innerHTML = `<p>${texts.esportText}</p>`;
    document.getElementById("aboutleft").style.backgroundColor = "#ff70a630";
  } else if (text == "products") {
    document.getElementById("aboutlefttext").innerHTML = `<p>${texts.productsText}</p>`;
    document.getElementById("aboutleft").style.backgroundColor = "#ff977030";
  } else if (text == "development"){
    document.getElementById("aboutlefttext").innerHTML = `<p>${texts.developmentText}</p>`;
    document.getElementById("aboutleft").style.backgroundColor = "#ffd67030";
  } else {
    alert('No bueno, no value in string from button');
  }
}

window.changeText = changeText;