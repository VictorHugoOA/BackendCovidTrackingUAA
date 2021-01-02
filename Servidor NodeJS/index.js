/*Dependencias*/ 
const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

/* Inicializar express y configuraciones */
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/* Obtener un puerto de salida */
const port = process.env.PORT || "8080";

/* Configuración de las rutas*/
app.get("/", (req, res) =>{
    res.status(200).send("Servidor para CVW");
});

/* Inicializar servidor */
app.listen(port, () =>{
    console.log(`Listening to requests on port ${port}`);
});