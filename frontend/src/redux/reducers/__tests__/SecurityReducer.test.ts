import TriviaReducer from "../TriviaReducer";
import {ANSWER_QUESTION, AnswerTriviaQuestionAction, TriviaQuestion} from "../../actions/trivia/TriviaTypes";
import {getMockQuestionList} from "../../../common/TestsUtils";

let questionList:TriviaQuestion[];
const mockInitialState = {questions: null, questionIndex: 0};
const mockBeginTrivia = {questions: getMockQuestionList(),questionIndex:0}
const fineshedMockTriviaState = {questions:getMockQuestionList(),questionIndex: 3}

beforeEach(()=>{
    questionList = getMockQuestionList();
})
it("Changes the correct question",()=>{
    const action: AnswerTriviaQuestionAction = {
        type: ANSWER_QUESTION,
        payload: {answer: 1}
    }
    const state = TriviaReducer(mockInitialState, action)
    if (!state.questions) return;
    expect(state.questions[0].userAnswer).toBe(1)
    expect(state.questionIndex).toBe(1);
})

it("Updates the answer index",()=>{
    const action:AnswerTriviaQuestionAction = {
        type:ANSWER_QUESTION,
        payload:{answer:1}
    }
    const state = TriviaReducer(mockBeginTrivia,action)
    expect(state.questionIndex).toBe(1);
})

it("Don't crash when asked to answer questions after finish",()=>{
    const action: AnswerTriviaQuestionAction = {
        type: ANSWER_QUESTION,
        payload: {answer: 1}
    }
    const state = TriviaReducer(fineshedMockTriviaState, action)
    expect(state.questionIndex).toBe(3);
})
