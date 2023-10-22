import { createTask, getTodos, getUserTodoList, getUserIdByTodo, updateTodo, deleteTodo } from "../dao/todoDao";


async function createTodoService(todoTask: string, todoPriority: string, todoDue: string, userId: number) {
    try {

        const post = await createTask(todoTask, todoPriority, todoDue, userId);
        return post;
    } catch (error: any) {
        throw new Error('Error registering user service: ' + error.message);
    }
}

async function getTodoService() {
    try {
        const post = await getTodos();
        return post;
    } catch (error: any) {
        throw new Error('Error registering user service: ' + error.message);
    }
}

async function getUserTodoListService(username: string) {
    try {
        const post = await getUserTodoList(username);
        return post;
    } catch (error: any) {
        throw new Error('Error registering user service: ' + error.message);
    }
}

async function getUserIdByTodoIdService(postId: number) {
    try {
        const userId = await getUserIdByTodo(postId)
        return userId
    } catch (error: any) {
        throw new Error('Error getting user id by post id service: ' + error.message);
    }
}

async function updateTodoService(todos_task: string, todos_priority: string, todos_due: Date, userId: number, todoId: number) {
    try {
        const todo = await updateTodo(todos_task, todos_priority, todos_due, userId, todoId)
        return todo;
    } catch (error: any) {
        throw new Error('Error registering user service: ' + error.message);
    }
}

async function deleteTodoService(post_id: number) {
    try {
        const todo = await deleteTodo(post_id)
        return todo;
    } catch (error: any) {
        throw new Error('Error registering user service: ' + error.message);
    }
}

export { createTodoService, getTodoService, getUserTodoListService, getUserIdByTodoIdService, updateTodoService, deleteTodoService }