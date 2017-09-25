"use strict";

let events = require('./events');
let dom = require('./dom');

let commentsArray = [];

const errorFunction = () => {
	console.log("You broke everything. Thanks.");
};

//When page loads print these comments
const whenCommentsLoad = function() {
	commentsArray = JSON.parse(this.responseText).comments;
	for(let i = 0; i < commentsArray.length; i++) {
		dom(commentsArray[i].comment);
		}
};


const loadComments = () => {
    let commentLoader = new XMLHttpRequest();
    commentLoader.addEventListener('load', whenCommentsLoad);
    commentLoader.addEventListener('error', errorFunction);
    commentLoader.open('GET', './data/comments.json');
    commentLoader.send();
};


const getComments = () => {
	return commentsArray;
};


module.exports = {loadComments};

