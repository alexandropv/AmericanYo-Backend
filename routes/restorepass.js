var express = require('express');
var app = express();
var Restore = require('../models/restorepass');
var User = require('../models/user');
var ObjectID = require('mongodb').ObjectID;
var rand = require("random-key");
var bcrypt = require('bcrypt');

app.get('/:id', (req, res, next) => {
    var id = req.params.id;
    var desde = req.query.from || 0;
    from = Number(desde);

    Restore.find({
            "key": id.trim()
        })
        .exec(
            (err, restore) => {
                if (err) {
                    return res.status(500).json({
                        ok: false,
                        message: 'Error loading key',
                        errors: err
                    });
                }
                if (!restore[0]) {
                    return res.status(400).json({
                        ok: false,
                        message: 'The password restore with the key ' + id + ' dont exists',
                    });
                }
                console.log(restore[0]);
                return res.status(200).json({
                    ok: true,
                    restore: restore[0]
                });
            });
});

// ==========================================
// Actualizar Restore Pass
// ==========================================
app.put('/:id', (req, res) => {

    var id = req.params.id;
    var body = req.body;



    Restore.find({
            'key': id.trim()
        })
        .exec((err, _restorePass) => {


            if (err) {
                return res.status(500).json({
                    ok: false,
                    message: 'Error searching user',
                    errors: err
                });
            }

            if (!_restorePass[0]) {
                return res.status(400).json({
                    ok: false,
                    message: 'The password restore with the key ' + id + ' dont exists',
                    errors: {
                        message: 'Theres no user whith the given email.'
                    }
                });
            }

            console.log('Rutina para cambiar el password');

            User.find({
                    'email': _restorePass[0].email.trim()
                })
                .exec((err, user) => {
                    if (err) {
                        return res.status(500).json({
                            ok: false,
                            message: 'Error searching user',
                            errors: err
                        });
                    }

                    user[0].password = bcrypt.hashSync(body.newPassword, 10)
                    user[0].save((err, dbuser) => {

                        Restore.deleteMany({
                            email: body.email
                        }, function(err, result) {
                            return res.status(200).json({
                                ok: true
                            });
                        });

                    });

                });

            // TODO: Rutina para eliminar registro





        });

});



// ==========================================
// Crear un nuevo _restorePass
// ==========================================
app.post('/', (req, res) => {
    var body = req.body;

    User
        .find({
            'email': body.email
        })
        .exec((err, user) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar user',
                    errors: err
                });
            }

            if (!user) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'El user con el id ' + body.email + ' no existe',
                    errors: {
                        message: 'No existe un user con ese ID'
                    }
                });
            }



            var _restorePass = new Restore({
                email: body.email,
                key: rand.generate()
            });

            Restore.deleteMany({
                email: body.email
            }, function(err, result) {
                if (err) {
                    res.send(err);
                } else {

                    _restorePass.save((err, savedRestore) => {

                        if (err) {
                            return res.status(400).json({
                                ok: false,
                                message: 'Error creating restoring',
                                errors: err
                            });
                        }

                        const nodemailer = require('nodemailer');

                        var transporter = nodemailer.createTransport({
                            host: 'smtpout.secureserver.net', // Office 365 server
                            port: 587, // secure SMTP
                            secure: false, // false for TLS - as a boolean not string - but the default is false so just remove this completely
                            requireTLS: true,
                            auth: {
                                user: 'info@americanyo.com',
                                pass: 'Am123!!!YO'
                            },
                            tls: {
                                ciphers: 'SSLv3'
                            }
                        });
                        // requireTLS: true
                        const mailOptions = {
                            from: 'info@americanyo.com',
                            to: body.email,
                            subject: 'Password Recovery',
                            text: `
 Password Recovery

https://americaCIS.com/#/restore/${_restorePass.key}
                            `
                        };

                        transporter.sendMail(mailOptions, function(error, info) {
                            if (error) {
                                console.log(error);
                            } else {
                                console.log('Email sent: ' + info.response);
                            }
                        });

                        return res.status(201).json({
                            ok: true
                        });
                    });

                }
            });


        });


});





module.exports = app;