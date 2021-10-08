var express = require('express');
var mdAutenticacion = require('../middlewares/auth');
var app = express();
var Case = require('../models/case');
var ObjectID = require('mongodb').ObjectID;

// ==========================================
// Obtener todos los medicos
// ==========================================
app.get('/', mdAutenticacion.verificaToken, (req, res, next) => {

    console.log(req.user);

    var desde = req.query.from || 0;
    from = Number(desde);

    Case.find({
            'level': 99
        })
        .skip(from)
        .limit(10)
        .populate('user', 'name')
        .exec(
            (err, cases) => {

                if (err) {
                    return res.status(500).json({
                        ok: false,
                        message: 'Error loading cases',
                        errors: err
                    });
                }

                Case.count({}, (err, count) => {
                    res.status(200).json({
                        ok: true,
                        cases,
                        count
                    });

                })

            });
});

// ==========================================
// Obtener todos los medicos
// ==========================================
app.get('/:id', mdAutenticacion.verificaToken, (req, res, next) => {

    console.log(req.user);

    var desde = req.query.from || 0;
    from = Number(desde);

    Case.find({
            'user': ObjectID(req.params.id)
        })
        .skip(from)
        .limit(10)
        .populate('user', 'name')
        .exec(
            (err, cases) => {

                if (err) {
                    return res.status(500).json({
                        ok: false,
                        message: 'Error loading cases',
                        errors: err
                    });
                }

                Case.count({}, (err, count) => {
                    res.status(200).json({
                        ok: true,
                        cases,
                        count
                    });

                })

            });
});

// ==========================================
// Actualizar _case
// ==========================================
app.put('/:id', mdAutenticacion.verificaToken, (req, res) => {

    var id = req.params.id;
    var body = req.body;

    Case.findById(id, (err, _case) => {


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

        _case.name = body.name;
        _case.user = req.user;
        _case.type = body.type;
        _case.level = body.level;
        _case.status = body.statu;

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