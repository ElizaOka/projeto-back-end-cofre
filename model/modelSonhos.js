const Sequelize = require('sequelize');
const connection = require('../database/database');


const modelSonhos = connection.define(
    'tbl_sonhos',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        sonho: {
            type: Sequelize.STRING(255), 
            allowNull: true
        },
        valor: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: true
        },
        descricao: {
            type: Sequelize.TEXT,
            allowNull: true
        },
    }
);

// modelSonhos.sync({force:true}); // Descomente para criar a tabela ou forçar a recriação

module.exports = modelSonhos;