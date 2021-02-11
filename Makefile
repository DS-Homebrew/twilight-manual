ifeq ($(OS),Windows_NT)
CHROMIUM	:= chromium.exe
GREP		:= grep.exe
SED			:= sed.exe -i
else
	ifeq ($(shell uname -s),Darwin)
# I use Edge, change this if using another Chromium browser -Pk11
CHROMIUM	:= /Applications/Microsoft\ Edge.app/Contents/MacOS/Microsoft\ Edge
# Install grep from brew, the default doesn't support PCRE
GREP		:= ggrep
# macOS sed is dumb apparently
SED			:= sed -i ''
	else
CHROMIUM	:= chromium
GREP		:= grep
SED			:= sed -i
	endif
endif

NITROFILES	:= nitrofiles

EXCLUDE		:= In-Context
LANGS		:= $(filter-out $(EXCLUDE),$(subst pages/_,,$(wildcard pages/_*)))

INPUTS		:= $(foreach dir,$(LANGS),$(wildcard pages/_$(dir)/*.html))
TARGETS		:= $(foreach file,$(INPUTS:.html=.gif),$(subst pages/_,$(NITROFILES)/pages/, $(file)))

INIFILES	:= $(wildcard $(NITROFILES)/pages/english/*.ini)
INITARGETS	:= $(foreach file,$(INIFILES),$(foreach lang,$(filter-out english,$(LANGS)),$(subst english,$(lang),$(file))))

.PHONY: all clean serve kill

all:	inifiles serve $(TARGETS) kill

serve:
	@echo Starting webserver
	@bundle exec jekyll serve -B

kill:
	@echo Killing webserver
	@pkill -f jekyll

$(NITROFILES)/pages/%.gif	:	pages/_%.html
	@echo $$(basename $(@D))/$$(basename $<)
	@[ -d "$(@D)" ] || mkdir -p "$(@D)"
	$(CHROMIUM) --disable-gpu --no-sandbox --hide-scrollbars --headless --run-all-compositor-stages-before-draw --virtual-time-budget=10000 --window-size=256,3000 --screenshot "http://127.0.0.1:4000/$(subst pages/_,,$<)" 1>/dev/null 2>&1
	@ffmpeg -i screenshot.png -vf "palettegen=max_colors=246" palette.png -y -loglevel error
	@ffmpeg -i screenshot.png -i palette.png -filter_complex "$$(ffmpeg -loop 1 -i screenshot.png -frames:v 3 -vf 'negate,cropdetect=0:2:0' -f null - 2>&1 | awk '/y2/ {print $$NF}' | tail -1),paletteuse" $@ -y -loglevel error
	@rm -f screenshot.png palette.png

inifiles	:	$(INITARGETS)

$(foreach lang,$(filter-out english,$(LANGS)),$(NITROFILES)/pages/$(lang)/%.ini)	:	$(NITROFILES)/pages/english/%.ini
	@echo $*.ini
	@$(foreach lang,$(filter-out english,$(LANGS)),[ -d "$(NITROFILES)/pages/$(lang)" ] || mkdir -p "$(NITROFILES)/pages/$(lang)";)
	@$(foreach lang,$(filter-out english,$(LANGS)),cp $< $(NITROFILES)/pages/$(lang)/$*.ini;)
	@$(foreach lang,$(LANGS),$(SED) "s/TITLE = .*/TITLE = $(shell $(GREP) -Po '(?<=title: ).*' pages/_$(lang)/$*.html)/" $(NITROFILES)/pages/$(lang)/$*.ini;)

clean:
	@echo clean ...
	@rm -rf $(TARGETS)
	@rm -rf $(INITARGETS)
