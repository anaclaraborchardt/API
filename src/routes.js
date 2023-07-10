const express = require ('express')
const router = express.Router()

const registrausuariosRotas = require('./usuarios/controllers/usuarios-controller.js')
router.use(registrausuariosRotas());

const registrapropriedadesRotas = require('./usuarios/controllers/properties-controller.js')
router.use(registrapropriedadesRotas());

const registracardsRotas = require('./usuarios/controllers/cards-controller.js')
router.use(registracardsRotas());

module.exports = router