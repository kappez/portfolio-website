import * as texts from "./texts.js";

function changeText(text) {
  if (text == "esport") {
    document.getElementById("aboutlefttext").innerHTML = `<p>${texts.esportText}</p>`;
    document.getElementById("aboutleft").style.backgroundColor = "#ff70a630";
    document.querySelectorAll("#aboutleft h3").forEach(h3 => h3.style.color = "#ff70a6");
  } else if (text == "products") {
    document.getElementById("aboutlefttext").innerHTML = `<p>${texts.productsText}</p>`;
    document.getElementById("aboutleft").style.backgroundColor = "#ff977030";
    document.querySelectorAll("#aboutleft h3").forEach(h3 => h3.style.color = "#ff9770");
  } else if (text == "development"){
    document.getElementById("aboutlefttext").innerHTML = `<p>${texts.developmentText}</p>`;
    document.getElementById("aboutleft").style.backgroundColor = "#ffd67030";
    document.querySelectorAll("#aboutleft h3").forEach(h3 => h3.style.color = "#ffd670");
  } else {
    alert('No bueno, no value in string from button');
  }
}

window.changeText = changeText;