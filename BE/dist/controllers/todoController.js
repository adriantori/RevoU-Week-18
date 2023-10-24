"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodoController = exports.updateTodoController = exports.getTodoController = exports.createTodoController = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const constants_1 = require("../configs/constants");
const todoService_1 = require("../services/todoService");
function createTodoController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { todoTask, todoPriority, todoDue, todoAmount } = req.body;
            const authHeader = req.headers['authorization'];
            if (!authHeader || !authHeader.startsWith('Bearer ')) {
                res.status(401).json({ message: 'Unauthorized - Token not provided' });
                return;
            }
            const token = authHeader.slice(7); // Remove 'Bearer ' prefix
            const decodedToken = jsonwebtoken_1.default.verify(token, constants_1.JWT_SIGN);
            const userId = decodedToken.userId;
            const post = yield (0, todoService_1.createTodoService)(todoTask, todoPriority, todoDue, todoAmount, userId);
            res.status(201).json({
                message: 'Posted successfully',
                data: post,
            });
        }
        catch (error) {
            console.log("error createPost controller");
            res.status(500).json({ message: 'Error creating post' });
        }
    });
}
exports.createTodoController = createTodoController;
function getTodoController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const authHeader = req.headers['authorization'];
            if (!authHeader || !authHeader.startsWith('Bearer ')) {
                res.status(401).json({ message: 'Unauthorized - Token not provided' });
                return;
            }
            const token = authHeader.slice(7); // Remove 'Bearer ' prefix
            const decodedToken = jsonwebtoken_1.default.verify(token, constants_1.JWT_SIGN);
            const roles = decodedToken.role;
            if (roles == 'user') {
                try {
                    const username = decodedToken.username;
                    const post = yield (0, todoService_1.getUserTodoListService)(username);
                    res.status(200).json({
                        message: 'Tasks retrieved successfully',
                        data: post,
                    });
                }
                catch (error) {
                    res.status(500).json({ message: 'Error retrieving post lists!' });
                }
            }
            else if (roles == 'admin') {
                try {
                    const post = yield (0, todoService_1.getTodoService)();
                    res.status(200).json({
                        message: 'Tasks retrieved successfully',
                        data: post,
                    });
                }
                catch (error) {
                    console.log("error createPost controller");
                    res.status(500).json({ message: 'Error retrieving posts' });
                }
            }
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
exports.getTodoController = getTodoController;
function updateTodoController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const tmpTaskId = req.params.id;
            const todoId = parseInt(tmpTaskId);
            const { todoTask, todoPriority, todoDue, todoAmount } = req.body;
            const authHeader = req.headers['authorization'];
            if (!authHeader || !authHeader.startsWith('Bearer ')) {
                res.status(401).json({ message: 'Unauthorized - Token not provided' });
                return;
            }
            const token = authHeader.slice(7); // Remove 'Bearer ' prefix
            const decodedToken = jsonwebtoken_1.default.verify(token, constants_1.JWT_SIGN);
            const userId = decodedToken.userId;
            // Retrieve post information, including the user ID of the post maker
            const userIdRetrieved = yield (0, todoService_1.getUserIdByTodoIdService)(todoId);
            if (!userIdRetrieved) {
                return res.status(404).json({ message: 'Post not found' });
            }
            // Check if the user is authorized to edit the post
            if (userIdRetrieved !== userId) {
                return res.status(403).json({ message: 'You are not authorized to edit this post' });
            }
            const todo = yield (0, todoService_1.updateTodoService)(todoTask, todoPriority, todoDue, todoAmount, todoId);
            res.status(200).json({
                message: 'ToDos updated successfully',
                data: todo,
            });
        }
        catch (error) {
            console.log("error updatePost controller");
            res.status(500).json({ message: 'Error updating post' });
        }
    });
}
exports.updateTodoController = updateTodoController;
function deleteTodoController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const tmpTodoId = req.params.id;
        const todoId = parseInt(tmpTodoId);
        try {
            const authHeader = req.headers['authorization'];
            if (!authHeader || !authHeader.startsWith('Bearer ')) {
                res.status(401).json({ message: 'Unauthorized - Token not provided' });
                return;
            }
            const token = authHeader.slice(7); // Remove 'Bearer ' prefix
            const decodedToken = jsonwebtoken_1.default.verify(token, constants_1.JWT_SIGN);
            const userId = decodedToken.userId;
            // Get the user ID associated with the post
            const postUserId = yield (0, todoService_1.getUserIdByTodoIdService)(todoId);
            if (postUserId === null) {
                return res.status(404).json({ message: 'Post not found' });
            }
            // Check if the user is authorized to delete the post
            if (postUserId !== userId) {
                return res.status(403).json({ message: 'You are not authorized to delete this post' });
            }
            // Delete the post if authorized
            const deletedPost = yield (0, todoService_1.deleteTodoService)(todoId);
            res.status(201).json({
                message: 'Post deleted successfully',
                data: deletedPost,
            });
        }
        catch (error) {
            console.log("error deletePost controller");
            res.status(500).json({ message: 'Error deleting post' });
        }
    });
}
exports.deleteTodoController = deleteTodoController;
