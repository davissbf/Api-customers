import Sequelize from 'sequelize';

import config from '../config/database';

import Customer from '../app/models/Customer';
import Contact from '../app/models/Contact';
import User from '../app/models/User';

const models = [Customer, Contact, User];

class Database {
  constructor() {
    console.log('2B');
    this.connection = new Sequelize(config);
    this.init();
  }

  init() {
    console.log('DATABASE');
    models.forEach(model => model.init(this.connection));
  }
}

export default Database;
