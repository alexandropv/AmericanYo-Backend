var express = require('express');
var mdAutenticacion = require('../middlewares/auth');
var app = express();
var CaseDocuments = require('../models/casedocuments');
var ObjectID = require('mongodb').ObjectID;

// ==========================================
// Get all Documents from a Case
// ==========================================
app.get('/:id', (req, res, next) => {

    var id = req.params.id;
    var desde = req.query.from || 0;
    from = Number(desde);

    CaseDocuments.findById(id)
        .skip(from)
        .limit(10)
        .populate('user', 'name')
        .exec(
            (err, casedocuments) => {

                if (err) {
                    return res.status(500).json({
                        ok: false,
                        message: 'Error loading casedocuments',
                        errors: err
                    });
                }

                CaseDocuments.count({}, (err, count) => {
                    console.log(casedocuments);
                    res.status(200).json({
                        ok: true,
                        casedocuments,
                        count
                    });

                })

            });
});


module.exports = app;