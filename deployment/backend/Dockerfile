FROM node:18
WORKDIR /var/www/html
COPY ./BackEnd/package*.json ./
RUN npm i
RUN npm install pm2@latest -g
COPY ./BackEnd ./
COPY ./anime ./
EXPOSE 8080
CMD [ "pm2-runtime", "app.js", "--name", "\"BackEnd\"" ]
