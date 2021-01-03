/*Dependencias*/ 
const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require('mysql');

/*Conexión con la base de datos*/
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'covid'
})

connection.connect(function (err){
    if(err) throw err;
    console.log("Conectado");
})

/*Rutas para las opciones*/
var altas = require('./routes/altas')

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

app.use('/altas', altas(connection));

/* Inicializar servidor */
app.listen(port, () =>{
    console.log(`Listening to requests on port ${port}`);
});