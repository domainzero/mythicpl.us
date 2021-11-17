#!/bin/bash
curl -fk 'https://raider.io/api/v1/mythic-plus/affixes?region=eu' -o affix-eu
curl -fk 'https://raider.io/api/v1/mythic-plus/affixes?region=us' -o affix-us

cd sections/
cat $(ls | sort -n) > ../index.html
rm -rf sections/
