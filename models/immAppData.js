var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var immAppDataSchema = new Schema({
    userid: {
        type: String,
        required: true
    },
    packageid: {
        type: Schema.Types.ObjectId,
        ref: 'packageid',
        required: true,
        unique: true
    },
    i485: {
        type: Boolean
    },
    i131: {
        type: Boolean
    },
    i765: {
        type: Boolean
    },
    p1field1a: {
        type: String
    },
    p1field1b: {
        type: String
    },
    p1field1c: {
        type: String
    },
    p1field2a: {
        type: String
    },
    p1field2b: {
        type: String
    },
    p1field2c: {
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
    p1field4a: {
        type: String
    },
    p1field4b: {
        type: String
    },
    p1field4c: {
        type: String
    },
    p1field5: {
        type: String
    },
    p1field6: {
        type: String
    },
    p1field7: {
        type: String
    },
    p1field7a: {
        type: String
    },
    p1field8: {
        type: String
    },
    p1field9: {
        type: String
    },
    p1field9a: {
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
    p1field13a: {
        type: String
    },
    p1field13b: {
        type: String
    },
    p1field13c: {
        type: String
    },
    p1field13ctxt: {
        type: String
    },
    p1field13d: {
        type: String
    },
    p1field13e: {
        type: String
    },
    p1field13f: {
        type: String
    },
    p1field14a: {
        type: String
    },
    p1field14b: {
        type: String
    },
    p1field14c: {
        type: String
    },
    p1field14ctxt: {
        type: String
    },
    p1field14d: {
        type: String
    },
    p1field14e: {
        type: String
    },
    p1field14f: {
        type: String
    },
    p1field15: {
        type: String
    },
    p1field16: {
        type: String
    },
    p1field17: {
        type: String
    },
    p1field18: {
        type: String
    },
    p1field19: {
        type: String
    },
    p1field20a: {
        type: String
    },
    p1field20b: {
        type: String
    },
    p1field20c: {
        type: String
    },
    p1field20d: {
        type: String
    },
    p1field20e: {
        type: String
    },
    p1field21: {
        type: String
    },
    p1field22a: {
        type: Boolean
    },
    p1field22atxt: {
        type: String
    },
    p1field22b: {
        type: Boolean
    },
    p1field22btxt: {
        type: String
    },
    p1field22c: {
        type: Boolean
    },
    p1field22d: {
        type: Boolean
    },
    p1field22dtxt: {
        type: String
    },
    p1field23a: {
        type: String
    },
    p1field23b: {
        type: String
    },
    p1field23c: {
        type: String
    },
    p1field24: {
        type: String
    },
    p1field25a: {
        type: String
    },
    p1field25b: {
        type: String
    },
    p1field25c: {
        type: String
    },
    p2field1: {
        type: String
    },
    p2field2a: {
        type: Boolean
    },
    p2field2b: {
        type: Boolean
    },
    p2field2c: {
        type: Boolean
    },
    p2field2d: {
        type: Boolean
    },
    p2field2e: {
        type: Boolean
    },
    p2field2f: {
        type: Boolean
    },
    p2field3a: {
        type: Boolean
    },
    p2field3b: {
        type: Boolean
    },
    p2field4a: {
        type: Boolean
    },
    p2field4b: {
        type: Boolean
    },
    p2field4c: {
        type: Boolean
    },
    p2field4d: {
        type: Boolean
    },
    p2field4e: {
        type: Boolean
    },
    p2field4field: {
        type: Boolean
    },
    p2field4g: {
        type: Boolean
    },
    pwfield4h: {
        type: Boolean
    },
    p2field4i: {
        type: Boolean
    },
    p2field5a: {
        type: Boolean
    },
    p2field5b: {
        type: Boolean
    },
    p2field6a: {
        type: Boolean
    },
    p2field6b: {
        type: Boolean
    },
    p2field7a: {
        type: Boolean
    },
    p2field7b: {
        type: Boolean
    },
    p2field7c: {
        type: Boolean
    },
    p2field7d: {
        type: Boolean
    },
    p2field7e: {
        type: Boolean
    },
    p2field7f: {
        type: Boolean
    },
    p2field7g: {
        type: Boolean
    },
    p2field7h: {
        type: Boolean
    },
    p2field8a: {
        type: Boolean
    },
    p2field8b: {
        type: Boolean
    },
    p2field8c: {
        type: Boolean
    },
    p2field8d: {
        type: Boolean
    },
    p2field8e: {
        type: Boolean
    },
    p2field8etxt: {
        type: String
    },
    p2field9a: {
        type: String
    },
    p2field9b: {
        type: String
    },
    p2field9c: {
        type: String
    },
    p2field10a: {
        type: String
    },
    p2field10b: {
        type: String
    },
    p2field10c: {
        type: String
    },
    p2field11: {
        type: String
    },
    p2field12: {
        type: String
    },
    p2field13: {
        type: String
    },
    p2field14a: {
        type: String
    },
    p2field14b: {
        type: String
    },
    p2field14c: {
        type: String
    },
    p2field15: {
        type: String
    },
    p2field16: {
        type: String
    },
    p2field17: {
        type: String
    },
    p2field18: {
        type: String
    },
    p3field1: {
        type: String
    },
    p3field2a: {
        type: String
    },
    p3field2b: {
        type: String
    },
    p3field3: {
        type: String
    },
    p3field4: {
        type: String
    },
    p3field5a: {
        type: String
    },
    p3field5b: {
        type: String
    },
    p3field5btxt: {
        type: String
    },
    p3field5c: {
        type: String
    },
    p3field5d: {
        type: String
    },
    p3field5e: {
        type: String
    },
    p3field5f: {
        type: String
    },
    p3field5g: {
        type: String
    },
    p3field5h: {
        type: String
    },
    p3field6a: {
        type: String
    },
    p3field6b: {
        type: String
    },
    p3field7a: {
        type: String
    },
    p3field7b: {
        type: String
    },
    p3field7btxt: {
        type: String
    },
    p3field7c: {
        type: String
    },
    p3field7d: {
        type: String
    },
    p3field7e: {
        type: String
    },
    p3field7f: {
        type: String
    },
    p3field7g: {
        type: String
    },
    p3field7h: {
        type: String
    },
    p3field8a: {
        type: String
    },
    prfield8b: {
        type: String
    },
    p3field9a: {
        type: String
    },
    p3field9b: {
        type: String
    },
    p3field9btxt: {
        type: String
    },
    p3field9c: {
        type: String
    },
    p3field9d: {
        type: String
    },
    p3field9e: {
        type: String
    },
    p3field9f: {
        type: String
    },
    p3field9g: {
        type: String
    },
    p3field9h: {
        type: String
    },
    p3field10a: {
        type: String
    },
    p3field10b: {
        type: String
    },
    p3field11: {
        type: String
    },
    p3field12a: {
        type: String
    },
    p3field12b: {
        type: String
    },
    p3field12btxt: {
        type: String
    },
    p3field12c: {
        type: String
    },
    p3field12d: {
        type: String
    },
    p3field12e: {
        type: String
    },
    p3field12f: {
        type: String
    },
    p3field12g: {
        type: String
    },
    p3field12h: {
        type: String
    },
    p3field13: {
        type: String
    },
    p3field14a: {
        type: String
    },
    p3field14b: {
        type: String
    },
    p3field15: {
        type: String
    },
    p3field16a: {
        type: String
    },
    p3field16b: {
        type: String
    },
    p3field16btxt: {
        type: String
    },
    p3field16c: {
        type: String
    },
    p3field16d: {
        type: String
    },
    p3field16e: {
        type: String
    },
    p3field16f: {
        type: String
    },
    p3field16g: {
        type: String
    },
    p3field16h: {
        type: String
    },
    p3field17: {
        type: String
    },
    p3field18a: {
        type: String
    },
    p3field18b: {
        type: String
    },
    p3field19: {
        type: String
    },
    p3field20a: {
        type: String
    },
    p3field20b: {
        type: String
    },
    p3field20btxt: {
        type: String
    },
    p3field20c: {
        type: String
    },
    p3field20d: {
        type: String
    },
    p3field20e: {
        type: String
    },
    p3field20f: {
        type: String
    },
    p3field20g: {
        type: String
    },
    p3field20h: {
        type: String
    },
    p3field21: {
        type: String
    },
    p3field22a: {
        type: String
    },
    p3field22b: {
        type: String
    },
    p4field1a: {
        type: String
    },
    p4field1b: {
        type: String
    },
    p4field1c: {
        type: String
    },
    p4field2a: {
        type: String
    },
    p4field2b: {
        type: String
    },
    p4field2c: {
        type: String
    },
    p4field3: {
        type: String
    },
    p4field4: {
        type: String
    },
    p4field5: {
        type: String
    },
    p4field6: {
        type: String
    },
    p4field7: {
        type: String
    },
    p4field8: {
        type: String
    },
    p4field9a: {
        type: String
    },
    p4field9b: {
        type: String
    },
    p4field9c: {
        type: String
    },
    p4field10a: {
        type: String
    },
    p4field10b: {
        type: String
    },
    p4field10c: {
        type: String
    },
    p4field11: {
        type: String
    },
    p4field12: {
        type: String
    },
    p4field13: {
        type: String
    },
    p4field14: {
        type: String
    },
    p4field15: {
        type: String
    },
    p4field16: {
        type: String
    },
    p5field1: {
        type: String
    },
    p5field2: {
        type: String
    },
    p5field3: {
        type: String
    },
    p5field4a: {
        type: String
    },
    p5field4b: {
        type: String
    },
    p5field4c: {
        type: String
    },
    p5field5: {
        type: String
    },
    p5field6: {
        type: String
    },
    p5field7: {
        type: String
    },
    p5field8a: {
        type: String
    },
    pfield8b: {
        type: String
    },
    p5field8c: {
        type: String
    },
    p5field9a: {
        type: String
    },
    p5field9b: {
        type: String
    },
    p5field9c: {
        type: String
    },
    p5field10: {
        type: String
    },
    p5field11a: {
        type: String
    },
    p5field11b: {
        type: String
    },
    p5field11c: {
        type: String
    },
    p5field12: {
        type: String
    },
    p5field13: {
        type: String
    },
    p5field14a: {
        type: String
    },
    p5field14b: {
        type: String
    },
    p5field15: {
        type: String
    },
    p5field16a: {
        type: String
    },
    p5field16b: {
        type: String
    },
    p5field16c: {
        type: String
    },
    p6field1: {
        type: String
    },
    p6field2a: {
        type: String
    },
    p6field2b: {
        type: String
    },
    p6field2c: {
        type: String
    },
    p6field3: {
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
    p6field7a: {
        type: String
    },
    p6field7b: {
        type: String
    },
    p6field7c: {
        type: String
    },
    p6field8: {
        type: String
    },
    p6field9: {
        type: String
    },
    p6field10: {
        type: String
    },
    p6field11: {
        type: String
    },
    p6field12a: {
        type: String
    },
    p6field12b: {
        type: String
    },
    p6field12c: {
        type: String
    },
    p6field13: {
        type: String
    },
    p6field14: {
        type: String
    },
    p6field15: {
        type: String
    },
    p6field16: {
        type: String
    },
    p7field1: {
        type: String
    },
    p7field2a: {
        type: Boolean
    },
    p7field2b: {
        type: Boolean
    },
    p7field2c: {
        type: Boolean
    },
    p7field2d: {
        type: Boolean
    },
    p7field2f: {
        type: Boolean
    },
    p7field3a: {
        type: String
    },
    p7field3b: {
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
    p8field1: {
        type: String
    },
    p8field2: {
        type: String
    },
    p8field3a: {
        type: String
    },
    p8field3b: {
        type: String
    },
    p8field3c: {
        type: String
    },
    p8field4: {
        type: String
    },
    p8field5a: {
        type: String
    },
    p8field5b: {
        type: String
    },
    p8field6: {
        type: String
    },
    p8field7a: {
        type: String
    },
    p8field7b: {
        type: String
    },
    p8field7c: {
        type: String
    },
    p8field8: {
        type: String
    },
    p8field9a: {
        type: String
    },
    p8field9b: {
        type: String
    },
    p8field10: {
        type: String
    },
    p8field11a: {
        type: String
    },
    p8field11b: {
        type: String
    },
    p8field11c: {
        type: String
    },
    p8field12: {
        type: String
    },
    p8field13a: {
        type: String
    },
    p8field13b: {
        type: String
    },
    p8field14: {
        type: String
    },
    p8field15: {
        type: String
    },
    p8field16: {
        type: String
    },
    p8field17: {
        type: String
    },
    p8field18: {
        type: String
    },
    p8field19: {
        type: String
    },
    p8field20: {
        type: String
    },
    p8field21: {
        type: String
    },
    p8field22: {
        type: String
    },
    p8field23: {
        type: String
    },
    p8field24a: {
        type: String
    },
    p8field24b: {
        type: String
    },
    p8field24c: {
        type: String
    },
    p8field25: {
        type: String
    },
    p8field26: {
        type: String
    },
    p8field27: {
        type: String
    },
    p8field28: {
        type: String
    },
    p8field29: {
        type: String
    },
    p8field30: {
        type: String
    },
    p8field31: {
        type: String
    },
    p8field32: {
        type: String
    },
    p8field33: {
        type: String
    },
    p8field34: {
        type: String
    },
    p8field35: {
        type: String
    },
    p8field36: {
        type: String
    },
    p8field37: {
        type: String
    },
    p8field38: {
        type: String
    },
    p8field39: {
        type: String
    },
    p8field40: {
        type: String
    },
    p8field41: {
        type: String
    },
    p8field42: {
        type: String
    },
    p8field43: {
        type: String
    },
    p8field44: {
        type: String
    },
    p8field45: {
        type: String
    },
    p8field46a: {
        type: String
    },
    p8field46b: {
        type: String
    },
    p8field46c: {
        type: String
    },
    p8field46d: {
        type: String
    },
    p8field46e: {
        type: String
    },
    p8field47: {
        type: String
    },
    p8field48a: {
        type: String
    },
    p8field48b: {
        type: String
    },
    p8field48c: {
        type: String
    },
    p8field48d: {
        type: String
    },
    p8field48e: {
        type: String
    },
    p8field49: {
        type: String
    },
    p8field50: {
        type: String
    },
    p8field51a: {
        type: String
    },
    p8field51b: {
        type: String
    },
    p8field51c: {
        type: String
    },
    p8field51d: {
        type: String
    },
    p8field51e: {
        type: String
    },
    p8field51f: {
        type: String
    },
    p8field52: {
        type: String
    },
    p8field53: {
        type: String
    },
    p8field54: {
        type: String
    },
    p8field55: {
        type: String
    },
    p8field56: {
        type: String
    },
    p8field57: {
        type: String
    },
    p8field58a: {
        type: String
    },
    p8field58b: {
        type: String
    },
    p8field58c: {
        type: String
    },
    p8field58d: {
        type: String
    },
    p8field59: {
        type: String
    },
    p8field60: {
        type: String
    },
    p8field61: {
        type: String
    },
    p8field62a: {
        type: Boolean
    },
    p8field62b: {
        type: Boolean
    },
    p8field62c: {
        type: Boolean
    },
    p8field62d: {
        type: Boolean
    },
    p8field62e: {
        type: Boolean
    },
    p8field62f: {
        type: Boolean
    },
    p8field62g: {
        type: Boolean
    },
    p8field62h: {
        type: Boolean
    },
    p8field62i: {
        type: Boolean
    },
    p8field62j: {
        type: Boolean
    },
    p8field62k: {
        type: Boolean
    },
    p8field62l: {
        type: Boolean
    },
    p8field62m: {
        type: Boolean
    },
    p8field62m1: {
        type: String
    },
    p8field62n: {
        type: Boolean
    },
    p8field63a: {
        type: String
    },
    p8field63b: {
        type: String
    },
    p8field63c: {
        type: String
    },
    p8field64: {
        type: String
    },
    p8field65: {
        type: String
    },
    p8field66: {
        type: String
    },
    p8field67: {
        type: String
    },
    p8field68: {
        type: String
    },
    p8field69: {
        type: String
    },
    p8field70: {
        type: String
    },
    p8field71: {
        type: String
    },
    p8field72a: {
        type: String
    },
    p8field72b: {
        type: String
    },
    p8field73a: {
        type: String
    },
    p8field73b: {
        type: String
    },
    p8field74: {
        type: String
    },
    p8field75: {
        type: String
    },
    p8field76: {
        type: String
    },
    p8field77: {
        type: String
    },
    p8field78: {
        type: String
    },
    p8field79a: {
        type: String
    },
    p8field79b: {
        type: String
    },
    p8field79c: {
        type: String
    },
    p8field80a: {
        type: String
    },
    p8field80b: {
        type: String
    },
    p9field1: {
        type: String
    },
    p9field2a: {
        type: Boolean
    },
    p9field2atxt: {
        type: String
    },
    p9field2b: {
        type: Boolean
    },
    p9field2btxt: {
        type: String
    },
    p9field2c: {
        type: Boolean
    },
    p9field2ctxt: {
        type: String
    },
    p10field1a: {
        type: Boolean
    },
    p10field1b: {
        type: Boolean
    },
    p10field1btxt: {
        type: String
    },
    p10field2: {
        type: Boolean
    },
    p10field2txt: {
        type: String
    },
    p10field3: {
        type: String
    },
    p10field4: {
        type: String
    },
    p10field5: {
        type: String
    },
    p11field1a: {
        type: String
    },
    p11field1b: {
        type: String
    },
    p11field2: {
        type: String
    },
    p11field3a: {
        type: String
    },
    p11field3b: {
        type: String
    },
    p11field3btxt: {
        type: String
    },
    p11field3c: {
        type: String
    },
    p11field3d: {
        type: String
    },
    p11field3e: {
        type: String
    },
    p11field3f: {
        type: String
    },
    p11field3g: {
        type: String
    },
    p11field3h: {
        type: String
    },
    p11field4: {
        type: String
    },
    p11field5: {
        type: String
    },
    p11field6: {
        type: String
    },
    p11fieldlang: {
        type: String
    },
    p12field1a: {
        type: String
    },
    p12field1b: {
        type: String
    },
    p12field2: {
        type: String
    },
    p12field3a: {
        type: String
    },
    p12field3b: {
        type: String
    },
    p12field3btxt: {
        type: String
    },
    p12field3c: {
        type: String
    },
    p12field3d: {
        type: String
    },
    p12field3e: {
        type: String
    },
    p12field3f: {
        type: String
    },
    p12field3g: {
        type: String
    },
    p12field3h: {
        type: String
    },
    p12field4: {
        type: String
    },
    p12field5: {
        type: String
    },
    p12field6: {
        type: String
    },
    p12field7a: {
        type: Boolean
    },
    p12field7b1: {
        type: Boolean
    },
    p12field7b2: {
        type: String
    },
    p14field1a: {
        type: String
    },
    p14field1b: {
        type: String
    },
    p14field1c: {
        type: String
    },
    p14field2: {
        type: String
    },
    p14field3a: {
        type: String
    },
    p14field3b: {
        type: String
    },
    p14field3c: {
        type: String
    },
    p14field3d: {
        type: String
    },
    p14field4a: {
        type: String
    },
    p14field4b: {
        type: String
    },
    p14field4c: {
        type: String
    },
    p14field4d: {
        type: String
    },
    p14field5a: {
        type: String
    },
    p14field5b: {
        type: String
    },
    p14field5c: {
        type: String
    },
    p14field5d: {
        type: String
    },
    p14field6a: {
        type: String
    },
    p14field6b: {
        type: String
    },
    p14field6c: {
        type: String
    },
    p14field6d: {
        type: String
    },
    p14field7a: {
        type: String
    },
    p14field7b: {
        type: String
    },
    p14field7c: {
        type: String
    },
    p14field7d: {
        type: String
    },
    p15field1: {
        type: String
    },
    p15field1a: {
        type: String
    },
    p15field2: {
        type: String
    },
    p15field3: {
        type: String
    },
    p15field4: {
        type: String
    },
    p16field2: {
        type: String
    },
    p17field1: {
        type: String
    },
    p17field2: {
        type: String
    },
    p17field3a: {
        type: String
    },
    p17field3b: {
        type: String
    },
    p17field4a: {
        type: String
    },
    p17field4b: {
        type: String
    },
    p17field4c: {
        type: String
    },
    p18field1: {
        type: String
    },
    p18field2: {
        type: String
    },
    p19field1aa: {
        type: String
    },
    p19field1ab: {
        type: String
    },
    p19field1ac: {
        type: String
    },
    p19field1ad: {
        type: String
    },
    p19field1af: {
        type: String
    },
    p19field1ag: {
        type: String
    },
    p19field1ah: {
        type: String
    },
    p19field1ba: {
        type: String
    },
    p19field1bb: {
        type: String
    },
    p19field1bc: {
        type: String
    },
    p19field1bd: {
        type: String
    },
    p19field1be: {
        type: String
    },
    p19field1bf: {
        type: String
    },
    p19field1bg: {
        type: String
    },
    p19field1bh: {
        type: String
    },
    p19field1ca: {
        type: String
    },
    p19field1cb: {
        type: String
    },
    p19field1cc: {
        type: String
    },
    p19field1cd: {
        type: String
    },
    p19field1ce: {
        type: String
    },
    p19field1cf: {
        type: String
    },
    p19field1cg: {
        type: String
    },
    p19field1ch: {
        type: String
    },
    p19field1da: {
        type: String
    },
    p19field1db: {
        type: String
    },
    p19field1dc: {
        type: String
    },
    p19field1dd: {
        type: String
    },
    p19field1de: {
        type: String
    },
    p19field1df: {
        type: String
    },
    p19field1dg: {
        type: String
    },
    p19field1dh: {
        type: String
    },
    p19field1e: {
        type: String
    },
    p20field1aa: {
        type: String
    },
    p20field1ab: {
        type: String
    },
    p20field1ac: {
        type: String
    },
    p20field1ad: {
        type: String
    },
    p20field1ae: {
        type: String
    },
    p20field1aetxt: {
        type: String
    },
    p20field1af: {
        type: String
    },
    p20field1ag: {
        type: String
    },
    p20field1ah: {
        type: String
    },
    p20field1ba: {
        type: String
    },
    p20field1bb: {
        type: String
    },
    p20field1bc: {
        type: String
    },
    p20field1bd: {
        type: String
    },
    p20field1be: {
        type: String
    },
    p20field1betxt: {
        type: String
    },
    p20field1bf: {
        type: String
    },
    p20field1bg: {
        type: String
    },
    p20field1bh: {
        type: String
    },
    p20field1ca: {
        type: String
    },
    p20field1cb: {
        type: String
    },
    p20field1cc: {
        type: String
    },
    p20field1cd: {
        type: String
    },
    p20field1ce: {
        type: String
    },
    p20field1cetxt: {
        type: String
    },
    p20field1cf: {
        type: String
    },
    p20field1cg: {
        type: String
    },
    p20field1ch: {
        type: String
    },
    p20field2: {
        type: String
    },
    p20field3: {
        type: String
    },
    p20field4: {
        type: String
    },
    p20field5: {
        type: String
    },
    p20field6aa: {
        type: String
    },
    p20field6ab: {
        type: String
    },
    p20field6ac: {
        type: String
    },
    p20field6ad: {
        type: String
    },
    p20field6ae: {
        type: String
    },
    p20field6af: {
        type: String
    },
    p20field6ag: {
        type: String
    },
    p20field6ah: {
        type: String
    },
    p20field6ba: {
        type: String
    },
    p20field6bb: {
        type: String
    },
    p20field6bc: {
        type: String
    },
    p20field6bd: {
        type: String
    },
    p20field6be: {
        type: String
    },
    p20field6bf: {
        type: String
    },
    p20field6bg: {
        type: String
    },
    p20field6bh: {
        type: String
    },
    p20field6ca: {
        type: String
    },
    p20field6cb: {
        type: String
    },
    p20field6cc: {
        type: String
    },
    p20field6cd: {
        type: String
    },
    p20field6ce: {
        type: String
    },
    p20field6cf: {
        type: String
    },
    p20field6cg: {
        type: String
    },
    p20field6ch: {
        type: String
    },
    p20field6da: {
        type: String
    },
    p20field6db: {
        type: String
    },
    p20field6dc: {
        type: String
    },
    p20field6dd: {
        type: String
    },
    p20field6de: {
        type: String
    },
    p20field6df: {
        type: String
    },
    p20field6dg: {
        type: String
    },
    p20field6dh: {
        type: String
    },
    p20field7: {
        type: String
    },
    p20field8: {
        type: String
    },
    p20field91: {
        type: String
    },
    p20field9a2: {
        type: String
    },
    p20field9a3: {
        type: String
    },
    p20field9b1: {
        type: String
    },
    p20field9b2: {
        type: String
    },
    p20field9b3: {
        type: String
    },
    p20field9c1: {
        type: String
    },
    p20field9c2: {
        type: String
    },
    p20field9c3: {
        type: String
    },
    p20field9d1: {
        type: String
    },
    p20field9d2: {
        type: String
    },
    p20field9d3: {
        type: String
    },
    p20field9e1: {
        type: String
    },
    p20field9e2: {
        type: String
    },
    p20field9e3: {
        type: String
    },
    p20field9f1: {
        type: String
    },
    p20field9f2: {
        type: String
    },
    p20field9f3: {
        type: String
    },
    p20field9g1: {
        type: String
    },
    p20field9g2: {
        type: String
    },
    p20field9g3: {
        type: String
    },
    p20field9h: {
        type: String
    },
    p20field9i: {
        type: String
    },
    p20field10a: {
        type: String
    },
    p20field10b: {
        type: String
    },
    p20field10c: {
        type: String
    },
    p20field10d: {
        type: String
    },
    p20field10e: {
        type: String
    },
    p20field10f: {
        type: String
    },
    p20field10g: {
        type: String
    },
    p20field10h: {
        type: String
    },
    p20field10i: {
        type: String
    },
    p20field11: {
        type: String
    },
    p20field12: {
        type: String
    },
    p20field12txt: {
        type: String
    },
    p20field13: {
        type: String
    },
    p20field14: {
        type: String
    },
    p20field14a1: {
        type: String
    },
    p20field14a2: {
        type: String
    },
    p20field14a3: {
        type: String
    },
    p20field14a4: {
        type: String
    },
    p20field14b1: {
        type: String
    },
    p20field14b2: {
        type: String
    },
    p20field14b3: {
        type: String
    },
    p20field14b4: {
        type: String
    },
    p20field14c1: {
        type: String
    },
    p20field14c2: {
        type: String
    },
    p20field14c3: {
        type: String
    },
    p20field14c4: {
        type: String
    },
    p20field15: {
        type: String
    },
    p20field15b: {
        type: String
    },
    p20field15C: {
        type: String
    },
    p20field15d: {
        type: String
    },
    p20field16a: {
        type: Boolean
    },
    p20field16b: {
        type: Boolean
    },
    p20field16c: {
        type: Boolean
    },
    p20field16d: {
        type: Boolean
    },
    p20field16e: {
        type: Boolean
    },
    p20field16f: {
        type: Boolean
    },
    p20field16g: {
        type: Boolean
    },
    p20field16h: {
        type: Boolean
    },
    p20field16i: {
        type: Boolean
    },
    p20field16j: {
        type: Boolean
    },
    p20field16k: {
        type: Boolean
    },
    p20field16l: {
        type: Boolean
    },
    p20field17a: {
        type: String
    },
    p20field17b: {
        type: String
    },
    p20field18a1: {
        type: String
    },
    p20field18a2: {
        type: String
    },
    p20field18a3: {
        type: String
    },
    p20field18a4: {
        type: String
    },
    p20field18a5: {
        type: String
    },
    p20field18b1: {
        type: String
    },
    p20field18b2: {
        type: String
    },
    p20field18b3: {
        type: String
    },
    p20field18b4: {
        type: String
    },
    p20field18b5: {
        type: String
    },
    p20field18c1: {
        type: String
    },
    p20field18c2: {
        type: String
    },
    p20field18c3: {
        type: String
    },
    p20field18c4: {
        type: String
    },
    p20field18c5: {
        type: String
    },
    p20field19a: {
        type: Boolean
    },
    p20field19b: {
        type: Boolean
    },
    p20field19c: {
        type: Boolean
    },
    p20field19d: {
        type: Boolean
    },
    p20field19e: {
        type: Boolean
    },
    p20field19f: {
        type: Boolean
    },
    p20field19g: {
        type: Boolean
    },
    p20field19h: {
        type: Boolean
    },
    p20field20a: {
        type: Boolean
    },
    p20field20b: {
        type: Boolean
    },
    p20field20c: {
        type: Boolean
    },
    p20field20d: {
        type: Boolean
    },
    p20field20e: {
        type: Boolean
    },
    p20field20f: {
        type: Boolean
    },
    p20field21a: {
        type: String
    },
    p20field21b: {
        type: String
    },
    p20field22: {
        type: String
    },
    p20field23a: {
        type: Boolean
    },
    p20field23a1: {
        type: Boolean
    },
    p20field23a2: {
        type: Boolean
    },
    p20field23a3: {
        type: Boolean
    },
    p20field23a4: {
        type: Boolean
    },
    p20field23a5: {
        type: Boolean
    },
    p20field23a6: {
        type: Boolean
    },
    p20field23a7: {
        type: Boolean
    },
    p20field23a8: {
        type: Boolean
    },
    p20field23a9: {
        type: Boolean
    },
    p20field23b: {
        type: Boolean
    },
    p20field23b1: {
        type: Boolean
    },
    p20field23b2: {
        type: Boolean
    },
    p20field23b3: {
        type: Boolean
    },
    p20field23b4: {
        type: Boolean
    },
    p20field23b5: {
        type: Boolean
    },
    p20field23b6: {
        type: Boolean
    },
    p20field23b7: {
        type: Boolean
    },
    p20field23b8: {
        type: Boolean
    },
    p20field23b9: {
        type: Boolean
    },
    p20field24: {
        type: String
    },
    p20field25: {
        type: String
    },
    p20field26: {
        type: String
    },
    p20field26a1: {
        type: String
    },
    p20field26a2: {
        type: String
    },
    p20field26a3: {
        type: String
    },
    p20field26b1: {
        type: String
    },
    p20field26b2: {
        type: String
    },
    p20field26b3: {
        type: String
    },
    p20field26c1: {
        type: String
    },
    p20field26c2: {
        type: String
    },
    p20field26c3: {
        type: String
    },
    p21field1: {
        type: String
    },
    p21field2: {
        type: String
    },
    p21field1a: {
        type: String
    },
    p21field3a1: {
        type: String
    },
    p21field3a2: {
        type: String
    },
    p21field3a3: {
        type: String
    },
    p21field3a4: {
        type: String
    },
    p21field3a5: {
        type: String
    },
    p21field3a6: {
        type: String
    },
    p21field3b1: {
        type: String
    },
    p21field3b2: {
        type: String
    },
    p21field3b3: {
        type: String
    },
    p21field3b4: {
        type: String
    },
    p21field3b5: {
        type: String
    },
    p21field3b6: {
        type: String
    },
    p21field3c1: {
        type: String
    },
    p21field3c2: {
        type: String
    },
    p21field3c3: {
        type: String
    },
    p21field3c4: {
        type: String
    },
    p21field3c5: {
        type: String
    },
    p21field3c6: {
        type: String
    },
    p21field3d1: {
        type: String
    },
    p21field3d2: {
        type: String
    },
    p21field3d3: {
        type: String
    },
    p21field3d4: {
        type: String
    },
    p21field3d5: {
        type: String
    },
    p21field3d6: {
        type: String
    },
    p21field4: {
        type: String
    },
    p21field4a1: {
        type: String
    },
    p21field4a2: {
        type: String
    },
    p21field4a3: {
        type: String
    },
    p21field4a4: {
        type: String
    },
    p21field4a5: {
        type: String
    },
    p21field4b1: {
        type: String
    },
    p21field4b2: {
        type: String
    },
    p21field4b3: {
        type: String
    },
    p21field4b4: {
        type: String
    },
    p21field4b5: {
        type: String
    },
    p21field4c1: {
        type: String
    },
    p21field4c2: {
        type: String
    },
    p21field4c3: {
        type: String
    },
    p21field4c4: {
        type: String
    },
    p21field4c5: {
        type: String
    },
    p21field5a1: {
        type: String
    },
    p21field5a2: {
        type: String
    },
    p21field5a3: {
        type: String
    },
    p21field5a4: {
        type: String
    },
    p21field5b1: {
        type: String
    },
    p21field5b2: {
        type: String
    },
    p21field5b3: {
        type: String
    },
    p21field5b4: {
        type: String
    },
    p21field5c1: {
        type: String
    },
    p21field5c2: {
        type: String
    },
    p21field5c3: {
        type: String
    },
    p21field5c4: {
        type: String
    },
    p21field6: {
        type: String
    },
    p21field6b: {
        type: String
    },
    p21field7: {
        type: String
    },
});

module.exports = mongoose.model('ApplicantData', immAppDataSchema);