# Landstrider Legion Site
Website for Landstrider Legion, a player-group for the video game *Elite: Dangerous*.

## Initializing
1. On a VPS, install the following packages:
    - git
    - Docker
<br><br>

2. Clone the website repository:
    ```
    git clone https://github.com/LandstriderLegion/landstriderlegion_org.git
    ```
    Then, navigate into the root folder of the repo.
<br><br>

3. Build a Docker image, using the included Dockerfile, by running this command:
    ```
    docker build -t landstrider_site .
    ```
<br>

4. Run the Docker image using the following command:
    ```
    sudo docker run -p 80:80 -d --name landstrider_site --mount type=volume,source=db-data,target=data/db landstrider_site
    ```
    The site will continue running until it is shutdown.
<br><br>

5. To shutdown the site, run the following commands:
    ```
    sudo docker kill landstrider_site
    sudo docker rm landstrider_site
    ```


## Server Information
The server is managed using an NGINX instance on port 80.

The APIs are managed by NodeJS scripts running as processes thanks to the PM2 package. The data API runs on port 3000, and the content handler runs on port 3001.

The database is managed using a MongoDB instance on port 5000 within the Docker container. All data is output to a Docker Volume named "`db-data`".