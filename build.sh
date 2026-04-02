#!/bin/bash
rm -rf public
mkdir public
# Grab latest affix information
curl -fk 'https://raider.io/api/v1/mythic-plus/affixes?region=eu' -o public/affix-eu
curl -fk 'https://raider.io/api/v1/mythic-plus/affixes?region=us' -o public/affix-us
curl -fk "https://raider.io/api/v1/mythic-plus/season-cutoffs?season=season-df-4&region=us" | jq .cutoffs.p999.all.quantileMinValue > public/cutoff-us
curl -fk "https://raider.io/api/v1/mythic-plus/season-cutoffs?season=season-df-4&region=eu" | jq .cutoffs.p999.all.quantileMinValue > public/cutoff-eu

# Grab latest blue posts about dungeons/M+
BLUEPOSTS=$(curl -fsk "https://us.forums.blizzard.com/en/wow/groups/blizzard-tracker/posts.json" \
| jq -r '
  [.posts[]
   | select(.topic_title | test("dungeon|hotfix|mythic|keystone|magisters|maisara|nexus.point|windrunner|algeth|pit of saron|seat of the triumvirate|skyreach"; "i"))
   | select(.topic_title | test("classic|remix|pvp|arena|battleground|burning crusade|wrath|cataclysm|mists of pandaria|warlords of draenor|legion|battle for azeroth|shadowlands|dragonflight"; "i") | not)]
  | unique_by(.topic_id)
  | sort_by(.created_at) | reverse
  | .[0:5]
  | to_entries[] | .key as $i | .value
  | "<li>"
    + "<span class=\"blueposts-list__date\">\(.created_at | split("T")[0])</span>"
    + "<a class=\"title\" href=\"https://us.forums.blizzard.com/en/wow\(.url)\">\(.topic_title)</a>"
    + if $i == 0 then
        "<p>Here'\''s an excerpt from the most recent blue post:</p>"
        + "<div class=\"blueposts-list__excerpt\">\(.excerpt | gsub("\n+"; " ") | gsub("  +"; " "))</div>"
      else "" end
    + "</li>"
')

# Format blue posts for injection
if [ -n "$BLUEPOSTS" ]; then
    BLUEPOSTS_HTML="<ul class=\"blueposts-list\">$BLUEPOSTS</ul>"
else
    BLUEPOSTS_HTML='<p>No recent blue posts found.</p>'
fi

# Copy assets and other files into public
cp -r assets ads/ads.txt privacy/privacy.html error.html favicon.ico patrons.html static/* public/

# jank bundle js
{ cat assets/js/nav.js; echo ';'; cat assets/js/getaffixes.js; echo ';'; cat assets/js/collapse.js; echo ';'; cat assets/js/ads.js; } > public/assets/js/bundle.js

# optionally minify css and js
if npx -v &> /dev/null; then
    npx --yes terser public/assets/js/bundle.js --compress --mangle -o public/assets/js/bundle.js 2>/dev/null
    npx --yes terser public/assets/js/error.js --compress --mangle -o public/assets/js/error.js 2>/dev/null
    npx --yes cleancss -o public/assets/css/style.css public/assets/css/style.css 2>/dev/null
    npx --yes cleancss -o public/assets/css/error.css public/assets/css/error.css 2>/dev/null
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
BLUEPOSTS_HTML="$BLUEPOSTS_HTML" perl -i -0777 -pe 's/__BLUEPOSTS__/$ENV{BLUEPOSTS_HTML}/' public/index.html