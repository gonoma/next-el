FROM node:16
ENV NODE_ENV production
WORKDIR /app
COPY package*.json ./
RUN npm install
# Bundle your app's source code inside the Docker image
COPY . .

# build app
RUN npm run build

# start app
CMD ["npm", "run", "start"]
