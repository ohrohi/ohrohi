# Dockerfile
# PLZ test success!!!

FROM python:3.13.0a2-slim

MAINTAINER heumsi@gmail.com

RUN yum install -y vim
RUN yum install -y telnet
RUN yum install -y wget

RUN python -m pip install --upgrade pip

COPY . /app
WORKDIR /app

ENTRYPOINT ["python"]
CMD ["app.py"]

EXPOSE 5000
