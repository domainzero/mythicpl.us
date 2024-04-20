#!/bin/bash
rm -rf public
mkdir public
# Grab latest affix information
curl -fk 'https://raider.io/api/v1/mythic-plus/affixes?region=eu' -o public/affix-eu
curl -fk 'https://raider.io/api/v1/mythic-plus/affixes?region=us' -o public/affix-us
curl -fk "https://raider.io/api/v1/mythic-plus/season-cutoffs?season=season-df-4&region=us"  | jq .cutoffs.p999.all.quantileMinValue > public/cutoff-us
curl -fk "https://raider.io/api/v1/mythic-plus/season-cutoffs?season=season-df-4&region=eu"  | jq .cutoffs.p999.all.quantileMinValue > public/cutoff-eu

# Copy assets and other files into public
cp -r assets ads/ads.txt privacy/privacy.html error.html favicon.ico patrons.html news/ public/

# Concatenate all sections into main page
cd sections/en/
cat $(ls | sort -n) > ../../public/index.html
