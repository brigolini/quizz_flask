import {applyMiddleware, combineReducers, createStore} from "redux";
import ReduxThunk from "redux-thunk"
import triviaReducer , {initialTriviaState, TriviaState} from "../reducers/TriviaReducer";
import errorReducer , {ErrorState, initialErrorState} from "../reducers/ErrorReducer";
import securityReducer , {initialSecurityState, SecurityState} from "../reducers/SecurityReducer";

export type RootStateType = {
    trivia: TriviaState,
    error: ErrorState,
    security: SecurityState
}

const RootState = combineReducers({
    trivia: triviaReducer,
    error: errorReducer,
    security: securityReducer
})

const store=
    createStore(
        RootState,
        {trivia:initialTriviaState,error:initialErrorState,security:initialSecurityState},
        applyMiddleware(ReduxThunk)
    )

export default store;
