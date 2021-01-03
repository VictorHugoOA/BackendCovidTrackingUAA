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

    return router;
}

module.exports = createRoute