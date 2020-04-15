FROM node:latest

WORKDIR /home/cs806/ilend/ilend-addresses-service

COPY . .

RUN npm install

RUN cd tools

RUN npm run build

WORKDIR /home/cs806/ilend/ilend-addresses-service/dist

ENV NODE_ENV prod

EXPOSE 5002
CMD [ "node", "index.js" ]
