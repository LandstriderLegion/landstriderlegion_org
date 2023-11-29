#!/bin/bash

ACTIVE_DIR=$PWD

mkdir /var/www /var/www/html /var/www/server /var/www/shipyard
mv ./server/nginx.conf /etc/nginx/nginx.conf
mv ./client/dist /var/www/html
mv ./server/pages /var/www/server
git clone https://github.com/LandstriderLegion/coriolis.git /var/www/shipyard/
cd /var/www/shipyard
npm install
npm run build
cd $ACTIVE_DIR
docker compose build