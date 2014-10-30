FROM octohost/nodejs

WOKRDIR /srv/www
ADD . /srv/www
RUN npm install

EXPOSE 3000

CMD npm start
