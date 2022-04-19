FROM ubuntu:20.04

RUN apt update && apt install -y \
    curl \
    sudo

# Install node & npm
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
RUN apt install -y \
    nodejs \
    npm

RUN cd client && npm i && npm run build && cd ../server && npm i

COPY ./client /var/www/
