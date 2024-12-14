FROM node:22-alpine

WORKDIR /api

COPY ./ /api/

RUN npm install

EXPOSE 8005

CMD ["npm","run","api"]