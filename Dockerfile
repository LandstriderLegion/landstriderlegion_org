FROM ubuntu:20.04

RUN apt update && apt install -y \
    curl \
    nginx \
    gnupg
RUN mkdir /var/server/ && touch /var/server/error.log

RUN rm /etc/nginx/nginx.conf

# Install node & npm & mongodb
RUN curl -so - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add - 
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
RUN apt update && apt install -y \
    nodejs \
    mongodb-org \
    && mongod --port 5000


# Move files
COPY ./client/ /var/www/
COPY ./server/ /var/server/
COPY ./server/nginx.conf /etc/nginx/

# Setup node/npm
WORKDIR /var/www/
RUN npm install && npm run build 
WORKDIR /var/server
RUN npm install

# Start node server and nginx
CMD ["bash", "start.sh"]
EXPOSE 80

# docker build -t landstrider_site .
# docker run -p 80:80 -d --name landstrider_site landstrider_site
# sudo docker kill landstrider_site && sudo docker rm landstrider_site