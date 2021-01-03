const express = require('express')

function createRoute(db){
    const router = express.Router();

    /* Dar de alta un área*/
    router.post('/area', function(req, res){

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

    /* Dar de alta una organización*/
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

    /*Dar de alta una persona*/
    router.post('/persona', function(req, res){

        const usuario = req.body.Usuario;
        const nombre = req.body.Nombre;
        const correo = req.body.Correo;
        const pass = req.body.Contrasena;
        const autF = req.body.autFacebook;
        const imei = req.body.IMEI;
        const riesgo = req.body.Riesgo;
        const FechaRojo = req.body.FechaRojo;
        const Admin = req.body.Admin;

        db.query('insert into persona(Usuario, Nombre, Correo, Contrasena, AutFacebook, IMEI, Riesgo, Fecha_Rojo, Admin) values (?, ?, ?, ?, ?, ?, ?, ?, ?)',
         [usuario, nombre, correo, pass, autF, imei, riesgo, FechaRojo, Admin], (error, results) =>{
            if(error) {return res.status(501).json({error: error})}
            res.send(results);
            console.log(results);
        })
    });

    /*Dar de alta una visita*/
    router.post('/visita', function(req, res){

        const usuario = req.body.Usuario;
        const Id_Area = req.body.Id_Area;
        const Llegada = req.body.Llegada;
        const Salida = req.body.Salida;
    
        db.query('insert into visita(Usuario, Id_Area, Llegada, Salida) values (?, ?, ?, ?)',
         [usuario, Id_Area, Llegada, Salida], (error, results) =>{
            if(error) {return res.status(501).json({error: error})}
            res.send(results);
            console.log(results);
        })
    });

    return router;
}

module.exports = createRoute