FROM node:18.16.0

WORKDIR /usr/src/app/meu-time-react-app

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]