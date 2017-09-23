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
let checkbox = document.querySelector("input[name=checkbox]");

checkbox.addEventListener( 'change', function() {
    if(this.checked) {
        // Checkbox is checked..
        outputDark.classList.add("twilight-zone-mode");
    } else {
        // Checkbox is not checked..
        outputDark.classList.remove("twilight-zone-mode");
    }
});




// JS for "Make Text Bigger" checkbox







const events = {
	submitMessage, writeWordsOnEnter
 
};
module.exports = events;

