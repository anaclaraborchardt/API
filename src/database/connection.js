const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database/database.sqlite'
});

async function testeDatabase(){
    try{
        await sequelize.authenticate();
        console.log('banco conectado com sucesso')
    }catch(error){
        console.log('conexão falhou: ', error)

    }
}

testeDatabase().then();

module.exports = sequelize;