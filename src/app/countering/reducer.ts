
import { decrement, increment, reset, } from './actions';
export interface counterState {
    count: number;
}
export const counterInitialState: counterState = {
    count: 0
};
function incrementFn(state: counterState, action: any) {
    return { ...state, count: state.count + 1 };
}
function decrementFn(state: counterState, action: any) {
    return { ...state, count: state.count - 1 };
}
function resetFn(state: counterState, action: any) {
    return { ...state, count: 0 };
}
// Reducer
export function counterReducer(state: counterState = counterInitialState, action: any): counterState {
    switch (action.type) {
        case increment.type: return incrementFn(state, action);
        case decrement.type: return decrementFn(state, action);
        case reset.type: return resetFn(state, action);
        default:
            return state;
    }
}
