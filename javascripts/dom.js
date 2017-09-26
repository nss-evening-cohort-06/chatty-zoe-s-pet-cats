"use strict";

let words = document.getElementById("inputText");
let outputDiv = document.getElementById("message");

const buildDomString = (statement) => {
	
	let domString = "";
	domString +=       `<div>${statement}<br />`;
	domString +=       `<button type="button" class="btn btn-success delete">Vanish</button>`;
	domString +=       `</div>`;
	printToDom(domString);
};



const printToDom = (domString) => {
	outputDiv.innerHTML += domString;
	words.value = "";
};


module.exports = buildDomString;


