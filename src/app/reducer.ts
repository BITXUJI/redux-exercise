// import { createReducer, on } from '@ngrx/store';
// import { addTodo, clearTodos, fetchTodosSuccess, removeTodo, toggleTodo } from './actions';

// // State Interface
// export interface IAppState {
//     todos: any[];
//     lastUpdate: Date | null;
// }

// // Initial State
// export const initialState: IAppState = {
//     todos: [],
//     lastUpdate: null
// };

// // Reducer
// const _todoReducer = createReducer(
//     initialState,
//     on(addTodo, (state, { title }) => ({
//         ...state,
//         todos: [...state.todos, { id: state.todos.length + 1, title }],
//         lastUpdate: new Date(),
//     })),
//     on(toggleTodo, (state, { id }) => {
//         const todoIndex = state.todos.findIndex(t => t.id === id);
//         const todo = state.todos[todoIndex];
//         const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };

//         return {
//             ...state,
//             todos: [
//                 ...state.todos.slice(0, todoIndex),
//                 updatedTodo,
//                 ...state.todos.slice(todoIndex + 1),
//             ],
//             lastUpdate: new Date(),
//         };
//     }),
//     on(removeTodo, (state, { id }) => ({
//         ...state,
//         todos: state.todos.filter(t => !(t.id === id)),
//         lastUpdate: new Date(),
//     })),
//     on(clearTodos, state => ({
//         ...state,
//         todos: [],
//         lastUpdate: new Date(),
//     })),
//     on(fetchTodosSuccess, (state, { todos }) => ({
//         ...state,
//         todos: todos,
//         lastUpdate: new Date(),
//     })),
// );

// export function todoReducer(state: any, action: any) {
//     return _todoReducer(state, action);
// }
// // import { addTodo, clearTodos, fetchTodosSuccess, removeTodo, toggleTodo } from './actions';

// // // State Interface
// // export interface IAppState {
// //     todos: any[];
// //     lastUpdate: Date | null;
// // }

// // // Initial State
// // export const initialState: IAppState = {
// //     todos: [],
// //     lastUpdate: null
// // };

// // // Reducer
// // export function todoReducer(state: IAppState = initialState, action: any): IAppState {
// //     switch (action.type) {
// //         case addTodo.type:
// //             return {
// //                 ...state,
// //                 todos: [...state.todos, { id: state.todos.length + 1, title: action.title }],
// //                 lastUpdate: new Date(),
// //             };

// //         case toggleTodo.type:
// //             const todoIndex = state.todos.findIndex(t => t.id === action.id);
// //             const todo = state.todos[todoIndex];
// //             const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };

// //             return {
// //                 ...state,
// //                 todos: [
// //                     ...state.todos.slice(0, todoIndex),
// //                     updatedTodo,
// //                     ...state.todos.slice(todoIndex + 1),
// //                 ],
// //                 lastUpdate: new Date(),
// //             };

// //         case removeTodo.type:
// //             return {
// //                 ...state,
// //                 todos: state.todos.filter(t => t.id !== action.id),
// //                 lastUpdate: new Date(),
// //             };

// //         case clearTodos.type:
// //             return {
// //                 ...state,
// //                 todos: [],
// //                 lastUpdate: new Date(),
// //             };
// //         case fetchTodosSuccess.type:
// //             return {
// //                 ...state,
// //                 todos: action.todos,
// //                 lastUpdate: new Date(),
// //             }

// //         default:
// //             return state;
// //     }
// // }
// import { createReducer, on } from '@ngrx/store';
// import { addTodo, clearTodos, fetchTodosSuccess, removeTodo, toggleTodo } from './actions';

// // State Interface
// export interface IAppState {
//     todos: any[];
//     lastUpdate: Date | null;
// }

// // Initial State
// export const initialState: IAppState = {
//     todos: [],
//     lastUpdate: null
// };

// // Reducer
// const _todoReducer = createReducer(
//     initialState,
//     on(addTodo, (state, { title }) => ({
//         ...state,
//         todos: [...state.todos, { id: state.todos.length + 1, title }],
//         lastUpdate: new Date(),
//     })),
//     on(toggleTodo, (state, { id }) => {
//         const todoIndex = state.todos.findIndex(t => t.id === id);
//         const todo = state.todos[todoIndex];
//         const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };

//         return {
//             ...state,
//             todos: [
//                 ...state.todos.slice(0, todoIndex),
//                 updatedTodo,
//                 ...state.todos.slice(todoIndex + 1),
//             ],
//             lastUpdate: new Date(),
//         };
//     }),
//     on(removeTodo, (state, { id }) => ({
//         ...state,
//         todos: state.todos.filter(t => !(t.id === id)),
//         lastUpdate: new Date(),
//     })),
//     on(clearTodos, state => ({
//         ...state,
//         todos: [],
//         lastUpdate: new Date(),
//     })),
//     on(fetchTodosSuccess, (state, { todos }) => ({
//         ...state,
//         todos: todos,
//         lastUpdate: new Date(),
//     })),
// );

// export function todoReducer(state: any, action: any) {
//     return _todoReducer(state, action);
// }
import { addTodo, clearTodos, fetchTodosSuccess, removeTodo, toggleTodo } from './actions';

// State Interface
export interface IAppState {
    todos: any[];
    lastUpdate: Date | null;
}

// Initial State
export const initialState: IAppState = {
    todos: [],
    lastUpdate: null
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
// Reducer
export function todoReducer(state: IAppState = initialState, action: any): IAppState {
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
