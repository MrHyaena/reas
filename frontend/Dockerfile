#CLIENT side container

#Build stage
FROM node:latest

WORKDIR /client

#ENV variables
ARG NEXT_PUBLIC_SERVER
ARG NEXT_PUBLIC_WEBSITE

COPY package.json .

RUN npm install

COPY . .

# Assigning env value
ENV NEXT_PUBLIC_SERVER=$NEXT_PUBLIC_SERVER
ENV NEXT_PUBLIC_WEBSITE=$NEXT_PUBLIC_WEBSITE

RUN npm run build

EXPOSE 3000

#Production

CMD ["npm", "run", "start"]