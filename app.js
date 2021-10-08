//Requires
var express = require('express');
var mongoose = require('mongoose');
var appRoutes = require('./routes/app');
var loginRoutes = require('./routes/login');
var userRoutes = require('./routes/user');
var bodyParser = require('body-parser');
var caseRoutes = require('./routes/case');
var allCasesRoutes = require('./routes/allcases');
var caseDocumentsRoutes = require('./routes/casedocuments');
var caseDocumentRoutes = require('./routes/casedocument');
var immAppData = require('./routes/immAppData');
var dataSponsor = require('./routes/data-sponsor');
var dataCoSponsor = require('./routes/data-cosponsor');
var n400 = require('./routes/n400');
var i90 = require('./routes/i90');
var checklist = require('./routes/checklist');
var promocodes = require('./routes/promocodes');
var contact = require('./routes/contact');
var restorePass = require('./routes/restorepass');
var registerpay = require('./routes/registerpay');
var platinum = require('./routes/platinum');
var activitylog = require('./routes/activitylog');
var cors = require('cors');


// Inicializar Variables
var app = express();

app.use(cors());

// Body-Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())


//Conexion a la Base de Datos
mongoose.connection.openUri('mongodb+srv://admin:V4WQ4qzMVOYlxaNe@cluster0-qxdup.mongodb.net/AmericaCIS?retryWrites=true&w=majority', {
    //mongoose.connection.openUri('mongodb://localhost:27017/AmericaCIS', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (err, resp) => {
    if (err) {
        console.log('Estado Mongo DB: \x1b[41m%s\x1b[0m', 'Offline');
        throw err;
    }

    console.log('Estado Mongo DB: \x1b[32m%s\x1b[0m', 'Online');

});

//Rutas
app.use('/user', userRoutes);
app.use('/login', loginRoutes);
app.use('/case', caseRoutes);
app.use('/documents', caseDocumentsRoutes);
app.use('/document', caseDocumentRoutes);
app.use('/immappdata', immAppData);
app.use('/sponsor', dataSponsor);
app.use('/cosponsor', dataCoSponsor);
app.use('/n400', n400);
app.use('/i90', i90);
app.use('/checklist', checklist);
app.use('/promocodes', promocodes);
app.use('/contact', contact);
app.use('/restore', restorePass);
app.use('/registerpay', registerpay);
app.use('/platinum', platinum);
app.use('/allcases', allCasesRoutes);
app.use('/activitylog', activitylog);



app.use('/', appRoutes);



// Escuchar Peticiones
app.listen(process.env.PORT || 3000, () => {
    console.log('Express server escuchando puerto 3000 Estado: \x1b[32m%s\x1b[0m', 'Online');
});