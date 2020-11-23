from datetime import datetime, timedelta

from werkzeug.security import safe_str_cmp

from model.user_model import User


def payload(jwt_identity):
    expiration = datetime.now() + timedelta(hours=10)
    nbf = datetime.now() + timedelta(seconds=1)
    iat = datetime.now()
    return {
        'user_id': jwt_identity.id,
        'user_name': jwt_identity.username,
        'iat': iat,
        'exp': expiration,
        'nbf': nbf
    }


def authenticate(username, password):
    auth_user = User.find_by_name(username)
    if auth_user and safe_str_cmp(auth_user.password.encode('utf-8'), password.encode('utf-8')):
        return auth_user


def identity(payload):
    user_id = payload['user_name']
    return User.find_by_name(user_id)
