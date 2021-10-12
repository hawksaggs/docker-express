FROM node:14

LABEL maintainer "Ayush Mittal"

# create app directory
WORKDIR /usr/src/app

RUN npm install -g nodemon

# install app dependencies
COPY package*/.json ./
RUN npm install

# copy the source code
COPY . .

# don't user root user
USER node

# expose port
EXPOSE 3000

# run the app
CMD ["node", "server.js"]