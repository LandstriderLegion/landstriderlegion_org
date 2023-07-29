FROM nginx:latest

RUN mkdir /var/server/ /var/logs /data/ /data/db/ && rm /etc/nginx/nginx.conf \
    && touch /var/logs/nginx.log /var/logs/mongo.log /var/logs/api.log /var/logs/content.log

# Move files
COPY ./server/nginx.conf /etc/nginx/nginx.conf
COPY ./client/dist /var/www/html
COPY ./server/pages /var/server/pages

# Start site
EXPOSE 80
