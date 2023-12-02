// import { createReducer, on } from '@ngrx/store';
// import { addTodo, clearTodos, removeTodo, toggleTodo } from './actions';

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
// );

// export function todoReducer(state: any, action: any) {
//     return _todoReducer(state, action);
// }
import { addTodo, clearTodos, removeTodo, toggleTodo } from './actions';

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

// Reducer
export function todoReducer(state: IAppState = initialState, action: any): IAppState {
    switch (action.type) {
        case addTodo.type:
            return {
                ...state,
                todos: [...state.todos, { id: state.todos.length + 1, title: action.title }],
                lastUpdate: new Date(),
            };

        case toggleTodo.type:
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

        case removeTodo.type:
            return {
                ...state,
                todos: state.todos.filter(t => t.id !== action.id),
                lastUpdate: new Date(),
            };

        case clearTodos.type:
            return {
                ...state,
                todos: [],
                lastUpdate: new Date(),
            };

        default:
            return state;
    }
}
