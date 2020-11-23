import {mount, ReactWrapper} from "enzyme";
import React from "react";
import {
    configEnzymeAdapter, getInitialTriviaState,
    getMockFinishedQuestionsTriviaState,
    getMockQuestionList
} from "../../common/TestsUtils";
import {RootStore} from "../../redux/store";
import {useStore} from "react-redux";
import {useTrivia} from "../useTrivia";

let wrapCalculate:ReactWrapper;
let wrapFinished:ReactWrapper;

configEnzymeAdapter();

function MockCalculeteResult(){
    const triviaLogic = useTrivia()
    triviaLogic.answerQuestion(false);
    triviaLogic.answerQuestion(true);
    triviaLogic.answerQuestion(true);
    return (
        <>{triviaLogic.score==2?"Ok":`Correct answers were ${triviaLogic.score} expect 2`}</>
    )
}

function MockCalculeteFinish(){
    const triviaLogic = useTrivia()
    triviaLogic.answerQuestion(false);
    triviaLogic.answerQuestion(true);
    triviaLogic.answerQuestion(true);
    return (
        <>{triviaLogic.isFinished?"Ok":`Trivia should be finesh after 3 answers`}</>
    )
}

beforeEach(()=>{
    let initialTriviaState = getInitialTriviaState(getMockQuestionList());
    wrapCalculate = mount(
        <RootStore initialState={initialTriviaState}>
            <MockCalculeteResult/>
        </RootStore>
    )
    wrapFinished = mount(
        <RootStore initialState={initialTriviaState}>
            <MockCalculeteResult/>
        </RootStore>
    )
})


afterEach(()=>{
     wrapCalculate.unmount();
})

it ("Calculate score correct",()=>{
    expect(wrapCalculate.html()).toContain("Ok");
})

it ("Finish Trivia after all answered",()=>{
    expect(wrapFinished.html()).toContain("Ok");
})



