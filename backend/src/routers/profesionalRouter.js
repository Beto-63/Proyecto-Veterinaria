//Importar express
const express = require('express');
const ProfesionalController = require('../controllers/profesionalController');

class ProfesionalRouter {

    constructor() {
        this.router = express.Router();
        this.config();
    }

    config() {
        const objProfesionalC = new ProfesionalController();
        //Rutas
        this.router.post('/profesional', objProfesionalC.crearProfesional);
        this.router.get('/profesional', objProfesionalC.obtenerProfesionales);
        this.router.put('/profesional', objProfesionalC.actualizarProfesional);
        this.router.delete('/profesional', objProfesionalC.eliminarProfesional);
    }
}

module.exports = ProfesionalRouter;