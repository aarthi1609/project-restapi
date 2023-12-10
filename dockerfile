FROM node:lts-alpine

WORKDIR /app

RUN mkdir -p /app/json-server
RUN npm install -g json-server

COPY package*.json ./
COPY . .

EXPOSE 5000

CMD ["json-server", "--watch", "db.json", "--port", "3001"]
