# Use slim base images like Alpine Linux - smaller deployments and less security surface.
FROM node:16-alpine AS deps

WORKDIR /app

# Install dependencies
COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json
RUN npm ci

# Copy Source code. 
# Copying source files before installing dependencies causes unnecessary reinstalls.
COPY . .

RUN npm run build

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "run", "start"]