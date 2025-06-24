
#SERVER side container

#Build stage
FROM node:latest

RUN npm install -g nodemon

WORKDIR /server

COPY ../package.json .

RUN npm install

COPY . .

RUN npm run build

#Production
EXPOSE 4000

CMD ["npm", "run", "start"]

#APP side container
