#!/bin/bash
/bin/wget -O affix-eu 'https://raider.io/api/v1/mythic-plus/affixes?region=eu'
/bin/wget -O affix-us 'https://raider.io/api/v1/mythic-plus/affixes?region=us'
cd sections/
cat $(ls | sort -n) > ../index.html

