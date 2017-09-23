"use strict";

//const dom = require("./events");

let words = document.getElementById("inputText");
let outputDiv = document.getElementById("message");

const buildDomString = (statement) => {
	
	let domString = "";
	domString += `<div>${words.value}`;
	domString += `<button type="button" class="btn btn-danger delete">Vanish</button>`;
	domString += `<button type="button" class="btn btn-warning edit">Edit</button>`;
	domString += `</div>`;

	return domString;
};



const printToDom = (domString) => {
	let statementDomString = buildDomString();
	outputDiv.innerHTML += statementDomString;
	words.value = "";
	
};




module.exports = printToDom;

