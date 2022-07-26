FROM node:18
WORKDIR /var/www/html
# COPY ./BackEnd/package*.json ./BackEnd/
RUN npm install pm2@latest -g
COPY ./BackEnd ./BackEnd
RUN npm i
COPY ./anime ./anime
EXPOSE 8080
CMD [ "pm2-runtime", "./BackEnd/app.js", "--name", "\"BackEnd\"" ]
