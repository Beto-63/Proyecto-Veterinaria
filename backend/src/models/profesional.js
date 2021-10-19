const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let profesionalSchema = new Schema({
    nombre: {
        type: String
    },
    apellido: {
        type: String
    },
    cargo: {
        type: String
    },
    especialidad: {
        type: String
    },
    tipoDocumento: {
        type: String
    },
    numero: {
        type: Number
    }
}, {
    collection: "profesional"
});

module.exports = mongoose.model('Profesional', profesionalSchema);