FROM python:3.8-alpine

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

RUN apk update && apk add gcc python3-dev musl-dev libpq postgresql-dev libffi-dev nodejs npm

COPY Pipfile* ./
COPY package*.json ./
COPY ./webpack* ./

RUN pip install pipenv && sh -c 'PIPENV_VENV_IN_PROJECT=1 pipenv install' && npm install

COPY ./contactmemng ./contactmemng

RUN npm run devBuild

FROM alpine:latest AS prod

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /opt/app

RUN apk update && apk add libpq python3

COPY --from=0 /app/.venv /opt/venv
COPY --from=0 /app/contactmemng ./

ENV PATH=/opt/venv/bin:$PATH
ENV PYTHONPATH=/opt/venv/lib/python3.8/site-packages:$PYTHONPATH