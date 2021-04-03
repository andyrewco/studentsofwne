FROM node:14-alpine

WORKDIR /app

COPY . ./

RUN yarn
RUN yarn build

EXPOSE 5000

CMD [ "yarn", "dev" ]
