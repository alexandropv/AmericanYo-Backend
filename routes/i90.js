var express = require('express');
var mdAutenticacion = require('../middlewares/auth');
var app = express();
var Data = require('../models/i90');
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
        dbData.p1field1 = body.p1field1;
        dbData.p1field2 = body.p1field2;
        dbData.p1field3a = body.p1field3a;
        dbData.p1field3b = body.p1field3b;
        dbData.p1field3c = body.p1field3c;
        dbData.p1field4 = body.p1field4;
        dbData.p1field5a = body.p1field5a;
        dbData.p1field5b = body.p1field5b;
        dbData.p1field5c = body.p1field5c;
        dbData.p1field6a = body.p1field6a;
        dbData.p1field6b = body.p1field6b;
        dbData.p1field6c = body.p1field6c;
        dbData.p1field6ctxt = body.p1field6ctxt;
        dbData.p1field6d = body.p1field6d;
        dbData.p1field6e = body.p1field6e;
        dbData.p1field6f = body.p1field6f;
        dbData.p1field6g = body.p1field6g;
        dbData.p1field6h = body.p1field6h;
        dbData.p1field6i = body.p1field6i;
        dbData.p1field7a = body.p1field7a;
        dbData.p1field7b = body.p1field7b;
        dbData.p1field7c = body.p1field7c;
        dbData.p1field7ctxt = body.p1field7ctxt;
        dbData.p1field7d = body.p1field7d;
        dbData.p1field7e = body.p1field7e;
        dbData.p1field7f = body.p1field7f;
        dbData.p1field7g = body.p1field7g;
        dbData.p1field7h = body.p1field7h;
        dbData.p1field7i = body.p1field7i;
        dbData.p1field8 = body.p1field8;
        dbData.p1field9 = body.p1field9;
        dbData.p1field10 = body.p1field10;
        dbData.p1field11 = body.p1field11;
        dbData.p1field12 = body.p1field12;
        dbData.p1field13 = body.p1field13;
        dbData.p1field14 = body.p1field14;
        dbData.p1field15 = body.p1field15;
        dbData.p1field16 = body.p1field16;
        dbData.p2field1a = body.p2field1a;
        dbData.p2field2 = body.p2field2;
        dbData.p2field2h1a = body.p2field2h1a;
        dbData.p2field3 = body.p2field3;
        dbData.p3field1 = body.p3field1;
        dbData.p3field2 = body.p3field2;
        dbData.p3field3a = body.p3field3a;
        dbData.p3field3a1 = body.p3field3a1;
        dbData.p3field4 = body.p3field4;
        dbData.p3field5 = body.p3field5;
        dbData.p3field6 = body.p3field6;
        dbData.p3field7a = body.p3field7a;
        dbData.p3field7b = body.p3field7b;
        dbData.p3field7c = body.p3field7c;
        dbData.p3field7d = body.p3field7d;
        dbData.p3field7e = body.p3field7e;
        dbData.p3field8a = body.p3field8a;
        dbData.p3field8b = body.p3field8b;
        dbData.p3field9 = body.p3field9;
        dbData.p3field10 = body.p3field10;
        dbData.p3field11 = body.p3field11;
        dbData.p4field1 = body.p4field1;
        dbData.p4field1a = body.p4field1a;
        dbData.p3field1b = body.p3field1b;
        dbData.p3field1btxt = body.p3field1btxt;
        dbData.p3field1c = body.p3field1c;
        dbData.p3field1ctxt = body.p3field1ctxt;
        dbData.p5field1a = body.p5field1a;
        dbData.p5field1b = body.p5field1b;
        dbData.p5field1btxt = body.p5field1btxt;
        dbData.p5field2 = body.p5field2;
        dbData.p5field3 = body.p5field3;
        dbData.p5field4 = body.p5field4;
        dbData.p5field5 = body.p5field5;
        dbData.p6field1a = body.p6field1a;
        dbData.p6field1b = body.p6field1b;
        dbData.p6field2 = body.p6field2;
        dbData.p6field3a = body.p6field3a;
        dbData.p6field3b = body.p6field3b;
        dbData.p6field3btxt = body.p6field3btxt;
        dbData.p6field3c = body.p6field3c;
        dbData.p6field3d = body.p6field3d;
        dbData.p6field3e = body.p6field3e;
        dbData.p6field3f = body.p6field3f;
        dbData.p6field3g = body.p6field3g;
        dbData.p6field3h = body.p6field3h;
        dbData.p6field4 = body.p6field4;
        dbData.p6field5 = body.p6field5;
        dbData.p6field6 = body.p6field6;
        dbData.p6fieldLang = body.p6fieldLang;
        dbData.p7field1a = body.p7field1a;
        dbData.p7field1b = body.p7field1b;
        dbData.p7field2 = body.p7field2;
        dbData.p7field3a = body.p7field3a;
        dbData.p7field3b = body.p7field3b;
        dbData.p7field3btxt = body.p7field3btxt;
        dbData.p7field3c = body.p7field3c;
        dbData.p7field3d = body.p7field3d;
        dbData.p7field3e = body.p7field3e;
        dbData.p7field3f = body.p7field3f;
        dbData.p7field3g = body.p7field3g;
        dbData.p7field3h = body.p7field3h;
        dbData.p7field4 = body.p7field4;
        dbData.p7field5 = body.p7field5;
        dbData.p7field6 = body.p7field6;
        dbData.p7field7a = body.p7field7a;
        dbData.p7field7b = body.p7field7b;
        dbData.p7field7b1 = body.p7field7b1;

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
    dbData.p1field1 = body.p1field1;
    dbData.p1field2 = body.p1field2;
    dbData.p1field3a = body.p1field3a;
    dbData.p1field3b = body.p1field3b;
    dbData.p1field3c = body.p1field3c;
    dbData.p1field4 = body.p1field4;
    dbData.p1field5a = body.p1field5a;
    dbData.p1field5b = body.p1field5b;
    dbData.p1field5c = body.p1field5c;
    dbData.p1field6a = body.p1field6a;
    dbData.p1field6b = body.p1field6b;
    dbData.p1field6c = body.p1field6c;
    dbData.p1field6ctxt = body.p1field6ctxt;
    dbData.p1field6d = body.p1field6d;
    dbData.p1field6e = body.p1field6e;
    dbData.p1field6f = body.p1field6f;
    dbData.p1field6g = body.p1field6g;
    dbData.p1field6h = body.p1field6h;
    dbData.p1field6i = body.p1field6i;
    dbData.p1field7a = body.p1field7a;
    dbData.p1field7b = body.p1field7b;
    dbData.p1field7c = body.p1field7c;
    dbData.p1field7ctxt = body.p1field7ctxt;
    dbData.p1field7d = body.p1field7d;
    dbData.p1field7e = body.p1field7e;
    dbData.p1field7f = body.p1field7f;
    dbData.p1field7g = body.p1field7g;
    dbData.p1field7h = body.p1field7h;
    dbData.p1field7i = body.p1field7i;
    dbData.p1field8 = body.p1field8;
    dbData.p1field9 = body.p1field9;
    dbData.p1field10 = body.p1field10;
    dbData.p1field11 = body.p1field11;
    dbData.p1field12 = body.p1field12;
    dbData.p1field13 = body.p1field13;
    dbData.p1field14 = body.p1field14;
    dbData.p1field15 = body.p1field15;
    dbData.p1field16 = body.p1field16;
    dbData.p2field1a = body.p2field1a;
    dbData.p2field2 = body.p2field2;
    dbData.p2field2h1a = body.p2field2h1a;
    dbData.p2field3 = body.p2field3;
    dbData.p3field1 = body.p3field1;
    dbData.p3field2 = body.p3field2;
    dbData.p3field3a = body.p3field3a;
    dbData.p3field3a1 = body.p3field3a1;
    dbData.p3field4 = body.p3field4;
    dbData.p3field5 = body.p3field5;
    dbData.p3field6 = body.p3field6;
    dbData.p3field7a = body.p3field7a;
    dbData.p3field7b = body.p3field7b;
    dbData.p3field7c = body.p3field7c;
    dbData.p3field7d = body.p3field7d;
    dbData.p3field7e = body.p3field7e;
    dbData.p3field8a = body.p3field8a;
    dbData.p3field8b = body.p3field8b;
    dbData.p3field9 = body.p3field9;
    dbData.p3field10 = body.p3field10;
    dbData.p3field11 = body.p3field11;
    dbData.p4field1 = body.p4field1;
    dbData.p4field1a = body.p4field1a;
    dbData.p3field1b = body.p3field1b;
    dbData.p3field1btxt = body.p3field1btxt;
    dbData.p3field1c = body.p3field1c;
    dbData.p3field1ctxt = body.p3field1ctxt;
    dbData.p5field1a = body.p5field1a;
    dbData.p5field1b = body.p5field1b;
    dbData.p5field1btxt = body.p5field1btxt;
    dbData.p5field2 = body.p5field2;
    dbData.p5field3 = body.p5field3;
    dbData.p5field4 = body.p5field4;
    dbData.p5field5 = body.p5field5;
    dbData.p6field1a = body.p6field1a;
    dbData.p6field1b = body.p6field1b;
    dbData.p6field2 = body.p6field2;
    dbData.p6field3a = body.p6field3a;
    dbData.p6field3b = body.p6field3b;
    dbData.p6field3btxt = body.p6field3btxt;
    dbData.p6field3c = body.p6field3c;
    dbData.p6field3d = body.p6field3d;
    dbData.p6field3e = body.p6field3e;
    dbData.p6field3f = body.p6field3f;
    dbData.p6field3g = body.p6field3g;
    dbData.p6field3h = body.p6field3h;
    dbData.p6field4 = body.p6field4;
    dbData.p6field5 = body.p6field5;
    dbData.p6field6 = body.p6field6;
    dbData.p6fieldLang = body.p6fieldLang;
    dbData.p7field1a = body.p7field1a;
    dbData.p7field1b = body.p7field1b;
    dbData.p7field2 = body.p7field2;
    dbData.p7field3a = body.p7field3a;
    dbData.p7field3b = body.p7field3b;
    dbData.p7field3btxt = body.p7field3btxt;
    dbData.p7field3c = body.p7field3c;
    dbData.p7field3d = body.p7field3d;
    dbData.p7field3e = body.p7field3e;
    dbData.p7field3f = body.p7field3f;
    dbData.p7field3g = body.p7field3g;
    dbData.p7field3h = body.p7field3h;
    dbData.p7field4 = body.p7field4;
    dbData.p7field5 = body.p7field5;
    dbData.p7field6 = body.p7field6;
    dbData.p7field7a = body.p7field7a;
    dbData.p7field7b = body.p7field7b;
    dbData.p7field7b1 = body.p7field7b1;


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