import os
import tempfile
from app import app, create_tables
from util.config import config_alchemy


def config_client():
    db_fd, db_name = tempfile.mkstemp()
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + db_name
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['PROPAGATE_EXCEPTIONS'] = True
    app.secret_key = 'supersecreto'
    app.config['TESTING'] = True
    config_alchemy(app)
    with app.test_client() as client:
        with app.app_context():
            create_tables()
        yield client
    os.close(db_fd)
    os.unlink(db_name)


def get_token_header(client):
    from flask import json
    user = dict(username="test", password="test")
    client.post('/api/users', json=user)

    response = client.post('/auth', json=user)
    body = json.loads(response.get_data(as_text=True))
    return {'Authorization': 'JWT {}'.format(body['access_token'])}

