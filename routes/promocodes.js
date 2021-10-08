var express = require('express');
var mdAutenticacion = require('../middlewares/auth');
var app = express();
var PromoCode = require('../models/promocodes');
var ObjectID = require('mongodb').ObjectID;

// ==========================================
// Get Case Document
// ==========================================
app.get('/:id', (req, res, next) => {

    var id = req.params.id;
    var desde = req.query.from || 0;
    from = Number(desde);

    PromoCode.find({
            'code': id.toUpperCase()
        })
        .skip(from)
        .limit(10)
        .populate('user', 'name')
        .sort({
            'type': -1
        })
        .exec(
            (err, casedocuments) => {

                if (err) {
                    return res.status(500).json({
                        ok: false,
                        message: 'Error loading casedocuments',
                        errors: err
                    });
                }

                PromoCode.count({}, (err, count) => {
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