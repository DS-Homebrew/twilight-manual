# Fix the layouts in the in-context files
sed -i "" "s/layout: crwdns[0-9][0-9][0-9][0-9][0-9]:0crwdne[0-9][0-9][0-9][0-9][0-9]:0/layout: manual-page/" pages/_In-context/*.md
