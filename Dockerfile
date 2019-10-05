FROM node:12

RUN mkdir /app
WORKDIR /app

COPY . /app
RUN npm install

EXPOSE 3000
CMD ["node", "index.js"]