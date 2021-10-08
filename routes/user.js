var express = require('express');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


var mdAutenticacion = require('../middlewares/auth');

var app = express();

var User = require('../models/user');

// ==========================================
// Obtener todos los users
// ==========================================
app.get('/', (req, res, next) => {

    var desde = req.query.desde || 0;
    desde = Number(desde);

    User.find({
            'role': 'PRIVATE_USER'
        }, 'name email img role')
        .exec(
            (err, users) => {

                if (err) {
                    return res.status(500).json({
                        ok: false,
                        mensaje: 'Error cargando user',
                        errors: err
                    });
                }

                User.find({
                    'role': 'PRIVATE_USER'
                }, 'name email img role').count({}, (err, conteo) => {
                    res.status(200).json({
                        ok: true,
                        users: users,
                        total: conteo
                    });
                })
            });
});


// ==========================================
// Get User
// ==========================================
app.get('/:id', mdAutenticacion.verificaToken, (req, res) => {

    var id = req.params.id;
    var body = req.body;

    User.findById(id, (err, user) => {
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
                mensaje: 'El user con el id ' + id + ' no existe',
                errors: {
                    message: 'No existe un user con ese ID'
                }
            });
        }

        user.password = ':)'

        if (user.email !== req.user.email) {
            res.status(200).json({
                ok: false
            });
        }


        res.status(200).json({
            ok: true,
            user: user
        });

    });

});


// ==========================================
// Update user
// ==========================================
app.put('/:id', mdAutenticacion.verificaToken, (req, res) => {

    var id = req.params.id;
    var body = req.body;

    User.findById(id, (err, user) => {
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
                mensaje: 'El user con el id ' + id + ' no existe',
                errors: {
                    message: 'No existe un user con ese ID'
                }
            });
        }

        user.name = body.name;
        user.email = body.email;
        user.role = body.role;
        user.quickTestPaid = body.quickTestPaid;


        user.save((err, savedUser) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al actualizar user',
                    errors: err
                });
            }

            savedUser.password = ':)';

            res.status(200).json({
                ok: true,
                user: savedUser
            });

        });

    });

});



