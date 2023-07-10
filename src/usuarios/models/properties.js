const {DataTypes, Model } = require('sequelize')
const connection = require('../../database/connection')

class Properties extends Model{

}

Properties.init({

        id_usuario: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey:true,
            foreignKeys:true
        },
    
        permissions: {
            type: DataTypes.STRING,
            allowNull:false,
            primaryKey:true
        },
    },{

        sequelize: connection,
        modelName: "properties"
})
Properties.sync().then(() =>{
    console.log('Usuario sincronizado')
    })

module.exports = Properties;