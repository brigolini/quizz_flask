from random import randint, choice

from flask_jwt import jwt_required
from flask_restful import Resource, reqparse, fields, marshal_with
from flask import json
from model.question_model import Question
from model.user_results_model import UserResult
from controllers.controller_utils import parse_json
from service.quizz_service import correct_all_questions, get_statistics
from datetime import date

parser = reqparse.RequestParser()
parser.add_argument('answers', required=True, action='append', help="Send me some answers")

question_detail = {}
question_detail['id'] = fields.Integer
question_detail['title'] = fields.String
question_detail['alt1'] = fields.String
question_detail['alt2'] = fields.String
question_detail['alt3'] = fields.String
question_detail['alt4'] = fields.String
quizz_question_fields = {
    'quizz_questions': fields.List(fields.Nested(question_detail))
}

parser = reqparse.RequestParser()
parser.add_argument('answers', required=True, action='append', help="Send me some answers")


class QuizzQuestionController(Resource):

    # /quizz/<number_of_questions>
    @classmethod
    @marshal_with(quizz_question_fields)
    @jwt_required()
    def get(cls, number_of_questions):
        max_id = Question.max_id()
        quizz_questions = []
        ids = [id for id in range(1, max_id)]
        for n in range(int(number_of_questions)):
            id = choice([i for i in ids])
            ids.remove(id)
            question = Question.find_by_id(id)
            quizz_questions.append(question)
        return {"quizz_questions": quizz_questions}

    # /quizz/user/<user_id>
    @jwt_required()
    def post(self, user_id):
        args = parser.parse_args()
        answers = args['answers']
        today = date.today()
        user_answers = []
        for answer in answers:
            item = parse_json(answer)
            user_answers.append(item)
            user_result = UserResult(today, int(user_id), item['question_id'], item['answer'])
            UserResult.save_to_db(user_result)
        statistics = get_statistics(user_answers)
        correct_answers = correct_all_questions(user_answers)
        return {"correct_answers": correct_answers, "statistics": statistics}, 201
