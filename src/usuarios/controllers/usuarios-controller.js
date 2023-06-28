const express = require("express");
const Usuario = require("../models/usuario");
const routes = express.Router();

function findAllRoute(){
routes.get('/usuarios', (req, res) => {
 res.json([]);
} );
}

function createRoute(){
    routes.post('/usuarios', async (req, res) => {
        console.log(req.body)
        await Usuario.create(req.body)
     res.json([]);
    } );
    }

    function findByIdRoute(){
        routes.get('/usuarios/:meuParametro', (req, res) => {
            console.log(req.params)
         res.json([]);
        } );
        }

        function updateRoute(){
            routes.put('/usuarios', (req, res) => {
                console.log(req.body)
             res.json([]);
            } );
            }

            function removeRoute(){
                routes.delete('/usuarios/:meuParametro', (req, res) => {
                    console.log(req.params)
                 res.json([]);
                } );
                }

function registrausuariosRotas(){
    createRoute();
    findAllRoute();
    findByIdRoute();
    updateRoute();
    removeRoute();
    
    return routes;
}

module.exports = registrausuariosRotas

