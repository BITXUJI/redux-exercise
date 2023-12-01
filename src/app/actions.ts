import { createAction, props } from '@ngrx/store';

export const addTodo = createAction('ADD_TODO', props<{ title: string }>());
export const toggleTodo = createAction('TOGGLE_TODO', props<{ id: number }>());
export const removeTodo = createAction('REMOVE_TODO', props<{ id: number }>());
export const clearTodos = createAction('CLEAR_TODOS');