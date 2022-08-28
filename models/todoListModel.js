var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    name: String,
    Created_date: Date,
    status: String
});

module.exports = mongoose.model('Tasks', TaskSchema);