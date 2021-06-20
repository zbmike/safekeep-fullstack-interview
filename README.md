# Participation Data App
To run the app, it will need 3 terminals. Docker can run in background though.

1. First spin up postgres Database using docker compose:
```
cd docker
docker-compose up
```
2. And then run backend server, I used express, sequelize and express:
```
yarn
sequelize db:migrate
node ./backend/app.js
```
3. Last but not least, run frontend react app:
```
cd frontend
yarn
yarn start
```
4. Go to `http://localhost:3000` to try the app!