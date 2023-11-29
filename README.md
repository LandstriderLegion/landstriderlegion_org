# Landstrider Legion Site
Website for Landstrider Legion, a player-group for the video game *Elite: Dangerous*.

## Initializing
1. On a VPS, install the following packages:
    - git
    - Docker
    - Nginx
Ensure Docker Compose is installed.
<br><br>

2. Clone the website repository:
    ```
    git clone https://github.com/LandstriderLegion/landstriderlegion_org.git
    ```
    Then, navigate into the root folder of the repo.
<br><br>

3. Run the install script with sudo. This will copy the files to the necessary places and install Coriolis
    ```
    sudo bash ./install.sh
    ```
<br>

4. Start (or restart) nginx and initialize all the containers using Docker Compose
    ```
    sudo docker compose up -d
    ```
    The site will continue running until it is shutdown.
<br><br>

5. To shutdown the site, run the following commands:
    ```
    sudo systemctl stop nginx
    sudo docker compose down
    ```


## Server Information (Production)
The server is managed using an NGINX instance on port 443 (HTTPS).

`landstriderlegion.space` (port 443) is static content served from /var/www/html

`wiki.landstriderlegion.space` (port 80) is a MediaWiki instance running from Docker and managed via Docker Compose (containers `landstrider_wiki` (MediaWiki instance) and `landstrider_sql` (MySQL server for MediaWiki content))

`shipyard.landstriderlegion.space` is an instance of Coriolis being server from /var/www/shipyard/build