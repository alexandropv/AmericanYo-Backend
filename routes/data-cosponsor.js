var express = require('express');
var mdAutenticacion = require('../middlewares/auth');
var app = express();
var Data = require('../models/data-cosponsor');

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
                console.log(id);
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
    console.log(body);
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

        console.log(dbData);


        // dbData.p18field2 = body.p18field2;

        dbData._id = body._id
        dbData.userid = body.userid
        dbData.packageid = body.packageid
        dbData.p2field1a = body.p2field1a
        dbData.p2field1b = body.p2field1b
        dbData.p2field1c = body.p2field1c
        dbData.p2field2a = body.p2field2a
        dbData.p2field2b = body.p2field2b
        dbData.p2field2c = body.p2field2c
        dbData.p2field2ctxt = body.p2field2ctxt
        dbData.p2field2d = body.p2field2d
        dbData.p2field2e = body.p2field2e
        dbData.p2field2f = body.p2field2f
        dbData.p2field2g = body.p2field2g
        dbData.p2field2h = body.p2field2h
        dbData.p2field2i = body.p2field2i
        dbData.p2field3 = body.p2field3
        dbData.p2field4 = body.p2field4
        dbData.p2field5 = body.p2field5
        dbData.p2field6 = body.p2field6
        dbData.p2field7 = body.p2field7
        dbData.p3field1 = body.p3field1
        dbData.p3field2 = body.p3field2
        dbData.p3field3 = body.p3field3
        dbData.p3field4a = body.p3field4a
        dbData.p3field4b = body.p3field4b
        dbData.p3field4c = body.p3field4c
        dbData.p3field5 = body.p3field5
        dbData.p3field6 = body.p3field6
        dbData.p3field7 = body.p3field7
        dbData.p3field8 = body.p3field8
        dbData.p3field9a = body.p3field9a
        dbData.p3field9b = body.p3field9b
        dbData.p3field9c = body.p3field9c
        dbData.p3field10 = body.p3field10
        dbData.p3field11 = body.p3field11
        dbData.p3field12 = body.p3field12
        dbData.p3field13 = body.p3field13
        dbData.p3field14a = body.p3field14a
        dbData.p3field14b = body.p3field14b
        dbData.p3field14c = body.p3field14c
        dbData.p3field15 = body.p3field15
        dbData.p3field16 = body.p3field16
        dbData.p3field17 = body.p3field17
        dbData.p3field18 = body.p3field18
        dbData.p3field19a = body.p3field19a
        dbData.p3field19b = body.p3field19b
        dbData.p3field19c = body.p3field19c
        dbData.p3field20 = body.p3field20
        dbData.p3field21 = body.p3field21
        dbData.p3field22 = body.p3field22
        dbData.p3field23 = body.p3field23
        dbData.p3field24a = body.p3field24a
        dbData.p3field24b = body.p3field24b
        dbData.p3field24c = body.p3field24c
        dbData.p3field25 = body.p3field25
        dbData.p3field26 = body.p3field26
        dbData.p3field27 = body.p3field27
        dbData.p3field28 = body.p3field28
        dbData.p3field29 = body.p3field29
        dbData.p4field1a = body.p4field1a
        dbData.p4field1b = body.p4field1b
        dbData.p4field1c = body.p4field1c
        dbData.p4field2a = body.p4field2a
        dbData.p4field2b = body.p4field2b
        dbData.p4field2c = body.p4field2c
        dbData.p4field2ctxt = body.p4field2ctxt
        dbData.p4field2d = body.p4field2d
        dbData.p4field2e = body.p4field2e
        dbData.p4field2f = body.p4field2f
        dbData.p4field2g = body.p4field2g
        dbData.p4field2h = body.p4field2h
        dbData.p4field2i = body.p4field2i
        dbData.p4field3 = body.p4field3
        dbData.p4field4a = body.p4field4a
        dbData.p4field4b = body.p4field4b
        dbData.p4field4btxt = body.p4field4btxt
        dbData.p4field4c = body.p4field4c
        dbData.p4field4d = body.p4field4d
        dbData.p4field4e = body.p4field4e
        dbData.p4field4f = body.p4field4f
        dbData.p4field4g = body.p4field4g
        dbData.p4field4h = body.p4field4h
        dbData.p4field5 = body.p4field5
        dbData.p4field6 = body.p4field6
        dbData.p4field7 = body.p4field7
        dbData.p4field8 = body.p4field8
        dbData.p4field9 = body.p4field9
        dbData.p4field10 = body.p4field10
        dbData.p4field11 = body.p4field11
        dbData.p4field12 = body.p4field12
        dbData.p4field13 = body.p4field13
        dbData.p4field14 = body.p4field14
        dbData.p5field1 = body.p5field1
        dbData.p5field2 = body.p5field2
        dbData.p5field3 = body.p5field3
        dbData.p5field4 = body.p5field4
        dbData.p5field5 = body.p5field5
        dbData.p5field6 = body.p5field6
        dbData.p5field7 = body.p5field7
        dbData.p5field8 = body.p5field8
        dbData.p6field1 = body.p6field1
        dbData.p6field1txt = body.p6field1txt
        dbData.p6field2 = body.p6field2
        dbData.p6field3 = body.p6field3
        dbData.p6field4 = body.p6field4
        dbData.p6field4txt = body.p6field4txt
        dbData.p6field5 = body.p6field5
        dbData.p6field6 = body.p6field6
        dbData.p6field8 = body.p6field8
        dbData.p6field9 = body.p6field9
        dbData.p6field10 = body.p6field10
        dbData.p6field11 = body.p6field11
        dbData.p6field12 = body.p6field12
        dbData.p6field13 = body.p6field13
        dbData.p6field14 = body.p6field14
        dbData.p6field15 = body.p6field15
        dbData.p6field16 = body.p6field16
        dbData.p6field17 = body.p6field17
        dbData.p6field18 = body.p6field18
        dbData.p6field19 = body.p6field19
        dbData.p6field20 = body.p6field20
        dbData.p6field21 = body.p6field21
        dbData.p6field22 = body.p6field22
        dbData.p6field22txt = body.p6field22txt
        dbData.p6field23a = body.p6field23a
        dbData.p6field23b = body.p6field23b
        dbData.p6field24ay = body.p6field24ay
        dbData.p6field24at = body.p6field24at
        dbData.p6field24by = body.p6field24by
        dbData.p6field24bt = body.p6field24bt
        dbData.p6field24cy = body.p6field24cy
        dbData.p6field24ct = body.p6field24ct
        dbData.p6field25 = body.p6field25
        dbData.p7field1 = body.p7field1
        dbData.p7field2 = body.p7field2
        dbData.p7field3 = body.p7field3
        dbData.p7field4 = body.p7field4
        dbData.p7field5a = body.p7field5a
        dbData.p7field5b = body.p7field5b
        dbData.p7field6 = body.p7field6
        dbData.p7field7 = body.p7field7
        dbData.p7field8 = body.p7field8
        dbData.p7field9 = body.p7field9
        dbData.p7field10 = body.p7field10
        dbData.p8field1a = body.p8field1a
        dbData.p8field1b = body.p8field1b
        dbData.p8field1btxt = body.p8field1btxt
        dbData.p8field2 = body.p8field2
        dbData.p8field2txt = body.p8field2txt
        dbData.p8field3 = body.p8field3
        dbData.p8field4 = body.p8field4
        dbData.p9field1a = body.p9field1a
        dbData.p9field1b = body.p9field1b
        dbData.p9field2 = body.p9field2
        dbData.p9field3a = body.p9field3a
        dbData.p9field3b = body.p9field3b
        dbData.p9field3btxt = body.p9field3btxt
        dbData.p9field3c = body.p9field3c
        dbData.p9field3d = body.p9field3d
        dbData.p9field3e = body.p9field3e
        dbData.p9field3f = body.p9field3f
        dbData.p9field3g = body.p9field3g
        dbData.p9field3h = body.p9field3h
        dbData.p9field4 = body.p9field4
        dbData.p9field5 = body.p9field5
        dbData.p9field6 = body.p9field6
        dbData.p9fieldLang = body.p9fieldLang
        dbData.p10field1a = body.p10field1a
        dbData.p10field1b = body.p10field1b
        dbData.p10field2 = body.p10field2
        dbData.p10field3a = body.p10field3a
        dbData.p10field3b = body.p10field3b
        dbData.p10field3btxt = body.p10field3btxt
        dbData.p10field3c = body.p10field3c
        dbData.p10field3d = body.p10field3d
        dbData.p10field3e = body.p10field3e
        dbData.p10field3f = body.p10field3f
        dbData.p10field3g = body.p10field3g
        dbData.p10field3h = body.p10field3h
        dbData.p10field4 = body.p10field4
        dbData.p10field5 = body.p10field5
        dbData.p10field6 = body.p10field6
        dbData.p10field7a = body.p10field7a
        dbData.p10field7b = body.p10field7b
        dbData.p10field7c = body.p10field7c

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
    dbData.p2field1a = body.p2field1a
    dbData.p2field1b = body.p2field1b
    dbData.p2field1c = body.p2field1c
    dbData.p2field2a = body.p2field2a
    dbData.p2field2b = body.p2field2b
    dbData.p2field2c = body.p2field2c
    dbData.p2field2ctxt = body.p2field2ctxt
    dbData.p2field2d = body.p2field2d
    dbData.p2field2e = body.p2field2e
    dbData.p2field2f = body.p2field2f
    dbData.p2field2g = body.p2field2g
    dbData.p2field2h = body.p2field2h
    dbData.p2field2i = body.p2field2i
    dbData.p2field3 = body.p2field3
    dbData.p2field4 = body.p2field4
    dbData.p2field5 = body.p2field5
    dbData.p2field6 = body.p2field6
    dbData.p2field7 = body.p2field7
    dbData.p3field1 = body.p3field1
    dbData.p3field2 = body.p3field2
    dbData.p3field3 = body.p3field3
    dbData.p3field4a = body.p3field4a
    dbData.p3field4b = body.p3field4b
    dbData.p3field4c = body.p3field4c
    dbData.p3field5 = body.p3field5
    dbData.p3field6 = body.p3field6
    dbData.p3field7 = body.p3field7
    dbData.p3field8 = body.p3field8
    dbData.p3field9a = body.p3field9a
    dbData.p3field9b = body.p3field9b
    dbData.p3field9c = body.p3field9c
    dbData.p3field10 = body.p3field10
    dbData.p3field11 = body.p3field11
    dbData.p3field12 = body.p3field12
    dbData.p3field13 = body.p3field13
    dbData.p3field14a = body.p3field14a
    dbData.p3field14b = body.p3field14b
    dbData.p3field14c = body.p3field14c
    dbData.p3field15 = body.p3field15
    dbData.p3field16 = body.p3field16
    dbData.p3field17 = body.p3field17
    dbData.p3field18 = body.p3field18
    dbData.p3field19a = body.p3field19a
    dbData.p3field19b = body.p3field19b
    dbData.p3field19c = body.p3field19c
    dbData.p3field20 = body.p3field20
    dbData.p3field21 = body.p3field21
    dbData.p3field22 = body.p3field22
    dbData.p3field23 = body.p3field23
    dbData.p3field24a = body.p3field24a
    dbData.p3field24b = body.p3field24b
    dbData.p3field24c = body.p3field24c
    dbData.p3field25 = body.p3field25
    dbData.p3field26 = body.p3field26
    dbData.p3field27 = body.p3field27
    dbData.p3field28 = body.p3field28
    dbData.p3field29 = body.p3field29
    dbData.p4field1a = body.p4field1a
    dbData.p4field1b = body.p4field1b
    dbData.p4field1c = body.p4field1c
    dbData.p4field2a = body.p4field2a
    dbData.p4field2b = body.p4field2b
    dbData.p4field2c = body.p4field2c
    dbData.p4field2ctxt = body.p4field2ctxt
    dbData.p4field2d = body.p4field2d
    dbData.p4field2e = body.p4field2e
    dbData.p4field2f = body.p4field2f
    dbData.p4field2g = body.p4field2g
    dbData.p4field2h = body.p4field2h
    dbData.p4field2i = body.p4field2i
    dbData.p4field3 = body.p4field3
    dbData.p4field4a = body.p4field4a
    dbData.p4field4b = body.p4field4b
    dbData.p4field4btxt = body.p4field4btxt
    dbData.p4field4c = body.p4field4c
    dbData.p4field4d = body.p4field4d
    dbData.p4field4e = body.p4field4e
    dbData.p4field4f = body.p4field4f
    dbData.p4field4g = body.p4field4g
    dbData.p4field4h = body.p4field4h
    dbData.p4field5 = body.p4field5
    dbData.p4field6 = body.p4field6
    dbData.p4field7 = body.p4field7
    dbData.p4field8 = body.p4field8
    dbData.p4field9 = body.p4field9
    dbData.p4field10 = body.p4field10
    dbData.p4field11 = body.p4field11
    dbData.p4field12 = body.p4field12
    dbData.p4field13 = body.p4field13
    dbData.p4field14 = body.p4field14
    dbData.p5field1 = body.p5field1
    dbData.p5field2 = body.p5field2
    dbData.p5field3 = body.p5field3
    dbData.p5field4 = body.p5field4
    dbData.p5field5 = body.p5field5
    dbData.p5field6 = body.p5field6
    dbData.p5field7 = body.p5field7
    dbData.p5field8 = body.p5field8
    dbData.p6field1 = body.p6field1
    dbData.p6field1txt = body.p6field1txt
    dbData.p6field2 = body.p6field2
    dbData.p6field3 = body.p6field3
    dbData.p6field4 = body.p6field4
    dbData.p6field4txt = body.p6field4txt
    dbData.p6field5 = body.p6field5
    dbData.p6field6 = body.p6field6
    dbData.p6field8 = body.p6field8
    dbData.p6field9 = body.p6field9
    dbData.p6field10 = body.p6field10
    dbData.p6field11 = body.p6field11
    dbData.p6field12 = body.p6field12
    dbData.p6field13 = body.p6field13
    dbData.p6field14 = body.p6field14
    dbData.p6field15 = body.p6field15
    dbData.p6field16 = body.p6field16
    dbData.p6field17 = body.p6field17
    dbData.p6field18 = body.p6field18
    dbData.p6field19 = body.p6field19
    dbData.p6field20 = body.p6field20
    dbData.p6field21 = body.p6field21
    dbData.p6field22 = body.p6field22
    dbData.p6field22txt = body.p6field22txt
    dbData.p6field23a = body.p6field23a
    dbData.p6field23b = body.p6field23b
    dbData.p6field24ay = body.p6field24ay
    dbData.p6field24at = body.p6field24at
    dbData.p6field24by = body.p6field24by
    dbData.p6field24bt = body.p6field24bt
    dbData.p6field24cy = body.p6field24cy
    dbData.p6field24ct = body.p6field24ct
    dbData.p6field25 = body.p6field25
    dbData.p7field1 = body.p7field1
    dbData.p7field2 = body.p7field2
    dbData.p7field3 = body.p7field3
    dbData.p7field4 = body.p7field4
    dbData.p7field5a = body.p7field5a
    dbData.p7field5b = body.p7field5b
    dbData.p7field6 = body.p7field6
    dbData.p7field7 = body.p7field7
    dbData.p7field8 = body.p7field8
    dbData.p7field9 = body.p7field9
    dbData.p7field10 = body.p7field10
    dbData.p8field1a = body.p8field1a
    dbData.p8field1b = body.p8field1b
    dbData.p8field1btxt = body.p8field1btxt
    dbData.p8field2 = body.p8field2
    dbData.p8field2txt = body.p8field2txt
    dbData.p8field3 = body.p8field3
    dbData.p8field4 = body.p8field4
    dbData.p9field1a = body.p9field1a
    dbData.p9field1b = body.p9field1b
    dbData.p9field2 = body.p9field2
    dbData.p9field3a = body.p9field3a
    dbData.p9field3b = body.p9field3b
    dbData.p9field3btxt = body.p9field3btxt
    dbData.p9field3c = body.p9field3c
    dbData.p9field3d = body.p9field3d
    dbData.p9field3e = body.p9field3e
    dbData.p9field3f = body.p9field3f
    dbData.p9field3g = body.p9field3g
    dbData.p9field3h = body.p9field3h
    dbData.p9field4 = body.p9field4
    dbData.p9field5 = body.p9field5
    dbData.p9field6 = body.p9field6
    dbData.p9fieldLang = body.p9fieldLang
    dbData.p10field1a = body.p10field1a
    dbData.p10field1b = body.p10field1b
    dbData.p10field2 = body.p10field2
    dbData.p10field3a = body.p10field3a
    dbData.p10field3b = body.p10field3b
    dbData.p10field3btxt = body.p10field3btxt
    dbData.p10field3c = body.p10field3c
    dbData.p10field3d = body.p10field3d
    dbData.p10field3e = body.p10field3e
    dbData.p10field3f = body.p10field3f
    dbData.p10field3g = body.p10field3g
    dbData.p10field3h = body.p10field3h
    dbData.p10field4 = body.p10field4
    dbData.p10field5 = body.p10field5
    dbData.p10field6 = body.p10field6
    dbData.p10field7a = body.p10field7a
    dbData.p10field7b = body.p10field7b
    dbData.p10field7c = body.p10field7c

    console.log(dbData);


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