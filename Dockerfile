FROM python:3.8-alpine AS builder
# FROM python:3-slim-buster

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

#Alpine
RUN apk update && apk add gcc python3-dev musl-dev libpq postgresql-dev libffi-dev

#Slim
# RUN apt-get update \
#     && apt-get install -y gcc python3-dev musl-dev libpq-dev libffi-dev --no-install-recommends

COPY Pipfile* ./

RUN pip install pipenv && pipenv lock --requirements > requirements.txt 
RUN pip install --user -r requirements.txt

FROM python:3.8-alpine AS prod

#Alpine
RUN apk update && apk add libpq

#Slim
# RUN apt-get update \
#     && apt-get install -y libpq --no-install-recommends

COPY --from=builder /root/.local /root/.local
ENV PATH=/root/.local/bin:$PATH

WORKDIR /app

COPY . .