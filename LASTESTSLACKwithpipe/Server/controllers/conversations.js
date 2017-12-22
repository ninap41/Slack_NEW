var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const session = require('express-session');
const bcrypt = require('bcrypt');

var Conversation = mongoose.model('Conversation');
var User = mongoose.model('User');

mongoose.Promise = global.Promise;

module.exports = {

}