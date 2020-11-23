import React, {useState} from "react";
import {Button} from "@blueprintjs/core";
import {Intent} from "@blueprintjs/core/lib/esm/common/intent";
import {useTrivia} from "../../logic/useTrivia";
import {Question} from "../../components/question/Question";
import {useHistory} from "react-router";

interface IQuizProps {
}

export function Trivia(props: IQuizProps) {
    const {question, current, total, answerQuestion,isFinished} = useTrivia();
    const history = useHistory();
    if (isFinished){
        history.push("/result");
        return null;
    }

    return (
        <>
            <div className={"main-area"}>
                <Question question={question} options={question ? question.options : []}
                          handleFinish={answerQuestion}/>
                <span className={"center-text"}><h3>{`${current + 1} of ${total}`}</h3></span>

            </div>
        </>
    )
}
