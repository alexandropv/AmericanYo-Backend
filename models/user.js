var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var rolesValidos = {
    values: ['USER_ROLE', 'ADMIN_ROLE', 'PRIVATE_USER'],
    message: '{VALUE} no es un rol valido'
};

var userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    email: {
        type: String,
        required: [true, 'El email es requerido'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'El password es requerido']
    },
    img: {
        type: String,
        required: [false]
    },
    role: {
        type: String,
        required: [true, 'El rol es requerido'],
        default: 'USER_ROLE',
        enum: rolesValidos
    },
    google: {
        type: Boolean,
        required: true,
        default: false
    },
    quickTestPaid: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date
    }
});

userSchema.plugin(uniqueValidator, {
    message: '{PATH} debe de ser unico'
});

module.exports = mongoose.model('User', userSchema);