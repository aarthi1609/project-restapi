FROM node:lts-alpine

COPY . .

RUN npm install 

EXPOSE 5000

CMD ["node", "app.js"]
