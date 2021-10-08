var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var paySchema = new Schema({
    email: {
        type: String,
        required: [true, 'The email is required.'],
    },
    type: {
        type: String,
        required: [true, 'The type is required.']
    },
    amnt: {
        type: Number
    },
    promocode: {
        type: String,
        required: [true, 'The promocode is required.'],
    },
    date: {
        type: Date,
        default: Date.now()
    }
});


module.exports = mongoose.model('RegisterPay', paySchema);