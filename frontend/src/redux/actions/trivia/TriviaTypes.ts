import {Action} from "redux";
import {TriviaCorrectAnswer, TriviaStatistic} from "../../../api/APiTrivia";

export const FETCH_TRIVIA = "FETCH_TRIVIA";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const RESET_TRIVIA = "RESET_TRIVIA";
export const FETCH_TRIVIA_RESULTS = 'FETCH_TRIVIA_RESULTS';
export const BEGIN_TRIVIA = 'BEGIN_TRIVIA';

export interface TriviaQuestion {
    id: number;
    title: string;
    options: string[];
    userAnswer: number | undefined;
}

export interface FetchTriviaAction extends Action {
    type: typeof FETCH_TRIVIA,
    payload: TriviaQuestion[]
}

export interface AnswerTriviaQuestionAction extends Action {
    type: typeof ANSWER_QUESTION,
    payload: number
}

export interface ResetTriviaAction {
    type: typeof RESET_TRIVIA
}

export interface BeginTriviaAction {
    type: typeof BEGIN_TRIVIA
}

export type FetchTriviaResultsPayload = { correct_answers: TriviaCorrectAnswer[], statistics: TriviaStatistic[] };

export interface FetchTriviaResultsAction {
    type: typeof FETCH_TRIVIA_RESULTS,
    payload: FetchTriviaResultsPayload
}

export type TriviaActionTypes =
    FetchTriviaAction
    | AnswerTriviaQuestionAction
    | ResetTriviaAction
    | FetchTriviaResultsAction
    | BeginTriviaAction;


