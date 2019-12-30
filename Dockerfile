# FROM python:3-slim-buster
FROM python:3.8-alpine

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

COPY Pipfile Pipfile.lock /app/

#Slim
# RUN apt-get update \
#     && builddeps='gcc python3-dev musl-dev libpq-dev libffi-dev' \
#     && apt-get install -y $builddeps --no-install-recommends

#Alpine
RUN apk update \
    && apk add --no-cache --virtual .build-deps gcc python3-dev musl-dev postgresql-libs postgresql-dev libffi-dev

RUN pip install pipenv && pipenv install --system --deploy --ignore-pipfile

#Slim
# RUN apt-get purge --auto-remove

#Alpine
RUN apk del .build-deps

COPY ./contactmemng /app/