#!/bin/bash
rm -rf public
mkdir public
# Grab latest affix information
curl -fk 'https://raider.io/api/v1/mythic-plus/affixes?region=eu' -o public/affix-eu
curl -fk 'https://raider.io/api/v1/mythic-plus/affixes?region=us' -o public/affix-us
curl -fk "https://raider.io/api/v1/mythic-plus/season-cutoffs?season=season-df-4&region=us" | jq .cutoffs.p999.all.quantileMinValue > public/cutoff-us
curl -fk "https://raider.io/api/v1/mythic-plus/season-cutoffs?season=season-df-4&region=eu" | jq .cutoffs.p999.all.quantileMinValue > public/cutoff-eu

# Copy assets and other files into public
cp -r assets ads/ads.txt privacy/privacy.html error.html favicon.ico patrons.html news/ static/* public/

# jank bundle js
{ cat assets/js/nav.js; echo ';'; cat assets/js/getaffixes.js; echo ';'; cat assets/js/collapse.js; } > public/assets/js/bundle.js

# optionally minify css and js
if npx -v &> /dev/null; then
    npx --yes terser public/assets/js/bundle.js --compress --mangle -o public/assets/js/bundle.js 2>/dev/null
    npx --yes cleancss -o public/assets/css/style.css public/assets/css/style.css 2>/dev/null
fi

# Concatenate all sections into main page
cd sections/en/
cat $(ls | sort -n) > ../../public/index.html
cd ../..

# Pre-populate affix names for no-JS fallback
US_AFFIXES=$(jq -r '.affix_details[:2] | map(.name | split(" ") | if length > 2 then .[2:] | join(" ") else .[0] end) | join(" ")' public/affix-us)
EU_AFFIXES=$(jq -r '.affix_details[:2] | map(.name | split(" ") | if length > 2 then .[2:] | join(" ") else .[0] end) | join(" ")' public/affix-eu)
sed -i "s|__US_AFFIXES__|${US_AFFIXES}|" public/index.html
sed -i "s|__EU_AFFIXES__|${EU_AFFIXES}|" public/index.html
