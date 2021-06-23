---
banner: /assets/images/dsi-theme.png
title: Nintendo DSi Theme
---

<div id="button-controls" class="section-title">Button Controls</div>
<div class="section-body">
    <div class="button-action-group">
        <p class="button-action button">&#xE079;</p>
        <p class="button-action-text">Move item<br>(Sort Method must be set to "Custom")</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE07E;</p>
        <p class="button-action-text">Previous / next item</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action"><span class="button">&#xE000; /</span> START</p>
        <p class="button-action-text">Launch selected application</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE001;</p>
        <p class="button-action-text">Go up a directory level</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE002;</p>
        <p class="button-action-text">Delete / hide item</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE003;</p>
        <p class="button-action-text">Open per-game settings</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action">SELECT</p>
        <p class="button-action-text">Open the SELECT Menu or the DS Classic Menu</p>
    </div>
</div>

<div id="touch-controls" class="section-title">Touch Controls</div>
<div class="section-body">
    <div class="button-action-group">
        <p class="button-action"><img src="/assets/images/left-right.png"></p>
        <p class="button-action-text">Scroll through the list</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action"><img src="/assets/images/tap.png"></p>
        <p class="button-action-text">Launch selected application</p>
    </div>
    <!-- <hr>
    <div>
        <p>
            If the Sort Method is set to "Custom", you can drag the icon up to move it.
        </p>
    </div> -->
</div>

<div id="page-system" class="section-title">Page System</div>
<div class="section-body">
    <p>
        The Nintendo DSi theme splits items into pages with a maximum of 40 items per page. You can navigate through the pages using the &#xE004; and &#xE005; triggers.
    </p>
    <ul>
        <li><p>Pressing &#xE004; on the leftmost page will take you to the first item on the page</p></li>
        <li><p>Pressing &#xE005; on the rightmost page will take you to the last item on the page</p></li>
    </ul>
    <p>
        The scrollbar at the bottom represents all of the items on a page so you can tap on it to quickly move to a specific location in the page.
    </p>
    <p>
        If your triggers do not work, you can use SELECT + &#xE07E; instead.
    </p>
</div>

<div id="custom-top-screen-image" class="section-title">Custom Top Screen Image</div>
<div class="section-body">
    <div style="text-align: center;"><img style="border-color: black; border-width: 1px; border-style: dashed;" src="https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/romsel_dsimenutheme/nitrofiles/languages/{{ page.collection }}/photo_default.png"></div>
    <p>TWiLight Menu++ supports displaying custom photos on the top screen, just like the official Nintendo DSi Menu. However, rather than have it pull from the Nintendo DSi Camera application, you can place PNG images in <code class="language-plaintext wrap">sd:/_nds/TWiLightMenu/dsimenu/photos</code></p>
    <ul>
        <li>Maximum width: 208 pixels</li>
        <li>Maximum height: 156 pixels</li>
    </ul>
    <p>If the image size is less than the maximum, it will be centered with black borders.</p>
</div>

<div id="select-menu" class="section-title">SELECT Menu</div>
<div class="section-body">
    <p>
        Pressing SELECT in the Nintendo DSi theme will bring up the DS Classic Menu by default. However, in the TWiLight Menu++ settings, you can change it to launch the SELECT Menu, a miniature menu embedded inside the theme itself. Here are the menu options for the SELECT Menu.
    </p>
    <ul>
        <li><strong>Home Menu</strong>: On the Nintendo DSi and Nintendo 3DS consoles, this option can be used to return to the home menu</li>
        <li><strong>Settings</strong>: Selecting this will launch a menu for configuring TWiLight Menu++ and its launchers</li>
        <li><strong>Cartridge Options</strong>: On an original DS or DS Lite, you can launch Slot-2 cartridges from here. On a Nintendo DSi and Nintendo 3DS running from the SD card, you can run your Slot-1 card or, with certain flashcards, switch which SD card TWiLight Menu++ navigates</li>
        <li><strong>Manual</strong>: This will launch the manual for TWiLight Menu++, it's what you're looking at right now :P</li>
    </ul>
</div>
