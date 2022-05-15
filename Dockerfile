FROM node:13.12.0-alpine

WORKDIR /ssys-client

ENV PATH /ssys-client/node_modules/.bin:$PATH

COPY package.json ./
#COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1  @reduxjs/toolkit -g --silent

COPY . ./

CMD ["npm", "start"]
