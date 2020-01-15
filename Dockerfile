FROM python:3.8-alpine as dev

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app
COPY . .

RUN apk update && apk add gcc python3-dev musl-dev libpq postgresql-dev libffi-dev nodejs npm &&\
pip install pipenv && sh -c 'pipenv install --system' && npm install &&\
npm run dev