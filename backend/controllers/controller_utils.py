from flask_restful import abort
import json


def get_helper(model_instance):
    if not model_instance:
        abort(404, message="User does not exist.")
    return model_instance


def post_helper(model_list, model, search_value, args,entity_name):
    if model_list is None:
        new_model = model(args)
        model.save_to_db(new_model)
        result = model.find_by_name(search_value)
        return result, 201
    else:
        abort(409, message="{} already exists".format(entity_name))


def parse_json(str):
    return json.loads(str.replace('\'', '"'))
