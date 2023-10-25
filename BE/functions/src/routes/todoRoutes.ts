import { Router } from "express";
import { createTodoController, deleteTodoController, getTodoController, updateTodoController } from "../controllers/todoController";
import whitelist from "../middlewares/whitelist";
import cors from "cors";


export const todoRoute = Router();

todoRoute.options('/create', cors(whitelist.clientOptionsGlobal));
todoRoute.options('/retrieve', cors(whitelist.clientOptionsGlobal));
todoRoute.options('/update/:id', cors(whitelist.clientOptionsGlobal));
todoRoute.options('/delete/:id', cors(whitelist.clientOptionsGlobal));

todoRoute.post('/create', cors(whitelist.clientOptionsGlobal), createTodoController);
todoRoute.get('/retrieve', cors(whitelist.clientOptionsGlobal), getTodoController);
todoRoute.patch('/update/:id', cors(whitelist.clientOptionsGlobal), updateTodoController);
todoRoute.delete('/delete/:id', cors(whitelist.clientOptionsGlobal), deleteTodoController);
