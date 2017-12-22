var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const session = require('express-session');
const bcrypt = require('bcrypt');

var Message = mongoose.model('Message');
var User = mongoose.model('User');

mongoose.Promise = global.Promise;

module.exports = {


}