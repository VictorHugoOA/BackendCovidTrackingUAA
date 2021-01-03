const express = require('express')
const mariadb = require('mysql')

function createRoute(db){
    const router = express.Router();

    /* Dar de alta las áreas*/
    router.post('/areas', function(req, res){

        const id = req.body.Id;
        const id_org = req.body.Id_Organizacion;
        const nombre = req.body.Nombre;
        const desc = req.body.Descripcion;
        const edificio = req.body.Edificio;
        const piso = req.body.Piso;
        const qr = req.body.QR;
        const riesgo = req.body.Riesgo;
        const FechaRojo = req.body.FechaRojo;
        const lat = req.body.Latitud;
        const lon = req.body.Longitud;

        db.query('insert into area(Id, Id_Organizacion, Nombre, Descripcion, Edificio, Piso, QR, Riesgo, Fecha_Rojo, Latitud, Longitud) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
         [id, id_org, nombre, desc, edificio, piso, qr, riesgo, FechaRojo, lat, lon], (error, results) =>{
            if(error) {return res.status(501).json({error: error})}
            res.send(results);
            console.log(results);
        })
    });

    /* Dar de alta las áreas*/
    router.post('/organizacion', function(req, res){

        const id = req.body.Id;
        const nombre = req.body.Nombre;
        const desc = req.body.Descripcion;
        const tipo = req.body.Tipo;

        db.query('insert into organizacion(Id, Nombre, Descripcion, Tipo) values (?, ?, ?, ?)',
         [id, nombre, desc, tipo], (error, results) =>{
            if(error) {return res.status(501).json({error: error})}
            res.send(results);
            console.log(results);
        })
    });

    

    return router;
}

module.exports = createRoute