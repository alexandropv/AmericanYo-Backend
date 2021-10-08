var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var checklistSchema = new Schema({
    userid: {
        type: String,
        required: [true, 'The userid is required.']
    },
    packageid: {
        type: String,
        required: [true, 'The packageid is required.']
    },
    value: {
        type: Boolean,
        required: [true, 'The value is required.']
    },
    descr: {
        type: String,
        required: [true, 'The descr is required.']
    },
    footer: {
        type: String
    },
    require: {
        type: Boolean,
        required: [true, 'The require value is required.']
    },
    justLabel: {
        type: Boolean
    },
    exhibit: {
        type: Number
    },

});


module.exports = mongoose.model('Checklist', checklistSchema);