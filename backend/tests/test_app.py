import pytest
from flask import json
from tests.question_controller_tests import it_correct_questions, it_returns_no_repeated_questions, \
    it_returns_the_correct_number_of_questions
from tests.user_controller_tests import it_inserts_user, it_returns_403_for_duplicate_users, \
    it_returns_200_for_correct_login
from tests.utils import config_client


@pytest.fixture
def client():
    yield from config_client()


######################################
#   Questions Controller Tests       #
######################################

# It returns the right number of questions
def test_number_of_questions_is_correct(client):
    it_returns_the_correct_number_of_questions(client)


# It returns no repeated question
def test_no_repeated_question(client):
    it_returns_no_repeated_questions(client)


# It correct the questions
def test_correct_questions(client):
    it_correct_questions(client)


######################################
#   Users Controller Tests           #
######################################

# It inserts a new user correctly
def test_insert_user(client):
    it_inserts_user(client)


# It does not insert a user with the same email
def test_insert_duplicate_user(client):
    it_returns_403_for_duplicate_users(client)

def test_correct_login(client):
    it_returns_200_for_correct_login(client)