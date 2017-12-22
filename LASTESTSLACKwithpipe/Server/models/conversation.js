var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var User = mongoose.model('User');

// var Message = mongoose.model('Message');
// var Conversation = mongoose.model('Conversation', ConversationSchema);

var ConversationSchema = new mongoose.Schema({
     title:{ type: String, required: true },
    _userList: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    _messageList: [{ type: Schema.Types.ObjectId, ref: 'Message' }]
}, {timestamps: true});

mongoose.model('Conversation', ConversationSchema);

