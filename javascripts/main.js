
"use strict";

const loadComments = require("./data");
const runEvents = require("./events");





runEvents.submitMessage();
runEvents.writeWordsOnEnter();
runEvents.clearTextBox();


loadComments.loadComments();

runEvents.deleteMessage();
