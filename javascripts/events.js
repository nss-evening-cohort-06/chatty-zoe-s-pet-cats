"use strict";

const printDom = require("./dom");

const submit = document.getElementById("submit");

const inputText = document.getElementById("inputText");

const remove = document.getElementsByClassName("delete");

const clearText = document.getElementById("clear");

const outputText = document.getElementById("message");

const submitMessage = (e) => {
	submit.addEventListener("click", (e) => {
	console.log("submitMessage", e);
	printDom();
	});

};

const writeWordsOnEnter = (e) => {
	submit.addEventListener("keypress", (e) => {
		if(e.keyCode === 13){
			console.log("enter", e);
			printDom();
		}
	});
};

const clearTextBox = (e) => {
	clearText.addEventListener("click", (e) => {
		console.log("clear", e);
		inputText.value = "";
	});
};



// //delete button function
const deleteMessage = (e) => {
	outputText.addEventListener('click', deleteMessage);
	console.log("delete", e);
  if(e.target.classList.contains('delete')){
    console.log("yaaaaaaaaa!");
    e.target.parentNode.remove();
  }
};


const events = {
	submitMessage, writeWordsOnEnter, clearTextBox, deleteMessage
 
};
module.exports = events;