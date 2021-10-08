var express = require('express');
var app = express();
var Contact = require('../models/contact');

// ==========================================
// Crear un nuevo contacto
// ==========================================
app.post('/', (req, res) => {

    var body = req.body;

    console.log(body);

    var _contact = new Contact({
        name: body.name,
        email: body.email,
        phone: body.phone,
        message: body.message,

    });

    _contact.save((err, savedContact) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                message: 'Error creating case',
                errors: err
            });
        }

        res.status(201).json({
            ok: true,
            _contact: savedContact
        });


    });

    const nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
        host: 'smtpout.secureserver.net', // Office 365 server
        port: 587, // secure SMTP
        secure: false, // false for TLS - as a boolean not string - but the default is false so just remove this completely
        requireTLS: true,
        auth: {
            user: 'info@americanyo.com',
            pass: 'Javif4x4$'
        },
        tls: {
            ciphers: 'SSLv3'
        }
    });
    // requireTLS: true
    const mailOptions = {
        from: 'info@americanyo.com',
        to: 'help@americanyo.com;alexandropv@gmail.com',
        subject: 'Platinum Contact Info - ' + _contact.name,
        text: _contact.message
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

});

module.exports = app;