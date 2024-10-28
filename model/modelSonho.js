const Sequelize = require('sequelize');
const connection = require('../database/database');
const modelCategoria = require('./modelCategoria');

const modelSonho = connection.define(
    'tbl_sonho',
    {
        cod_sonho: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cod_categoria: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        nome_sonho: {
            type: Sequelize.STRING(100),
            allowNull: true
        },
        valor_sonho: {
            type: Sequelize.STRING(100),
            allowNull: true
        },
        descricao_sonho: {
            type: Sequelize.STRING(500),
            allowNull: true
        },
    }
);

// Estabelecendo relacionamentos
modelCategoria.hasMany(modelSonho, {
    foreignKey: 'cod_categoria',
    sourceKey: 'cod_categoria'
});

modelSonho.belongsTo(modelCategoria, {
    foreignKey: 'cod_categoria',
    targetKey: 'cod_categoria'
});

// Sincronização do modelo
// modelSonho.sync({ force: true });

module.exports = modelSonho;