// ==========================================
// Crear un nuevo user
// ==========================================
app.post('/', (req, res) => {
    //console.log(req.body.email);
    var body = req.body;
    //console.log(req);
    let ts = Date.now();

    var user = new User({
        name: body.name,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        img: body.img,
        role: body.role,
        date: ts
    });

    user.save((err, savedUser) => {

        if (err) {
            console.log('Error insertando Caso');

            return res.status(400).json({
                ok: false,
                mensaje: 'Error al crear user',
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
        console.log(user.email);
        const mailOptions = {
            from: 'info@americanyo.com',
            to: user.email, //body.email,
            bcc: 'alexandropv@gmail.com',
            subject: 'Gracias por Registrarte',
            html: `
 <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"><html><head><META http-equiv="Content-Type" content="text/html; charset=utf-8"><style>p{margin:10px 0;padding:0}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{display:block;margin:0;padding:0}img,a img{border:0;height:auto;outline:none;text-decoration:none}body,#m_bodyTable,#m_bodyCell{height:100%;margin:0;padding:0;width:100%}.m_mcnPreviewText{display:none!important}#m_outlook a{padding:0}img{}table{}.m_ReadMsgBody{width:100%}.m_ExternalClass{width:100%}p,a,li,td,blockquote{}p,a,li,td,body,table,blockquote{}.m_ExternalClass,.m_ExternalClass p,.m_ExternalClass td,.m_ExternalClass div,.m_ExternalClass span,.m_ExternalClass font{line-height:100%}.m_templateContainer{max-width:600px!important}a.m_mcnButton{display:block}.m_mcnImage,.m_mcnRetinaImage{vertical-align:bottom}.m_mcnTextContent{word-break:break-word}.m_mcnTextContent img{height:auto!important}.m_mcnDividerBlock{table-layout:fixed!important}h1{color:#222222;font-family:Helvetica;font-size:40px;font-style:normal;font-weight:bold;line-height:150%;letter-spacing:normal;text-align:center}h2{color:#222222;font-family:Helvetica;font-size:34px;font-style:normal;font-weight:bold;line-height:150%;letter-spacing:normal;text-align:left}h3{color:#444444;font-family:Helvetica;font-size:22px;font-style:normal;font-weight:bold;line-height:150%;letter-spacing:normal;text-align:left}h4{color:#949494;font-family:Georgia;font-size:20px;font-style:italic;font-weight:normal;line-height:125%;letter-spacing:normal;text-align:left}#m_templateHeader{background-color:#f7f7f7;background-image:none;background-repeat:no-repeat;background-position:center;background-size:cover;border-top:0;border-bottom:0;padding-top:45px;padding-bottom:45px}.m_headerContainer{background-color:transparent;background-image:none;background-repeat:no-repeat;background-position:center;background-size:cover;border-top:0;border-bottom:0;padding-top:0;padding-bottom:0}.m_headerContainer .m_mcnTextContent,.m_headerContainer .m_mcnTextContent p{color:#757575;font-family:Helvetica;font-size:16px;line-height:150%;text-align:left}.m_headerContainer .m_mcnTextContent a,.m_headerContainer .m_mcnTextContent p a{color:#007c89;font-weight:normal;text-decoration:underline}#m_templateBody{background-color:#ffffff;background-image:none;background-repeat:no-repeat;background-position:center;background-size:cover;border-top:0;border-bottom:0;padding-top:36px;padding-bottom:45px}.m_bodyContainer{background-color:transparent;background-image:none;background-repeat:no-repeat;background-position:center;background-size:cover;border-top:0;border-bottom:0;padding-top:0;padding-bottom:0}.m_bodyContainer .m_mcnTextContent,.m_bodyContainer .m_mcnTextContent p{color:#757575;font-family:Helvetica;font-size:16px;line-height:150%;text-align:left}.m_bodyContainer .m_mcnTextContent a,.m_bodyContainer .m_mcnTextContent p a{color:#007c89;font-weight:normal;text-decoration:underline}#m_templateFooter{background-color:#333333;background-image:none;background-repeat:no-repeat;background-position:center;background-size:cover;border-top:0;border-bottom:0;padding-top:45px;padding-bottom:63px}.m_footerContainer{background-color:transparent;background-image:none;background-repeat:no-repeat;background-position:center;background-size:cover;border-top:0;border-bottom:0;padding-top:0;padding-bottom:0}.m_footerContainer .m_mcnTextContent,.m_footerContainer .m_mcnTextContent p{color:#ffffff;font-family:Helvetica;font-size:12px;line-height:150%;text-align:center}.m_footerContainer .m_mcnTextContent a,.m_footerContainer .m_mcnTextContent p a{color:#ffffff;font-weight:normal;text-decoration:underline}@media only screen and (min-width:768px){.m_templateContainer{width:600px!important}}@media only screen and (max-width:480px){body,table,td,p,a,li,blockquote{}}@media only screen and (max-width:480px){body{width:100%!important;min-width:100%!important}}@media only screen and (max-width:480px){.m_mcnRetinaImage{max-width:100%!important}}@media only screen and (max-width:480px){.m_mcnImage{width:100%!important}}@media only screen and (max-width:480px){.m_mcnCartContainer,.m_mcnCaptionTopContent,.m_mcnRecContentContainer,.m_mcnCaptionBottomContent,.m_mcnTextContentContainer,.m_mcnBoxedTextContentContainer,.m_mcnImageGroupContentContainer,.m_mcnCaptionLeftTextContentContainer,.m_mcnCaptionRightTextContentContainer,.m_mcnCaptionLeftImageContentContainer,.m_mcnCaptionRightImageContentContainer,.m_mcnImageCardLeftTextContentContainer,.m_mcnImageCardRightTextContentContainer,.m_mcnImageCardLeftImageContentContainer,.m_mcnImageCardRightImageContentContainer{max-width:100%!important;width:100%!important}}@media only screen and (max-width:480px){.m_mcnBoxedTextContentContainer{min-width:100%!important}}@media only screen and (max-width:480px){.m_mcnImageGroupContent{padding:9px!important}}@media only screen and (max-width:480px){.m_mcnCaptionLeftContentOuter .m_mcnTextContent,.m_mcnCaptionRightContentOuter .m_mcnTextContent{padding-top:9px!important}}@media only screen and (max-width:480px){.m_mcnImageCardTopImageContent{padding-top:18px!important}}@media only screen and (max-width:480px){.m_mcnImageCardBottomImageContent{padding-bottom:9px!important}}@media only screen and (max-width:480px){.m_mcnImageGroupBlockInner{padding-top:0!important;padding-bottom:0!important}}@media only screen and (max-width:480px){.m_mcnImageGroupBlockOuter{padding-top:9px!important;padding-bottom:9px!important}}@media only screen and (max-width:480px){.m_mcnTextContent,.m_mcnBoxedTextContentColumn{padding-right:18px!important;padding-left:18px!important}}@media only screen and (max-width:480px){.m_mcnImageCardLeftImageContent,.m_mcnImageCardRightImageContent{padding-right:18px!important;padding-bottom:0!important;padding-left:18px!important}}@media only screen and (max-width:480px){.m_mcpreview-image-uploader{display:none!important;width:100%!important}}@media only screen and (max-width:480px){h1{font-size:30px!important;line-height:125%!important}}@media only screen and (max-width:480px){h2{font-size:26px!important;line-height:125%!important}}@media only screen and (max-width:480px){h3{font-size:20px!important;line-height:150%!important}}@media only screen and (max-width:480px){h4{font-size:18px!important;line-height:150%!important}}@media only screen and (max-width:480px){.m_mcnBoxedTextContentContainer .m_mcnTextContent,.m_mcnBoxedTextContentContainer .m_mcnTextContent p{font-size:14px!important;line-height:150%!important}}@media only screen and (max-width:480px){.m_headerContainer .m_mcnTextContent,.m_headerContainer .m_mcnTextContent p{font-size:16px!important;line-height:150%!important}}@media only screen and (max-width:480px){.m_bodyContainer .m_mcnTextContent,.m_bodyContainer .m_mcnTextContent p{font-size:16px!important;line-height:150%!important}}@media only screen and (max-width:480px){.m_footerContainer .m_mcnTextContent,.m_footerContainer .m_mcnTextContent p{font-size:14px!important;line-height:150%!important}}</style></head><body><u></u>










    <div>

        <span class="m_mcnPreviewText" style="display:none;font-size:0px;line-height:0px;max-height:0px;max-width:0px;opacity:0;overflow:hidden"></span>

        <center>
            <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="m_bodyTable">
                <tr>
                    <td align="center" valign="top" id="m_bodyCell">

                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td align="center" valign="top" id="m_templateHeader">

                                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="m_templateContainer">
                                        <tr>
                                            <td valign="top" class="m_headerContainer"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="m_mcnImageBlock" style="min-width:100%">
    <tbody class="m_mcnImageBlockOuter">
            <tr>
                <td valign="top" style="padding:9px" class="m_mcnImageBlockInner">
                    <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" class="m_mcnImageContentContainer" style="min-width:100%">
                        <tbody><tr>
                            <td class="m_mcnImageContent" valign="top" style="padding-right:9px;padding-left:9px;padding-top:0;padding-bottom:0;text-align:center">


                                        <img align="center" alt="" src="https://ci3.googleusercontent.com/proxy/pIMVuxZ_7YwForOuOTb8XL1pdZtG_5miHLOiADoCulg-BgkNUMonG90ZLyFLCB2-T7MD_1jA3IsLDZjNL--IGPCoMUntLgrWcY8FIWtmq0aGkvrZqw_ejUqhfljR3XC3ideJWB57NVayy2eJTomou1j9UAWARA=s0-d-e1-ft#https://mcusercontent.com/aca6536d4c854088d08ea1281/images/76b6aac5-5fe0-bd74-1ccc-5dc4df47a70b.png" width="564" style="max-width:1319px;padding-bottom:0;display:inline!important;vertical-align:bottom" class="m_mcnImage">


                            </td>
                        </tr>
                    </tbody></table>
                </td>
            </tr>
    </tbody>
</table></td>
                                        </tr>
                                    </table>

                                </td>
                            </tr>
                            <tr>
                                <td align="center" valign="top" id="m_templateBody">

                                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="m_templateContainer">
                                        <tr>
                                            <td valign="top" class="m_bodyContainer"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="m_mcnTextBlock" style="min-width:100%">
    <tbody class="m_mcnTextBlockOuter">
        <tr>
            <td valign="top" class="m_mcnTextBlockInner" style="padding-top:9px">



                <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%;min-width:100%" width="100%" class="m_mcnTextContentContainer">
                    <tbody><tr>

                        <td valign="top" class="m_mcnTextContent" style="padding-top:0;padding-right:18px;padding-bottom:9px;padding-left:18px">

                            <h3 style="text-align:center"><strong><span style="color:#000080">¡Gracias por registrate!</span></strong></h3>

<h3 style="text-align:center"><span style="color:#000080">AmericanYO</span> <span style="color:#ff0000">te ahorra dinero al poner el proceso de inmigración en tus manos.</span></h3>
<br>
<span style="color:#000000">Recuerda que nuestro &quot;Quicktest&quot; estará gratis hasta el 31 de Diciembre del 2021  con el código &quot;</span><strong><span style="color:#000080">GreenCardNow</span></strong><span style="color:#000000">&quot;. Este tipo de consultas generalmente cuestan cientos de dólares y pueden tomar mucho tiempo para completarse. Nuestro QuickTest contiene solo un par de preguntas que son muy fáciles de responder y puede completarse en menos de 5 minutos.</span><br>

<div style="text-align:center"><span style="color:#000080"><strong>&quot;Piensa en GRANDE, confia en ti mismo y haz que suceda&quot;</strong></span><br>
 </div>

<div style="text-align:center"><a href="https://www.google.com/url?q=http://www.americanyo.com&amp;source=gmail-html&amp;ust=1633410319102000&amp;usg=AFQjCNFfKVxi11SxP5GMq50sSsWn6jPnbg" target="_blank" rel="noreferrer"><span style="color:#000000">Visitar AmericanYo.com</span></a></div>

                        </td>
                    </tr>
                </tbody></table>



            </td>
        </tr>
    </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="m_mcnFollowBlock" style="min-width:100%">
    <tbody class="m_mcnFollowBlockOuter">
        <tr>
            <td align="center" valign="top" style="padding:9px" class="m_mcnFollowBlockInner">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="m_mcnFollowContentContainer" style="min-width:100%">
    <tbody><tr>
        <td align="center" style="padding-left:9px;padding-right:9px">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%" class="m_mcnFollowContent">
                <tbody><tr>
                    <td align="center" valign="top" style="padding-top:9px;padding-right:9px;padding-left:9px">
                        <table align="center" border="0" cellpadding="0" cellspacing="0">
                            <tbody><tr>
                                <td align="center" valign="top">




                                            <table align="left" border="0" cellpadding="0" cellspacing="0" class="m_mcnFollowStacked" style="display:inline">

                                                <tbody><tr>
                                                    <td align="center" valign="top" class="m_mcnFollowIconContent" style="padding-right:10px;padding-bottom:9px">
                                                        <a href="https://www.google.com/url?q=http://www.facebook.com/americanyo&amp;source=gmail-html&amp;ust=1633410319102000&amp;usg=AFQjCNFm_orV9p-RjAKS5TDv5XEZ1Np6ZQ" target="_blank" rel="noreferrer"><img src="https://ci4.googleusercontent.com/proxy/qFht05wXKJYPVChSqXPNvc1fKWeX0ARJAOjh8GXW1FekOnnQWwgFxvi0sXmeC_gX7kPGmh9zqs_BK5qi-OggZUWwUDTVmFzl2nMLYVkeLOJG1GLy2GMDw2FSwi1lRUI=s0-d-e1-ft#https://cdn-images.mailchimp.com/icons/social-block-v2/color-facebook-96.png" alt="Facebook" class="m_mcnFollowBlockIcon" width="48" style="width:48px;max-width:48px;display:block"></a>
                                                    </td>
                                                </tr>


                                            </tbody></table>






                                            <table align="left" border="0" cellpadding="0" cellspacing="0" class="m_mcnFollowStacked" style="display:inline">

                                                <tbody><tr>
                                                    <td align="center" valign="top" class="m_mcnFollowIconContent" style="padding-right:0;padding-bottom:9px">
                                                        <a href="https://www.google.com/url?q=http://instagram.com/americanyo.es&amp;source=gmail-html&amp;ust=1633410319102000&amp;usg=AFQjCNELDRvxuzyM4Jm-vzwmFyW04AABkw" target="_blank" rel="noreferrer"><img src="https://ci5.googleusercontent.com/proxy/bW-7YZoG1njUhustvpUC9ESFkkf5chpkq3zsCF8sXUMJh1fpou__zwRtq-67RUh4EkvjWc0CarrOXPV-LsJKaRsa772bYtuh0VhrusRGuvsoFQ9VYoz6NJxJcWWv98HZ=s0-d-e1-ft#https://cdn-images.mailchimp.com/icons/social-block-v2/color-instagram-96.png" alt="Instagram" class="m_mcnFollowBlockIcon" width="48" style="width:48px;max-width:48px;display:block"></a>
                                                    </td>
                                                </tr>


                                            </tbody></table>





                                </td>
                            </tr>
                        </tbody></table>
                    </td>
                </tr>
            </tbody></table>
        </td>
    </tr>
</tbody></table>

            </td>
        </tr>
    </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="m_mcnDividerBlock" style="min-width:100%">
    <tbody class="m_mcnDividerBlockOuter">
        <tr>
            <td class="m_mcnDividerBlockInner" style="min-width:100%;padding:18px">
                <table class="m_mcnDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%">
                    <tbody><tr>
                        <td>
                            <span></span>
                        </td>
                    </tr>
                </tbody></table>

            </td>
        </tr>
    </tbody>
</table></td>
                                        </tr>
                                    </table>

                                </td>
                            </tr>
                            <tr>
                                <td align="center" valign="top" id="m_templateFooter">

                                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="m_templateContainer">
                                        <tr>
                                            <td valign="top" class="m_footerContainer"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="m_mcnFollowBlock" style="min-width:100%">
    <tbody class="m_mcnFollowBlockOuter">
        <tr>
            <td align="center" valign="top" style="padding:9px" class="m_mcnFollowBlockInner">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="m_mcnFollowContentContainer" style="min-width:100%">
    <tbody><tr>
        <td align="center" style="padding-left:9px;padding-right:9px">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%" class="m_mcnFollowContent">
                <tbody><tr>
                    <td align="center" valign="top" style="padding-top:9px;padding-right:9px;padding-left:9px">
                        <table align="center" border="0" cellpadding="0" cellspacing="0">
                            <tbody><tr>
                                <td align="center" valign="top">





                                            <table align="left" border="0" cellpadding="0" cellspacing="0" style="display:inline">
                                                <tbody><tr>
                                                    <td valign="top" style="padding-right:10px;padding-bottom:9px" class="m_mcnFollowContentItemContainer">
                                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="m_mcnFollowContentItem">
                                                            <tbody><tr>
                                                                <td align="left" valign="middle" style="padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:9px">
                                                                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="">
                                                                        <tbody><tr>

                                                                                <td align="center" valign="middle" width="24" class="m_mcnFollowIconContent">
                                                                                    <a href="https://www.google.com/url?q=http://www.facebook.com&amp;source=gmail-html&amp;ust=1633410319102000&amp;usg=AFQjCNFinaH81t1MuOEkudz8gTphxYmNww" target="_blank" rel="noreferrer"><img src="https://ci6.googleusercontent.com/proxy/iZE-48sXvszGHh6MUoqCYHnlP8ohfGJI6V1fj23YRaJHEaKjOb2V7stez03tl97kcCY9ebD52HlFfqGKcTQbPlQaysAL26ZKjUSa5NGX7CU3WUodCbzb-vFMkIXxvIREY4PT879oIw=s0-d-e1-ft#https://cdn-images.mailchimp.com/icons/social-block-v2/outline-light-facebook-48.png" alt="Facebook" style="display:block" height="24" width="24"></a>
                                                                                </td>


                                                                        </tr>
                                                                    </tbody></table>
                                                                </td>
                                                            </tr>
                                                        </tbody></table>
                                                    </td>
                                                </tr>
                                            </tbody></table>






                                            <table align="left" border="0" cellpadding="0" cellspacing="0" style="display:inline">
                                                <tbody><tr>
                                                    <td valign="top" style="padding-right:10px;padding-bottom:9px" class="m_mcnFollowContentItemContainer">
                                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="m_mcnFollowContentItem">
                                                            <tbody><tr>
                                                                <td align="left" valign="middle" style="padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:9px">
                                                                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="">
                                                                        <tbody><tr>

                                                                                <td align="center" valign="middle" width="24" class="m_mcnFollowIconContent">
                                                                                    <a href="https://www.google.com/url?q=http://www.twitter.com/&amp;source=gmail-html&amp;ust=1633410319102000&amp;usg=AFQjCNFncwNtX_Lln7JlavumCvmXafT2Uw" target="_blank" rel="noreferrer"><img src="https://ci4.googleusercontent.com/proxy/GvgjS4VPlhMl8idO5upbHzEV4AqTNut4mbrm7tN9t-0Y_Os_vvAtMqPaBL6LxSdD50M0_WvdYOaRkeRE25HbR815TslhhzsjoZMzzpKYLiG8MFqu6VDbzkb2JbyH4IjCPWiYy3cT=s0-d-e1-ft#https://cdn-images.mailchimp.com/icons/social-block-v2/outline-light-twitter-48.png" alt="Twitter" style="display:block" height="24" width="24"></a>
                                                                                </td>


                                                                        </tr>
                                                                    </tbody></table>
                                                                </td>
                                                            </tr>
                                                        </tbody></table>
                                                    </td>
                                                </tr>
                                            </tbody></table>






                                            <table align="left" border="0" cellpadding="0" cellspacing="0" style="display:inline">
                                                <tbody><tr>
                                                    <td valign="top" style="padding-right:10px;padding-bottom:9px" class="m_mcnFollowContentItemContainer">
                                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="m_mcnFollowContentItem">
                                                            <tbody><tr>
                                                                <td align="left" valign="middle" style="padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:9px">
                                                                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="">
                                                                        <tbody><tr>

                                                                                <td align="center" valign="middle" width="24" class="m_mcnFollowIconContent">
                                                                                    <a href="https://www.google.com/url?q=http://www.instagram.com/&amp;source=gmail-html&amp;ust=1633410319102000&amp;usg=AFQjCNENgZNSgTAqNLiGmgkxMSpetfqG1g" target="_blank" rel="noreferrer"><img src="https://ci5.googleusercontent.com/proxy/Ihh9hEwk_36d3lzL_tLmGaqmGhc-dLqZP-II9LpKgUDCh37Kvw1N4-DJsrxuyAA9V1NNx3975BQO5w7DNVWvFHpPM4gkDm8eMVCLYy_PtGWEZAxMuaULgOR-6W0K_1sgXOcwNMtgGVE=s0-d-e1-ft#https://cdn-images.mailchimp.com/icons/social-block-v2/outline-light-instagram-48.png" alt="Link" style="display:block" height="24" width="24"></a>
                                                                                </td>


                                                                        </tr>
                                                                    </tbody></table>
                                                                </td>
                                                            </tr>
                                                        </tbody></table>
                                                    </td>
                                                </tr>
                                            </tbody></table>






                                            <table align="left" border="0" cellpadding="0" cellspacing="0" style="display:inline">
                                                <tbody><tr>
                                                    <td valign="top" style="padding-right:0;padding-bottom:9px" class="m_mcnFollowContentItemContainer">
                                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="m_mcnFollowContentItem">
                                                            <tbody><tr>
                                                                <td align="left" valign="middle" style="padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:9px">
                                                                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="">
                                                                        <tbody><tr>

                                                                                <td align="center" valign="middle" width="24" class="m_mcnFollowIconContent">
                                                                                    <a href="https://www.google.com/url?q=http://mailchimp.com&amp;source=gmail-html&amp;ust=1633410319102000&amp;usg=AFQjCNHeUBWu8paYp-Z-acs6XPRY_5RpTw" target="_blank" rel="noreferrer"><img src="https://ci6.googleusercontent.com/proxy/uZ0yuxmORppOSAVlAI9An9dTGgd5WLSQ0CBL7MLu_J4uk8Z1QO7RWFmdlkUYkmd_GLhwph5RoVCp9eKrXzEQnDQ91cNlGygasb_4p2fT-TnBvWoJAX8mqJXeyuG36Kto6QrY=s0-d-e1-ft#https://cdn-images.mailchimp.com/icons/social-block-v2/outline-light-link-48.png" alt="Website" style="display:block" height="24" width="24"></a>
                                                                                </td>


                                                                        </tr>
                                                                    </tbody></table>
                                                                </td>
                                                            </tr>
                                                        </tbody></table>
                                                    </td>
                                                </tr>
                                            </tbody></table>




                                </td>
                            </tr>
                        </tbody></table>
                    </td>
                </tr>
            </tbody></table>
        </td>
    </tr>
</tbody></table>

            </td>
        </tr>
    </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="m_mcnDividerBlock" style="min-width:100%">
    <tbody class="m_mcnDividerBlockOuter">
        <tr>
            <td class="m_mcnDividerBlockInner" style="min-width:100%;padding:18px">
                <table class="m_mcnDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;border-top-width:2px;border-top-style:solid;border-top-color:#505050">
                    <tbody><tr>
                        <td>
                            <span></span>
                        </td>
                    </tr>
                </tbody></table>

            </td>
        </tr>
    </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="m_mcnTextBlock" style="min-width:100%">
    <tbody class="m_mcnTextBlockOuter">
        <tr>
            <td valign="top" class="m_mcnTextBlockInner" style="padding-top:9px">



                <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%;min-width:100%" width="100%" class="m_mcnTextContentContainer">
                    <tbody><tr>

                        <td valign="top" class="m_mcnTextContent" style="padding-top:0;padding-right:18px;padding-bottom:9px;padding-left:18px">

                        </td>
                    </tr>
                </tbody></table>



            </td>
        </tr>
    </tbody>
</table></td>
                                        </tr>
                                    </table>

                                </td>
                            </tr>
                        </table>

                    </td>
                </tr>
            </table>
        </center>
    </div>

</body></html>

                            `
        };

        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        res.status(201).json({
            ok: true,
            user: savedUser,
            usuariotoken: req.user
        });


    });

});


// ============================================
//   Borrar un user por el id
// ============================================
app.delete('/:id', mdAutenticacion.verificaToken, (req, res) => {

    var id = req.params.id;

    User.findByIdAndRemove(id, (err, usuarioBorrado) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error borrar user',
                errors: err
            });
        }

        if (!usuarioBorrado) {
            return res.status(400).json({
                ok: false,
                mensaje: 'No existe un user con ese id',
                errors: {
                    message: 'No existe un user con ese id'
                }
            });
        }

        res.status(200).json({
            ok: true,
            user: usuarioBorrado
        });

    });

});


module.exports = app;