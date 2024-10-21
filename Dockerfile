FROM node:16-alpine

WORKDIR /app

COPY . /app

RUN npm install

COPY mongo-init.js /docker-entrypoint-initdb.d/mongo-init.js

EXPOSE 8084

CMD ["npm", "start"]