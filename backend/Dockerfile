FROM python:3

EXPOSE 5000

RUN mkdir /app
WORKDIR /app

COPY requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt

COPY . /app
COPY ./static /app/static

ENV STATIC_DIR = /app/static

CMD python app.py