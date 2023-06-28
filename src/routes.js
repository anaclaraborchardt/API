const express = require ('express')
const router = express.Router()

const registrausuariosRotas = require('./usuarios/controllers/usuarios-controller.js')
router.use(registrausuariosRotas());

module.exports = router