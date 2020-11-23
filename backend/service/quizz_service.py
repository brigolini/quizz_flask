from model.question_model import Question
from model.user_results_model import UserResult


def correct_all_questions(answers):
    questions_from_db = Question.find_by_id_in(list(map(lambda item: item['question_id'], answers)))
    correct_answers = []
    for answer in answers:
        correct = next(question for question in questions_from_db if question.id == answer['question_id']).answer
        correct_answers.append({"question_id": answer['question_id'],
                                "correct": answer['answer'] == correct})
    return correct_answers


def get_statistics(answers):
    statistics = []
    for answer in answers:
        results_from_db = UserResult.find_results_by_question(answer['question_id'])
        question_statistic = {'alt1': get_value_from_result(results_from_db, 1),
                              'alt2': get_value_from_result(results_from_db, 2),
                              'alt3': get_value_from_result(results_from_db, 3),
                              'alt4': get_value_from_result(results_from_db, 4)}
        statistics.append({"question_id": answer["question_id"], "answers": question_statistic})
    return statistics


def get_value_from_result(results, index):
    filter_value = list((element for element in results if element[0] == index))
    if len(filter_value) > 0:
        return filter_value[0][1]
    else:
        return 0
