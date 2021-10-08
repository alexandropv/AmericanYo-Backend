var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dataN400Schema = new Schema({
    userid: {
        type: String,
        required: true
    },
    packageid: {
        type: String,
        required: true
    },
    p1field1a: {
        type: Boolean
    },
    p1field1b: {
        type: Boolean
    },
    p1field1c: {
        type: Boolean
    },
    p1field1ctxt: {
        type: String
    },
    p1field1d: {
        type: Boolean
    },
    p1field1e: {
        type: Boolean
    },
    p1field1etxt: {
        type: String
    },
    p2field1a: {
        type: String
    },
    p2field1b: {
        type: String
    },
    p2field1c: {
        type: String
    },
    p2field2a: {
        type: String
    },
    p2field2b: {
        type: String
    },
    p2field2c: {
        type: String
    },
    p2field3a: {
        type: String
    },
    p2field3b: {
        type: String
    },
    p2field3c: {
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
    p2field4d: {
        type: String
    },
    p2field5: {
        type: String
    },
    p2field6: {
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
    p2field10: {
        type: String
    },
    p2field11: {
        type: String
    },
    p2field12: {
        type: String
    },
    p2field13a: {
        type: String
    },
    p2field13c: {
        type: String
    },
    p2field14: {
        type: String
    },
    p3field1: {
        type: String
    },
    p3field1a: {
        type: Boolean
    },
    p3field1atxt: {
        type: String
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
    p5field1a1: {
        type: String
    },
    p5field1a2: {
        type: String
    },
    p5field1a2txt: {
        type: String
    },
    p5field1a4: {
        type: String
    },
    p5field1a5: {
        type: String
    },
    p5field1a6: {
        type: String
    },
    p5field1a7: {
        type: String
    },
    p5field1a9: {
        type: String
    },
    p5field1a10: {
        type: String
    },
    p5field1a11: {
        type: String
    },
    p5field1b1: {
        type: String
    },
    p5field1b2: {
        type: String
    },
    p5field1b2txt: {
        type: String
    },
    p5field1b4: {
        type: String
    },
    p5field1b5: {
        type: String
    },
    p5field1b6: {
        type: String
    },
    p5field1b7: {
        type: String
    },
    p5field1b9: {
        type: String
    },
    p5field1c1: {
        type: String
    },
    p5field1c2: {
        type: String
    },
    p5field1c2txt: {
        type: String
    },
    p5field1c4: {
        type: String
    },
    p5field1c5: {
        type: String
    },
    p5field1c6: {
        type: String
    },
    p5field1c7: {
        type: String
    },
    p5field1c9: {
        type: String
    },
    p5field1c10: {
        type: String
    },
    p5field1c11: {
        type: String
    },
    p5field1d1: {
        type: String
    },
    p5field1d2: {
        type: String
    },
    p5field1d2txt: {
        type: String
    },
    p5field1d4: {
        type: String
    },
    p5field1d5: {
        type: String
    },
    p5field1d6: {
        type: String
    },
    p5field1d7: {
        type: String
    },
    p5field1d9: {
        type: String
    },
    p5field1d10: {
        type: String
    },
    p5field1d11: {
        type: String
    },
    p5field1e1: {
        type: String
    },
    p5field1e2: {
        type: String
    },
    p5field1e2txt: {
        type: String
    },
    p5field1e4: {
        type: String
    },
    p5field1e5: {
        type: String
    },
    p5field1e6: {
        type: String
    },
    p5field1e7: {
        type: String
    },
    p5field1e9: {
        type: String
    },
    p5field1e10: {
        type: String
    },
    p5field1e11: {
        type: String
    },
    p6field1: {
        type: String
    },
    p6field2: {
        type: String
    },
    p6field2a1: {
        type: String
    },
    p6field2a2: {
        type: String
    },
    p6field2a3: {
        type: String
    },
    p6field2b: {
        type: String
    },
    p6field2c: {
        type: String
    },
    p6field2d: {
        type: String
    },
    p6field2e: {
        type: String
    },
    p6field3: {
        type: String
    },
    p6field3a1: {
        type: String
    },
    p6field3a2: {
        type: String
    },
    p6field3a3: {
        type: String
    },
    p6field3b: {
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
    p7field2e: {
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
    p8field1a: {
        type: String
    },
    p8field1b: {
        type: String
    },
    p8field1c: {
        type: String
    },
    p8field1ctxt: {
        type: String
    },
    p8field1d: {
        type: String
    },
    p8field1e: {
        type: String
    },
    p8field1f: {
        type: String
    },
    p8field1g: {
        type: String
    },
    p8field1h: {
        type: String
    },
    p8field1i: {
        type: String
    },
    p8field1j: {
        type: String
    },
    p8field1k: {
        type: String
    },
    p8field1l: {
        type: String
    },
    p8field2a: {
        type: String
    },
    p8field2b: {
        type: String
    },
    p8field2c: {
        type: String
    },
    p8field2ctxt: {
        type: String
    },
    p8field2d: {
        type: String
    },
    p8field2e: {
        type: String
    },
    p8field2f: {
        type: String
    },
    p8field2g: {
        type: String
    },
    p8field2h: {
        type: String
    },
    p8field2i: {
        type: String
    },
    p8field2j: {
        type: String
    },
    p8field2k: {
        type: String
    },
    p8field2l: {
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
    p8field3ctxt: {
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
    p8field3i: {
        type: String
    },
    p8field3j: {
        type: String
    },
    p8field3k: {
        type: String
    },
    p8field3l: {
        type: String
    },
    p9field1: {
        type: String
    },
    p9field2: {
        type: String
    },
    p9field3a1: {
        type: String
    },
    p9field3a2: {
        type: String
    },
    p9field3a3: {
        type: String
    },
    p9field3a4: {
        type: String
    },
    p9field3a5: {
        type: String
    },
    p9field3b1: {
        type: String
    },
    p9field3b2: {
        type: String
    },
    p9field3b3: {
        type: String
    },
    p9field3b4: {
        type: String
    },
    p9field3b5: {
        type: String
    },
    p9field3c1: {
        type: String
    },
    p9field3c2: {
        type: String
    },
    p9field3c3: {
        type: String
    },
    p9field3c4: {
        type: String
    },
    p9field3c5: {
        type: String
    },
    p9field3d1: {
        type: String
    },
    p9field3d2: {
        type: String
    },
    p9field3d3: {
        type: String
    },
    p9field3d4: {
        type: String
    },
    p9field3d5: {
        type: String
    },
    p9field3e1: {
        type: String
    },
    p9field3e2: {
        type: String
    },
    p9field3e3: {
        type: String
    },
    p9field3e4: {
        type: String
    },
    p9field3e5: {
        type: String
    },
    p9field3f1: {
        type: String
    },
    p9field3f2: {
        type: String
    },
    p9field3f3: {
        type: String
    },
    p9field3f4: {
        type: String
    },
    p9field3f5: {
        type: String
    },
    p10field1: {
        type: String
    },
    p10field2: {
        type: String
    },
    p10field3: {
        type: String
    },
    p10field4a1: {
        type: String
    },
    p10field4a2: {
        type: String
    },
    p10field4a3: {
        type: String
    },
    p10field4b1: {
        type: String
    },
    p10field4b2: {
        type: String
    },
    p10field4b3: {
        type: String
    },
    p10field4c1: {
        type: String
    },
    p10field4c2: {
        type: String
    },
    p10field4c3: {
        type: String
    },
    p10field4d: {
        type: String
    },
    p10field4e: {
        type: String
    },
    p10field4f1: {
        type: String
    },
    p10field4f2: {
        type: String
    },
    p10field4f2txt: {
        type: String
    },
    p10field4f4: {
        type: String
    },
    p10field4f5: {
        type: String
    },
    p10field4f6: {
        type: String
    },
    p10field4f7: {
        type: String
    },
    p10field4f9: {
        type: String
    },
    p10field4g: {
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
    p10field7a: {
        type: String
    },
    p10field7b: {
        type: String
    },
    p10field7c: {
        type: String
    },
    p10field7c2: {
        type: String
    },
    p10field8: {
        type: String
    },
    p10field8a1: {
        type: String
    },
    p10field8a2: {
        type: String
    },
    p10field8a3: {
        type: String
    },
    p10field8b: {
        type: String
    },
    p10field8b2: {
        type: String
    },
    p10field8c: {
        type: String
    },
    p10field8d: {
        type: String
    },
    p10field8e: {
        type: String
    },
    p10field8f: {
        type: String
    },
    p10field8g: {
        type: String
    },
    p10field8h: {
        type: String
    },
    p10field8h2: {
        type: String
    },
    p10field9a1: {
        type: String
    },
    p10field9a2: {
        type: String
    },
    p10field9a3: {
        type: String
    },
    p10field9b: {
        type: String
    },
    p10field9b2: {
        type: String
    },
    p10field9c: {
        type: String
    },
    p10field9d: {
        type: String
    },
    p10field9e: {
        type: String
    },
    p10field9f: {
        type: String
    },
    p10field9g: {
        type: String
    },
    p10field9h: {
        type: String
    },
    p10field9h2: {
        type: String
    },
    p11field1: {
        type: String
    },
    p11field2a1: {
        type: String
    },
    p11field2a2: {
        type: String
    },
    p11field2a3: {
        type: String
    },
    p11field2a4: {
        type: String
    },
    p11field2a5: {
        type: String
    },
    p11field2a6: {
        type: String
    },
    p11field2a7: {
        type: String
    },
    p11field2a8: {
        type: String
    },
    p11field2a8txt: {
        type: String
    },
    p11field2a9: {
        type: String
    },
    p11field2a10: {
        type: String
    },
    p11field2a11: {
        type: String
    },
    p11field2a12: {
        type: String
    },
    p11field2a13: {
        type: String
    },
    p11field2a14: {
        type: String
    },
    p11field2a15: {
        type: String
    },
    p11field2a16: {
        type: String
    },
    p11field2b1: {
        type: String
    },
    p11field2b2: {
        type: String
    },
    p11field2b3: {
        type: String
    },
    p11field2b4: {
        type: String
    },
    p11field2b5: {
        type: String
    },
    p11field2b6: {
        type: String
    },
    p11field2b7: {
        type: String
    },
    p11field2b8: {
        type: String
    },
    p11field2b8txt: {
        type: String
    },
    p11field2b9: {
        type: String
    },
    p11field2b10: {
        type: String
    },
    p11field2b11: {
        type: String
    },
    p11field2b12: {
        type: String
    },
    p11field2b13: {
        type: String
    },
    p11field2b14: {
        type: String
    },
    p11field2b15: {
        type: String
    },
    p11field2b16: {
        type: String
    },
    p11field2c1: {
        type: String
    },
    p11field2c2: {
        type: String
    },
    p11field2c3: {
        type: String
    },
    p11field2c4: {
        type: String
    },
    p11field2c5: {
        type: String
    },
    p11field2c6: {
        type: String
    },
    p11field2c7: {
        type: String
    },
    p11field2c8: {
        type: String
    },
    p11field2c8txt: {
        type: String
    },
    p11field2c9: {
        type: String
    },
    p11field2c10: {
        type: String
    },
    p11field2c11: {
        type: String
    },
    p11field2c12: {
        type: String
    },
    p11field2c13: {
        type: String
    },
    p11field2c14: {
        type: String
    },
    p11field2c15: {
        type: String
    },
    p11field2c16: {
        type: String
    },
    p11field2d1: {
        type: String
    },
    p11field2d2: {
        type: String
    },
    p11field2d3: {
        type: String
    },
    p11field2d4: {
        type: String
    },
    p11field2d5: {
        type: String
    },
    p11field2d6: {
        type: String
    },
    p11field2d7: {
        type: String
    },
    p11field2d8: {
        type: String
    },
    p11field2d8txt: {
        type: String
    },
    p11field2d9: {
        type: String
    },
    p11field2d10: {
        type: String
    },
    p11field2d11: {
        type: String
    },
    p11field2d12: {
        type: String
    },
    p11field2d13: {
        type: String
    },
    p11field2d14: {
        type: String
    },
    p11field2d15: {
        type: String
    },
    p11field2d16: {
        type: String
    },
    p12field1: {
        type: String
    },
    p12field2: {
        type: String
    },
    p12field3: {
        type: String
    },
    p12field4a: {
        type: String
    },
    p12field4b: {
        type: String
    },
    p12field5: {
        type: String
    },
    p12field6: {
        type: String
    },
    p12field7a: {
        type: String
    },
    p12field7b: {
        type: String
    },
    p12field8: {
        type: String
    },
    p12field9a: {
        type: String
    },
    p12field9ba1: {
        type: String
    },
    p12field9bb1: {
        type: String
    },
    p12field9bc1: {
        type: String
    },
    p12field9bd1: {
        type: String
    },
    p12field9ba2: {
        type: String
    },
    p12field9bb2: {
        type: String
    },
    p12field9bc2: {
        type: String
    },
    p12field9bd2: {
        type: String
    },
    p12field9ba3: {
        type: String
    },
    p12field9bb3: {
        type: String
    },
    p12field9bc3: {
        type: String
    },
    p12field9bd3: {
        type: String
    },
    p12field9ba4: {
        type: String
    },
    p12field9bb4: {
        type: String
    },
    p12field9bc4: {
        type: String
    },
    p12field9bd4: {
        type: String
    },
    p12field10a: {
        type: String
    },
    p12field10b: {
        type: String
    },
    p12field10c: {
        type: String
    },
    p12field11: {
        type: String
    },
    p12field12: {
        type: String
    },
    p12field13a: {
        type: String
    },
    p12field13b: {
        type: String
    },
    p12field14a: {
        type: String
    },
    p12field14b: {
        type: String
    },
    p12field14c: {
        type: String
    },
    p12field14d: {
        type: String
    },
    p12field14e: {
        type: String
    },
    p12field14f: {
        type: String
    },
    p12field15a: {
        type: String
    },
    p12field15b: {
        type: String
    },
    p12field15c: {
        type: String
    },
    p12field15d: {
        type: String
    },
    p12field15e: {
        type: String
    },
    p12field15f: {
        type: String
    },
    p12field15g: {
        type: String
    },
    p12field15h: {
        type: String
    },
    p12field15i: {
        type: String
    },
    p12field16a: {
        type: String
    },
    p12field16b: {
        type: String
    },
    p12field16c: {
        type: String
    },
    p12field16d: {
        type: String
    },
    p16field16e: {
        type: String
    },
    p12field17: {
        type: String
    },
    p12field17a: {
        type: String
    },
    p12field17b: {
        type: String
    },
    p12field18: {
        type: String
    },
    p12field18a: {
        type: String
    },
    p12field18b: {
        type: String
    },
    p12field19: {
        type: String
    },
    p12field20: {
        type: String
    },
    p12field21: {
        type: String
    },
    p12field22: {
        type: String
    },
    p12field23: {
        type: String
    },
    p12field24: {
        type: String
    },
    p12field25: {
        type: String
    },
    p12field26: {
        type: String
    },
    p12field27a: {
        type: String
    },
    p12field27b: {
        type: String
    },
    p12field28a: {
        type: String
    },
    p12field28b1: {
        type: String
    },
    p12field28b2: {
        type: String
    },
    p12field28b3: {
        type: String
    },
    p12field29a1: {
        type: String
    },
    p12field29a2: {
        type: String
    },
    p12field29a3: {
        type: String
    },
    p12field29a4: {
        type: String
    },
    p12field29b1: {
        type: String
    },
    p12field29b2: {
        type: String
    },
    p12field29b3: {
        type: String
    },
    p12field29b4: {
        type: String
    },
    p12field29c1: {
        type: String
    },
    p12field29c2: {
        type: String
    },
    p12field29c3: {
        type: String
    },
    p12field29c4: {
        type: String
    },
    p12field29d1: {
        type: String
    },
    p12field29d2: {
        type: String
    },
    p12field29d3: {
        type: String
    },
    p12field29d4: {
        type: String
    },
    p12field29e1: {
        type: String
    },
    p12field29e2: {
        type: String
    },
    p12field29e3: {
        type: String
    },
    p12field29e4: {
        type: String
    },
    p12field30a: {
        type: String
    },
    p12field30b: {
        type: String
    },
    p12field30c: {
        type: String
    },
    p12field30d: {
        type: String
    },
    p12field30e: {
        type: String
    },
    p12field30f: {
        type: String
    },
    p12field30g: {
        type: String
    },
    p12field30h: {
        type: String
    },
    p12field30i: {
        type: String
    },
    p12field31: {
        type: String
    },
    p12field32: {
        type: String
    },
    p12field33: {
        type: String
    },
    p12field34: {
        type: String
    },
    p12field35: {
        type: String
    },
    p12field36: {
        type: String
    },
    p12field37: {
        type: String
    },
    p12field38a: {
        type: String
    },
    p12field38b: {
        type: String
    },
    p12field38c: {
        type: String
    },
    p12field39: {
        type: String
    },
    p12field40: {
        type: String
    },
    p12field41: {
        type: String
    },
    p12field42: {
        type: String
    },
    p12field43: {
        type: String
    },
    p12field44a: {
        type: String
    },
    p12field44b1: {
        type: String
    },
    p12field44b2: {
        type: String
    },
    p12field45: {
        type: String
    },
    p12field46: {
        type: String
    },
    p12field47: {
        type: String
    },
    p12field48: {
        type: String
    },
    p12field49: {
        type: String
    },
    p12field50: {
        type: String
    },
    p13field1a: {
        type: Boolean
    },
    p13field1b: {
        type: Boolean
    },
    p13field1btxt: {
        type: String
    },
    p13field2: {
        type: Boolean
    },
    p13field2txt: {
        type: String
    },
    p14field1a: {
        type: String
    },
    p14field1b: {
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
    p14field3btxt: {
        type: String
    },
    p14field3c: {
        type: String
    },
    p14field3d: {
        type: String
    },
    p14field3e: {
        type: String
    },
    p14field3f: {
        type: String
    },
    p14field3g: {
        type: String
    },
    p14field3h: {
        type: String
    },
    p14fieldLang: {
        type: String
    },
    p15field1a: {
        type: String
    },
    p15field1b: {
        type: String
    },
    p15field2: {
        type: String
    },
    p15field3a: {
        type: String
    },
    p15field3b: {
        type: String
    },
    p15field3btxt: {
        type: String
    },
    p15field3d: {
        type: String
    },
    p15field3e: {
        type: String
    },
    p15field3f: {
        type: String
    },
    p15field3g: {
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
    p15field7a: {
        type: Boolean
    },
    p15field7b: {
        type: Boolean
    },
    p15field7b1: {
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
    p4field4: {
        type: String
    },
    p4field5: {
        type: String
    },

    p2field13b: {
        type: String
    },
    p7field6: {
        type: String
    },

});

module.exports = mongoose.model('N400', dataN400Schema);