# Dockerfile

FROM python:3.7.8-slim

MAINTAINER heumsi@gmail.com

RUN yum -y update && \
    yum install -y vim && \
    yum install -y telnet && \
    yum install -y wget

RUN python -m pip install --upgrade pip

COPY . /app
WORKDIR /app

ENTRYPOINT ["python"]
CMD ["app.py"]

EXPOSE 5000
