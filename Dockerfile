FROM python:3.8-alpine as builder

WORKDIR /app

COPY . .

RUN apk update && apk add gcc python3-dev musl-dev libpq postgresql-dev libffi-dev nodejs npm &&\
pip install pipenv && sh -c 'PIPENV_VENV_IN_PROJECT=1 pipenv install' && npm install &&\
npm run dev 

FROM alpine:latest AS dev

WORKDIR /opt

RUN apk update && apk add libpq python3

COPY --from=builder /app/.venv /opt/.venv
COPY --from=builder /app/manager ./manager

ENV PATH=/opt/.venv/bin:$PATH
ENV PYTHONPATH=/opt/.venv/lib/python3.8/site-packages:$PYTHONPATH