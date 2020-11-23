import {
    ANSWER_QUESTION,
    BEGIN_TRIVIA,
    BeginTriviaAction,
    FETCH_TRIVIA,
    FETCH_TRIVIA_RESULTS,
    FetchTriviaAction,
    FetchTriviaResultsAction,
    FetchTriviaResultsPayload,
    RESET_TRIVIA,
    TriviaActionTypes,
    TriviaQuestion
} from "./TriviaTypes";
import {Dispatch} from "redux";
import {addError} from "../error/ErrorActions";
import {ErrorActionTypes} from "../error/ErrorTypes";
import {getAxiosInstance} from "../../../api/AxiosInstance";
import {AxiosResponse} from "axios";
import {TriviaResponse} from "../../../api/APiTrivia";
import store from "../../store"

export const answerTrivia = (answer: number): TriviaActionTypes => ({
    type: ANSWER_QUESTION,
    payload: answer
})

export const resetTrivia = (): TriviaActionTypes => ({type: RESET_TRIVIA});

export const fetchTrivia = () => async (dispatch: Dispatch<TriviaActionTypes | ErrorActionTypes>) => {

    const parseResponse = (response: AxiosResponse<TriviaResponse>): TriviaQuestion[] => {
        return response.data.quizz_questions.map(item => {
            return {
                id: item.id,
                title: item.title,
                options: [item.alt1, item.alt2, item.alt3, item.alt4],
                userAnswer: undefined
            }
        });
    }

    const fetchTriviaAction = (questions: TriviaQuestion[]): FetchTriviaAction => ({
        type: FETCH_TRIVIA,
        payload: questions
    })
    const token = store.getState().security.token
    try {
        const response = await getAxiosInstance(token).get("/api/quizz/10");
        const questions: TriviaQuestion[] = parseResponse(response);
        dispatch(fetchTriviaAction(questions));
    } catch (e) {
        dispatch(addError("We are not reaching our servers. Try again latter!"))
    }
}

export const fetchTriviaResults = (questions: TriviaQuestion[]) => async (dispatch: Dispatch<TriviaActionTypes | ErrorActionTypes>) => {

    const fetchTriviaResultAction = (payload: FetchTriviaResultsPayload): FetchTriviaResultsAction => ({
        type: FETCH_TRIVIA_RESULTS,
        payload
    })

    const {token,userId} = store.getState().security
    try {
        const userAnswers = questions.map(item => ({
            question_id:item.id,
            answer:item.userAnswer
        }));
        const request = {answers:userAnswers}
        const response =
            await getAxiosInstance(token).post(`api/quizz/user/${userId}`, request);
        dispatch(fetchTriviaResultAction(response.data));
    } catch (e) {
        dispatch(addError("We are not reaching our servers. Try again latter!"))
    }

}

export const beginTrivia=():BeginTriviaAction=>({
    type: BEGIN_TRIVIA
})



