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









const events = {
	submitMessage, writeWordsOnEnter
 
};
module.exports = events;

