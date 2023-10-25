"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = exports.attachDB = void 0;
const promise_1 = require("mysql2/promise");
const constants_1 = require("../configs/constants");
const sequelize_1 = require("sequelize");
// Construct the database URI
const dbUri = 'mysql://avnadmin:AVNS_KEUOJt8hmNbC-eGDKyE@mysql-week16-adriantori11-revou.aivencloud.com:28384/revou_mile3' || 'mysql://root:@127.0.0.1:3306/revou_w16';
// Create a connection pool using the URI
const pool = (0, promise_1.createPool)({
    uri: dbUri,
    ssl: {
        rejectUnauthorized: true,
        ca: constants_1.caCertificate
    }
});
// Create Sequelize instance using the URI
const sequelize = new sequelize_1.Sequelize(dbUri, {
    dialect: 'mysql',
    logging: false,
    dialectOptions: {
        connectTimeout: 60000
    }
});
exports.sequelize = sequelize;
sequelize.authenticate()
    .then(() => {
    console.log('Connection has been established successfully.');
})
    .catch((err) => {
    console.error('Unable to connect to the database:', err);
});
// Middleware function to attach the database connection pool to the request object
const attachDB = (req, res, next) => {
    pool.getConnection().then((connection) => {
        req.pool = connection;
        next();
    }).catch((err) => {
        console.log(dbUri);
        console.error('Error getting database connection:', err);
        res.status(500).json({ message: 'Database error' });
    });
};
exports.attachDB = attachDB;
//# sourceMappingURL=database.js.map