import express from 'express';
import routes from './routes';

import DataBase from './database/index';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.dataBase = new DataBase();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
