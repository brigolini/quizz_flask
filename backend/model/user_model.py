from util.config import alchemy


class User(alchemy.Model):
    __tablename__ = 'user'

    id = alchemy.Column(alchemy.Integer, primary_key=True)
    username = alchemy.Column(alchemy.String(80))
    password = alchemy.Column(alchemy.String(80))
    results = alchemy.relationship("UserResult")

    def __init__(self, args):
        self.username = args.username
        self.password = args.password

    @classmethod
    def find_by_id(cls, id):
        return cls.query.filter_by(id=id).first()

    @classmethod
    def find_by_name(cls, username):
        return cls.query.filter_by(username=username).first()

    def save_to_db(self):
        alchemy.session.add(self)
        alchemy.session.commit()
