var express = require('express');
var mdAutenticacion = require('../middlewares/auth');
var app = express();
var Data = require('../models/n400');
var ObjectID = require('mongodb').ObjectID;

// ==========================================
// Obtener todos los medicos
// ==========================================
app.get('/:id', mdAutenticacion.verificaToken, (req, res, next) => {

    var id = req.params.id;

    var desde = req.query.from || 0;
    from = Number(desde);

    Data.find({
            'packageid': id
        })
        .exec(
            (err, data) => {

                if (err) {
                    return res.status(500).json({
                        ok: false,
                        message: 'Error loading data',
                        errors: err
                    });
                }

                res.status(200).json({
                    ok: true,
                    data
                });



            });
});


// ==========================================
// Actualizar newData
// ==========================================
app.put('/:id', mdAutenticacion.verificaToken, (req, res) => {

    console.log('PUT> ImmAppData');
    var id = req.params.id;
    var body = req.body;
    console.log('Updating...');
    Data.findById(body._id, (err, dbData) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                message: 'Error searching case',
                errors: err
            });
        }

        if (!dbData) {
            return res.status(400).json({
                ok: false,
                message: 'The case with the id ' + id + ' dont exists',
                errors: {
                    message: 'Theres no case whith the given ID.'
                }
            });
        }


        dbData.userid = req.user._id;
        dbData.packageid = id;
        dbData.p1field1a = body.p1field1a;
        dbData.p1field1b = body.p1field1b;
        dbData.p1field1c = body.p1field1c;
        dbData.p1field1ctxt = body.p1field1ctxt;
        dbData.p1field1d = body.p1field1d;
        dbData.p1field1e = body.p1field1e;
        dbData.p1field1etxt = body.p1field1etxt;
        dbData.p2field1a = body.p2field1a;
        dbData.p2field1b = body.p2field1b;
        dbData.p2field1c = body.p2field1c;
        dbData.p2field2a = body.p2field2a;
        dbData.p2field2b = body.p2field2b;
        dbData.p2field2c = body.p2field2c;
        dbData.p2field3a = body.p2field3a;
        dbData.p2field3b = body.p2field3b;
        dbData.p2field3c = body.p2field3c;
        dbData.p2field4a = body.p2field4a;
        dbData.p2field4b = body.p2field4b;
        dbData.p2field4c = body.p2field4c;
        dbData.p2field4d = body.p2field4d;
        dbData.p2field5 = body.p2field5;
        dbData.p2field6 = body.p2field6;
        dbData.p2field7 = body.p2field7;
        dbData.p2field8 = body.p2field8;
        dbData.p2field9 = body.p2field9;
        dbData.p2field10 = body.p2field10;
        dbData.p2field11 = body.p2field11;
        dbData.p2field12 = body.p2field12;
        dbData.p2field13a = body.p2field13a;
        dbData.p2field13c = body.p2field13c;
        dbData.p2field14 = body.p2field14;
        dbData.p3field1 = body.p3field1;
        dbData.p3field1a = body.p3field1a;
        dbData.p3field1atxt = body.p3field1atxt;
        dbData.p3field1b = body.p3field1b;
        dbData.p3field1btxt = body.p3field1btxt;
        dbData.p3field1c = body.p3field1c;
        dbData.p3field1ctxt = body.p3field1ctxt;
        dbData.p5field1a1 = body.p5field1a1;
        dbData.p5field1a2 = body.p5field1a2;
        dbData.p5field1a2txt = body.p5field1a2txt;
        dbData.p5field1a4 = body.p5field1a4;
        dbData.p5field1a5 = body.p5field1a5;
        dbData.p5field1a6 = body.p5field1a6;
        dbData.p5field1a7 = body.p5field1a7;
        dbData.p5field1a9 = body.p5field1a9;
        dbData.p5field1a10 = body.p5field1a10;
        dbData.p5field1a11 = body.p5field1a11;
        dbData.p5field1b1 = body.p5field1b1;
        dbData.p5field1b2 = body.p5field1b2;
        dbData.p5field1b2txt = body.p5field1b2txt;
        dbData.p5field1b4 = body.p5field1b4;
        dbData.p5field1b5 = body.p5field1b5;
        dbData.p5field1b6 = body.p5field1b6;
        dbData.p5field1b7 = body.p5field1b7;
        dbData.p5field1b9 = body.p5field1b9;
        dbData.p5field1c1 = body.p5field1c1;
        dbData.p5field1c2 = body.p5field1c2;
        dbData.p5field1c2txt = body.p5field1c2txt;
        dbData.p5field1c4 = body.p5field1c4;
        dbData.p5field1c5 = body.p5field1c5;
        dbData.p5field1c6 = body.p5field1c6;
        dbData.p5field1c7 = body.p5field1c7;
        dbData.p5field1c9 = body.p5field1c9;
        dbData.p5field1c10 = body.p5field1c10;
        dbData.p5field1c11 = body.p5field1c11;
        dbData.p5field1d1 = body.p5field1d1;
        dbData.p5field1d2 = body.p5field1d2;
        dbData.p5field1d2txt = body.p5field1d2txt;
        dbData.p5field1d4 = body.p5field1d4;
        dbData.p5field1d5 = body.p5field1d5;
        dbData.p5field1d6 = body.p5field1d6;
        dbData.p5field1d7 = body.p5field1d7;
        dbData.p5field1d9 = body.p5field1d9;
        dbData.p5field1d10 = body.p5field1d10;
        dbData.p5field1d11 = body.p5field1d11;
        dbData.p5field1e1 = body.p5field1e1;
        dbData.p5field1e2 = body.p5field1e2;
        dbData.p5field1e2txt = body.p5field1e2txt;
        dbData.p5field1e4 = body.p5field1e4;
        dbData.p5field1e5 = body.p5field1e5;
        dbData.p5field1e6 = body.p5field1e6;
        dbData.p5field1e7 = body.p5field1e7;
        dbData.p5field1e9 = body.p5field1e9;
        dbData.p5field1e10 = body.p5field1e10;
        dbData.p5field1e11 = body.p5field1e11;
        dbData.p6field1 = body.p6field1;
        dbData.p6field2 = body.p6field2;
        dbData.p6field2a1 = body.p6field2a1;
        dbData.p6field2a2 = body.p6field2a2;
        dbData.p6field2a3 = body.p6field2a3;
        dbData.p6field2b = body.p6field2b;
        dbData.p6field2c = body.p6field2c;
        dbData.p6field2d = body.p6field2d;
        dbData.p6field2e = body.p6field2e;
        dbData.p6field3 = body.p6field3;
        dbData.p6field3a1 = body.p6field3a1;
        dbData.p6field3a2 = body.p6field3a2;
        dbData.p6field3a3 = body.p6field3a3;
        dbData.p6field3b = body.p6field3b;
        dbData.p6field3c = body.p6field3c;
        dbData.p6field3d = body.p6field3d;
        dbData.p6field3e = body.p6field3e;
        dbData.p7field1 = body.p7field1;
        dbData.p7field2a = body.p7field2a;
        dbData.p7field2b = body.p7field2b;
        dbData.p7field2c = body.p7field2c;
        dbData.p7field2d = body.p7field2d;
        dbData.p7field2e = body.p7field2e;
        dbData.p7field3a = body.p7field3a;
        dbData.p7field3b = body.p7field3b;
        dbData.p7field4 = body.p7field4;
        dbData.p7field5 = body.p7field5;
        dbData.p8field1a = body.p8field1a;
        dbData.p8field1b = body.p8field1b;
        dbData.p8field1c = body.p8field1c;
        dbData.p8field1ctxt = body.p8field1ctxt;
        dbData.p8field1d = body.p8field1d;
        dbData.p8field1e = body.p8field1e;
        dbData.p8field1f = body.p8field1f;
        dbData.p8field1g = body.p8field1g;
        dbData.p8field1h = body.p8field1h;
        dbData.p8field1i = body.p8field1i;
        dbData.p8field1j = body.p8field1j;
        dbData.p8field1k = body.p8field1k;
        dbData.p8field1l = body.p8field1l;
        dbData.p8field2a = body.p8field2a;
        dbData.p8field2b = body.p8field2b;
        dbData.p8field2c = body.p8field2c;
        dbData.p8field2ctxt = body.p8field2ctxt;
        dbData.p8field2d = body.p8field2d;
        dbData.p8field2e = body.p8field2e;
        dbData.p8field2f = body.p8field2f;
        dbData.p8field2g = body.p8field2g;
        dbData.p8field2h = body.p8field2h;
        dbData.p8field2i = body.p8field2i;
        dbData.p8field2j = body.p8field2j;
        dbData.p8field2k = body.p8field2k;
        dbData.p8field2l = body.p8field2l;
        dbData.p8field3a = body.p8field3a;
        dbData.p8field3b = body.p8field3b;
        dbData.p8field3c = body.p8field3c;
        dbData.p8field3ctxt = body.p8field3ctxt;
        dbData.p8field3d = body.p8field3d;
        dbData.p8field3e = body.p8field3e;
        dbData.p8field3f = body.p8field3f;
        dbData.p8field3g = body.p8field3g;
        dbData.p8field3h = body.p8field3h;
        dbData.p8field3i = body.p8field3i;
        dbData.p8field3j = body.p8field3j;
        dbData.p8field3k = body.p8field3k;
        dbData.p8field3l = body.p8field3l;
        dbData.p9field1 = body.p9field1;
        dbData.p9field2 = body.p9field2;
        dbData.p9field3a1 = body.p9field3a1;
        dbData.p9field3a2 = body.p9field3a2;
        dbData.p9field3a3 = body.p9field3a3;
        dbData.p9field3a4 = body.p9field3a4;
        dbData.p9field3a5 = body.p9field3a5;
        dbData.p9field3b1 = body.p9field3b1;
        dbData.p9field3b2 = body.p9field3b2;
        dbData.p9field3b3 = body.p9field3b3;
        dbData.p9field3b4 = body.p9field3b4;
        dbData.p9field3b5 = body.p9field3b5;
        dbData.p9field3c1 = body.p9field3c1;
        dbData.p9field3c2 = body.p9field3c2;
        dbData.p9field3c3 = body.p9field3c3;
        dbData.p9field3c4 = body.p9field3c4;
        dbData.p9field3c5 = body.p9field3c5;
        dbData.p9field3d1 = body.p9field3d1;
        dbData.p9field3d2 = body.p9field3d2;
        dbData.p9field3d3 = body.p9field3d3;
        dbData.p9field3d4 = body.p9field3d4;
        dbData.p9field3d5 = body.p9field3d5;
        dbData.p9field3e1 = body.p9field3e1;
        dbData.p9field3e2 = body.p9field3e2;
        dbData.p9field3e3 = body.p9field3e3;
        dbData.p9field3e4 = body.p9field3e4;
        dbData.p9field3e5 = body.p9field3e5;
        dbData.p9field3f1 = body.p9field3f1;
        dbData.p9field3f2 = body.p9field3f2;
        dbData.p9field3f3 = body.p9field3f3;
        dbData.p9field3f4 = body.p9field3f4;
        dbData.p9field3f5 = body.p9field3f5;
        dbData.p10field1 = body.p10field1;
        dbData.p10field2 = body.p10field2;
        dbData.p10field3 = body.p10field3;
        dbData.p10field4a1 = body.p10field4a1;
        dbData.p10field4a2 = body.p10field4a2;
        dbData.p10field4a3 = body.p10field4a3;
        dbData.p10field4b1 = body.p10field4b1;
        dbData.p10field4b2 = body.p10field4b2;
        dbData.p10field4b3 = body.p10field4b3;
        dbData.p10field4c1 = body.p10field4c1;
        dbData.p10field4c2 = body.p10field4c2;
        dbData.p10field4c3 = body.p10field4c3;
        dbData.p10field4d = body.p10field4d;
        dbData.p10field4e = body.p10field4e;
        dbData.p10field4f1 = body.p10field4f1;
        dbData.p10field4f2 = body.p10field4f2;
        dbData.p10field4f2txt = body.p10field4f2txt;
        dbData.p10field4f4 = body.p10field4f4;
        dbData.p10field4f5 = body.p10field4f5;
        dbData.p10field4f6 = body.p10field4f6;
        dbData.p10field4f7 = body.p10field4f7;
        dbData.p10field4f9 = body.p10field4f9;
        dbData.p10field4g = body.p10field4g;
        dbData.p10field5 = body.p10field5;
        dbData.p10field6a = body.p10field6a;
        dbData.p10field6b = body.p10field6b;
        dbData.p10field7a = body.p10field7a;
        dbData.p10field7b = body.p10field7b;
        dbData.p10field7c = body.p10field7c;
        dbData.p10field7c2 = body.p10field7c2;
        dbData.p10field8 = body.p10field8;
        dbData.p10field8a1 = body.p10field8a1;
        dbData.p10field8a2 = body.p10field8a2;
        dbData.p10field8a3 = body.p10field8a3;
        dbData.p10field8b = body.p10field8b;
        dbData.p10field8b2 = body.p10field8b2;
        dbData.p10field8c = body.p10field8c;
        dbData.p10field8d = body.p10field8d;
        dbData.p10field8e = body.p10field8e;
        dbData.p10field8f = body.p10field8f;
        dbData.p10field8g = body.p10field8g;
        dbData.p10field8h = body.p10field8h;
        dbData.p10field8h2 = body.p10field8h2;
        dbData.p10field9a1 = body.p10field9a1;
        dbData.p10field9a2 = body.p10field9a2;
        dbData.p10field9a3 = body.p10field9a3;
        dbData.p10field9b = body.p10field9b;
        dbData.p10field9b2 = body.p10field9b2;
        dbData.p10field9c = body.p10field9c;
        dbData.p10field9d = body.p10field9d;
        dbData.p10field9e = body.p10field9e;
        dbData.p10field9f = body.p10field9f;
        dbData.p10field9g = body.p10field9g;
        dbData.p10field9h = body.p10field9h;
        dbData.p10field9h2 = body.p10field9h2;
        dbData.p11field1 = body.p11field1;
        dbData.p11field2a1 = body.p11field2a1;
        dbData.p11field2a2 = body.p11field2a2;
        dbData.p11field2a3 = body.p11field2a3;
        dbData.p11field2a4 = body.p11field2a4;
        dbData.p11field2a5 = body.p11field2a5;
        dbData.p11field2a6 = body.p11field2a6;
        dbData.p11field2a7 = body.p11field2a7;
        dbData.p11field2a8 = body.p11field2a8;
        dbData.p11field2a8txt = body.p11field2a8txt;
        dbData.p11field2a9 = body.p11field2a9;
        dbData.p11field2a10 = body.p11field2a10;
        dbData.p11field2a11 = body.p11field2a11;
        dbData.p11field2a12 = body.p11field2a12;
        dbData.p11field2a13 = body.p11field2a13;
        dbData.p11field2a14 = body.p11field2a14;
        dbData.p11field2a15 = body.p11field2a15;
        dbData.p11field2a16 = body.p11field2a16;
        dbData.p11field2b1 = body.p11field2b1;
        dbData.p11field2b2 = body.p11field2b2;
        dbData.p11field2b3 = body.p11field2b3;
        dbData.p11field2b4 = body.p11field2b4;
        dbData.p11field2b5 = body.p11field2b5;
        dbData.p11field2b6 = body.p11field2b6;
        dbData.p11field2b7 = body.p11field2b7;
        dbData.p11field2b8 = body.p11field2b8;
        dbData.p11field2b8txt = body.p11field2b8txt;
        dbData.p11field2b9 = body.p11field2b9;
        dbData.p11field2b10 = body.p11field2b10;
        dbData.p11field2b11 = body.p11field2b11;
        dbData.p11field2b12 = body.p11field2b12;
        dbData.p11field2b13 = body.p11field2b13;
        dbData.p11field2b14 = body.p11field2b14;
        dbData.p11field2b15 = body.p11field2b15;
        dbData.p11field2b16 = body.p11field2b16;
        dbData.p11field2c1 = body.p11field2c1;
        dbData.p11field2c2 = body.p11field2c2;
        dbData.p11field2c3 = body.p11field2c3;
        dbData.p11field2c4 = body.p11field2c4;
        dbData.p11field2c5 = body.p11field2c5;
        dbData.p11field2c6 = body.p11field2c6;
        dbData.p11field2c7 = body.p11field2c7;
        dbData.p11field2c8 = body.p11field2c8;
        dbData.p11field2c8txt = body.p11field2c8txt;
        dbData.p11field2c9 = body.p11field2c9;
        dbData.p11field2c10 = body.p11field2c10;
        dbData.p11field2c11 = body.p11field2c11;
        dbData.p11field2c12 = body.p11field2c12;
        dbData.p11field2c13 = body.p11field2c13;
        dbData.p11field2c14 = body.p11field2c14;
        dbData.p11field2c15 = body.p11field2c15;
        dbData.p11field2c16 = body.p11field2c16;
        dbData.p11field2d1 = body.p11field2d1;
        dbData.p11field2d2 = body.p11field2d2;
        dbData.p11field2d3 = body.p11field2d3;
        dbData.p11field2d4 = body.p11field2d4;
        dbData.p11field2d5 = body.p11field2d5;
        dbData.p11field2d6 = body.p11field2d6;
        dbData.p11field2d7 = body.p11field2d7;
        dbData.p11field2d8 = body.p11field2d8;
        dbData.p11field2d8txt = body.p11field2d8txt;
        dbData.p11field2d9 = body.p11field2d9;
        dbData.p11field2d10 = body.p11field2d10;
        dbData.p11field2d11 = body.p11field2d11;
        dbData.p11field2d12 = body.p11field2d12;
        dbData.p11field2d13 = body.p11field2d13;
        dbData.p11field2d14 = body.p11field2d14;
        dbData.p11field2d15 = body.p11field2d15;
        dbData.p11field2d16 = body.p11field2d16;
        dbData.p12field1 = body.p12field1;
        dbData.p12field2 = body.p12field2;
        dbData.p12field3 = body.p12field3;
        dbData.p12field4a = body.p12field4a;
        dbData.p12field4b = body.p12field4b;
        dbData.p12field5 = body.p12field5;
        dbData.p12field6 = body.p12field6;
        dbData.p12field7a = body.p12field7a;
        dbData.p12field7b = body.p12field7b;
        dbData.p12field8 = body.p12field8;
        dbData.p12field9a = body.p12field9a;
        dbData.p12field9ba1 = body.p12field9ba1;
        dbData.p12field9bb1 = body.p12field9bb1;
        dbData.p12field9bc1 = body.p12field9bc1;
        dbData.p12field9bd1 = body.p12field9bd1;
        dbData.p12field9ba2 = body.p12field9ba2;
        dbData.p12field9bb2 = body.p12field9bb2;
        dbData.p12field9bc2 = body.p12field9bc2;
        dbData.p12field9bd2 = body.p12field9bd2;
        dbData.p12field9ba3 = body.p12field9ba3;
        dbData.p12field9bb3 = body.p12field9bb3;
        dbData.p12field9bc3 = body.p12field9bc3;
        dbData.p12field9bd3 = body.p12field9bd3;
        dbData.p12field9ba4 = body.p12field9ba4;
        dbData.p12field9bb4 = body.p12field9bb4;
        dbData.p12field9bc4 = body.p12field9bc4;
        dbData.p12field9bd4 = body.p12field9bd4;
        dbData.p12field10a = body.p12field10a;
        dbData.p12field10b = body.p12field10b;
        dbData.p12field10c = body.p12field10c;
        dbData.p12field11 = body.p12field11;
        dbData.p12field12 = body.p12field12;
        dbData.p12field13a = body.p12field13a;
        dbData.p12field13b = body.p12field13b;
        dbData.p12field14a = body.p12field14a;
        dbData.p12field14b = body.p12field14b;
        dbData.p12field14c = body.p12field14c;
        dbData.p12field14d = body.p12field14d;
        dbData.p12field14e = body.p12field14e;
        dbData.p12field14f = body.p12field14f;
        dbData.p12field15a = body.p12field15a;
        dbData.p12field15b = body.p12field15b;
        dbData.p12field15c = body.p12field15c;
        dbData.p12field15d = body.p12field15d;
        dbData.p12field15e = body.p12field15e;
        dbData.p12field15f = body.p12field15f;
        dbData.p12field15g = body.p12field15g;
        dbData.p12field15h = body.p12field15h;
        dbData.p12field15i = body.p12field15i;
        dbData.p12field16a = body.p12field16a;
        dbData.p12field16b = body.p12field16b;
        dbData.p12field16c = body.p12field16c;
        dbData.p12field16d = body.p12field16d;
        dbData.p16field16e = body.p16field16e;
        dbData.p12field17 = body.p12field17;
        dbData.p12field17a = body.p12field17a;
        dbData.p12field17b = body.p12field17b;
        dbData.p12field18 = body.p12field18;
        dbData.p12field18a = body.p12field18a;
        dbData.p12field18b = body.p12field18b;
        dbData.p12field19 = body.p12field19;
        dbData.p12field20 = body.p12field20;
        dbData.p12field21 = body.p12field21;
        dbData.p12field22 = body.p12field22;
        dbData.p12field23 = body.p12field23;
        dbData.p12field24 = body.p12field24;
        dbData.p12field25 = body.p12field25;
        dbData.p12field26 = body.p12field26;
        dbData.p12field27a = body.p12field27a;
        dbData.p12field27b = body.p12field27b;
        dbData.p12field28a = body.p12field28a;
        dbData.p12field28b1 = body.p12field28b1;
        dbData.p12field28b2 = body.p12field28b2;
        dbData.p12field28b3 = body.p12field28b3;
        dbData.p12field29a1 = body.p12field29a1;
        dbData.p12field29a2 = body.p12field29a2;
        dbData.p12field29a3 = body.p12field29a3;
        dbData.p12field29a4 = body.p12field29a4;
        dbData.p12field29b1 = body.p12field29b1;
        dbData.p12field29b2 = body.p12field29b2;
        dbData.p12field29b3 = body.p12field29b3;
        dbData.p12field29b4 = body.p12field29b4;
        dbData.p12field29c1 = body.p12field29c1;
        dbData.p12field29c2 = body.p12field29c2;
        dbData.p12field29c3 = body.p12field29c3;
        dbData.p12field29c4 = body.p12field29c4;
        dbData.p12field29d1 = body.p12field29d1;
        dbData.p12field29d2 = body.p12field29d2;
        dbData.p12field29d3 = body.p12field29d3;
        dbData.p12field29d4 = body.p12field29d4;
        dbData.p12field29e1 = body.p12field29e1;
        dbData.p12field29e2 = body.p12field29e2;
        dbData.p12field29e3 = body.p12field29e3;
        dbData.p12field29e4 = body.p12field29e4;
        dbData.p12field30a = body.p12field30a;
        dbData.p12field30b = body.p12field30b;
        dbData.p12field30c = body.p12field30c;
        dbData.p12field30d = body.p12field30d;
        dbData.p12field30e = body.p12field30e;
        dbData.p12field30f = body.p12field30f;
        dbData.p12field30g = body.p12field30g;
        dbData.p12field30h = body.p12field30h;
        dbData.p12field30i = body.p12field30i;
        dbData.p12field31 = body.p12field31;
        dbData.p12field32 = body.p12field32;
        dbData.p12field33 = body.p12field33;
        dbData.p12field34 = body.p12field34;
        dbData.p12field35 = body.p12field35;
        dbData.p12field36 = body.p12field36;
        dbData.p12field37 = body.p12field37;
        dbData.p12field38a = body.p12field38a;
        dbData.p12field38b = body.p12field38b;
        dbData.p12field38c = body.p12field38c;
        dbData.p12field39 = body.p12field39;
        dbData.p12field40 = body.p12field40;
        dbData.p12field41 = body.p12field41;
        dbData.p12field42 = body.p12field42;
        dbData.p12field43 = body.p12field43;
        dbData.p12field44a = body.p12field44a;
        dbData.p12field44b1 = body.p12field44b1;
        dbData.p12field44b2 = body.p12field44b2;
        dbData.p12field45 = body.p12field45;
        dbData.p12field46 = body.p12field46;
        dbData.p12field47 = body.p12field47;
        dbData.p12field48 = body.p12field48;
        dbData.p12field49 = body.p12field49;
        dbData.p12field50 = body.p12field50;
        dbData.p13field1a = body.p13field1a;
        dbData.p13field1b = body.p13field1b;
        dbData.p13field1btxt = body.p13field1btxt;
        dbData.p13field2 = body.p13field2;
        dbData.p13field2txt = body.p13field2txt;
        dbData.p14field1a = body.p14field1a;
        dbData.p14field1b = body.p14field1b;
        dbData.p14field2 = body.p14field2;
        dbData.p14field3a = body.p14field3a;
        dbData.p14field3b = body.p14field3b;
        dbData.p14field3btxt = body.p14field3btxt;
        dbData.p14field3c = body.p14field3c;
        dbData.p14field3d = body.p14field3d;
        dbData.p14field3e = body.p14field3e;
        dbData.p14field3f = body.p14field3f;
        dbData.p14field3g = body.p14field3g;
        dbData.p14field3h = body.p14field3h;
        dbData.p14fieldLang = body.p14fieldLang;
        dbData.p15field1a = body.p15field1a;
        dbData.p15field1b = body.p15field1b;
        dbData.p15field2 = body.p15field2;
        dbData.p15field3a = body.p15field3a;
        dbData.p15field3b = body.p15field3b;
        dbData.p15field3btxt = body.p15field3btxt;
        dbData.p15field3d = body.p15field3d;
        dbData.p15field3e = body.p15field3e;
        dbData.p15field3f = body.p15field3f;
        dbData.p15field3g = body.p15field3g;
        dbData.p15field4 = body.p15field4;
        dbData.p15field5 = body.p15field5;
        dbData.p15field6 = body.p15field6;
        dbData.p15field7a = body.p15field7a;
        dbData.p15field7b = body.p15field7b;
        dbData.p15field7b1 = body.p15field7b1;

        dbData.p4field1 = body.p4field1;
        dbData.p4field2 = body.p4field2;
        dbData.p4field3 = body.p4field3;
        dbData.p4field4 = body.p4field4;
        dbData.p4field5 = body.p4field5;

        dbData.p2field13b = body.p2field13b;
        dbData.p7field6 = body.p7field6;

        dbData.save((err, savedCase) => {

            if (err) {
                console.log('PUT>ERROR>' + err);
                return res.status(400).json({
                    ok: false,
                    message: 'Error updating case',
                    errors: err
                });
            }

            res.status(200).json({
                ok: true,
                data: savedCase
            });

        });

    });

});



