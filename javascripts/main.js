
"use strict";

const loadComments = require("./data");
const runEvents = require("./events");





runEvents.submitMessage();
runEvents.writeWordsOnEnter();
runEvents.clearTextBox();
<<<<<<< HEAD
runEvents.deleteMessage();
runEvents.clearAllMessages();
runEvents.disableBtn();

=======
// runEvents.deleteMessage();
>>>>>>> master

loadComments.loadComments();

