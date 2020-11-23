import {getAxiosInstance} from "../../../api/AxiosInstance";
import {Dispatch} from "redux";
import {ErrorActionTypes} from "../error/ErrorTypes";
import {LOGIN, LoginAction, LOGOUT} from "./SecurityTypes";
import {addError} from "../error/ErrorActions";
import jwt_decode from "jwt-decode";

interface UserDataType {
    username: string;
    password: string;
}

const getLoginAction = (token: string, userId: number): LoginAction => ({
    type: LOGIN,
    payload: {token, userId}
});

export const login = (userData: UserDataType) => async (dispatch: Dispatch<ErrorActionTypes | LoginAction>) => {
    const response = await getAxiosInstance().post("/auth", userData);
    const token = response.data.access_token;
    const decoded = jwt_decode(token);
    // @ts-ignore
    dispatch(getLoginAction(token, decoded.user_id));
}

export const logout = () => ({
    type: LOGOUT
})

export const signUp = (userData: UserDataType) => async (dispatch: Dispatch<ErrorActionTypes | LoginAction>) => {
    try {
        // The best alternative here is to signup generate a new token.
        // As we are using FlaskJWT, and this library hide the creation of the token.
        // Best way should be use jwt_extended for this.
        // Due to the simplicity of this test. I prefere not to do that
        await getAxiosInstance().post("/api/users", userData);
        const response = await getAxiosInstance().post('/auth', userData);
        const token = response.data.access_token;
        const decoded = jwt_decode(token);
        // @ts-ignore
        dispatch(getLoginAction(token, decoded.user_id))
    } catch (error) {
        if (error.status === 409)
            dispatch(addError("This user already exists."))
        else
            dispatch(addError("We are having problems to access our servers, please try again latter"))
    }
}
