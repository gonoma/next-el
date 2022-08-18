# Define from what image we want to build from.
# Here we will use the latest LTS (long term support) version 16 of node available from the Docker Hub.
FROM node:16

# Create a directory to hold the application code inside the image,
# this will be the working directory for your application.
WORKDIR /usr/src/app

# This image comes with Node.js and NPM already installed
# so the next thing we need to do is to install your app dependencies using the npm binary.
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+).
# Note that, rather than copying the entire working directory,
# we are only copying the package.json file.
# This allows us to take advantage of cached Docker layers.
# bitJudo has a good explanation of this here --> http://bitjudo.com/blog/2014/03/13/building-efficient-dockerfiles-node-dot-js/
COPY package*.json ./
RUN npm install

# If you are building your code for production
# RUN npm ci --only=production
# The npm ci command, helps provide faster, reliable, reproducible builds for production environments.
#You can read more about this here --> https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable

# ----- #
# Bundle your app's source code inside the Docker image
COPY . .

# Your app binds to port 8080 so you'll use the EXPOSE instruction to have it mapped by the docker daemon:
EXPOSE 8080

# Last but not least, define the command to run your app using CMD which defines your runtime.
# Here we will use node main.js to start your server:

CMD [ "node", "main.js" ]

# Create a .dockerignore file in the same directory as your Dockerfile
# This will prevent your local modules and debug logs from being copied onto your Docker image
# and possibly overwriting modules installed within your image.

# BUILDING YOUR IMAGE

# Go to the directory that has your Dockerfile and run the following command to build the Docker image.
# The -t flag lets you tag your image so it's easier to find later using the docker images command:
# Command --> docker build . -t <your username>/node-web-app

# e.g.
# docker build . -t gonzalo/node-web-app
# run the docker
# docker run -p 49160:8080 -d gonzalo/node-web-app

# Get container ID
# $ docker ps

# Print app output
# $ docker logs <container id>

# Example
# Running on http://localhost:8080

# Enter the container if you need to
# $ docker exec -it <container id> /bin/bash

# Test your app
# get the port of your app that Docker mapped
# CONTAINER ID   IMAGE                  COMMAND                  CREATED         STATUS         PORTS                     NAMES
# 70c05f890891   gonzalo/node-web-app   "docker-entrypoint.s…"   4 minutes ago   Up 4 minutes   0.0.0.0:49160->8080/tcp   wonderful_ellis

# In the example above, Docker mapped the 8080 port inside of the container to the port 0.0.0.0:49160 on your machine.

# Now you can call your app using curl (install if needed via: sudo apt-get install curl):

# % curl -i 0.0.0.0:49160
# HTTP/1.1 200 OK
# X-Powered-By: Express
# Content-Type: text/html; charset=utf-8
# Content-Length: 31
# ETag: W/"1f-1Artzd0/Hx+dycb8tztfw6r2uXg"
# Date: Thu, 18 Aug 2022 08:48:12 GMT
# Connection: keep-alive
# Keep-Alive: timeout=5
#
# Hello World! So nice to see you%

# Kill our running container
# $ docker kill <container id>

# Confirm that the app has stopped
# $ curl -i 0.0.0.0:49160
# curl: (7) Failed to connect to localhost port 49160: Connection refused