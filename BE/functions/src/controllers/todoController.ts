import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

import { JWT_SIGN } from '../configs/constants';
import { createTodoService, deleteTodoService, getTodoService, getUserIdByTodoIdService, getUserTodoListService, updateTodoService } from '../services/todoService';

async function createTodoController(req: Request, res: Response) {
    try {
        const { todoTask, todoPriority, todoDue, todoAmount } = req.body;
        const authHeader = req.headers['authorization'];

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            res.status(401).json({ message: 'Unauthorized - Token not provided' });
            return;
        }

        const token = authHeader.slice(7); // Remove 'Bearer ' prefix
        const decodedToken: jwt.JwtPayload = jwt.verify(token, JWT_SIGN!) as jwt.JwtPayload;

        const userId = decodedToken.userId;

        const post = await createTodoService(todoTask, todoPriority, todoDue, todoAmount, userId);
        res.status(201).json({
            message: 'Posted successfully',
            data: post,
        });
    } catch (error) {
        console.log("error createPost controller");
        res.status(500).json({ message: 'Error creating post' });
    }
}

async function getTodoController(req: Request, res: Response) {
    try {
        const authHeader = req.headers['authorization'];

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            res.status(401).json({ message: 'Unauthorized - Token not provided' });
            return;
        }

        const token = authHeader.slice(7); // Remove 'Bearer ' prefix
        const decodedToken: jwt.JwtPayload = jwt.verify(token, JWT_SIGN!) as jwt.JwtPayload;

        const roles = decodedToken.role

        if (roles == 'user') {
            try {
                const username = decodedToken.username;

                const post = await getUserTodoListService(username);
                res.status(200).json({
                    message: 'Tasks retrieved successfully',
                    data: post,
                });

            } catch (error) {
                res.status(500).json({ message: 'Error retrieving post lists!' });
            }
        } else if (roles == 'admin') {
            try {
                const post = await getTodoService();
                res.status(200).json({
                    message: 'Tasks retrieved successfully',
                    data: post,
                });
            } catch (error) {
                console.log("error createPost controller");
                res.status(500).json({ message: 'Error retrieving posts' });
            }
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }

}

async function updateTodoController(req: Request, res: Response) {
    try {
        const tmpTaskId = req.params.id;
        const todoId = parseInt(tmpTaskId);
        console.log(todoId)
        const { todoTask, todoPriority, todoDue, todoAmount } = req.body;
        console.log(req.body)

        const authHeader = req.headers['authorization'];
        console.log(authHeader)

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            res.status(401).json({ message: 'Unauthorized - Token not provided' });
            return;
        }

        const token = authHeader.slice(7); // Remove 'Bearer ' prefix
        const decodedToken: jwt.JwtPayload = jwt.verify(token, JWT_SIGN!) as jwt.JwtPayload;
        console.log(decodedToken)
        const userId = decodedToken.userId

        // Retrieve post information, including the user ID of the post maker
        const userIdRetrieved: number = await getUserIdByTodoIdService(todoId);

        if (!userIdRetrieved) {
            return res.status(404).json({ message: 'Post not found' });
        }

        // Check if the user is authorized to edit the post
        if (userIdRetrieved !== userId) {
            return res.status(403).json({ message: 'You are not authorized to edit this post' });
        }

        const todo = await updateTodoService(todoTask, todoPriority, todoDue, todoAmount, todoId);
        res.status(200).json({
            message: 'ToDos updated successfully',
            data: todo,
        });
    } catch (error) {
        console.log("error updatePost controller");
        res.status(500).json({ message: 'Error updating post' });
    }
}

async function deleteTodoController(req: Request, res: Response) {
    const tmpTodoId = req.params.id;
    const todoId: number = parseInt(tmpTodoId);

    try {
        const authHeader = req.headers['authorization'];

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            res.status(401).json({ message: 'Unauthorized - Token not provided' });
            return;
        }

        const token = authHeader.slice(7); // Remove 'Bearer ' prefix
        const decodedToken: jwt.JwtPayload = jwt.verify(token, JWT_SIGN!) as jwt.JwtPayload;

        const userId = decodedToken.userId;

        // Get the user ID associated with the post
        const postUserId = await getUserIdByTodoIdService(todoId);

        if (postUserId === null) {
            return res.status(404).json({ message: 'Post not found' });
        }

        // Check if the user is authorized to delete the post
        if (postUserId !== userId) {
            return res.status(403).json({ message: 'You are not authorized to delete this post' });
        }

        // Delete the post if authorized
        const deletedPost = await deleteTodoService(todoId);
        res.status(201).json({
            message: 'Post deleted successfully',
            data: deletedPost,
        });
    } catch (error) {
        console.log("error deletePost controller");
        res.status(500).json({ message: 'Error deleting post' });
    }
}

export { createTodoController, getTodoController, updateTodoController, deleteTodoController }