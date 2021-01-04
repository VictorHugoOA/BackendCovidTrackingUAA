const express = require('express')

function createRoute(db){
    const router = express.Router();

    /*Actualizar area*/
    router.post('/area', function(req, res){

        const id = req.body.Id;
        const id_org = req.body.Id_Organizacion;
        const nombre = req.body.Nombre;
        const desc = req.body.Descripcion;
        const edificio = req.body.Edificio;
        const piso = req.body.Piso;
        const QR = req.body.QR;
        const Riesgo = req.body.Riesgo;
        const fechaRojo = req.body.FechaRojo;
        const latitud = req.body.Latitud;
        const longitud = req.body.Longitud;

        db.query('update area set Id_Organizacion = ?, Nombre = ?, Descripcion = ?, Edificio = ?, Piso = ?, QR = ?, Riesgo = ?, Fecha_Rojo = ?, Latitud = ?, Longitud = ? where Id = ?',
         [id_org, nombre, desc, edificio, piso, QR, Riesgo, fechaRojo, latitud, longitud, id], (error, results) =>{
            if(error) {return res.status(501).json({error: error})}
            res.send(results);
            console.log(results);
        })
    });
    /*Actualizar persona*/
    router.post('/persona', function(req,res){
        const usuario=req.body.Usuario;
        const nombre=req.body.Nombre;
        const correo=req.body.Correo;
        const contrsena=req.body.Contrasena;
        const AutFB=req.body.AutFacebook;
        const imei=req.body.IMEI;
        const riesgo=req.body.Riesgo;
        const fecha=req.body.FechaRojo;
        const admin=req.body.Admin;

        db.query('update persona set  Nombre = ?, Correo = ?, Contrasena = ?, AutFacebook = ?, IMEI = ?, Riesgo = ?, Fecha_Rojo = ?, Admin = ? where usuario = ?',
        [nombre, correo, contrsena, AutFB, imei, riesgo, fecha, admin, usuario], (error, results)=>{
            if(error) {return res.status(501).json({error: error})}
            res.send(results);
            console.log(results);
        })
    });

    /*Actualizar Organizacion*/
    router.post('/organizacion', function(req,res){
        const id=req.body.Id;
        const nombre= req.body.Nombre;
        const desc= req.body.Descripcion;
        const tipo=req.body.Tipo;

        db.query('update organizacion set Nombre = ?, Descripcion = ?, Tipo = ? where Id = ?',
        [nombre,desc,tipo,id], (error,results)=>{
            if(error) {return res.status(501).json({error: error})}
            res.send(results);
            console.log(results);
        })
    });

    return router;
}

module.exports = createRoute