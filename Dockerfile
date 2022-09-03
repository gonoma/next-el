FROM node:16-alpine AS deps

WORKDIR /app

# Install dependencies 
COPY . .
RUN npm ci

RUN npm run build

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "run", "start"]