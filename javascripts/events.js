"use strict";


let comments = require("./main");
let outputDark = document.getElementById('output-dark');
let checkbox = document.querySelector("input[name=checkbox]");
let LoadedMessages = document.getElementById("message");

checkbox.addEventListener( 'change', function() {
    if(this.checked) {
        // Checkbox is checked..
        outputDark.classList.add("twilight-zone-mode");
    } else {
        // Checkbox is not checked..
        outputDark.classList.remove("twilight-zone-mode");
    }
});

LoadedMessages.onload = () => {
    LoadedMessages.innerHTML = comments;
};


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
    submitMessage, writeWordsOnEnter
 
};
module.exports = events;

