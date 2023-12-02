#!/bin/bash

ACTIVE_DIR=$PWD

mkdir /var/www /var/www/html /var/www/server /var/www/shipyard
cp ./server/nginx.conf /etc/nginx/nginx.conf
cp ./client/dist/ /var/www/html
cp ./server/pages/ /var/www/server
git clone https://github.com/LandstriderLegion/coriolis.git /var/www/shipyard/coriolis
git clone https://github.com/LandstriderLegion/coriolis-data.git /var/www/shipyard/coriolis-data
cd /var/www/shipyard/coriolis
npm install
npm run build
cd $ACTIVE_DIR
docker compose build