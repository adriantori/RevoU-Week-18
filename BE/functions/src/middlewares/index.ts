import { Express } from 'express';
import helmet from './helmet';
import bodyParser from './bodyParser';

export default (app: Express) => {
  bodyParser(app);
};
