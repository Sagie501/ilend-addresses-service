FROM node:latest

WORKDIR /home/cs806/ilend/ilend-addresses-service

COPY * ./

RUN ls -l

RUN npm install

RUN ls -l

RUN cd tools

RUN npm run build

WORKDIR /home/cs806/ilend/ilend-addresses-service/dist

ENV NODE_ENV prod

EXPOSE 5002
CMD [ "node", "index.js" ]
