FROM node:18
WORKDIR /var/www/html
COPY ./FrontEnd/package*.json ./
RUN npm i
COPY ./FrontEnd ./
CMD [ "npm", "run", "build" ]
