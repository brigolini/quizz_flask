import {TriviaQuestion, TriviaState} from "../../redux/actions/trivia/TriviaTypes";
import {configEnzymeAdapter, getMockQuestionList} from "../../common/TestsUtils";
import {mount, ReactWrapper, shallow, ShallowWrapper} from "enzyme";
import React from "react";
import {Answer} from "../answer/Answer";

let questionList:TriviaQuestion[];
let wrap:ReactWrapper;

configEnzymeAdapter();

beforeEach(()=>{
    questionList = getMockQuestionList();
    wrap = mount(
            <Answer questions={questionList}/>
    )

})

afterEach(()=>{
    wrap.unmount();
})

it("Renders the right amount of itens",()=>{
  expect(wrap.find("p").length).toBe(3)
})

it("Renders one element with text \"Test Question 1\"",()=>{
    expect(wrap.html().indexOf("Test question 1") !== -1).toBe(true);
})
