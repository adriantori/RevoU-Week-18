import dayjs from 'dayjs'

import Todo from "../models/todoModel";
import User from "../models/userModel";

async function createTask(todoTask: string, todoPriority: string, todoDue: string, todoAmount:number, userId: number): Promise<any> {
    try {
        const todo = await Todo.create({
            todos_task: todoTask,
            todos_priority: todoPriority,
            todos_due: todoDue,
            todos_amount: todoAmount,
            users_id: userId
        });

        return todo;
    } catch (error: any) {
        console.log('Error creating post DAO: ' + error.message);
        throw new Error('Error creating post DAO: ' + error.message);
    }
}

async function getTodos(): Promise<any> {
    try {
        const todos = await Todo.findAll({
            where: {
                is_deleted: 0,
            },
            attributes: ['todos_id', 'todos_task', 'todos_priority', 'todos_due', 'todos_amount', 'users_id'],
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['users_name'],
                },
            ]
        });

        return todos.map(todo => ({
            todos_id: todo.todos_id,
            todos_task: todo.todos_task,
            todos_priority: todo.todos_priority,
            todos_due: dayjs(todo.todos_due).format('DD/MM/YYYY'),            
            todos_amount: todo.todos_amount,
            users_id: todo.users_id,
            users_name: todo.user.users_name,
        }));
    } catch (error: any) {
        console.log('Error getting posts: ' + error.message);
        throw new Error('Error getting posts: ' + error.message);
    }
}

async function getUserTodoList(username: string): Promise<any> {
    try {
        const todos = await Todo.findAll({
            where: {
                is_deleted: 0,
            },
            attributes: ['todos_id', 'todos_task', 'todos_priority', 'todos_due', 'todos_amount', 'users_id'],
            include: [
                {
                    model: User,
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
            todos_due: dayjs(todo.todos_due).format('DD/MM/YYYY'), 
            todos_amount: todo.todos_amount,
            users_id: todo.users_id,
            users_name: todo.user.users_name,
        }));
    } catch (error: any) {
        console.log('Error getting posts: ' + error.message);
        throw new Error('Error getting posts: ' + error.message);
    }
}

async function getUserIdByTodo(todoId: number): Promise<any> {
    try {
        const todo = await Todo.findOne({
          where: { todos_id: todoId },
        });
    
        if (todo) {
          return todo.users_id;
        }
    
        return null;
      } catch (error: any) {
        throw new Error('Error retrieving user ID for post:' + error.message);
      }
}

async function updateTodo(todoTask: string, todoPriority: string, todoDue: string, todoAmount:number, todoId: number): Promise<any> {
    try {
        const updatedTodos = await Todo.update(
            {
                todos_task: todoTask,
                todos_priority: todoPriority,
                todos_due: todoDue,
                todos_amount: todoAmount
            },
            {
                where: {
                    todos_id: todoId
                }
            }
        );

        return updatedTodos; // Return the updated records
    } catch (error: any) {
        console.log('Error updating post DAO: ' + error.message);
        throw new Error('Error updating post DAO: ' + error.message);
    }
}


async function deleteTodo(todoId: number): Promise<any> {
    try {
        const todo = await Todo.update(
            { is_deleted: 1 },
            {
                where: {
                    todos_id: todoId
                }
            }
        )

        return todo;
    } catch (error: any) {
        console.log('Error creating post DAO: ' + error.message);
        throw new Error('Error creating post DAO: ' + error.message);
    }
}

export { createTask, getTodos, getUserTodoList, getUserIdByTodo, updateTodo, deleteTodo}