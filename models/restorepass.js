var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var restorePassSchema = new Schema({
    email: {
        type: String,
        required: [true, 'The email is required.'],
        unique: true
    },
    key: {
        type: String,
        default: ''
    },
    newPassword: {
        type: String,
        default: ''
    }
});


module.exports = mongoose.model('restorePass', restorePassSchema);