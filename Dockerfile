FROM octohost/nodejs

RUN apt-get update && apt-get -y install python2.7 python2.7-dev git wget make
RUN ln -s /usr/bin/python2.7 /usr/bin/python

WORKDIR /srv/www
ADD . /srv/www
RUN npm install

EXPOSE 3000

CMD npm start
