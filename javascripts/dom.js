"use strict";

//const dom = require("./events");

let words = document.getElementById("inputText");
let outputDiv = document.getElementById("message");

const buildDomString = () => {
	let domString = "";

	domString += `<div>${words.value}`;
	domString += `<button type="button" id="delete" class="btn btn-danger">Vanish</button>`;
	domString += `<button type="button" id="edit" class="btn btn-warning">Edit</button>`;
	domString += `</div>`;

	printToDom(domString);
};



const printToDom = (domString) => {
	outputDiv.innerHTML += domString;
	console.log("print to dom", domString);
};





module.exports = printToDom;