from util.config import alchemy
from sqlalchemy import func


class UserResult(alchemy.Model):
    __tablename__ = 'user_result'

    id = alchemy.Column(alchemy.Integer, primary_key=True)
    when = alchemy.Column(alchemy.DateTime)
    user_id = alchemy.Column(alchemy.Integer, alchemy.ForeignKey('user.id'), index=True)
    question_id = alchemy.Column(alchemy.Integer, alchemy.ForeignKey('question.id'), index=True)
    answer = alchemy.Column(alchemy.Integer)

    def __init__(self, when, user_id, question_id, answer):
        self.when = when
        self.user_id = user_id
        self.question_id = question_id
        self.answer = answer

    @classmethod
    def find_by_id(cls, id):
        return cls.query.filter_by(id=id).first()

    @classmethod
    def find_results_by_question(cls, question_id):
        answers = alchemy.session \
            .query(UserResult.answer, func.count("answer")) \
            .filter(UserResult.question_id == question_id) \
            .group_by(UserResult.answer) \
            .all()
        return answers

    def save_to_db(self):
        alchemy.session.add(self)
        alchemy.session.commit()
