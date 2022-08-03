#!/bin/bash

# Start server
nginx
echo "nginx started..."

# Start database
mongod --port 5000  --fork --logpath /var/logs/mongo.log 
echo "Database started"
npx pm2 start bin/db.js --log /var/logs/scripts/db.log
echo "Databases initialized"

# Start APIs
npx pm2 start bin/content_handler.js --log /var/logs/scripts/content.log --time
npx pm2 start bin/api.js --log /var/logs/scripts/api.log --time
echo "APIs started"

# Prevent exiting
echo "Started all"
node