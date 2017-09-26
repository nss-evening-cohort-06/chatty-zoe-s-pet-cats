"use strict";


//let comments = require("./main");
let outputDark = document.getElementById('output-dark');
let LoadedMessages = document.getElementById("message");
//const outputText = document.getElementById("message");



// LoadedMessages.onload = () => {
//     LoadedMessages.innerHTML = comments;
// };


const printDom = require("./dom");

const submit = document.getElementById("submit");

const inputText = document.getElementById("inputText");

const remove = document.getElementById("delete");

const clearText = document.getElementById("clear");

const clearBoard = document.getElementById("clearBoard");


//print message when click on chat with aliens button
const submitMessage = (e) => {
    submit.addEventListener("click", (e) => {
    console.log("submitMessage", e);
    printDom(inputText.value);
    });

};

//print message on enter press
const writeWordsOnEnter = (e) => {
    inputText.addEventListener("keypress", (e) => {
        if(e.keyCode === 13){
        printDom(inputText.value);
        }
    });
};

//Abort Entry functionality
const clearTextBox = (e) => {
    clearText.addEventListener("click", (e) => {
        console.log("clear", e);
        inputText.value = "";
    });
};

//Clear all messages from message board
const clearAllMessages = (e) => {
    clearBoard.addEventListener("click", function(e){
     console.log(e);
     LoadedMessages.innerHTML = "";
});
};

const disableBtn = () => {
    if(LoadedMessages.innerHTML === "") {
        clearBoard.disabled = true;
    }
};




// JS for "Twilight Mode" checkbox
let outputLargeText = document.getElementById('output-text-large');
let checkboxOne = document.querySelector("input[name=checkboxTwilight]");
let checkboxTwo = document.querySelector("input[name=checkboxBiggerText]");

checkboxOne.addEventListener( 'change', function() {
    console.log(this);
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
const deleteMessage = () => {
	LoadedMessages.addEventListener('click', (e) => {
      if(e.target.classList.contains('delete')){
        e.target.parentNode.remove();
      }
    });
};




const events = {
    submitMessage, writeWordsOnEnter, clearTextBox, deleteMessage, clearAllMessages, disableBtn
 
};
module.exports = events;





