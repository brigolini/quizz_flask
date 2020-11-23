import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../redux/store";
import {useEffect, useState} from "react";
import {fetchTriviaResults} from "../redux/actions";
import {TriviaCorrectAnswer, TriviaStatistic} from "../api/APiTrivia";


type UseResultReturnType = {
    answers: TriviaCorrectAnswer[] | undefined;
    statistics: TriviaStatistic[] | undefined
    totalCorrect: number | undefined;
    phrase: string | undefined;
    total: number | undefined;
    timeToComplete: number | undefined;
};
export const useResult = (): UseResultReturnType => {
    const {answers, statistics, questions, begin} = useSelector((state: RootStateType) => state.trivia);
    const [totalCorrect, setTotalCorrect] = useState<number>();
    const [total, setTotal] = useState<number>();
    const [phrase, setPhrase] = useState<string>();
    const [timeToComplete, setTimeToComplete] = useState<number>()
    const dispatch = useDispatch();

    useEffect(() => {
        if (timeToComplete) return;
        const dif = (new Date()).getTime() - begin.getTime();
        const seconds = dif / 1000;
        setTimeToComplete(Math.abs(seconds));
    }, [begin, setTimeToComplete, timeToComplete])
    useEffect(() => {
        if (!questions) return;
        dispatch(fetchTriviaResults(questions))
    }, [questions, dispatch])

    useEffect(() => {
        if (!answers) return
        setTotal(answers.length);
        let totalCorrect = answers.filter(item => item.correct).length;
        setTotalCorrect(totalCorrect);
        if (totalCorrect < 3)
            setPhrase('Clueless. Don’t be discouraged! Learn some more about this topic,and come back to try again!');
        if ((totalCorrect >= 3) && (totalCorrect <= 5))
            setPhrase('Beginner. This is the level most players end up with after answering this quiz for the first time. Learn some more about this topic and come back to try again!')
        if ((totalCorrect > 5) && (totalCorrect <= 8))
            setPhrase('Confident: This is the level players are getting pro! Continue your progress and rock it!')
        if ((totalCorrect > 8) && (totalCorrect <= 10))
            setPhrase('Expert: This is the highest level achievable! Thanks for being awesome as you are!')
    }, [answers, setTotalCorrect, setTotal])

    return {answers, statistics, totalCorrect, total, phrase, timeToComplete};
}
