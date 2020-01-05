FROM python:3.8-alpine AS builder1

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

RUN apk update && apk add gcc python3-dev musl-dev libpq postgresql-dev libffi-dev

COPY Pipfile* ./

RUN pip install pipenv && sh -c 'PIPENV_VENV_IN_PROJECT=1 pipenv install'

FROM mhart/alpine-node:latest AS builder2

WORKDIR /app
COPY package*.json /app/
RUN npm install

COPY . /app/

RUN npm run build

FROM alpine:latest AS prod

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apk update && apk add libpq python3

COPY --from=builder1 /app/.venv /opt/venv
ENV PATH=/opt/venv/bin:$PATH
ENV PYTHONPATH=/opt/venv/lib/python3.8/site-packages:$PYTHONPATH

WORKDIR /app

COPY . .
COPY --from=builder2 /app/contactmemng/reactfront/static /app/contactmemng/reactfront/static