FROM node:lts-alpine3.13

LABEL description="Kafka Consumer Application"

WORKDIR /usr/src/consumer
COPY . .

ENV kafka_ip="127.0.0.1"
ENV kafka_port "9092"
ENV kafka_topic "Logs"
ENV kafka_clientid "ofbahar"

RUN npm install

ENTRYPOINT ["node","consumer.js"]
