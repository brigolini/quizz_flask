from flask import json

from tests.utils import get_token_header


def it_returns_no_repeated_questions(client):
    from collections import Counter
    from operator import itemgetter

    response = client.get('api/quizz/30', headers=get_token_header(client))
    questions = json.loads(response.get_data(as_text=True))
    repeated = len(Counter(map(itemgetter("id"), questions['quizz_questions'])))
    assert repeated == 30


def it_correct_questions(client):
    answer1 = dict(question_id=30, answer=3)
    answer2 = dict(question_id=45, answer=1)
    answer_list = list()
    answer_list.append(answer1)
    answer_list.append(answer2)
    answers = dict(answers=answer_list)

    response = client.post('/api/quizz/user/1', json=dict(answers), headers=get_token_header(client))
    answers_from_api = json.loads(response.get_data(as_text=True))
    correct_answers = answers_from_api['correct_answers']
    for correct_answer in correct_answers:
        if (correct_answer['question_id']) == 30:
            assert correct_answer['correct']
        else:
            assert (not correct_answer['correct'])


def it_returns_the_correct_number_of_questions(client):
    header = get_token_header(client)
    response = client.get('api/quizz/10', headers=header)
    questions = json.loads(response.get_data(as_text=True))
    assert len(questions['quizz_questions']) == 10
