FROM nginx:latest

# Setup 
RUN mkdir /var/server/ && rm /etc/nginx/nginx.conf

# Move files
COPY ./server/nginx.conf /etc/nginx/nginx.conf
COPY ./client/dist /var/www/html
COPY ./server/pages /var/server/pages

# Start site
WORKDIR /var/www/html/
EXPOSE 80
