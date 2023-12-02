import { ActionReducerMap } from '@ngrx/store';
import { counterInitialState, counterReducer, counterState } from './countering/reducer';
import { taskInitialState, taskState, todoReducer } from './tasking/reducer';

// State Interface
export interface IAppState {
    tasking: taskState,
    countering: counterState
}

// Initial State
export const initialState: IAppState = {
    tasking: taskInitialState,
    countering: counterInitialState
};
export const reducers: ActionReducerMap<IAppState> = {
    tasking: todoReducer,
    countering: counterReducer
};