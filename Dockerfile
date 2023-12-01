FROM node:20.10.0-bullseye

WORKDIR /app

COPY . /app

RUN npm install

CMD ["npm", "start"]