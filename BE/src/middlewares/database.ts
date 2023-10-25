import { createPool, Pool, PoolConnection } from 'mysql2/promise';
import { Request, Response, NextFunction } from 'express';
import { caCertificate, MYSQL_URI } from '../configs/constants';
import { Sequelize } from 'sequelize';


interface CustomRequest extends Request {
    pool: PoolConnection;
}

// Construct the database URI
const dbUri = 'mysql://avnadmin:AVNS_KEUOJt8hmNbC-eGDKyE@mysql-week16-adriantori11-revou.aivencloud.com:28384/revou_mile3' ||'mysql://root:@127.0.0.1:3306/revou_w16';

// Create a connection pool using the URI
const pool: Pool = createPool({
    uri: dbUri,
    ssl: {
        rejectUnauthorized: true,
        ca: caCertificate
    }
});

// Create Sequelize instance using the URI
const sequelize = new Sequelize(dbUri, {
    dialect: 'mysql',
    logging: false,
    dialectOptions: {
        connectTimeout: 60000
    }
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Middleware function to attach the database connection pool to the request object
const attachDB = (req: CustomRequest, res: Response, next: NextFunction): void => {
    pool.getConnection().then((connection) => {
        req.pool = connection;
        next();
    }).catch((err) => {
        console.log(dbUri);
        console.error('Error getting database connection:', err);
        res.status(500).json({ message: 'Database error' });
    });
};

export { attachDB, sequelize };
