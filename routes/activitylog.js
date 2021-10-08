var express = require('express');
var mdAutenticacion = require('../middlewares/auth');
var app = express();
var ActivityLog = require('../models/activitylog');
var ObjectID = require('mongodb').ObjectID;

// ==========================================
// Crear un evento en el Log
// ==========================================
app.post('/', mdAutenticacion.verificaToken, (req, res) => {

    console.log("Creating Activity Log");
    var body = req.body;
    var activityLog = new ActivityLog({
        email: req.user.email,
        user: req.user,
        event: body.event,
        date: Date.now()
    });

    console.log(req.body);
    console.log(activityLog);

    activityLog.save((err, savedActivity) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                message: 'Error creating Activiy Log',
                errors: err
            });
        }

        res.status(201).json({
            ok: true,
            ActivityLog: savedActivity
        });


    });

});

module.exports = app;