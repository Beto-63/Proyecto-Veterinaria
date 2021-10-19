//Importar dependencias
const express = require('express');
const mongoose = require('mongoose');
//Dependencia para permitir conexiones de origen cruzado
const cors = require('cors');

//Importar módulos de nuestro arquetipo
const key_database = require('./database/key-database');
const ProfesionalRouter = require('./routers/profesionalRouter.js'); //OJO Ajustar router a Profesional Router

class Server {

    constructor() {
        this.conectarBd();
        this.app = express();
        this.config();
    }

    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(express.json());
        //Añadimos cors para permitir conexiones de origen cruzado
        this.app.use(cors());
        //Crear ruta raíz del servidor
        let router = express.Router();
        router.get('/', (req, res) => {
            res.status(200).json({ "message": "All ok" });
        });
        //Añadir ruta a express
        this.app.use(router);

        //CREAR RUTAS DIFERENTES A LA RAÍZ Y AÑADIRLAS A EXPRESS
        let objProfesionalR = new ProfesionalRouter();
        this.app.use(objProfesionalR.router);

        //poner el servidor a la escucha
        this.app.listen(this.app.get('port'), () => {
            console.log("Servidor corriendo por el puerto => ", this.app.get('port'));
        });
    }

    conectarBd() {
        mongoose.connect(key_database.db).then(() => {
            console.log("Conexión exitosa a la BD");
        }).catch(error => {
            console.error(error);
        });
    }

}

new Server();