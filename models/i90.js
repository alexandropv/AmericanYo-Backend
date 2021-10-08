var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dataI90Schema = new Schema({
    userid: {
        type: String,
        required: true
    },
    packageid: {
        type: String,
        required: true
    },
    p1field1: {
        type: String
    },
    p1field2: {
        type: String
    },
    p1field3a: {
        type: String
    },
    p1field3b: {
        type: String
    },
    p1field3c: {
        type: String
    },
    p1field4: {
        type: String
    },
    p1field5a: {
        type: String
    },
    p1field5b: {
        type: String
    },
    p1field5c: {
        type: String
    },
    p1field6a: {
        type: String
    },
    p1field6b: {
        type: String
    },
    p1field6c: {
        type: String
    },
    p1field6ctxt: {
        type: String
    },
    p1field6d: {
        type: String
    },
    p1field6e: {
        type: String
    },
    p1field6f: {
        type: String
    },
    p1field6g: {
        type: String
    },
    p1field6h: {
        type: String
    },
    p1field6i: {
        type: String
    },
    p1field7a: {
        type: String
    },
    p1field7b: {
        type: String
    },
    p1field7c: {
        type: String
    },
    p1field7ctxt: {
        type: String
    },
    p1field7d: {
        type: String
    },
    p1field7e: {
        type: String
    },
    p1field7f: {
        type: String
    },
    p1field7g: {
        type: String
    },
    p1field7h: {
        type: String
    },
    p1field7i: {
        type: String
    },
    p1field8: {
        type: String
    },
    p1field9: {
        type: String
    },
    p1field10: {
        type: String
    },
    p1field11: {
        type: String
    },
    p1field12: {
        type: String
    },
    p1field13: {
        type: String
    },
    p1field14: {
        type: String
    },
    p1field15: {
        type: String
    },
    p1field16: {
        type: String
    },
    p2field1a: {
        type: String
    },
    p2field2: {
        type: String
    },
    p2field2h1a: {
        type: String
    },
    p2field3: {
        type: String
    },
    p3field1: {
        type: String
    },
    p3field2: {
        type: String
    },
    p3field3a: {
        type: String
    },
    p3field3a1: {
        type: String
    },
    p3field4: {
        type: String
    },
    p3field5: {
        type: String
    },
    p3field6: {
        type: String
    },
    p3field7a: {
        type: Boolean
    },
    p3field7b: {
        type: Boolean
    },
    p3field7c: {
        type: Boolean
    },
    p3field7d: {
        type: Boolean
    },
    p3field7e: {
        type: Boolean
    },
    p3field8a: {
        type: String
    },
    p3field8b: {
        type: String
    },
    p3field9: {
        type: String
    },
    p3field10: {
        type: String
    },
    p3field11: {
        type: String
    },
    p4field1: {
        type: String
    },
    p4field1a: {
        type: Boolean
    },
    p3field1b: {
        type: Boolean
    },
    p3field1btxt: {
        type: String
    },
    p3field1c: {
        type: Boolean
    },
    p3field1ctxt: {
        type: String
    },
    p5field1a: {
        type: Boolean
    },
    p5field1b: {
        type: Boolean
    },
    p5field1btxt: {
        type: String
    },
    p5field2: {
        type: String
    },
    p5field3: {
        type: String
    },
    p5field4: {
        type: String
    },
    p5field5: {
        type: String
    },
    p6field1a: {
        type: String
    },
    p6field1b: {
        type: String
    },
    p6field2: {
        type: String
    },
    p6field3a: {
        type: String
    },
    p6field3b: {
        type: String
    },
    p6field3btxt: {
        type: String
    },
    p6field3c: {
        type: String
    },
    p6field3d: {
        type: String
    },
    p6field3e: {
        type: String
    },
    p6field3f: {
        type: String
    },
    p6field3g: {
        type: String
    },
    p6field3h: {
        type: String
    },
    p6field4: {
        type: String
    },
    p6field5: {
        type: String
    },
    p6field6: {
        type: String
    },
    p6fieldLang: {
        type: String
    },
    p7field1a: {
        type: String
    },
    p7field1b: {
        type: String
    },
    p7field2: {
        type: String
    },
    p7field3a: {
        type: String
    },
    p7field3b: {
        type: String
    },
    p7field3btxt: {
        type: String
    },
    p7field3c: {
        type: String
    },
    p7field3d: {
        type: String
    },
    p7field3e: {
        type: String
    },
    p7field3f: {
        type: String
    },
    p7field3g: {
        type: String
    },
    p7field3h: {
        type: String
    },
    p7field4: {
        type: String
    },
    p7field5: {
        type: String
    },
    p7field6: {
        type: String
    },
    p7field7a: {
        type: Boolean
    },
    p7field7b: {
        type: Boolean
    },
    p7field7b1: {
        type: String
    },

});

module.exports = mongoose.model('I900', dataI90Schema);