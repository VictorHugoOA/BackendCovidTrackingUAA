const express = require('express')

function createRoute(db){
    const router = express.Router();

    /* Dar de baja un área*/
    router.get('/area/:Id', function(req, res){

        const id = req.params.Id;

        db.query('delete from area where Id = ?',
         [id], (error, results) =>{
            if(error) {return res.status(501).json({error: error})}
            res.send(results);
            console.log(results);
        })
    });

    /* Dar de baja una organizacion*/
    router.get('/organizacion/:Id', function(req, res){

        const id = req.params.Id;

        db.query('delete from organizacion where Id = ?',
         [id], (error, results) =>{
            if(error) {return res.status(501).json({error: error})}
            res.send(results);
            console.log(results);
        })
    });

    /* Dar de baja una persona*/
    router.get('/persona/:usuario', function(req, res){

        const usuario = req.params.usuario;

        db.query('delete from persona where Usuario = ?',
         [usuario], (error, results) =>{
            if(error) {return res.status(501).json({error: error})}
            res.send(results);
            console.log(results);
        })
    });

    return router;
}

module.exports = createRoute