// ==========================================
// Crear un nuevo newData
// ==========================================
app.post('/:id', mdAutenticacion.verificaToken, (req, res) => {
    var id = req.params.id;
    var body = req.body;
    console.log('Posting...');

    var dbData = new Data();

    dbData.userid = req.user._id;
    dbData.packageid = id;
    dbData.p1field1a = body.p1field1a;
    dbData.p1field1b = body.p1field1b;
    dbData.p1field1c = body.p1field1c;
    dbData.p1field1ctxt = body.p1field1ctxt;
    dbData.p1field1d = body.p1field1d;
    dbData.p1field1e = body.p1field1e;
    dbData.p1field1etxt = body.p1field1etxt;
    dbData.p2field1a = body.p2field1a;
    dbData.p2field1b = body.p2field1b;
    dbData.p2field1c = body.p2field1c;
    dbData.p2field2a = body.p2field2a;
    dbData.p2field2b = body.p2field2b;
    dbData.p2field2c = body.p2field2c;
    dbData.p2field3a = body.p2field3a;
    dbData.p2field3b = body.p2field3b;
    dbData.p2field3c = body.p2field3c;
    dbData.p2field4a = body.p2field4a;
    dbData.p2field4b = body.p2field4b;
    dbData.p2field4c = body.p2field4c;
    dbData.p2field4d = body.p2field4d;
    dbData.p2field5 = body.p2field5;
    dbData.p2field6 = body.p2field6;
    dbData.p2field7 = body.p2field7;
    dbData.p2field8 = body.p2field8;
    dbData.p2field9 = body.p2field9;
    dbData.p2field10 = body.p2field10;
    dbData.p2field11 = body.p2field11;
    dbData.p2field12 = body.p2field12;
    dbData.p2field13a = body.p2field13a;
    dbData.p2field13c = body.p2field13c;
    dbData.p2field14 = body.p2field14;
    dbData.p3field1 = body.p3field1;
    dbData.p3field1a = body.p3field1a;
    dbData.p3field1atxt = body.p3field1atxt;
    dbData.p3field1b = body.p3field1b;
    dbData.p3field1btxt = body.p3field1btxt;
    dbData.p3field1c = body.p3field1c;
    dbData.p3field1ctxt = body.p3field1ctxt;
    dbData.p5field1a1 = body.p5field1a1;
    dbData.p5field1a2 = body.p5field1a2;
    dbData.p5field1a2txt = body.p5field1a2txt;
    dbData.p5field1a4 = body.p5field1a4;
    dbData.p5field1a5 = body.p5field1a5;
    dbData.p5field1a6 = body.p5field1a6;
    dbData.p5field1a7 = body.p5field1a7;
    dbData.p5field1a9 = body.p5field1a9;
    dbData.p5field1a10 = body.p5field1a10;
    dbData.p5field1a11 = body.p5field1a11;
    dbData.p5field1b1 = body.p5field1b1;
    dbData.p5field1b2 = body.p5field1b2;
    dbData.p5field1b2txt = body.p5field1b2txt;
    dbData.p5field1b4 = body.p5field1b4;
    dbData.p5field1b5 = body.p5field1b5;
    dbData.p5field1b6 = body.p5field1b6;
    dbData.p5field1b7 = body.p5field1b7;
    dbData.p5field1b9 = body.p5field1b9;
    dbData.p5field1c1 = body.p5field1c1;
    dbData.p5field1c2 = body.p5field1c2;
    dbData.p5field1c2txt = body.p5field1c2txt;
    dbData.p5field1c4 = body.p5field1c4;
    dbData.p5field1c5 = body.p5field1c5;
    dbData.p5field1c6 = body.p5field1c6;
    dbData.p5field1c7 = body.p5field1c7;
    dbData.p5field1c9 = body.p5field1c9;
    dbData.p5field1c10 = body.p5field1c10;
    dbData.p5field1c11 = body.p5field1c11;
    dbData.p5field1d1 = body.p5field1d1;
    dbData.p5field1d2 = body.p5field1d2;
    dbData.p5field1d2txt = body.p5field1d2txt;
    dbData.p5field1d4 = body.p5field1d4;
    dbData.p5field1d5 = body.p5field1d5;
    dbData.p5field1d6 = body.p5field1d6;
    dbData.p5field1d7 = body.p5field1d7;
    dbData.p5field1d9 = body.p5field1d9;
    dbData.p5field1d10 = body.p5field1d10;
    dbData.p5field1d11 = body.p5field1d11;
    dbData.p5field1e1 = body.p5field1e1;
    dbData.p5field1e2 = body.p5field1e2;
    dbData.p5field1e2txt = body.p5field1e2txt;
    dbData.p5field1e4 = body.p5field1e4;
    dbData.p5field1e5 = body.p5field1e5;
    dbData.p5field1e6 = body.p5field1e6;
    dbData.p5field1e7 = body.p5field1e7;
    dbData.p5field1e9 = body.p5field1e9;
    dbData.p5field1e10 = body.p5field1e10;
    dbData.p5field1e11 = body.p5field1e11;
    dbData.p6field1 = body.p6field1;
    dbData.p6field2 = body.p6field2;
    dbData.p6field2a1 = body.p6field2a1;
    dbData.p6field2a2 = body.p6field2a2;
    dbData.p6field2a3 = body.p6field2a3;
    dbData.p6field2b = body.p6field2b;
    dbData.p6field2c = body.p6field2c;
    dbData.p6field2d = body.p6field2d;
    dbData.p6field2e = body.p6field2e;
    dbData.p6field3 = body.p6field3;
    dbData.p6field3a1 = body.p6field3a1;
    dbData.p6field3a2 = body.p6field3a2;
    dbData.p6field3a3 = body.p6field3a3;
    dbData.p6field3b = body.p6field3b;
    dbData.p6field3c = body.p6field3c;
    dbData.p6field3d = body.p6field3d;
    dbData.p6field3e = body.p6field3e;
    dbData.p7field1 = body.p7field1;
    dbData.p7field2a = body.p7field2a;
    dbData.p7field2b = body.p7field2b;
    dbData.p7field2c = body.p7field2c;
    dbData.p7field2d = body.p7field2d;
    dbData.p7field2e = body.p7field2e;
    dbData.p7field3a = body.p7field3a;
    dbData.p7field3b = body.p7field3b;
    dbData.p7field4 = body.p7field4;
    dbData.p7field5 = body.p7field5;
    dbData.p8field1a = body.p8field1a;
    dbData.p8field1b = body.p8field1b;
    dbData.p8field1c = body.p8field1c;
    dbData.p8field1ctxt = body.p8field1ctxt;
    dbData.p8field1d = body.p8field1d;
    dbData.p8field1e = body.p8field1e;
    dbData.p8field1f = body.p8field1f;
    dbData.p8field1g = body.p8field1g;
    dbData.p8field1h = body.p8field1h;
    dbData.p8field1i = body.p8field1i;
    dbData.p8field1j = body.p8field1j;
    dbData.p8field1k = body.p8field1k;
    dbData.p8field1l = body.p8field1l;
    dbData.p8field2a = body.p8field2a;
    dbData.p8field2b = body.p8field2b;
    dbData.p8field2c = body.p8field2c;
    dbData.p8field2ctxt = body.p8field2ctxt;
    dbData.p8field2d = body.p8field2d;
    dbData.p8field2e = body.p8field2e;
    dbData.p8field2f = body.p8field2f;
    dbData.p8field2g = body.p8field2g;
    dbData.p8field2h = body.p8field2h;
    dbData.p8field2i = body.p8field2i;
    dbData.p8field2j = body.p8field2j;
    dbData.p8field2k = body.p8field2k;
    dbData.p8field2l = body.p8field2l;
    dbData.p8field3a = body.p8field3a;
    dbData.p8field3b = body.p8field3b;
    dbData.p8field3c = body.p8field3c;
    dbData.p8field3ctxt = body.p8field3ctxt;
    dbData.p8field3d = body.p8field3d;
    dbData.p8field3e = body.p8field3e;
    dbData.p8field3f = body.p8field3f;
    dbData.p8field3g = body.p8field3g;
    dbData.p8field3h = body.p8field3h;
    dbData.p8field3i = body.p8field3i;
    dbData.p8field3j = body.p8field3j;
    dbData.p8field3k = body.p8field3k;
    dbData.p8field3l = body.p8field3l;
    dbData.p9field1 = body.p9field1;
    dbData.p9field2 = body.p9field2;
    dbData.p9field3a1 = body.p9field3a1;
    dbData.p9field3a2 = body.p9field3a2;
    dbData.p9field3a3 = body.p9field3a3;
    dbData.p9field3a4 = body.p9field3a4;
    dbData.p9field3a5 = body.p9field3a5;
    dbData.p9field3b1 = body.p9field3b1;
    dbData.p9field3b2 = body.p9field3b2;
    dbData.p9field3b3 = body.p9field3b3;
    dbData.p9field3b4 = body.p9field3b4;
    dbData.p9field3b5 = body.p9field3b5;
    dbData.p9field3c1 = body.p9field3c1;
    dbData.p9field3c2 = body.p9field3c2;
    dbData.p9field3c3 = body.p9field3c3;
    dbData.p9field3c4 = body.p9field3c4;
    dbData.p9field3c5 = body.p9field3c5;
    dbData.p9field3d1 = body.p9field3d1;
    dbData.p9field3d2 = body.p9field3d2;
    dbData.p9field3d3 = body.p9field3d3;
    dbData.p9field3d4 = body.p9field3d4;
    dbData.p9field3d5 = body.p9field3d5;
    dbData.p9field3e1 = body.p9field3e1;
    dbData.p9field3e2 = body.p9field3e2;
    dbData.p9field3e3 = body.p9field3e3;
    dbData.p9field3e4 = body.p9field3e4;
    dbData.p9field3e5 = body.p9field3e5;
    dbData.p9field3f1 = body.p9field3f1;
    dbData.p9field3f2 = body.p9field3f2;
    dbData.p9field3f3 = body.p9field3f3;
    dbData.p9field3f4 = body.p9field3f4;
    dbData.p9field3f5 = body.p9field3f5;
    dbData.p10field1 = body.p10field1;
    dbData.p10field2 = body.p10field2;
    dbData.p10field3 = body.p10field3;
    dbData.p10field4a1 = body.p10field4a1;
    dbData.p10field4a2 = body.p10field4a2;
    dbData.p10field4a3 = body.p10field4a3;
    dbData.p10field4b1 = body.p10field4b1;
    dbData.p10field4b2 = body.p10field4b2;
    dbData.p10field4b3 = body.p10field4b3;
    dbData.p10field4c1 = body.p10field4c1;
    dbData.p10field4c2 = body.p10field4c2;
    dbData.p10field4c3 = body.p10field4c3;
    dbData.p10field4d = body.p10field4d;
    dbData.p10field4e = body.p10field4e;
    dbData.p10field4f1 = body.p10field4f1;
    dbData.p10field4f2 = body.p10field4f2;
    dbData.p10field4f2txt = body.p10field4f2txt;
    dbData.p10field4f4 = body.p10field4f4;
    dbData.p10field4f5 = body.p10field4f5;
    dbData.p10field4f6 = body.p10field4f6;
    dbData.p10field4f7 = body.p10field4f7;
    dbData.p10field4f9 = body.p10field4f9;
    dbData.p10field4g = body.p10field4g;
    dbData.p10field5 = body.p10field5;
    dbData.p10field6a = body.p10field6a;
    dbData.p10field6b = body.p10field6b;
    dbData.p10field7a = body.p10field7a;
    dbData.p10field7b = body.p10field7b;
    dbData.p10field7c = body.p10field7c;
    dbData.p10field7c2 = body.p10field7c2;
    dbData.p10field8 = body.p10field8;
    dbData.p10field8a1 = body.p10field8a1;
    dbData.p10field8a2 = body.p10field8a2;
    dbData.p10field8a3 = body.p10field8a3;
    dbData.p10field8b = body.p10field8b;
    dbData.p10field8b2 = body.p10field8b2;
    dbData.p10field8c = body.p10field8c;
    dbData.p10field8d = body.p10field8d;
    dbData.p10field8e = body.p10field8e;
    dbData.p10field8f = body.p10field8f;
    dbData.p10field8g = body.p10field8g;
    dbData.p10field8h = body.p10field8h;
    dbData.p10field8h2 = body.p10field8h2;
    dbData.p10field9a1 = body.p10field9a1;
    dbData.p10field9a2 = body.p10field9a2;
    dbData.p10field9a3 = body.p10field9a3;
    dbData.p10field9b = body.p10field9b;
    dbData.p10field9b2 = body.p10field9b2;
    dbData.p10field9c = body.p10field9c;
    dbData.p10field9d = body.p10field9d;
    dbData.p10field9e = body.p10field9e;
    dbData.p10field9f = body.p10field9f;
    dbData.p10field9g = body.p10field9g;
    dbData.p10field9h = body.p10field9h;
    dbData.p10field9h2 = body.p10field9h2;
    dbData.p11field1 = body.p11field1;
    dbData.p11field2a1 = body.p11field2a1;
    dbData.p11field2a2 = body.p11field2a2;
    dbData.p11field2a3 = body.p11field2a3;
    dbData.p11field2a4 = body.p11field2a4;
    dbData.p11field2a5 = body.p11field2a5;
    dbData.p11field2a6 = body.p11field2a6;
    dbData.p11field2a7 = body.p11field2a7;
    dbData.p11field2a8 = body.p11field2a8;
    dbData.p11field2a8txt = body.p11field2a8txt;
    dbData.p11field2a9 = body.p11field2a9;
    dbData.p11field2a10 = body.p11field2a10;
    dbData.p11field2a11 = body.p11field2a11;
    dbData.p11field2a12 = body.p11field2a12;
    dbData.p11field2a13 = body.p11field2a13;
    dbData.p11field2a14 = body.p11field2a14;
    dbData.p11field2a15 = body.p11field2a15;
    dbData.p11field2a16 = body.p11field2a16;
    dbData.p11field2b1 = body.p11field2b1;
    dbData.p11field2b2 = body.p11field2b2;
    dbData.p11field2b3 = body.p11field2b3;
    dbData.p11field2b4 = body.p11field2b4;
    dbData.p11field2b5 = body.p11field2b5;
    dbData.p11field2b6 = body.p11field2b6;
    dbData.p11field2b7 = body.p11field2b7;
    dbData.p11field2b8 = body.p11field2b8;
    dbData.p11field2b8txt = body.p11field2b8txt;
    dbData.p11field2b9 = body.p11field2b9;
    dbData.p11field2b10 = body.p11field2b10;
    dbData.p11field2b11 = body.p11field2b11;
    dbData.p11field2b12 = body.p11field2b12;
    dbData.p11field2b13 = body.p11field2b13;
    dbData.p11field2b14 = body.p11field2b14;
    dbData.p11field2b15 = body.p11field2b15;
    dbData.p11field2b16 = body.p11field2b16;
    dbData.p11field2c1 = body.p11field2c1;
    dbData.p11field2c2 = body.p11field2c2;
    dbData.p11field2c3 = body.p11field2c3;
    dbData.p11field2c4 = body.p11field2c4;
    dbData.p11field2c5 = body.p11field2c5;
    dbData.p11field2c6 = body.p11field2c6;
    dbData.p11field2c7 = body.p11field2c7;
    dbData.p11field2c8 = body.p11field2c8;
    dbData.p11field2c8txt = body.p11field2c8txt;
    dbData.p11field2c9 = body.p11field2c9;
    dbData.p11field2c10 = body.p11field2c10;
    dbData.p11field2c11 = body.p11field2c11;
    dbData.p11field2c12 = body.p11field2c12;
    dbData.p11field2c13 = body.p11field2c13;
    dbData.p11field2c14 = body.p11field2c14;
    dbData.p11field2c15 = body.p11field2c15;
    dbData.p11field2c16 = body.p11field2c16;
    dbData.p11field2d1 = body.p11field2d1;
    dbData.p11field2d2 = body.p11field2d2;
    dbData.p11field2d3 = body.p11field2d3;
    dbData.p11field2d4 = body.p11field2d4;
    dbData.p11field2d5 = body.p11field2d5;
    dbData.p11field2d6 = body.p11field2d6;
    dbData.p11field2d7 = body.p11field2d7;
    dbData.p11field2d8 = body.p11field2d8;
    dbData.p11field2d8txt = body.p11field2d8txt;
    dbData.p11field2d9 = body.p11field2d9;
    dbData.p11field2d10 = body.p11field2d10;
    dbData.p11field2d11 = body.p11field2d11;
    dbData.p11field2d12 = body.p11field2d12;
    dbData.p11field2d13 = body.p11field2d13;
    dbData.p11field2d14 = body.p11field2d14;
    dbData.p11field2d15 = body.p11field2d15;
    dbData.p11field2d16 = body.p11field2d16;
    dbData.p12field1 = body.p12field1;
    dbData.p12field2 = body.p12field2;
    dbData.p12field3 = body.p12field3;
    dbData.p12field4a = body.p12field4a;
    dbData.p12field4b = body.p12field4b;
    dbData.p12field5 = body.p12field5;
    dbData.p12field6 = body.p12field6;
    dbData.p12field7a = body.p12field7a;
    dbData.p12field7b = body.p12field7b;
    dbData.p12field8 = body.p12field8;
    dbData.p12field9a = body.p12field9a;
    dbData.p12field9ba1 = body.p12field9ba1;
    dbData.p12field9bb1 = body.p12field9bb1;
    dbData.p12field9bc1 = body.p12field9bc1;
    dbData.p12field9bd1 = body.p12field9bd1;
    dbData.p12field9ba2 = body.p12field9ba2;
    dbData.p12field9bb2 = body.p12field9bb2;
    dbData.p12field9bc2 = body.p12field9bc2;
    dbData.p12field9bd2 = body.p12field9bd2;
    dbData.p12field9ba3 = body.p12field9ba3;
    dbData.p12field9bb3 = body.p12field9bb3;
    dbData.p12field9bc3 = body.p12field9bc3;
    dbData.p12field9bd3 = body.p12field9bd3;
    dbData.p12field9ba4 = body.p12field9ba4;
    dbData.p12field9bb4 = body.p12field9bb4;
    dbData.p12field9bc4 = body.p12field9bc4;
    dbData.p12field9bd4 = body.p12field9bd4;
    dbData.p12field10a = body.p12field10a;
    dbData.p12field10b = body.p12field10b;
    dbData.p12field10c = body.p12field10c;
    dbData.p12field11 = body.p12field11;
    dbData.p12field12 = body.p12field12;
    dbData.p12field13a = body.p12field13a;
    dbData.p12field13b = body.p12field13b;
    dbData.p12field14a = body.p12field14a;
    dbData.p12field14b = body.p12field14b;
    dbData.p12field14c = body.p12field14c;
    dbData.p12field14d = body.p12field14d;
    dbData.p12field14e = body.p12field14e;
    dbData.p12field14f = body.p12field14f;
    dbData.p12field15a = body.p12field15a;
    dbData.p12field15b = body.p12field15b;
    dbData.p12field15c = body.p12field15c;
    dbData.p12field15d = body.p12field15d;
    dbData.p12field15e = body.p12field15e;
    dbData.p12field15f = body.p12field15f;
    dbData.p12field15g = body.p12field15g;
    dbData.p12field15h = body.p12field15h;
    dbData.p12field15i = body.p12field15i;
    dbData.p12field16a = body.p12field16a;
    dbData.p12field16b = body.p12field16b;
    dbData.p12field16c = body.p12field16c;
    dbData.p12field16d = body.p12field16d;
    dbData.p16field16e = body.p16field16e;
    dbData.p12field17 = body.p12field17;
    dbData.p12field17a = body.p12field17a;
    dbData.p12field17b = body.p12field17b;
    dbData.p12field18 = body.p12field18;
    dbData.p12field18a = body.p12field18a;
    dbData.p12field18b = body.p12field18b;
    dbData.p12field19 = body.p12field19;
    dbData.p12field20 = body.p12field20;
    dbData.p12field21 = body.p12field21;
    dbData.p12field22 = body.p12field22;
    dbData.p12field23 = body.p12field23;
    dbData.p12field24 = body.p12field24;
    dbData.p12field25 = body.p12field25;
    dbData.p12field26 = body.p12field26;
    dbData.p12field27a = body.p12field27a;
    dbData.p12field27b = body.p12field27b;
    dbData.p12field28a = body.p12field28a;
    dbData.p12field28b1 = body.p12field28b1;
    dbData.p12field28b2 = body.p12field28b2;
    dbData.p12field28b3 = body.p12field28b3;
    dbData.p12field29a1 = body.p12field29a1;
    dbData.p12field29a2 = body.p12field29a2;
    dbData.p12field29a3 = body.p12field29a3;
    dbData.p12field29a4 = body.p12field29a4;
    dbData.p12field29b1 = body.p12field29b1;
    dbData.p12field29b2 = body.p12field29b2;
    dbData.p12field29b3 = body.p12field29b3;
    dbData.p12field29b4 = body.p12field29b4;
    dbData.p12field29c1 = body.p12field29c1;
    dbData.p12field29c2 = body.p12field29c2;
    dbData.p12field29c3 = body.p12field29c3;
    dbData.p12field29c4 = body.p12field29c4;
    dbData.p12field29d1 = body.p12field29d1;
    dbData.p12field29d2 = body.p12field29d2;
    dbData.p12field29d3 = body.p12field29d3;
    dbData.p12field29d4 = body.p12field29d4;
    dbData.p12field29e1 = body.p12field29e1;
    dbData.p12field29e2 = body.p12field29e2;
    dbData.p12field29e3 = body.p12field29e3;
    dbData.p12field29e4 = body.p12field29e4;
    dbData.p12field30a = body.p12field30a;
    dbData.p12field30b = body.p12field30b;
    dbData.p12field30c = body.p12field30c;
    dbData.p12field30d = body.p12field30d;
    dbData.p12field30e = body.p12field30e;
    dbData.p12field30f = body.p12field30f;
    dbData.p12field30g = body.p12field30g;
    dbData.p12field30h = body.p12field30h;
    dbData.p12field30i = body.p12field30i;
    dbData.p12field31 = body.p12field31;
    dbData.p12field32 = body.p12field32;
    dbData.p12field33 = body.p12field33;
    dbData.p12field34 = body.p12field34;
    dbData.p12field35 = body.p12field35;
    dbData.p12field36 = body.p12field36;
    dbData.p12field37 = body.p12field37;
    dbData.p12field38a = body.p12field38a;
    dbData.p12field38b = body.p12field38b;
    dbData.p12field38c = body.p12field38c;
    dbData.p12field39 = body.p12field39;
    dbData.p12field40 = body.p12field40;
    dbData.p12field41 = body.p12field41;
    dbData.p12field42 = body.p12field42;
    dbData.p12field43 = body.p12field43;
    dbData.p12field44a = body.p12field44a;
    dbData.p12field44b1 = body.p12field44b1;
    dbData.p12field44b2 = body.p12field44b2;
    dbData.p12field45 = body.p12field45;
    dbData.p12field46 = body.p12field46;
    dbData.p12field47 = body.p12field47;
    dbData.p12field48 = body.p12field48;
    dbData.p12field49 = body.p12field49;
    dbData.p12field50 = body.p12field50;
    dbData.p13field1a = body.p13field1a;
    dbData.p13field1b = body.p13field1b;
    dbData.p13field1btxt = body.p13field1btxt;
    dbData.p13field2 = body.p13field2;
    dbData.p13field2txt = body.p13field2txt;
    dbData.p14field1a = body.p14field1a;
    dbData.p14field1b = body.p14field1b;
    dbData.p14field2 = body.p14field2;
    dbData.p14field3a = body.p14field3a;
    dbData.p14field3b = body.p14field3b;
    dbData.p14field3btxt = body.p14field3btxt;
    dbData.p14field3c = body.p14field3c;
    dbData.p14field3d = body.p14field3d;
    dbData.p14field3e = body.p14field3e;
    dbData.p14field3f = body.p14field3f;
    dbData.p14field3g = body.p14field3g;
    dbData.p14field3h = body.p14field3h;
    dbData.p14fieldLang = body.p14fieldLang;
    dbData.p15field1a = body.p15field1a;
    dbData.p15field1b = body.p15field1b;
    dbData.p15field2 = body.p15field2;
    dbData.p15field3a = body.p15field3a;
    dbData.p15field3b = body.p15field3b;
    dbData.p15field3btxt = body.p15field3btxt;
    dbData.p15field3d = body.p15field3d;
    dbData.p15field3e = body.p15field3e;
    dbData.p15field3f = body.p15field3f;
    dbData.p15field3g = body.p15field3g;
    dbData.p15field4 = body.p15field4;
    dbData.p15field5 = body.p15field5;
    dbData.p15field6 = body.p15field6;
    dbData.p15field7a = body.p15field7a;
    dbData.p15field7b = body.p15field7b;
    dbData.p15field7b1 = body.p15field7b1;
    dbData.p4field1 = body.p4field1;
    dbData.p4field2 = body.p4field2;
    dbData.p4field3 = body.p4field3;
    dbData.p4field4 = body.p4field4;
    dbData.p4field5 = body.p4field5;

    dbData.p2field13b = body.p2field13b;
    dbData.p7field6 = body.p7field6;

    dbData.save((err, savedCase) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                message: 'Error creating case',
                errors: err
            });
        }

        res.status(201).json({
            ok: true,
            newData: savedCase
        });


    });

});


// ============================================
//   Borrar un newData por el id
// ============================================
app.delete('/:id', mdAutenticacion.verificaToken, (req, res) => {

    var id = req.params.id;

    newData.findByIdAndRemove(id, (err, deletedCase) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                message: 'Error deleting case',
                errors: err
            });
        }

        if (!deletedCase) {
            return res.status(400).json({
                ok: false,
                message: 'Theres no case whith the given ID.',
                errors: {
                    message: 'Theres no case whith the given ID.'
                }
            });
        }

        res.status(200).json({
            ok: true,
            data: deletedCase
        });

    });

});


module.exports = app;