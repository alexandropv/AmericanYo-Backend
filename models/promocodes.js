var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var promoCodeSchema = new Schema({
    code: {
        type: String,
        required: [true, 'The code is required.']
    },
    descr: {
        type: String
    },
    status: {
        type: String,
        default: 'H'
    },
    due: {
        type: Date
    },
    pct: {
        type: Number,
        required: [true, 'The discount is required.']
    },
    qpct: {
        type: Number,
        required: [true, 'The discount is required.']
    }
});


module.exports = mongoose.model('PromoCode', promoCodeSchema);