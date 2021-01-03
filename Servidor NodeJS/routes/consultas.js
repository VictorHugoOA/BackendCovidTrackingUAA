const express = require('express')

function createRoute(db){
    const router = express.Router();

    /*Mostrar area por ID*/
    router.get('/area/:Id', function(req, res){

        const id = req.params.Id;

        db.query('select * from area where Id = ?',
         [id], (error, results) =>{
            if(error) {return res.status(501).json({error: error})}
            res.send(results);
            console.log(results);
        })
    });

    /*Mostrar organización por ID*/
    router.get('/organizacion/:Id', function(req, res){

        const id = req.params.Id;

        db.query('select * from organizacion where Id = ?',
         [id], (error, results) =>{
            if(error) {return res.status(501).json({error: error})}
            res.send(results);
            console.log(results);
        })
    });

    /*Mostrar persona por usuario*/
    router.get('/persona/:Id', function(req, res){

        const id = req.params.Id;
    
        db.query('select * from persona where Usuario = ?',
            [id], (error, results) =>{
            if(error) {return res.status(501).json({error: error})}
            res.send(results);
            console.log(results);
        });
    });

    /*Mostrar visitas de usuario*/
    router.get('/visitasUsuario/:Id', function(req, res){

        const id = req.params.Id;
    
        db.query('select * from visita where Usuario = ?',
            [id], (error, results) =>{
            if(error) {return res.status(501).json({error: error})}
            res.send(results);
            console.log(results);
        });
    });

    /*Mostrar visitas del área*/
    router.get('/visitasArea/:Id', function(req, res){

        const id = req.params.Id;
    
        db.query('select * from visita where Id_Area = ?',
            [id], (error, results) =>{
            if(error) {return res.status(501).json({error: error})}
            res.send(results);
            console.log(results);
        });
    });

    /*Mostrar visitas por fecha llegada*/
    router.get('/visitasFechaLlegada/:fecha', function(req, res){

        const id = req.params.fecha;
    
        db.query('select * from visita where Llegada = ?',
            [id], (error, results) =>{
            if(error) {return res.status(501).json({error: error})}
            res.send(results);
            console.log(results);
        });
    });

    /*Mostrar visitas en específico*/
    router.get('/visitasFechaLlegada/:Usuario/:Id_Area/:fechaLlegada', function(req, res){

        const usuario = req.params.Usuario;
        const id_area = req.params.Id_Area;
        const fecha_llegada = req.params.fechaLlegada;
        
        db.query('select * from visita where Usuario = ?, Id_Area = ?, Llegada = ?',
            [usuario, id_area, fecha_llegada], (error, results) =>{
            if(error) {return res.status(501).json({error: error})}
            res.send(results);
            console.log(results);
        });
    });

    /*Mostrar todas las areas*/
    router.get('/areas', function(req, res){
    
        db.query('select * from area',
         [], (error, results) =>{
            if(error) {return res.status(501).json({error: error})}
            res.send(results);
            console.log(results);
        })
    });

    /*Mostrar todas las organizaciones*/
    router.get('/organizaciones', function(req, res){

        db.query('select * from organizacion',
         [], (error, results) =>{
            if(error) {return res.status(501).json({error: error})}
            res.send(results);
            console.log(results);
        })
    });

    /*Mostrar todas las personas*/
    router.get('/personas', function(req, res){
    
        db.query('select * from persona',
            [], (error, results) =>{
            if(error) {return res.status(501).json({error: error})}
            res.send(results);
            console.log(results);
        });
    });

    /*Mostrar todas las visitas*/
    router.get('/visitas', function(req, res){
        
        db.query('select * from visita',
            [usuario, id_area, fecha_llegada], (error, results) =>{
            if(error) {return res.status(501).json({error: error})}
            res.send(results);
            console.log(results);
        });
    });

    return router;
}

module.exports = createRoute