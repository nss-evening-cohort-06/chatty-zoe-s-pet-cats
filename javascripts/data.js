"use strict";

let events = require('./events');
let printToDom = require('./dom');


const errorFunction = () => {
	console.log("You broke everything. Thanks.");
};

//When page loads print these comments
const whenCommentsLoad = function() {
	let commentsArray = JSON.parse(this.responseText).comments;
	for(let i = 0; i < commentsArray.length; i++) {
		printToDom(commentsArray[i].comment);
		}
};


const loadComments = () => {
    let commentLoader = new XMLHttpRequest();
    commentLoader.addEventListener('load', whenCommentsLoad);
    commentLoader.addEventListener('error', errorFunction);
    commentLoader.open('GET', './data/comments.json');
    commentLoader.send();
};


module.exports = {loadComments};

