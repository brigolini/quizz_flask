import {ADD_ERROR, CLEAR_ERROR, ErrorActionTypes} from "./ErrorTypes"

export const addError = (msg: string): ErrorActionTypes => ({
    type: ADD_ERROR,
    payload: msg,
});

export const clearErrors = (): ErrorActionTypes => ({
    type: CLEAR_ERROR
})