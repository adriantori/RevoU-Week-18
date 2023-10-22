"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../middlewares/database");
class Role extends sequelize_1.Model {
}
Role.init({
    roles_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    roles_name: {
        type: sequelize_1.DataTypes.ENUM("admin", "user"),
        allowNull: false,
    },
}, {
    sequelize: database_1.sequelize,
    tableName: 'roles',
    timestamps: false
});
exports.default = Role; // Export the Role model
