FROM node:16
ENV NODE_ENV production
WORKDIR /app
COPY package*.json ./
RUN npm ci
# Bundle your app's source code inside the Docker image
COPY . .
RUN npm run build
