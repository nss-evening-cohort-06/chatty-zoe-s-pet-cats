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
	printDom(inputText.value);
	});

};

const writeWordsOnEnter = (e) => {
	inputText.addEventListener("keypress", (e) => {
		if(e.keyCode === 13){
			console.log("enter", e);
			printDom(inputText.value);
		}
	});
};

const clearTextBox = (e) => {
	clearText.addEventListener("click", (e) => {
		console.log("clear", e);
		inputText.value = "";
	});
};


// JS for "Twilight Mode" checkbox
let outputDark = document.getElementById('output-dark');
let outputLargeText = document.getElementById('output-text-large');
let checkboxOne = document.querySelector("input[name=checkboxTwilight]");
let checkboxTwo = document.querySelector("input[name=checkboxBiggerText]");

checkboxOne.addEventListener( 'change', function() {
    if(this.checked) {
        // Checkbox is checked..
        outputDark.classList.add("twilight-zone-mode");
    } else {
        // Checkbox is not checked..
        outputDark.classList.remove("twilight-zone-mode");
    }
});

// JS for "Make Text Bigger" checkbox
checkboxTwo.addEventListener( 'change', function() {
    if(this.checked) {
        // Checkbox is checked..
        outputLargeText.classList.add("makeItBigger");
    } else {
        // Checkbox is not checked..
        outputLargeText.classList.remove("makeItBigger");
    }
});






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

