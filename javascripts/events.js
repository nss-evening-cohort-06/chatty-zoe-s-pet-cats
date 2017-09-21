"use strict";

const printDom = require("./dom");

const submit = document.getElementById("chatButton");


const submitMessage = () => {
submit.addEventListener("click", printDom);
console.log(printDom);
};










module.exports = {
	submitMessage
};