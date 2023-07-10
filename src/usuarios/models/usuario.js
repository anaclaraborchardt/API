const {DataTypes, Model } = require('sequelize')
const connection = require('../../database/connection')

class Usuario extends Model{

}

Usuario.init({
    meuParametro: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey:true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull:false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull:false
    },
    email: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: true
    },
    },{
    sequelize: connection,
    modelName: 'users'
});

Usuario.sync().then(() =>{
console.log('Usuario sincronizado')
})
.catch((e) =>{
    console.log('Usuario não sincronizado', error)
    })

module.exports = Usuario;