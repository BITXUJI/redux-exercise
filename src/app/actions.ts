import { createAction, props } from '@ngrx/store';

export const addTodo = createAction('ADD_TODO', props<{ title: string }>());
export const toggleTodo = createAction('TOGGLE_TODO', props<{ id: number }>());
export const removeTodo = createAction('REMOVE_TODO', props<{ id: number }>());
export const clearTodos = createAction('CLEAR_TODOS');
export const fetchTodosSuccess = createAction('FETCH_TODOS_SUCCESS', props<{ todos: any[] }>());

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');