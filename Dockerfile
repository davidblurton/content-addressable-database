FROM octohost/nodejs

WORKDIR /srv/www
ADD . /srv/www
RUN npm install

EXPOSE 3000

CMD npm start
