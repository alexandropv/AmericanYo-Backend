var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var caseSchema = new Schema({
    name: {
        type: String,
        required: [true, 'The name is required.']
    },
    type: {
        type: String,
        required: [true, 'The type is required.']
    },
    status: {
        type: String,
        default: 'P'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    level: {
        type: String,
        required: [true, 'The level is required.']
    },
    date: {
        type: Date,
        default: Date.now()
    }
});


module.exports = mongoose.model('Case', caseSchema);