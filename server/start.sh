#!/usr/bin/env bash
nginx
echo "nginx started..."
if [$(ls /data/db) != ""]
then
    npx pm2 start scripts/db.js
    echo "Databases awaiting to be initialized"
else
    echo "Databases already exist, skipping initialization"
fi
npx pm2 start scripts/content_handler.js
npx pm2 start scripts/api.js
echo "APIs started"
mongod --port 5000
echo "Database started"
echo "Started all"