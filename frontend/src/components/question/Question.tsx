import React, {useEffect, useState} from "react";
import {TriviaQuestion} from "../../redux/actions/trivia/TriviaTypes";
import {Button, Card, Checkbox, Radio, RadioGroup} from "@blueprintjs/core";
import {AllHtmlEntities} from "html-entities"
import {Font} from "../../common/Font";
import {MdCancel, MdCheck} from "react-icons/all";
import {Intent} from "@blueprintjs/core/lib/esm/common/intent";

interface IQuestionDisplayProps {
    question: TriviaQuestion | null;
    options: string[]
    handleFinish: (answer: number) => void
}


export function Question(props: IQuestionDisplayProps) {
    const {options, handleFinish, question} = props;
    const htmlEntities = new AllHtmlEntities()
    const handleChange = (value: any) => {
        setAnswer(parseInt(value.target.value))
    }
    const [answer, setAnswer] = useState(0)

    useEffect(()=>{
        setAnswer(0);
    },[question])
    if (question) {
        return (
            <>
                <Card elevation={3} style={{width:"100%"}}>
                    <p>
                        <>
                            <div>
                                <Font fontType={"bold"}>{htmlEntities.decode(question.title)}</Font>
                            </div>
                            <div>
                                <RadioGroup
                                    onChange={handleChange}
                                    selectedValue={answer}
                                >
                                    {options
                                        .map((item, index) => <Radio label={item} value={index}/>)}
                                </RadioGroup>
                            </div>
                            <div className={"footer"}>
                                    <span className={"center"}>
                                        <Button intent={Intent.SUCCESS} text={"Ok"}
                                                onClick={() => handleFinish(answer)}/>
                                   </span>
                            </div>
                        </>
                    </p>

                </Card>

            </>
        )

    } else
        return null;
}
