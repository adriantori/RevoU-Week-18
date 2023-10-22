import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../middlewares/database';
import User from './userModel'; // Adjust the path to match your file structure

class Todo extends Model {
    public todos_id!: number;
    public todos_task!: string;
    public todos_priority!: string;
    public todos_due!: Date;
    public users_id!: number;
    public is_deleted!: boolean;
    user: any;
}

Todo.init(
    {
        todos_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        todos_task: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        todos_priority: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        todos_due: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        users_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'users_id',
            },
        },
        is_deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    {
        sequelize,
        modelName: 'Todo',
        tableName: 'todos',
        timestamps: false
    }
);

// Add the association to Post
Todo.belongsTo(User, { foreignKey: 'users_id', as: 'user' });

export default Todo;
