import { Sequelize } from "sequelize";
import Role from "../models/roleModel";
import User from "../models/userModel";

async function registerUser(username: string, password: string): Promise<any> {
    try {
        const user = await User.create({
            users_name: username,
            users_pass: password,
            roles_id: 2
        });

        return user;
    } catch (error: any) {
        throw new Error(error.message.replace('Validation error: ', ''));
    }
}

async function loginUser (username: string): Promise<any> {
    try {
        const user = await User.findOne({
            where: {
                users_name: username
            },
            include: {
                model: Role,
                attributes: ['roles_name'],
                where: {
                    role_id: Sequelize.col('User.roles_id')
                },
                as: 'role',
                required: true // Inner join
            },
            attributes: ['users_id', 'users_name','users_pass']
        });
        return user;
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export { registerUser, loginUser }