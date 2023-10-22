import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../middlewares/database';
import Role from './roleModel';

class User extends Model {
    public users_id!: number;
    public users_name!: string;
    public users_pass!: string;
    public role_id!: 1 | 2;

    // Add the association
    public role!: Role;

    // Define a custom validation method
    public async validateUsername(username: string): Promise<string | undefined> {
        const existingUser = await User.findOne({ where: { users_name: username } });
        if (existingUser) {
            return 'This username is already taken';
        }
    }
}

User.init(
    {
        users_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        users_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isUnique: async function (this: User, username: string): Promise<void> {
                    const validationError = await this.validateUsername(username);
                    if (validationError) {
                        throw new Error(validationError);
                    }
                },
            },
        },
        users_pass: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        roles_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Role,
                key: 'roles_id',
            },
        },
    },
    {
        sequelize,
        modelName: 'User',
        tableName: 'users',
        timestamps: false
    }
);

// Add the association to User
User.belongsTo(Role, { foreignKey: 'roles_id', as: 'role' });

export default User;
