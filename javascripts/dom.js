"use strict";

//const dom = require("./events");

let words = document.getElementById("inputText");
let outputDiv = document.getElementById("message");

const buildDomString = (statement) => {
	
	let domString = "";
	domString += `<div>${statement}`;
	domString += `<button type="button" class="btn btn-danger delete">Vanish</button>`;
	domString += `<button type="button" class="btn btn-warning edit">Edit</button>`;
	domString += `</div>`;

	printToDom(domString);
};



const printToDom = (domString) => {
	outputDiv.innerHTML += domString;
	words.value = "";
	
};




module.exports = buildDomString;






