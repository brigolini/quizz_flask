import {useDispatch, useSelector} from "react-redux";
import {TriviaQuestion} from "../redux/actions/trivia/TriviaTypes";
import {RootStateType} from "../redux/store";
import {answerTrivia} from "../redux/actions";

interface ITriviaReturn {
    question: TriviaQuestion | null,
    current: number,
    total: number,
    isFinished: boolean
    answerQuestion: (asnwer: number) => void
}

export const useTrivia = (): ITriviaReturn => {
    const trivia = useSelector((state: RootStateType) => state.trivia);
    const dispatch = useDispatch();
    const {questions, questionIndex} = trivia;

    const answerQuestion = (answer: number) => {
        if (!questions) return;
        if (trivia.questionIndex < questions.length)
            dispatch(answerTrivia(answer))
    }

    return {
        question: questions ? questions[questionIndex] : null,
        current: questionIndex,
        total: questions ? questions.length : 0,
        isFinished: questions ? questionIndex === questions.length : false,
        answerQuestion
    };
}

