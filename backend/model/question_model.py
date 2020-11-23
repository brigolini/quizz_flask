from util.config import alchemy
from sqlalchemy.sql.expression import func


class Question(alchemy.Model):
    __tablename__ = 'question'

    id = alchemy.Column(alchemy.Integer, primary_key=True)
    title = alchemy.Column(alchemy.String(500))
    alt1 = alchemy.Column(alchemy.String(500))
    alt2 = alchemy.Column(alchemy.String(500))
    alt3 = alchemy.Column(alchemy.String(500))
    alt4 = alchemy.Column(alchemy.String(500))
    answer = alchemy.Column(alchemy.Integer)
    previous_answers = alchemy.relationship("UserResult")

    def __init__(self, title, alt1, alt2, alt3, alt4, answer):
        self.title = title
        self.alt1 = alt1
        self.alt2 = alt2
        self.alt3 = alt3
        self.alt4 = alt4
        self.answer = answer

    @classmethod
    def find_by_id(cls, id):
        return cls.query.filter_by(id=id).first()

    @classmethod
    def find_by_id_in(cls, ids):
        return cls.query.filter(Question.id.in_(ids)).all()

    @classmethod
    def find_by_title(cls, title):
        return cls.query.filter_by(title=title).all()

    @classmethod
    def max_id(cls):
        return alchemy.session.query(func.max(Question.id)).scalar()

    def save_to_db(self):
        alchemy.session.add(self)
        alchemy.session.commit()
