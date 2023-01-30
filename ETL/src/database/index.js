import Sequelize from 'sequelize';

import config from '../config/database';

import InfectedModels from '../models/Infected';
import DeathModels from '../models/Death'; 

const models = [...InfectedModels, ...DeathModels];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(config);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();