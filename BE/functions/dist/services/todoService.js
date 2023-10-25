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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodoService = exports.updateTodoService = exports.getUserIdByTodoIdService = exports.getUserTodoListService = exports.getTodoService = exports.createTodoService = void 0;
const todoDao_1 = require("../dao/todoDao");
function createTodoService(todoTask, todoPriority, todoDue, todoAmount, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const post = yield (0, todoDao_1.createTask)(todoTask, todoPriority, todoDue, todoAmount, userId);
            return post;
        }
        catch (error) {
            throw new Error('Error registering ToDo service: ' + error.message);
        }
    });
}
exports.createTodoService = createTodoService;
function getTodoService() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const post = yield (0, todoDao_1.getTodos)();
            return post;
        }
        catch (error) {
            throw new Error('Error get ToDo service all: ' + error.message);
        }
    });
}
exports.getTodoService = getTodoService;
function getUserTodoListService(username) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const post = yield (0, todoDao_1.getUserTodoList)(username);
            return post;
        }
        catch (error) {
            throw new Error('Error get ToDo service: ' + error.message);
        }
    });
}
exports.getUserTodoListService = getUserTodoListService;
function getUserIdByTodoIdService(postId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userId = yield (0, todoDao_1.getUserIdByTodo)(postId);
            return userId;
        }
        catch (error) {
            throw new Error('Error getting ToDo id by post id service: ' + error.message);
        }
    });
}
exports.getUserIdByTodoIdService = getUserIdByTodoIdService;
function updateTodoService(todoTask, todoPriority, todoDue, todoAmount, todoId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const todo = yield (0, todoDao_1.updateTodo)(todoTask, todoPriority, todoDue, todoAmount, todoId);
            return todo;
        }
        catch (error) {
            throw new Error('Error updating ToDo service: ' + error.message);
        }
    });
}
exports.updateTodoService = updateTodoService;
function deleteTodoService(post_id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const todo = yield (0, todoDao_1.deleteTodo)(post_id);
            return todo;
        }
        catch (error) {
            throw new Error('Error delete ToDo service: ' + error.message);
        }
    });
}
exports.deleteTodoService = deleteTodoService;
//# sourceMappingURL=todoService.js.map