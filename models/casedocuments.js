var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var validTypes = {
    values: ['APPLICANT', 'SPONSOR', 'CO_SPONSOR', 'N400', 'I90'],
    message: '{VALUE} is not a valid Type'
};

var validRelationships = {
    values: ['SPOUSE', 'CHILDREN', 'PARENT', 'SIBILING', 'NA'],
    message: '{VALUE} is not a valid Relationship'
}

var documentsSchema = new Schema({
    name: {
        type: String,
        required: [true, 'The name is required.']
    },
    status: {
        type: String,
        default: 'P'
    },
    type: {
        type: String,
        required: [true, 'The type is required.'],
        enum: validTypes
    },
    relationship: {
        type: String,
        required: [false, 'The relationship is required.'],
        enum: validRelationships
    },
    isCitizen: {
        type: Boolean,
        required: [false, 'The Citizenship status is required.']
    },
    inOrOut: {
        type: String,
        required: [false, 'The inOrOut is required.']
    },
    hasJointSponsor: {
        type: Boolean,
        required: [false, 'The hasJointSponsor is required.']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
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


module.exports = mongoose.model('Documents', documentsSchema);