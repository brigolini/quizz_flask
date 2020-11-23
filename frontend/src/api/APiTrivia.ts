export interface TrivaQuestionFromAPI {
    id: number;
    title: string;
    alt1: string;
    alt2: string;
    alt3: string;
    alt4: string;
}

export interface TriviaResponse {
    quizz_questions:TrivaQuestionFromAPI[]
}

export interface TriviaCorrectAnswer {
    question_id:number;
    correct:boolean
}

export interface TriviaStatistic {
   question_id:number,
   answers:{
       alt1:number,
       alt2:number,
       alt3:number,
       alt4:number,
   }
}


