FROM ubuntu:20.04

RUN apt update && apt install -y \
    curl \
    sudo \
    nginx
RUN mkdir /var/server/ && touch /var/www/error.log

RUN rm /etc/nginx/nginx.conf

# Install node & npm
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
RUN apt install -y \
    nodejs

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
EXPOSE 80 3000

# docker build -t landstrider_site .
# docker run -p 80:80 -p 3000:3000 -d --name landstrider_site landstrider_site
# sudo docker kill landstrider_site && sudo docker rm landstrider_site