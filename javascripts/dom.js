"use strict";

let comments = require('./data');
let words = document.getElementById("inputText");
let outputDiv = document.getElementById("message");

const buildDomString = (statement) => {
	
	let domString = "";
	domString += `<div>${words.value}`;
	domString += `<button type="button" id="delete" class="btn btn-danger">Vanish</button>`;
	domString += `<button type="button" id="edit" class="btn btn-warning">Edit</button>`;
	domString += `</div>`;
	return domString;
};



const printToDom = () => {
	let statementDomString = buildDomString();
	outputDiv.innerHTML += statementDomString;
	words.value = "";
	
};

comments.loadComments();



module.exports = buildDomString;


