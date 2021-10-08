var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var contactSchema = new Schema({
    name: {
        type: String,
        required: [true, 'The name is required.']
    },
    phone: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'The email is required.'],
    },
    message: {
        type: String,
        default: ''
    }
});


module.exports = mongoose.model('Contact', contactSchema);