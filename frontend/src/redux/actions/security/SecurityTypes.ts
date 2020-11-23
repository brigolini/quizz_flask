import {Action} from "redux";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";

export interface LoginAction extends Action{
    type: typeof LOGIN;
    payload: { token:string,userId:number }
}

export interface LogoutAction extends Action{
    type: typeof LOGOUT
}

export interface SignUpUserAction extends Action{
    type: typeof SIGNUP
    payload: string
}

export type SecurityActionTypes = LoginAction | LogoutAction
