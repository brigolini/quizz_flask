import logging

from flask import Flask, send_from_directory
from flask_cors import CORS
from util.auth_helper import identity, authenticate, payload
from flask_jwt import JWT
from util.config import config_flask, config_routes, config_alchemy

app = Flask(__name__, static_url_path='')
app = config_flask(app)
config_alchemy(app)
config_routes(app)
CORS(app)


@app.route('/static/<filename>')
def download_file(filename):
    static_dir = os.environ.get('STATIC_DIR') or '/app/static'
    print("Return file {} from {}".format(filename,static_dir))
    return send_from_directory(static_dir,
                               filename)


jwt = JWT(app, authenticate, identity)


@jwt.jwt_payload_handler
def make_payload(jwt_identity):
    return payload(jwt_identity)


@app.before_first_request
def create_tables():
    from util.config import alchemy
    from util.load_data import load_from_json

    alchemy.create_all()
    load_from_json(app.config['TESTING'])


if __name__ == '__main__':
    import os

    app.run(host=os.environ.get('BIND_ADDRESS') or '0.0.0.0', port=os.environ.get('BIND_PORT') or 5000, debug=True)
