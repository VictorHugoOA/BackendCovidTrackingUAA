const express = require('express')

function createRoute(db){
    const router = express.Router();

    /*Mostrar area por ID*/
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

    return router;
}

module.exports = createRoute