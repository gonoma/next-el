FROM node:16

ENV APP_HOME /src
WORKDIR $APP_HOME

COPY package*.json ./
RUN npm ci

# Bundle your app's source code inside the Docker image
COPY . .

EXPOSE 8080

RUN npm run build

