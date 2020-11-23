import TriviaReducer, {TriviaState} from "../TriviaReducer";
import {
    ANSWER_QUESTION,
    AnswerTriviaQuestionAction,
    FETCH_TRIVIA_RESULTS, FetchTriviaResultsAction,
    TriviaQuestion
} from "../../actions/trivia/TriviaTypes";
import {getMockCorrectAnswers, getMockQuestionList} from "../../../common/TestsUtils";

const mockInitialState:TriviaState = {questions: undefined, questionIndex: 0,answers:undefined};
const mockBeginTrivia:TriviaState = {questions: getMockQuestionList(),questionIndex:0,answers:undefined}
const fineshedMockTriviaState:TriviaState = {
    questions:getMockQuestionList(),
    questionIndex: 10,
    answers:getMockCorrectAnswers(2)
}

it("Changes the correct question",()=>{
    const action: AnswerTriviaQuestionAction = {
        type: ANSWER_QUESTION,
        payload: 1
    }
    const state = TriviaReducer(mockBeginTrivia, action)
    if (!state.questions) return;
    expect(state.questions[0].userAnswer).toBe(1)
    expect(state.questionIndex).toBe(1);
})

it("Updates the answer index",()=>{
    const action:AnswerTriviaQuestionAction = {
        type:ANSWER_QUESTION,
        payload:1
    }
    const state = TriviaReducer(mockBeginTrivia,action)
    expect(state.questionIndex).toBe(1);
})

it("Correct the questions",()=>{
    const action: FetchTriviaResultsAction = {
        type: FETCH_TRIVIA_RESULTS,
        payload: getMockCorrectAnswers(4)
    }
    const state = TriviaReducer(fineshedMockTriviaState, action)
    expect(state.answers).toBeTruthy();
    const correctAnswers = state.answers? state.answers.filter(item=>item.correct) : []
    expect(correctAnswers.length).toBe(4)
})
