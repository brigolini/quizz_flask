from flask import json

# It inserts a new user correctly
def it_inserts_user(client):
    user = dict(username="test", password="test")
    response = client.post('/api/users', json=user)
    assert response.status_code == 201


# It does not insert a user with the same email
def it_returns_403_for_duplicate_users(client):
    user = dict(username="test", password="test")
    client.post('/api/users', json=user)
    response = client.post('/api/users', json=user)
    assert response.status_code == 409


# It returns correct login
def it_returns_200_for_correct_login(client):
    user = dict(username="test", password="test")
    client.post('/api/users', json=user)

    response = client.post('/auth', json=user)
    assert response.status_code == 200

    body = json.loads(response.get_data(as_text=True))

    assert len(body["access_token"]) > 0