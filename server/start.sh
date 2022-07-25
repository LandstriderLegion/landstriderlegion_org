#!/usr/bin/env bash
nginx
echo "nginx started..."
if [$(ls /data/db) != ""]
then
    npx pm2 start db.js
    echo "Databases awaiting to be initialized"
else
    echo "Databases already exist, skipping initialization"
fi
npx pm2 start api.js
npx pm2 start content_handler.js
echo "APIs started"
mongod --port 5000
echo "Database started"
echo "Started all"