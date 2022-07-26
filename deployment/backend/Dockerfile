FROM node:18
WORKDIR /var/www/html
# COPY ./BackEnd/package*.json ./BackEnd/
COPY ./anime ./anime
RUN npm install pm2@latest -g
COPY ./BackEnd ./BackEnd
RUN cd ./BackEnd && npm i
EXPOSE 8080
CMD [ "pm2-runtime", "./BackEnd/app.js", "--name", "\"BackEnd\"" ]
