var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var validRoles = {
    values: ['APPLICANT', 'SPONSOR', 'COSPONSOR'],
    message: '{VALUE} no es un rol valido'
};

var caseFormsSchema = new Schema({
    name: {
        type: String,
        required: [true, 'The name is required.']
    },
    status: {
        type: String,
        default: 'P'
    },
    role: {
        type: String,
        required: [true, 'The role is required.'],
        enum: validRoles
    },
    case: {
        type: Schema.Types.ObjectId,
        ref: 'Case',
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});


module.exports = mongoose.model('Case', caseSchema);