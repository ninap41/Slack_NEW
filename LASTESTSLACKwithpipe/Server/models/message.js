var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Conversation = mongoose.model('Conversation');
// var Message = mongoose.model('Message', MessageSchema);
// var User = mongoose.model('User');


// **CHANGE THE FOLLOWING LINE BASED ON PROJECT
var MessageSchema = new mongoose.Schema({
    content: { type: String, required: true, maxlength: "300" },
    _poster: {type: String, required: true},
    _reciever: { type: String, required: true },
    // _conversationId: { type: Schema.Types.ObjectId, ref: 'Conversation' }
    
}, {timestamps: true});

mongoose.model('Message', MessageSchema);
