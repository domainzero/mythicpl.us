#!/bin/bash
rm -rf public
mkdir public
# Grab latest affix information
#curl -fk 'https://raider.io/api/v1/mythic-plus/affixes?region=eu' -o public/affix-eu
#curl -fk 'https://raider.io/api/v1/mythic-plus/affixes?region=us' -o public/affix-us
curl -fk 'https://hailsatan.xyz/affix-eu' -o public/affix-eu
curl -fk 'https://hailsatan.xyz/affix-us' -o public/affix-us

# Copy assets and other files into public
cp -r assets encrypted error.html favicon.ico patrons.html news/ public/

# Concatenate all sections into main page
cd sections/en/
cat $(ls | sort -n) > ../../public/index.html
