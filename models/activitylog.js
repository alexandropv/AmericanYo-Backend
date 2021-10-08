var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var activityLogSchema = new Schema({
    email: {
        type: String,
        required: [true, 'The email is required.'],
    },
    event: {
        type: String,
        required: [true, 'The event is required.']
    },
    date: {
        type: Date,
        default: Date.now()
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

});


module.exports = mongoose.model('activitylog', activityLogSchema);