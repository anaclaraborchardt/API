const express = require('express');
const cors = require('cors');
const app = express(); 
app.use(express.json());
app.use(cors());

const router = require('./routes')
app.use(router);

require ("./database/connection")

require('./usuarios/models/usuario')
require('./usuarios/models/properties')
require('./usuarios/models/cards')


app.listen(4300, () => {
    console.log('Servidor rodando rodando na porta 4300');
});