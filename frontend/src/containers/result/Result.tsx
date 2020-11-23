import React, {useState} from "react";
import {Button} from "@blueprintjs/core";
import {Intent} from "@blueprintjs/core/lib/esm/common/intent";
import {useTrivia} from "../../logic/useTrivia";
import {useHistory} from "react-router";
import {Answer} from "../../components/answer/Answer";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../redux/store";
import {resetTrivia} from "../../redux/actions";
import {useResult} from "../../logic/useResult";

interface IResultProps {
}

export function Result(props: IResultProps) {
    const {totalCorrect, total, phrase, timeToComplete} = useResult();
    const trivia = useSelector((state: RootStateType) => state.trivia)
    const history = useHistory();
    const dispatch = useDispatch();


    const handleClick = () => {
        dispatch(resetTrivia());
        history.push('/');
    };

    return (
        <>
            <div className={"header"}>
                {timeToComplete && totalCorrect && total ?
                    <>
                        <div><span><p>{`You scored ${totalCorrect} of ${total}`}</p></span></div>
                        <div><span><p>{`It takes you ${timeToComplete} seconds to finish the quizz.`}</p></span></div>
                        <div><span><p>{phrase}</p></span></div>
                    </>
                    :
                    null
                }
            </div>
            <div className={"main-area"}>

                {trivia.questions ?
                    <Answer/>
                    : null}
            </div>
            <div className={"footer"}>
                <div className={"center"}>
                    <Button
                        intent={Intent.PRIMARY}
                        text={"Play Again?"}
                        onClick={handleClick}/>
                </div>
            </div>
        </>
    )
}
