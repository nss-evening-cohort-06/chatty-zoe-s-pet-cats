
"use strict";

const loadComments = require("./data");
const runEvents = require("./events");


runEvents.submitMessage();
runEvents.writeWordsOnEnter();
runEvents.clearTextBox();
runEvents.deleteMessage();
runEvents.clearAllMessages();
runEvents.disableBtn();


loadComments.loadComments();
