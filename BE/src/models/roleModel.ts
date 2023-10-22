import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../middlewares/database';

class Role extends Model {
    public roles_id!: number;
    public roles_name!: "admin" | "user";
}

Role.init(
    {
        roles_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        roles_name: {
            type: DataTypes.ENUM("admin", "user"),
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'roles',
        timestamps: false
    }
);
export default Role; // Export the Role model


