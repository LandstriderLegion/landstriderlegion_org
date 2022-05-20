FROM ubuntu:20.04

RUN apt update && apt install -y \
    curl \
    wget \
    nginx \
    gnupg \
    sudo
RUN mkdir /var/server/ /data/ /data/db/ && touch /var/server/error.log && rm /etc/nginx/nginx.conf

# Install node & npm & mongodb
RUN wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add - \
    && echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list \
    && curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
RUN apt install -y \
    nodejs \
    mongodb-org

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
EXPOSE 80 3000 3001 5000

# BUILD:    docker build -t landstrider_site .
# DEBUG:    docker run -p 80:80 -p 3000:3000 -p 3001:3001 -p 5000:5000 -d --name landstrider_site landstrider_site
# PROD:     sudo docker run -p 80:80 -d --name landstrider_site landstrider_site
# SHUTDOWN: sudo docker kill landstrider_site && sudo docker rm landstrider_site