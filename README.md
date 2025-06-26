# reas

Reas testing project - frontend formular and backend api endpoint for receiving data

## Goals

Create a small crud service, that has frontend form, backend server and mongodb database.

## How to start

Because of Docker usage, it is quite easy to start. Atleast if you have evertyhing that you need installed.

### Prerequisities

- Installed Node
- Installed Docker
- Connection to GitHub

### Steps

1. Open up terminal and go into directory where you want your files placed
2. Clone this repository into your local environment with command `git clone git@github.com:MrHyaena/reas.git`
3. Go into root directory
4. Write the command `docker-compose up `
5. If you get error, it is probably because of permissions. Solve this so you can use docker. You are most likely not in the docker group. If there is no error, continue.
6. Open the browser and search for `http://localhost:3000`
7. Now play!

## Technology

This is the technology used

### Frontend

- NextJS
- Tailwind
- TypeScript

##x Backend

- Koa
- TypeScript
- Mongoose

### Database

- MongoDB

### Deployment

- Docker/Docker-compose
