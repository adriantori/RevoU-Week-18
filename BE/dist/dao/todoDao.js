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
exports.deleteTodo = exports.updateTodo = exports.getUserIdByTodo = exports.getUserTodoList = exports.getTodos = exports.createTask = void 0;
const todoModel_1 = __importDefault(require("../models/todoModel"));
const userModel_1 = __importDefault(require("../models/userModel"));
function createTask(todoTask, todoPriority, todoDue, todoAmount, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const todo = yield todoModel_1.default.create({
                todos_task: todoTask,
                todos_priority: todoPriority,
                todos_due: todoDue,
                todos_amount: todoAmount,
                users_id: userId
            });
            return todo;
        }
        catch (error) {
            console.log('Error creating post DAO: ' + error.message);
            throw new Error('Error creating post DAO: ' + error.message);
        }
    });
}
exports.createTask = createTask;
function getTodos() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const todos = yield todoModel_1.default.findAll({
                where: {
                    is_deleted: 0,
                },
                attributes: ['todos_id', 'todos_task', 'todos_priority', 'todos_due', 'todos_amount', 'users_id'],
                include: [
                    {
                        model: userModel_1.default,
                        as: 'user',
                        attributes: ['users_name'],
                    },
                ]
            });
            return todos.map(todo => ({
                todos_id: todo.todos_id,
                todos_task: todo.todos_task,
                todos_priority: todo.todos_priority,
                todos_due: todo.todos_due,
                todos_amount: todo.todos_amount,
                users_id: todo.users_id,
                users_name: todo.user.users_name,
            }));
        }
        catch (error) {
            console.log('Error getting posts: ' + error.message);
            throw new Error('Error getting posts: ' + error.message);
        }
    });
}
exports.getTodos = getTodos;
function getUserTodoList(username) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const todos = yield todoModel_1.default.findAll({
                where: {
                    is_deleted: 0,
                },
                attributes: ['todos_id', 'todos_task', 'todos_priority', 'todos_due', 'todos_amount', 'users_id'],
                include: [
                    {
                        model: userModel_1.default,
                        as: 'user',
                        where: {
                            users_name: username
                        },
                        attributes: ['users_name'],
                    },
                ]
            });
            return todos.map(todo => ({
                todos_id: todo.todos_id,
                todos_task: todo.todos_task,
                todos_priority: todo.todos_priority,
                todos_due: todo.todos_due,
                todos_amount: todo.todos_amount,
                users_id: todo.users_id,
                users_name: todo.user.users_name,
            }));
        }
        catch (error) {
            console.log('Error getting posts: ' + error.message);
            throw new Error('Error getting posts: ' + error.message);
        }
    });
}
exports.getUserTodoList = getUserTodoList;
function getUserIdByTodo(todoId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const todo = yield todoModel_1.default.findOne({
                where: { todos_id: todoId },
            });
            if (todo) {
                return todo.users_id;
            }
            return null;
        }
        catch (error) {
            throw new Error('Error retrieving user ID for post:' + error.message);
        }
    });
}
exports.getUserIdByTodo = getUserIdByTodo;
function updateTodo(todoTask, todoPriority, todoDue, todoAmount, todoId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updatedTodos = yield todoModel_1.default.update({
                todos_task: todoTask,
                todos_priority: todoPriority,
                todos_due: todoDue,
                todos_amount: todoAmount
            }, {
                where: {
                    todos_id: todoId
                }
            });
            return updatedTodos; // Return the updated records
        }
        catch (error) {
            console.log('Error updating post DAO: ' + error.message);
            throw new Error('Error updating post DAO: ' + error.message);
        }
    });
}
exports.updateTodo = updateTodo;
function deleteTodo(todoId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const todo = yield todoModel_1.default.update({ is_deleted: 1 }, {
                where: {
                    todos_id: todoId
                }
            });
            return todo;
        }
        catch (error) {
            console.log('Error creating post DAO: ' + error.message);
            throw new Error('Error creating post DAO: ' + error.message);
        }
    });
}
exports.deleteTodo = deleteTodo;
