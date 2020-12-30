# Run this once after pulling from Crowdin to fix In-Context and RTL
perl -i -p -e "s/<\/head>/\t<script type=\"text\/javascript\">\n\t\t\tvar _jipt = [];\n\t\t\t_jipt.push(['project', 'TwilightMenu']);\n\t\t<\/script>\n\t\t<script type=\"text\/javascript\" src=\"\/\/cdn.crowdin.com\/jipt\/jipt.js\"><\/script>\n\t<\/head>/" pages/In-Context/*.html
perl -i -p -e "s/<html lang=\"he\">/<html lang=\"he\" dir=\"rtl\">/" pages/hebrew/*.html
