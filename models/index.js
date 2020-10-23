import Sequelize, { DataTypes } from 'sequelize';
import config from '../config/db.js';

// All the existing models
import User from './User';

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config.options
);

const models = { 
    User: User(sequelize, DataTypes) 
};

Object.keys(models).forEach(modelName => {
   if('associate' in models[modelName]) {
    models[modelName].associate(models);
   }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;