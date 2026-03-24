#!/bin/bash
# Fetch blue posts about dungeons/M+ from the Blizzard forum Discourse API
# Writes the full section HTML to sections/en/3-blueposts.html

MATCH="dungeon|hotfix|mythic|keystone|magisters|maisara|nexus.point|windrunner|algeth|pit of saron|seat of the triumvirate|skyreach"
EXCLUDE="classic|remix|mop|pvp|arena|battleground"

POSTS=$(curl -fsk "https://us.forums.blizzard.com/en/wow/groups/blizzard-tracker/posts.json" \
| jq --arg m "$MATCH" --arg x "$EXCLUDE" '
  [.posts[]
   | select(.topic_title | test($m; "i"))
   | select(.topic_title | test($x; "i") | not)]
  | unique_by(.topic_id)
  | sort_by(.created_at) | reverse
  | .[0:5]')

COUNT=$(echo "$POSTS" | jq 'length')

# Start writing the section
exec > sections/en/3-blueposts.html

cat <<'HEADER'
		<section id="blue-posts" class="content-block">
			<h2 class="title title--large">Recent Blue Posts</h2>
			<div class="text-block">
				<p>Recent blue posts about changes to mythic+ or dungeons.</p>
			</div>
			<div style="border: 2px solid var(--blizz-blue); padding: 15px">
HEADER

if [ "$COUNT" -eq 0 ]; then
    echo '				<p>No recent blue posts found.</p>'
else
    echo '				<ul class="blueposts-list">'
    for i in $(seq 0 $((COUNT - 1))); do
        POST=$(echo "$POSTS" | jq ".[$i]")
        DATE=$(echo "$POST" | jq -r '.created_at | split("T")[0]')
        TITLE=$(echo "$POST" | jq -r '.topic_title')
        URL=$(echo "$POST" | jq -r '.url')

        if [ "$i" -eq 0 ]; then
            # Featured post: show with excerpt
            EXCERPT=$(echo "$POST" | jq -r '.excerpt | gsub("\n+"; " ") | gsub("  +"; " ")')
            cat <<ITEM
					<li class="blueposts-list__featured">
						<span class="blueposts-list__date">$DATE</span>
						<a href="https://us.forums.blizzard.com/en/wow$URL">$TITLE</a>
						<div class="blueposts-list__excerpt">$EXCERPT</div>
					</li>
ITEM
        else
            # Other posts: title only
            cat <<ITEM
					<li>
						<span class="blueposts-list__date">$DATE</span>
						<a href="https://us.forums.blizzard.com/en/wow$URL">$TITLE</a>
					</li>
ITEM
        fi
    done
    echo '				</ul>'
fi

cat <<'FOOTER'
			</div>
		</section>
FOOTER
