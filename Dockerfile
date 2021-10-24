FROM node:14

LABEL "Name" "Ayush Mittal"

WORKDIR /src/app

COPY package*/.json ./

RUN npm install

COPY . /src/app

USER node

EXPOSE 3000

CMD [ "node", "server.js" ]
