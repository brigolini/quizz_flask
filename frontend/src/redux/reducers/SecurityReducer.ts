import {LOGIN, LOGOUT, LoginAction, SecurityActionTypes} from "../actions/security/SecurityTypes";

export interface SecurityState {
    token: string | undefined,
    userId: number | undefined,
}

export const initialSecurityState = {
    token: undefined,
    userId: undefined
};
const securityReducer = (state: SecurityState = initialSecurityState, action: SecurityActionTypes): SecurityState => {
    switch (action.type) {
        case LOGIN:
            return {
                token: (action as LoginAction).payload.token,
                userId: (action as LoginAction).payload.userId
            }
        case LOGOUT:
            return initialSecurityState
        default:
            return state;
    }
}

export default securityReducer;
