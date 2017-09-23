"use strict";

let events = require('./events');
let dom = require('./dom');

let commentsArray = [];

const errorFunction = () => {
	console.log("You broke everything. Thanks.");
};

//When comments load
const whenCommentsLoad = () => {
	commentsArray = JSON.parse(this.responseText).comments;
};

const loadComments = () => {
    const commentLoader = new XMLHttpRequest();
    commentLoader.addEventListener('load', whenCommentsLoad);
    commentLoader.addEventListener('error', errorFunction);
    commentLoader.open('GET', '../data/comments.json');
    commentLoader.send();
};

const getComments = () => {
	return commentsArray;
};

module.exports = {loadComments, getComments};

