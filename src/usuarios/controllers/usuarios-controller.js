const express = require("express");
const Usuario = require("../models/usuario");
const routes = express.Router();

function findAllRoute(){
routes.get('/usuarios', async(req, res) => {
 res.json(await Usuario.findAll());
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
        routes.get('/usuarios/:meuParametro', async (req, res) => {
            console.log(req.params)
        
            const usuario = await Usuario.findOne({where: 
                {meuParametro: req.params.meuParametro}})

            if (usuario === null) {
                console.log('Not found!');

              } else {
                console.log(usuario instanceof Usuario); 
                console.log(usuario.meuParametro); 
                res.json(usuario)
              }
              })
        } 
        

        function updateRoute() {
            routes.put('/usuarios/:meuParametro', async (req, res) => {
                const usuario = await Usuario.update(req.body,{
                    where:{
                        meuParametro:req.body.meuParametro
        
                    }
                })
                res.json(req.body)
            });
          }
          

            function removeRoute(){
                routes.delete('/usuarios/:meuParametro', async(req, res) => {
                    console.log(req.params)

                 const usuario = await Usuario.destroy({ where: 
                    {meuParametro: req.params.meuParametro} });
                    console.log(usuario.meuParametro); 
                    
                    res.json(usuario);
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

