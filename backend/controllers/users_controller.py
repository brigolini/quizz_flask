from flask_restful import Resource, abort, reqparse, fields, marshal_with
from flask_jwt import jwt_required
from model.user_model import User
from controllers.controller_utils import post_helper

user_fields = {
    'access_token': fields.String,
    'username': fields.String,
    'password': fields.String,
}

parser = reqparse.RequestParser()
parser.add_argument('username', required=True, help="password can't be blank")
parser.add_argument('password', required=True, help="password can't be blank")


class UsersController(Resource):

    @marshal_with(user_fields)
    def post(self):
        args = parser.parse_args()
        return post_helper(User.find_by_name(args.username), User, args.username, args,"User")
