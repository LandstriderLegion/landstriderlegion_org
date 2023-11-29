FROM mediawiki:1.40

# Copy assets and configs
COPY ./client/dist/resources/icon.png /var/www/html/resources/assets/icon.png
COPY ./server/LocalSettings.php /var/www/html/LocalSettings.php

# Download and install skins
WORKDIR /var/www/html/skins/
RUN mkdir Citizen && git clone https://github.com/StarCitizenTools/mediawiki-skins-Citizen.git Citizen

WORKDIR /var
RUN mkdir trash

WORKDIR /var/www/html