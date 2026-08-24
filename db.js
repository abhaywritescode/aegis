const { Sequelize } = require('sequelize');
require("dotenv").config();

const sequelize = new Sequelize(process.env.POSTGRES_CONN_URI, {
    dialect: 'postgres',
    logging: false,
});

sequelize.authenticate()
    .then(() => console.log('PostgreSQL connected successfully'))
    .catch((err) => console.error('Error connecting to PostgreSQL:', err));

sequelize.sync();

module.exports = sequelize;
