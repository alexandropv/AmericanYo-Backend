var express = require('express');
var mdAutenticacion = require('../middlewares/auth');
var app = express();
var Checklist = require('../models/checklist');
var ObjectID = require('mongodb').ObjectID;

// ==========================================
// Obtener todos los medicos
// ==========================================
app.get('/:id', mdAutenticacion.verificaToken, (req, res, next) => {
    var id = req.params.id;

    Checklist.find({
            'packageid': id
        })
        .sort({
            'exhibit': 1
        })
        .populate('user', 'name')
        .exec(
            (err, checklist) => {

                if (err) {
                    return res.status(500).json({
                        ok: false,
                        message: 'Error loading checklist',
                        errors: err
                    });
                }


                res.status(200).json({
                    ok: true,
                    data: checklist
                });



            });
});

app.get('/item/:itemid', mdAutenticacion.verificaToken, (req, res, next) => {

    var id = req.params.itemid;
    console.log(req.params);

    Checklist.findById(id)
        .populate('user', 'name')
        .exec(
            (err, checklist) => {

                if (err) {
                    return res.status(500).json({
                        ok: false,
                        message: 'Error loading checklist',
                        errors: err
                    });
                }


                res.status(200).json({
                    ok: true,
                    data: checklist
                })

            });
});



// ==========================================
// Actualizar _case
// ==========================================
app.put('/item/:id', mdAutenticacion.verificaToken, (req, res) => {

    var id = req.params.id;
    var body = req.body;

    Checklist.findById(id, (err, _case) => {


        if (err) {
            return res.status(500).json({
                ok: false,
                message: 'Error searching case',
                errors: err
            });
        }

        if (!_case) {
            return res.status(400).json({
                ok: false,
                message: 'The case with the id ' + id + ' dont exists',
                errors: {
                    message: 'Theres no case whith the given ID.'
                }
            });
        }


        _case.value = body.value;

        _case.save((err, savedCase) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    message: 'Error updating case',
                    errors: err
                });
            }

            res.status(200).json({
                ok: true,
                _case: savedCase
            });

        });

    });

});



// ==========================================
// Crear un nuevo _case
// ==========================================
app.post('/', mdAutenticacion.verificaToken, (req, res) => {

    var body = req.body;

    var _case = new Case({
        name: body.name,
        user: req.user,
        type: body.type,
        level: body.level,
        status: body.status
    });

    _case.save((err, savedCase) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                message: 'Error creating case',
                errors: err
            });
        }

        res.status(201).json({
            ok: true,
            _case: savedCase
        });


    });

});


// ============================================
//   Borrar un _case por el id
// ============================================
app.delete('/:id', mdAutenticacion.verificaToken, (req, res) => {

    var id = req.params.id;

    _case.findByIdAndRemove(id, (err, deletedCase) => {

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
            _case: deletedCase
        });

    });

});


module.exports = app;