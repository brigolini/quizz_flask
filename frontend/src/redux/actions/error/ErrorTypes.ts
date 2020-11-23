import {Action} from "redux";

export const ADD_ERROR="NEW_ERROR";
export const CLEAR_ERROR="CLEAR_ERROR"

interface AddErrorAction extends Action{
    type: typeof ADD_ERROR,
    payload: string
}

interface ClearErrorAction extends Action{
    type: typeof CLEAR_ERROR
}

export type ErrorActionTypes=AddErrorAction | ClearErrorAction;
