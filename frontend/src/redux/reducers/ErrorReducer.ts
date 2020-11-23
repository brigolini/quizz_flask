import {ErrorActionTypes} from "../actions/error/ErrorTypes";

export interface ErrorState {
    message: string | null
}

export const initialErrorState = {message: null};
const errorReducer = (state: ErrorState = initialErrorState, action: ErrorActionTypes): ErrorState => {
    switch (action.type) {
        case "NEW_ERROR":
            state = {message: action.payload};
            return state;
        case "CLEAR_ERROR":
            state = initialErrorState
            return state;
        default:
            return state;

    }
}
export default errorReducer;
