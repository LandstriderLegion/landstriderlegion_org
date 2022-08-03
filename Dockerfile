FROM ubuntu:20.04

RUN apt update && apt install -y \
    wget \
    nginx \
    gnupg \
    && mkdir /var/server/ /var/logs /var/logs/scripts /data/ /data/db/  && rm /etc/nginx/nginx.conf \
    && touch /var/logs/nginx.log /var/logs/mongo.log /var/logs/scripts/api.log /var/logs/scripts/content.log /var/logs/scripts/db.log

# Install node & npm & mongodb
RUN wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | apt-key add - \
    && echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-5.0.list \
    && wget -qO -  https://deb.nodesource.com/setup_16.x | bash - \
    && apt remove -y wget gnupg \
    && apt install -y --no-install-recommends nodejs mongodb-org \
    && apt autoremove -y

# Move files
COPY ./client/ /var/www/
COPY ./server/ /var/server/
COPY ./server/nginx.conf /etc/nginx/

# Setup node/npm
WORKDIR /var/www/
RUN npm install && npm run build 
WORKDIR /var/server
RUN npm install

# Start site
CMD ["bash", "start.sh"]
EXPOSE 80


# BUILD:    docker build -t landstrider_site .
# RUN:      sudo docker run -p 80:80 -d -t --name landstrider_site --mount type=volume,source=db-data,target=/data/db landstrider_site
# SHUTDOWN: sudo docker kill landstrider_site && sudo docker rm landstrider_site