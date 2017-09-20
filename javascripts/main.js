"use strict"; 

let outputDark = document.getElementById('output-dark');
var checkbox = document.querySelector("input[name=checkbox]");

checkbox.addEventListener( 'change', function() {
    if(this.checked) {
        // Checkbox is checked..
        outputDark.classList.add("twilight-zone-mode");
    } else {
        // Checkbox is not checked..
        outputDark.classList.remove("twilight-zone-mode");
    }
});