from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api


alchemy = SQLAlchemy()

def config_flask(app):
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['PROPAGATE_EXCEPTIONS'] = True
    app.secret_key = 'supersecreto'
    return app

def config_alchemy(app):
    alchemy.init_app(app)

def config_routes(app):
    from controllers.users_controller import UsersController
    from controllers.quizz_questions_controller import QuizzQuestionController

    api = Api(app, prefix="/api")
    # Resources
    api.add_resource(UsersController, '/users/<user_id>', '/users')
    api.add_resource(QuizzQuestionController, '/quizz/<number_of_questions>','/quizz/user/<user_id>')


