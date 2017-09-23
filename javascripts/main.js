"use strict"; 


// JS for "Twilight Zone Mode" checkbox

const runEvents = require("./events");


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
 


runEvents.submitMessage();

