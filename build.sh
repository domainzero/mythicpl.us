#!/bin/bash

mkdir public
# Grab latest affix information
curl -fk 'https://raider.io/api/v1/mythic-plus/affixes?region=eu' -o public/affix-eu
curl -fk 'https://raider.io/api/v1/mythic-plus/affixes?region=us' -o public/affix-us

# Copy assets and other files into public
cp -r assets error.html favicon.ico public/

# Concatenate all sections into main page
cd sections/
cat $(ls | sort -n) > ../public/index.html
