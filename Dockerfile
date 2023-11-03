FROM node:18 AS build 

LABEL org.opencontainers.image.source = "https://github.com/gokceno/website"

WORKDIR /usr/app

COPY ./ /usr/app

RUN npm install
RUN npm run build

EXPOSE 3000

CMD npm run start