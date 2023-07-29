cd client
npx prodbuild build
cd ..
sudo docker compose build
sudo docker compose up -d