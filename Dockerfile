FROM node:14

LABEL "Name" "Ayush Mittal"

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

USER node

EXPOSE 3000

CMD [ "node", "server.js" ]
