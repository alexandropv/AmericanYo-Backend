var express = require('express');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

var SEED = require('../config/config').SEED;

var app = express();
var User = require('../models/user');



var GoogleAuth = require('google-auth-library');
var auth = new GoogleAuth;

const GOOGLE_CLIENT_ID = require('../config/config').GOOGLE_CLIENT_ID;
const GOOGLE_SECRET = require('../config/config').GOOGLE_SECRET;

// ==========================================
//  Autenticación De Google
// ==========================================
app.post('/google', (req, res) => {

    var token = req.body.token || 'XXX';


    var client = new auth.OAuth2(GOOGLE_CLIENT_ID, GOOGLE_SECRET, '');

    client.verifyIdToken(
        token,
        GOOGLE_CLIENT_ID,
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3],
        function (e, login) {

            if (e) {
                return res.status(400).json({
                    ok: true,
                    message: 'No valid Token',
                    errors: e
                });
            }


            var payload = login.getPayload();
            var userid = payload['sub'];
            // If request specified a G Suite domain:
            //var domain = payload['hd'];

            User.findOne({
                email: payload.email
            }, (err, user) => {

                if (err) {
                    return res.status(500).json({
                        ok: true,
                        message: 'User not Found - login',
                        errors: err
                    });
                }

                if (user) {

                    if (user.google === false) {
                        return res.status(400).json({
                            ok: true,
                            message: 'You need to use a normal login.'
                        });
                    } else {

                        user.password = ':)';

                        var token = jwt.sign({
                            user: user
                        }, SEED, {
                            expiresIn: 14400
                        }); // 4 horas

                        res.status(200).json({
                            ok: true,
                            user: user,
                            token: token,
                            id: user._id
                        });

                    }

                    // Si el user no existe por correo
                } else {

                    var user = new User();


                    user.name = payload.name;
                    user.email = payload.email;
                    user.password = ':)';
                    user.img = payload.picture;
                    user.google = true;

                    user.save((err, dbUser) => {

                        if (err) {
                            return res.status(500).json({
                                ok: true,
                                message: 'Error on creating user - google',
                                errors: err
                            });
                        }


                        var token = jwt.sign({
                            user: dbUser
                        }, SEED, {
                            expiresIn: 14400
                        }); // 4 horas

                        res.status(200).json({
                            ok: true,
                            user: dbUser,
                            token: token,
                            id: dbUser._id
                        });

                    });

                }


            });


        });




});

// ==========================================
//  Autenticación normal
// ==========================================
app.post('/', (req, res) => {

    var body = req.body;

    User.findOne({
        email: body.email
    }, (err, dbUser) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                message: 'Error searching for user,',
                errors: err
            });
        }

        if (!dbUser) {
            return res.status(400).json({
                ok: false,
                message: 'Email or Password dont match - email',
                errors: err
            });
        }

        if (!bcrypt.compareSync(body.password, dbUser.password)) {
            return res.status(400).json({
                ok: false,
                message: 'Email or Password dont match - password',
                errors: err
            });
        }

        // Crear un token!!!
        dbUser.password = ':)';

        var token = jwt.sign({
            user: dbUser
        }, SEED, {
            expiresIn: 14400
        }); // 4 horas

        res.status(200).json({
            ok: true,
            user: dbUser,
            token: token,
            id: dbUser._id
        });

    })


});





module.exports = app;