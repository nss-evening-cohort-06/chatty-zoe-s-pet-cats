"use strict";

const printDom = require("./dom");

const submit = document.getElementById("submit");

const inputText = document.getElementById("inputText");

const remove = document.getElementById("delete");


const submitMessage = (e) => {
	submit.addEventListener("click", (e) => {
	console.log("submitMessage", e);
	printDom();
	});

};

const writeWordsOnEnter = (e) => {
	submit.addEventListener("keypress", (e) => {
		if(e.keyCode === 13){
			printDom();
		}
	});
};







const events = {
	submitMessage, writeWordsOnEnter
 
};
module.exports = events;