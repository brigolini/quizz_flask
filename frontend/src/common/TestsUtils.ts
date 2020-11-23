import {TriviaQuestion} from "../redux/actions/trivia/TriviaTypes";
import {initialTriviaState} from "../redux/reducers/TriviaReducer";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {initialSecurityState} from "../redux/reducers/SecurityReducer";
import {initialErrorState} from "../redux/reducers/ErrorReducer";
import {TriviaCorrectAnswer} from "../api/APiTrivia";


export const configEnzymeAdapter = () => Enzyme.configure({adapter: new Adapter()});

const mocked_questions = [
    {
        "id": 32,
        "title": "Which data structure does FILO apply to?",
        "alt1": "Queue",
        "alt2": "Heap",
        "alt3": "Tree",
        "alt4": "Stack"
    },
    {
        "id": 1,
        "title": "The Harvard architecture for micro-controllers added which additional bus?",
        "alt1": "Instruction",
        "alt2": "Address",
        "alt3": "Data",
        "alt4": "Control"
    },
    {
        "id": 45,
        "title": "What is the number of keys on a standard Windows Keyboard?",
        "alt1": "64",
        "alt2": "94",
        "alt3": "76",
        "alt4": "104"
    },
    {
        "id": 47,
        "title": "What does the 'S' in the RSA encryption algorithm stand for?",
        "alt1": "Shamir",
        "alt2": "Secure",
        "alt3": "Schottky",
        "alt4": "Stable"
    },
    {
        "id": 18,
        "title": "What is the code name for the mobile operating system Android 7.0?",
        "alt1": "Nougat",
        "alt2": "Ice Cream Sandwich",
        "alt3": "Jelly Bean",
        "alt4": "Marshmallow"
    },
    {
        "id": 36,
        "title": "Which of these people was NOT a founder of Apple Inc?",
        "alt1": "Ronald Wayne",
        "alt2": "Steve Wozniak",
        "alt3": "Jonathan Ive",
        "alt4": "Steve Jobs"
    },
    {
        "id": 9,
        "title": "What does GHz stand for?",
        "alt1": "Gigahetz",
        "alt2": "Gigahatz",
        "alt3": "Gigahertz",
        "alt4": "Gigahotz"
    },
    {
        "id": 8,
        "title": "Moore's law originally stated that the number of transistors on a microprocessor chip would double every...",
        "alt1": "Four Years",
        "alt2": "Two Years",
        "alt3": "Eight Years",
        "alt4": "Year"
    },
    {
        "id": 20,
        "title": "While Apple was formed in California, in which western state was Microsoft founded?",
        "alt1": "Arizona",
        "alt2": "New Mexico",
        "alt3": "Washington",
        "alt4": "Colorado"
    },
    {
        "id": 40,
        "title": "Which programming language shares its name with an island in Indonesia?",
        "alt1": "C",
        "alt2": "Jakarta",
        "alt3": "Java",
        "alt4": "Python"
    }
];


export const getMockCorrectAnswers = (numberOfCorrect:number):TriviaCorrectAnswer[] => {
    return mocked_questions.map(item=>{
        numberOfCorrect--;
        return({
            question_id:item.id,
            correct:numberOfCorrect >= 0
        })
    })
}

export const getMockQuestionList = () => {
    return mocked_questions.map(item => {
        return {
            id: item.id,
            title: item.title,
            options: [item.alt1, item.alt2, item.alt3, item.alt4],
            userAnswer: undefined
        }
    })
}

export const getInitialTriviaState = (questionList: TriviaQuestion[]) => ({
    trivia: initialTriviaState,
    error: initialErrorState,
    security: initialSecurityState
})

/*
export const getMockFinishedQuestionsTriviaState = (questionList: TriviaQuestion[]): RootStateType => ({
    trivia: {questionIndex: questionList.length, questions: questionList},
    error: {message: ""}
})
*/
