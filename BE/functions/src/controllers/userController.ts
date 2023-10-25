import { Request, Response } from 'express';
import jwt from 'jsonwebtoken'
import { JWT_SIGN } from '../configs/constants';
import { v4 as uuidv4 } from 'uuid';

import { loginUserService, registerUserService } from '../services/userService';

async function registerUserController(req: Request, res: Response) {
    const { username, password } = req.body;

    try {
        const user = await registerUserService(username, password);

        if (user) {
            res.status(201).json({
                message: 'Register success',
                data: user,
            });
        } else {
            res.status(409).json({
                message: 'username already exist',
                data: user,
            });
        }

    } catch (error: any) {
        res.status(500).json({
            message: error.message
        });
    }
}

async function loginUserController(req: Request, res: Response) {
    const { username, password } = req.body;
    try {
        const user = await loginUserService(username, password);
        if (user) {
            const token = jwt.sign({ userId: user.users_id, username: user.users_name, role: user.role.roles_name }, JWT_SIGN!);

            res.status(201).json({
                message: 'Login success',
                data: token
            })
        } else {
            res.status(401).json({
                message: 'Login data incorrect',
                data: user
            });
        }

    } catch (error) {
        console.log("error login controller");
        res.status(500).json({ message: 'Error login user' });
    }
}


export { registerUserController, loginUserController }