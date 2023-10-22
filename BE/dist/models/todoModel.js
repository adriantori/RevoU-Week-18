"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../middlewares/database");
const userModel_1 = __importDefault(require("./userModel")); // Adjust the path to match your file structure
class Todo extends sequelize_1.Model {
}
Todo.init({
    todos_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    todos_task: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    todos_priority: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    todos_due: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false,
    },
    users_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: userModel_1.default,
            key: 'users_id',
        },
    },
    is_deleted: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
}, {
    sequelize: database_1.sequelize,
    modelName: 'Todo',
    tableName: 'todos',
    timestamps: false
});
// Add the association to Post
Todo.belongsTo(userModel_1.default, { foreignKey: 'users_id', as: 'user' });
exports.default = Todo;
