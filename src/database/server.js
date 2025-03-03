import { Sequelize } from "sequelize";
import database from './config/config.js';
const env = process.env.NODE_ENV || 'development';
const config = database[env];

/* const sequelize = new Sequelize({
    dialect: 'postgres',
    dialectModule: pg,
    dialectOptions: {
        ssl: false,
    },
    username: 'postgres',
    password: '449cfb',
    host: 'localhost',
    database: 'postgres',
    port: 5432,
}); */

const sequelize = new Sequelize(config.url ? config.url : config.database, config.username, config.password, {
    ...config
});

console.log("ensv", sequelize);
try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
} catch (error) {
    console.error("Unable to connect to the database:", error);
}

const db = {}

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
export { sequelize, Sequelize };