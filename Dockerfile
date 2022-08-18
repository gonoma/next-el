FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

# Bundle your app's source code inside the Docker image
COPY . .

CMD [ "node", "main.js" ]
