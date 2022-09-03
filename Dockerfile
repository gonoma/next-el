FROM node:16
ENV NODE_ENV production
WORKDIR /app
COPY package*.json ./

# install dependencies
RUN npm install

# Bundle your app's source code inside the Docker image
COPY . .

# build and start app
RUN npm run build
# EXPOSE 3000
# EXPOSE 8080
CMD ["npm", "run", "start"]
