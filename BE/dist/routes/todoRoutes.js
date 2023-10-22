"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoRoute = void 0;
const express_1 = require("express");
const todoController_1 = require("../controllers/todoController");
const whitelist_1 = __importDefault(require("../middlewares/whitelist"));
const cors_1 = __importDefault(require("cors"));
exports.todoRoute = (0, express_1.Router)();
exports.todoRoute.options('/create', (0, cors_1.default)(whitelist_1.default.clientOptionsGlobal));
exports.todoRoute.options('/retrieve', (0, cors_1.default)(whitelist_1.default.clientOptionsGlobal));
exports.todoRoute.options('/update', (0, cors_1.default)(whitelist_1.default.clientOptionsGlobal));
exports.todoRoute.options('/delete', (0, cors_1.default)(whitelist_1.default.clientOptionsGlobal));
exports.todoRoute.post('/create', (0, cors_1.default)(whitelist_1.default.clientOptionsGlobal), todoController_1.createTodoController);
exports.todoRoute.get('/retrieve', (0, cors_1.default)(whitelist_1.default.clientOptionsGlobal), todoController_1.getTodoController);
exports.todoRoute.patch('/update/:id', (0, cors_1.default)(whitelist_1.default.clientOptionsGlobal), todoController_1.updateTodoController);
exports.todoRoute.delete('/delete/:id', (0, cors_1.default)(whitelist_1.default.clientOptionsGlobal), todoController_1.deleteTodoController);
