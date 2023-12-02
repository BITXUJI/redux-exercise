import { addTodo, clearTodos, decrement, fetchTodosSuccess, increment, removeTodo, reset, toggleTodo } from './actions';

// State Interface
export interface IAppState {
    todos: any[];
    lastUpdate: Date | null;
    count: number;
}

// Initial State
export const initialState: IAppState = {
    todos: [],
    lastUpdate: null,
    count: 0
};
function addTodoFn(state: IAppState, action: any) {
    return {
        ...state,
        todos: [...state.todos, { id: state.todos.length + 1, title: action.title }],
        lastUpdate: new Date(),
    };
}
function toggleTodoFn(state: IAppState, action: any) {
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
function removeTodoFn(state: IAppState, action: any) {
    return {
        ...state,
        todos: state.todos.filter(t => t.id !== action.id),
        lastUpdate: new Date(),
    };
}
function clearTodosFn(state: IAppState, action: any) {
    return {
        ...state,
        todos: [],
        lastUpdate: new Date(),
    };
}
function fetchTodosSuccessFn(state: IAppState, action: any) {
    return {
        ...state,
        todos: action.todos,
        lastUpdate: new Date(),
    }
}
function incrementFn(state: IAppState, action: any) {
    return { ...state, count: state.count + 1 };
}
function decrementFn(state: IAppState, action: any) {
    return { ...state, count: state.count - 1 };
}
function resetFn(state: IAppState, action: any) {
    return { ...state, count: 0 };
}
// Reducer
export function todoReducer(state: IAppState = initialState, action: any): IAppState {
    switch (action.type) {
        case addTodo.type: return addTodoFn(state, action);
        case toggleTodo.type: return toggleTodoFn(state, action);
        case removeTodo.type: return removeTodoFn(state, action);
        case clearTodos.type: return clearTodosFn(state, action);
        case fetchTodosSuccess.type: return fetchTodosSuccessFn(state, action);
        case increment.type: return incrementFn(state, action);
        case decrement.type: return decrementFn(state, action);
        case reset.type: return resetFn(state, action);
        default:
            return state;
    }
}
