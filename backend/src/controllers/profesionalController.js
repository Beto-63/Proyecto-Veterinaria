const profesional = require('../models/profesional');

class ProfesionalController {
    constructor() {

    }

    crearProfesional(req, res) {
        profesional.create(req.body, (error, data) => {
            console.log(req.body)
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(201).json(data);
            }
        });
    }

    obtenerProfesionales(req, res) {
        profesional.find((error, data) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(200).json(data);
            }
        });
    }

    actualizarProfesional(req, res) {
        console.log(req.body);
        let { id, nombre, apellido, cargo, tipoDocumento, numero } = req.body;
        let objProfesional = {
            nombre, apellido, cargo, tipoDocumento, numero
        }
        profesional.findByIdAndUpdate(id, { $set: objProfesional }, (error, data) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(200).json(data);

            }
        });
    }

    eliminarProfesional(req, res) {
        let { id } = req.body;
        profesional.findOneAndRemove(id, (error, data) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(200).json(data);
            }
        });
    }
}

module.exports = ProfesionalController;