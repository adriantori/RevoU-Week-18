import express, { Request, Response, NextFunction } from 'express';
import globalMiddleware from './middlewares'
import * as functions from 'firebase-functions';
import http, { Server } from 'http';

import { userRoute } from './routes/userRoute';
import { todoRoute } from './routes/todoRoutes';
import helmet from 'helmet';

const app = express();
app.use(helmet());
app.use(helmet.frameguard({ action: 'deny' }))
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "https://adriantori-m3.web.app"],
    },
  })
);
app.use(helmet.xssFilter());
app.use(helmet.noSniff());

const server: Server = http.createServer(app);

globalMiddleware(app);


app.use(userRoute);

app.get('/', (req, res) => {
    res.status(200).json({
        message:`app works!`
    });
});

app.use(todoRoute);

let port: number;

server.listen(0, () => {
  const address = server.address();
  if (address && typeof address !== 'string') {
    port = address.port;
    console.log(`Server is running on port ${port}`);
  } else {
    console.error('Server address is not available.');
  }
});

export const milestone_3_adriantori = functions.https.onRequest(app);