FROM node:22-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

COPY wait-for-db.sh /usr/src/app/wait-for-db.sh
RUN chmod +x /usr/src/app/wait-for-db.sh

EXPOSE 3000

CMD ["/usr/src/app/wait-for-db.sh", "npm", "run", "build"]