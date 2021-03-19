import express from 'express';
import routes from './routes';

import Database from './database/index';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.dataBase = new Database();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
