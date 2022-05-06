#!/usr/bin/env bash
nginx
npx pm2 start api.js
npx pm2 start content_handler.js
#cd /var/server/ && npx pm2 start api.js
mongod --port 5000
echo "Started all"