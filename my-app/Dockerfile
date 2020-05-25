FROM node:12 as frontend

WORKDIR /usr/src/app

ENV NODE_ENV=development

COPY package.json yarn.lock tsconfig.json ./

CMD yarn && ls && yarn start
