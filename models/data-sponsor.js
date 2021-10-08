var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var dataSponsorSchema = new Schema({
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

    i130: {
        type: Boolean
    },
    i130a: {
        type: Boolean
    },
    p1field2: {
        type: String
    },
    p1field3: {
        type: String
    },
    p1field4: {
        type: String
    },
    p2field1: {
        type: String
    },
    p2field2: {
        type: String
    },
    p2field3: {
        type: String
    },
    p2field4a: {
        type: String
    },
    p2field4b: {
        type: String
    },
    p2field4c: {
        type: String
    },
    p2field5a: {
        type: String
    },
    p2field5b: {
        type: String
    },
    p2field5c: {
        type: String
    },
    p3field6: {
        type: String
    },
    p2field7: {
        type: String
    },
    p2field8: {
        type: String
    },
    p2field9: {
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
    p2field10ctxt: {
        type: String
    },
    p2field10d: {
        type: String
    },
    p2field10e: {
        type: String
    },
    p2field10f: {
        type: String
    },
    p2field10g: {
        type: String
    },
    p2field10h: {
        type: String
    },
    p2field10i: {
        type: String
    },
    p2field11: {
        type: String
    },
    p2field12a: {
        type: String
    },
    p2field12b: {
        type: String
    },
    p2field12btxt: {
        type: String
    },
    p2field12c: {
        type: String
    },
    p2field12d: {
        type: String
    },
    p2field12e: {
        type: String
    },
    p2field12f: {
        type: String
    },
    p2field12g: {
        type: String
    },
    p2field12h: {
        type: String
    },
    p2field13a: {
        type: String
    },
    p2field14a: {
        type: String
    },
    p2field14b: {
        type: String
    },
    p2field14btxt: {
        type: String
    },
    p2field14c: {
        type: String
    },
    p2field14d: {
        type: String
    },
    p2field14e: {
        type: String
    },
    p2field14f: {
        type: String
    },
    p2field14g: {
        type: String
    },
    p2field14h: {
        type: String
    },
    p2field15a: {
        type: String
    },
    p2field15b: {
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
    p2field19a: {
        type: String
    },
    p2field19b: {
        type: String
    },
    p2field19c: {
        type: String
    },
    p2field19d: {
        type: String
    },
    p2field20a: {
        type: String
    },
    p2field20b: {
        type: String
    },
    p2field20c: {
        type: String
    },
    p2field21: {
        type: String
    },
    p2field22a: {
        type: String
    },
    p2field22b: {
        type: String
    },
    p2field22c: {
        type: String
    },
    p2field23: {
        type: String
    },
    p2field24a: {
        type: String
    },
    p2field24b: {
        type: String
    },
    p2field24c: {
        type: String
    },
    p2field25: {
        type: String
    },
    p2field26: {
        type: String
    },
    p2field27: {
        type: String
    },
    p2field28: {
        type: String
    },
    p2field29: {
        type: String
    },
    p2field30a: {
        type: String
    },
    pdfield30b: {
        type: String
    },
    p2field30c: {
        type: String
    },
    p2field31: {
        type: String
    },
    p2field32: {
        type: String
    },
    p2field33: {
        type: String
    },
    p2field34: {
        type: String
    },
    p2field35: {
        type: String
    },
    p2field36: {
        type: String
    },
    p2field37: {
        type: String
    },
    p2field38: {
        type: String
    },
    p2field39a: {
        type: String
    },
    p2field39b: {
        type: String
    },
    p2field39c: {
        type: String
    },
    p2field40a: {
        type: String
    },
    p2field40b: {
        type: String
    },
    p2field40c: {
        type: String
    },
    p2field40d: {
        type: String
    },
    p2field41: {
        type: String
    },
    p2field42: {
        type: String
    },
    p2field43a: {
        type: String
    },
    p2field43b: {
        type: String
    },
    p2field43btxt: {
        type: String
    },
    p2field43c: {
        type: String
    },
    p2field43d: {
        type: String
    },
    p2field43e: {
        type: String
    },
    p2field43f: {
        type: String
    },
    p2field43g: {
        type: String
    },
    p2field43h: {
        type: String
    },
    p2field44: {
        type: String
    },
    p2field45a: {
        type: String
    },
    p2field46: {
        type: String
    },
    p2field47a: {
        type: String
    },
    p2field47b: {
        type: String
    },
    p2field47btxt: {
        type: String
    },
    p2field47c: {
        type: String
    },
    p2field47d: {
        type: String
    },
    p2field47f: {
        type: String
    },
    p2field47g: {
        type: String
    },
    p2field47h: {
        type: String
    },
    p2field48: {
        type: String
    },
    p2field49a: {
        type: String
    },
    p2field49b: {
        type: String
    },
    p3field1: {
        type: String
    },
    p3field2a: {
        type: Boolean
    },
    p3field2b: {
        type: Boolean
    },
    p3field2c: {
        type: Boolean
    },
    p3field2d: {
        type: Boolean
    },
    p3field2e: {
        type: Boolean
    },
    p3field3a: {
        type: String
    },
    p3field3b: {
        type: String
    },
    p3field4: {
        type: String
    },
    p3field5: {
        type: String
    },
    p2field6: {
        type: String
    },
    p4field1: {
        type: String
    },
    p4field2: {
        type: String
    },
    p4field3: {
        type: String
    },
    p4field4a: {
        type: String
    },
    p4field5b: {
        type: String
    },
    p4field4c: {
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
    p4field9: {
        type: String
    },
    p4field10: {
        type: String
    },
    p4field11a: {
        type: String
    },
    p4field11b: {
        type: String
    },
    p4field11btxt: {
        type: String
    },
    p4field11c: {
        type: String
    },
    p4field11d: {
        type: String
    },
    p4field11f: {
        type: String
    },
    p4field11g: {
        type: String
    },
    p4field11h: {
        type: String
    },
    p4field12a: {
        type: String
    },
    p4field12b: {
        type: String
    },
    p4field12btxt: {
        type: String
    },
    p4field12c: {
        type: String
    },
    p4field12d: {
        type: String
    },
    p4field13a: {
        type: String
    },
    p4field13b: {
        type: String
    },
    p4field13btxt: {
        type: String
    },
    p4field13c: {
        type: String
    },
    p4field13d: {
        type: String
    },
    p4field13e: {
        type: String
    },
    p4field13f: {
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
    p4field17: {
        type: String
    },
    p4field18: {
        type: String
    },
    p4field19: {
        type: String
    },
    p4field20a: {
        type: String
    },
    p4field20b: {
        type: String
    },
    p4field20c: {
        type: String
    },
    p4field20d: {
        type: String
    },
    p4field21a: {
        type: String
    },
    p4field21b: {
        type: String
    },
    p4field21c: {
        type: String
    },
    p4field22: {
        type: String
    },
    p4field23a: {
        type: String
    },
    p4field23b: {
        type: String
    },
    p4field23c: {
        type: String
    },
    p4field24: {
        type: String
    },
    p4field25a: {
        type: String
    },
    p4field25b: {
        type: String
    },
    p4field25c: {
        type: String
    },
    p4field26: {
        type: String
    },
    p4field27: {
        type: String
    },
    p4field28: {
        type: String
    },
    p4field29a: {
        type: String
    },
    p4field29b: {
        type: String
    },
    p4field29c: {
        type: String
    },
    p4field30: {
        type: String
    },
    p4field31: {
        type: String
    },
    p4field32: {
        type: String
    },
    p4field33a: {
        type: String
    },
    p4field33b: {
        type: String
    },
    p4field33c: {
        type: String
    },
    p4field34: {
        type: String
    },
    p4field35: {
        type: String
    },
    p4field36: {
        type: String
    },
    p4field37a: {
        type: String
    },
    p4field37b: {
        type: String
    },
    p4field37c: {
        type: String
    },
    p4field38: {
        type: String
    },
    p4field39: {
        type: String
    },
    p4field40: {
        type: String
    },
    p4field41a: {
        type: String
    },
    p4field41b: {
        type: String
    },
    p4field41c: {
        type: String
    },
    p4field42: {
        type: String
    },
    p4field43: {
        type: String
    },
    p4field44: {
        type: String
    },
    p4field45: {
        type: String
    },
    p4field46a: {
        type: String
    },
    p4field46b: {
        type: String
    },
    p4field46c: {
        type: String
    },
    p4field46d: {
        type: String
    },
    p4field47: {
        type: String
    },
    p4field48: {
        type: String
    },
    p4field49: {
        type: String
    },
    p4field50: {
        type: String
    },
    p4field51a: {
        type: String
    },
    p4field51b: {
        type: String
    },
    p4field51c: {
        type: String
    },
    p4field51ctxt: {
        type: String
    },
    p4field51d: {
        type: String
    },
    p4field51e: {
        type: String
    },
    p4field51f: {
        type: String
    },
    p4field51g: {
        type: String
    },
    p4fieldh: {
        type: String
    },
    p4field51i: {
        type: String
    },
    p4field52: {
        type: String
    },
    p4field53: {
        type: String
    },
    p4field54: {
        type: String
    },
    p4field55a: {
        type: String
    },
    p4field55b: {
        type: String
    },
    p4field56: {
        type: String
    },
    p4field57a: {
        type: String
    },
    p4field57b: {
        type: String
    },
    p4field57c: {
        type: String
    },
    p4field58a: {
        type: String
    },
    p4field58b: {
        type: String
    },
    p4field58btxt: {
        type: String
    },
    p4field58c: {
        type: String
    },
    p4field58d: {
        type: String
    },
    p4field58e: {
        type: String
    },
    p4field58f: {
        type: String
    },
    p4field59a: {
        type: String
    },
    p4field59b: {
        type: String
    },
    p4field59btxt: {
        type: String
    },
    p4field59c: {
        type: String
    },
    p4field59d: {
        type: String
    },
    p4field59f: {
        type: String
    },
    p4field59g: {
        type: String
    },
    p4field59h: {
        type: String
    },
    p4field60a: {
        type: String
    },
    p4field60b: {
        type: String
    },
    p4field61a: {
        type: String
    },
    p4field61b: {
        type: String
    },
    p4field62a: {
        type: String
    },
    p4field62b: {
        type: String
    },
    p4field62c: {
        type: String
    },
    p5field2a: {
        type: String
    },
    p5field2b: {
        type: String
    },
    p5field2c: {
        type: String
    },
    p5field3a: {
        type: String
    },
    p5field3b: {
        type: String
    },
    p5field4: {
        type: String
    },
    p5field5: {
        type: String
    },
    p5field6a: {
        type: String
    },
    p5field6b: {
        type: String
    },
    p5field6c: {
        type: String
    },
    p5field7: {
        type: String
    },
    p5field8a: {
        type: String
    },
    p5field8b: {
        type: String
    },
    p5field8c: {
        type: String
    },
    p5field9: {
        type: String
    },
    p6field1a: {
        type: Boolean
    },
    p6field1b: {
        type: Boolean
    },
    p6field1btxt: {
        type: String
    },
    p6field2: {
        type: Boolean
    },
    p6field2txt: {
        type: String
    },
    p6field3: {
        type: String
    },
    p6field4: {
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
    p7fieldLang: {
        type: String
    },
    p8field1a: {
        type: String
    },
    p8field1b: {
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
    p8field3btxt: {
        type: String
    },
    p8field3c: {
        type: String
    },
    p8field3d: {
        type: String
    },
    p8field3e: {
        type: String
    },
    p8field3f: {
        type: String
    },
    p8field3g: {
        type: String
    },
    p8field3h: {
        type: String
    },
    p8field4: {
        type: String
    },
    p8field5: {
        type: String
    },
    p8field6: {
        type: String
    },
    p8field7a: {
        type: Boolean
    },
    p8field7b: {
        type: Boolean
    },
    p8field7c: {
        type: String
    },
    p9field1: {
        type: String
    },
    p9field2: {
        type: String
    },
    p9field3a: {
        type: String
    },
    p9field3b: {
        type: String
    },
    p9field3c: {
        type: String
    },
    p9field4a: {
        type: String
    },
    p9field4b: {
        type: String
    },
    p9field4btxt: {
        type: String
    },
    p9field4c: {
        type: String
    },
    p9field4d: {
        type: String
    },
    p9field4e: {
        type: String
    },
    p9field4f: {
        type: String
    },
    p9field4g: {
        type: String
    },
    p9field4h: {
        type: String
    },
    p9field5a: {
        type: String
    },
    p9field6a: {
        type: String
    },
    p9field6b: {
        type: String
    },
    p9field6btxt: {
        type: String
    },
    p9field6c: {
        type: String
    },
    p9field6d: {
        type: String
    },
    p9field6e: {
        type: String
    },
    p9field6f: {
        type: String
    },
    p9field6g: {
        type: String
    },
    p9field6h: {
        type: String
    },
    p9field7a: {
        type: String
    },
    p9field7b: {
        type: String
    },
    p9field8a: {
        type: String
    },
    p9field8b: {
        type: String
    },
    p9field8btxt: {
        type: String
    },
    p9field8c: {
        type: String
    },
    p9field8d: {
        type: String
    },
    p9field8e: {
        type: String
    },
    p9field8f: {
        type: String
    },
    p9field9a: {
        type: String
    },
    p9field9b: {
        type: String
    },
    p9field10a: {
        type: String
    },
    p9field10b: {
        type: String
    },
    p9field10c: {
        type: String
    },
    p9field11: {
        type: String
    },
    p9field12: {
        type: String
    },
    p9field13: {
        type: String
    },
    p9field14: {
        type: String
    },
    p9field15: {
        type: String
    },
    p9field16: {
        type: String
    },
    p9field17a: {
        type: String
    },
    p9field17b: {
        type: String
    },
    p9field17c: {
        type: String
    },
    p9field18: {
        type: String
    },
    p9field19: {
        type: String
    },
    p9field20: {
        type: String
    },
    p9field21: {
        type: String
    },
    p9field22: {
        type: String
    },
    p9field23: {
        type: String
    },
    p10field1: {
        type: String
    },
    p10field2a: {
        type: String
    },
    p10field2b: {
        type: String
    },
    p10field2btxt: {
        type: String
    },
    p10field2c: {
        type: String
    },
    p10field2d: {
        type: String
    },
    p10field2e: {
        type: String
    },
    p10field2f: {
        type: String
    },
    p10field2g: {
        type: String
    },
    p10field2h: {
        type: String
    },
    p10field3: {
        type: String
    },
    p10field4a: {
        type: String
    },
    p10field5: {
        type: String
    },
    p10field6a: {
        type: String
    },
    p10field6b: {
        type: String
    },
    p10field6btxt: {
        type: String
    },
    p10field6c: {
        type: String
    },
    p10field6d: {
        type: String
    },
    p10field6f: {
        type: String
    },
    p10field6g: {
        type: String
    },
    p10field6h: {
        type: String
    },
    p10field7: {
        type: String
    },
    p10field8a: {
        type: String
    },
    p10field8b: {
        type: String
    },
    p11field1: {
        type: String
    },
    p11field2a: {
        type: String
    },
    p11field2b: {
        type: String
    },
    p11field2btxt: {
        type: String
    },
    p11field2c: {
        type: String
    },
    p11field2d: {
        type: String
    },
    p11field2e: {
        type: String
    },
    p11field2f: {
        type: String
    },
    p11field2g: {
        type: String
    },
    p11field2h: {
        type: String
    },
    p11field3: {
        type: String
    },
    p11field4a: {
        type: String
    },
    p11field4b: {
        type: String
    },
    p11field5: {
        type: Boolean
    },
    p11field6: {
        type: Boolean
    },
    p11field6txt: {
        type: String
    },
    p11field7: {
        type: Boolean
    },
    p11field7txt: {
        type: String
    },
    p11field8: {
        type: String
    },
    p11field9: {
        type: String
    },
    p11field10: {
        type: String
    },
    p12field1a: {
        type: String
    },
    p12field1b: {
        type: String
    },
    p12field1c: {
        type: String
    },
    p12field2a: {
        type: String
    },
    p12field2b: {
        type: String
    },
    p2field2c: {
        type: String
    },
    p2field2ctxt: {
        type: String
    },
    p12field2d: {
        type: String
    },
    p12field2e: {
        type: String
    },
    p12field2f: {
        type: String
    },
    p12field2g: {
        type: String
    },
    p12field2h: {
        type: String
    },
    p12field2i: {
        type: String
    },
    p12field3: {
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
    p12field7: {
        type: String
    },
    p13field1: {
        type: String
    },
    p13field2: {
        type: Boolean
    },
    p13field3: {
        type: Boolean
    },
    p13field4a: {
        type: String
    },
    p13field4b: {
        type: String
    },
    p13field4c: {
        type: String
    },
    p13field5: {
        type: String
    },
    p13field6: {
        type: String
    },
    p13field7: {
        type: String
    },
    p13field8: {
        type: String
    },
    p13field9a: {
        type: String
    },
    p13field9b: {
        type: String
    },
    p13field9c: {
        type: String
    },
    p13field10: {
        type: String
    },
    p13field11: {
        type: String
    },
    p13field12: {
        type: String
    },
    p13field13: {
        type: String
    },
    p13field14a: {
        type: String
    },
    p13field14b: {
        type: String
    },
    p13field14c: {
        type: String
    },
    p13field15: {
        type: String
    },
    p13field16: {
        type: String
    },
    p13field17: {
        type: String
    },
    p13field18: {
        type: String
    },
    p13field19a: {
        type: String
    },
    p13field19b: {
        type: String
    },
    p13field19c: {
        type: String
    },
    p13field20: {
        type: String
    },
    p13field21: {
        type: String
    },
    p13field22: {
        type: String
    },
    p13field23: {
        type: String
    },
    p13field24a: {
        type: String
    },
    p13field24b: {
        type: String
    },
    p13field24c: {
        type: String
    },
    p13field25: {
        type: String
    },
    p13field26: {
        type: String
    },
    p13field27: {
        type: String
    },
    p13field28: {
        type: String
    },
    p13field29: {
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
    p14field2a: {
        type: String
    },
    p14field2b: {
        type: String
    },
    p14field2c: {
        type: String
    },
    p14field2ctxt: {
        type: String
    },
    p14field2d: {
        type: String
    },
    p14field2e: {
        type: String
    },
    p14field2f: {
        type: String
    },
    p14field2g: {
        type: String
    },
    p14field2h: {
        type: String
    },
    p14field2i: {
        type: String
    },
    p14field3: {
        type: String
    },
    p14field4a: {
        type: String
    },
    p14field4b: {
        type: String
    },
    p14field4btxt: {
        type: String
    },
    p14field4c: {
        type: String
    },
    p14field4d: {
        type: String
    },
    p14field4e: {
        type: String
    },
    p14field4f: {
        type: String
    },
    p14field4g: {
        type: String
    },
    p14field4h: {
        type: String
    },
    p14field5: {
        type: String
    },
    p14field6: {
        type: String
    },
    p14field7: {
        type: String
    },
    p14field8: {
        type: String
    },
    p14field9: {
        type: String
    },
    p14field10: {
        type: String
    },
    p14field11: {
        type: String
    },
    p14field12: {
        type: String
    },
    p14field13: {
        type: String
    },
    p14field14: {
        type: String
    },
    p15field1: {
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
    p15field5: {
        type: String
    },
    p15field6: {
        type: String
    },
    p15field7: {
        type: String
    },
    p15field8: {
        type: String
    },
    p16field1: {
        type: Boolean
    },
    p16field1txt: {
        type: String
    },
    p16field2: {
        type: String
    },
    p16field3: {
        type: String
    },
    p16field4: {
        type: Boolean
    },
    p16field4txt: {
        type: String
    },
    p16field5: {
        type: String
    },
    p16field6: {
        type: String
    },
    p16field8: {
        type: String
    },
    p16field9: {
        type: String
    },
    p16field10: {
        type: String
    },
    p16field11: {
        type: String
    },
    p16field12: {
        type: String
    },
    p16field13: {
        type: String
    },
    p16field14: {
        type: String
    },
    p16field15: {
        type: String
    },
    p16field16: {
        type: String
    },
    p16field17: {
        type: String
    },
    p16field18: {
        type: String
    },
    p16field19: {
        type: String
    },
    p16field20: {
        type: String
    },
    p16field21: {
        type: Boolean
    },
    p16field22: {
        type: Boolean
    },
    p16field22txt: {
        type: String
    },
    p16field23a: {
        type: String
    },
    p16field23b: {
        type: Boolean
    },
    p16field24ay: {
        type: String
    },
    p16field24at: {
        type: String
    },
    p16field24by: {
        type: String
    },
    p16field24bt: {
        type: String
    },
    p16field24cy: {
        type: String
    },
    p16field24ct: {
        type: String
    },
    p16field25: {
        type: Boolean
    },
    p17field1: {
        type: String
    },
    p17field2: {
        type: String
    },
    p17field3: {
        type: String
    },
    p17field4: {
        type: String
    },
    p17field5a: {
        type: String
    },
    p17field5b: {
        type: String
    },
    p17field6: {
        type: String
    },
    p17field7: {
        type: String
    },
    p17field8: {
        type: String
    },
    p17field9: {
        type: String
    },
    p17field10: {
        type: String
    },
    p2field45b: {
        type: String
    },
    p5field1: {
        type: String
    },
    p9field5b: {
        type: String
    },
    p10field4b: {
        type: String
    },
});

module.exports = mongoose.model('SponsorData', dataSponsorSchema);