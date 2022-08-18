FROM node:16

ENV APP_HOME /app
WORKDIR $APP_HOME

COPY package*.json ./
RUN npm ci

# Bundle your app's source code inside the Docker image
COPY . .

CMD [ "node", "main.js" ]
