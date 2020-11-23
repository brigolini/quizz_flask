import {
    ANSWER_QUESTION,
    FETCH_TRIVIA,
    FETCH_TRIVIA_RESULTS, FetchTriviaResultsAction, RESET_TRIVIA,
    TriviaActionTypes,
    TriviaQuestion,
} from "../actions/trivia/TriviaTypes";
import {TriviaCorrectAnswer, TriviaStatistic} from "../../api/APiTrivia";


export interface TriviaState {
    questions: TriviaQuestion[] | undefined,
    answers: TriviaCorrectAnswer[] | undefined
    statistics: TriviaStatistic[] | undefined
    questionIndex: number;
    begin: Date;
}

export const initialTriviaState = {
    questions: undefined,
    questionIndex: 0,
    answers: undefined,
    statistics: undefined,
    begin:new Date(),
};

const triviaReducer = (state: TriviaState = initialTriviaState, action: TriviaActionTypes): TriviaState => {
    switch (action.type) {
        case FETCH_TRIVIA:
            return {...state, questions: action.payload, questionIndex: 0};

        case ANSWER_QUESTION:
            if (!state.questions)
                throw Error('There is no questions, should not answer it');
            if (state.questionIndex >= state.questions.length)
                throw Error("Can't answer question, trivia is over");
            const newQuestions = state.questions.slice();
            newQuestions[state.questionIndex].userAnswer = action.payload
            return {...state, questionIndex: state.questionIndex + 1, questions: newQuestions};

        case RESET_TRIVIA:
            state = {...initialTriviaState};
            return state;

        case FETCH_TRIVIA_RESULTS:
            return {
                ...state,
                answers: (action as FetchTriviaResultsAction).payload.correct_answers,
                statistics: (action as FetchTriviaResultsAction).payload.statistics
            }

        case "BEGIN_TRIVIA":
            return {
                ...state,
                begin: new Date()
            }

        default:
            return state;
    }
}

export default triviaReducer;
