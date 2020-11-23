import React, {useState} from "react";
import {MdCancel, MdCheck} from "react-icons/all";
import {useSelector} from "react-redux";
import {RootStateType} from "../../redux/store";
import {Button, Card} from "@blueprintjs/core";
import "./Answer.css"

interface IAnswerIconProps {
    isCorrect: boolean
}

function AnswerIcon(props: IAnswerIconProps) {
    return (
        props.isCorrect ?
            <MdCheck color={"green"} size={20}/>
            :
            <MdCancel color={"red"} size={20}/>
    )
}

export function Answer() {
    const {statistics, questions, answers} = useSelector((state: RootStateType) => state.trivia);
    const [index, setIndex] = useState(0);
    if ((!questions) || (!statistics) || (!answers)) return null;
    let userAnswer: number = questions[index].userAnswer || 0;
    const getOption = (index:number) =>{
        if (index===0) return statistics[index].answers.alt1;
        if (index===1) return statistics[index].answers.alt2;
        if (index===2) return statistics[index].answers.alt3;
        if (index===3) return statistics[index].answers.alt4;
    }

    return (
        <>
            <Card elevation={3}>

                <div className={"divAnswer"}>Question: {questions[index].title}</div>
                <div className={"divAnswer"}>Your Answer: {questions[index].options[userAnswer]} <AnswerIcon
                    isCorrect={answers[index].correct}/></div>
                <div className={"divAnswer"}>
                    <Button
                        onClick={() => setIndex(prevState => prevState + 1)}
                        disabled={index > 8}>
                        Next
                    </Button>
                </div>
                <div className={"divAnswer"}>
                    See how other competitors answer the same question:
                </div>
                <div className={"divAnswer"}>
                    {questions[index].options.map((item,pos)=>{
                        return <><div><span>{item}</span><span>{getOption(pos)}</span></div></>
                    })}
                </div>
            </Card>
        </>
    )
}
