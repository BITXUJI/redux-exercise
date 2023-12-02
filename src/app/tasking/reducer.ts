import { addTodo, clearTodos, fetchTodosSuccess, removeTodo, toggleTodo } from './actions';

// State Interface
export interface taskState {
    todos: any[];
    lastUpdate: Date | null;

}

// Initial State
export const taskInitialState: taskState = {
    todos: [],
    lastUpdate: null,
};
function addTodoFn(state: taskState, action: any) {
    return {
        ...state,
        todos: [...state.todos, { id: state.todos.length + 1, title: action.title }],
        lastUpdate: new Date(),
    };
}
function toggleTodoFn(state: taskState, action: any) {
    const todoIndex = state.todos.findIndex(t => t.id === action.id);
    const todo = state.todos[todoIndex];
    const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };

    return {
        ...state,
        todos: [
            ...state.todos.slice(0, todoIndex),
            updatedTodo,
            ...state.todos.slice(todoIndex + 1),
        ],
        lastUpdate: new Date(),
    };
}
function removeTodoFn(state: taskState, action: any) {
    return {
        ...state,
        todos: state.todos.filter(t => t.id !== action.id),
        lastUpdate: new Date(),
    };
}
function clearTodosFn(state: taskState, action: any) {
    return {
        ...state,
        todos: [],
        lastUpdate: new Date(),
    };
}
function fetchTodosSuccessFn(state: taskState, action: any) {
    return {
        ...state,
        todos: action.todos,
        lastUpdate: new Date(),
    }
}

// Reducer
export function todoReducer(state: taskState = taskInitialState, action: any): taskState {
    switch (action.type) {
        case addTodo.type: return addTodoFn(state, action);
        case toggleTodo.type: return toggleTodoFn(state, action);
        case removeTodo.type: return removeTodoFn(state, action);
        case clearTodos.type: return clearTodosFn(state, action);
        case fetchTodosSuccess.type: return fetchTodosSuccessFn(state, action);
        default:
            return state;
    }
}
