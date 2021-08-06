---
banner: /assets/images/nds-bootstrap.png
title: nds-bootstrap
---

<div id="about" class="section-title">About</div>
<div class="section-body">
    <p>
        nds-bootstrap is a homebrew application used by TWiLight Menu++ to load DS(i) cartridge dumps, DSiWare, and DS-mode homebrew from the Nintendo DSi / 3DS SD card.
    </p>
    <p>
        It can also be used on flashcards, however compatibility on flashcards is lower so it's primarily intended for homebrew-only flashcards and flashcards with low compatibility.
    </p>
</div>

<div id="compatibility" class="section-title">Compatibility</div>
<div class="section-body">
    <p>
        To see if a game is compatible with nds-bootstrap, check the compatibility list:<br><a href="https://cutt.ly/nds-compatibility">cutt.ly/nds-compatibility</a>
    </p>
    <p>
        For the best compatibility on flashcards, we recommend getting a DS Memory Expansion Pak.
    </p>
</div>

<div id="controls" class="section-title">In-Game Controls</div>
<div class="section-body">
    <p>
        Press &#xE004;, &#xE07A;, and SELECT to open the in-game menu.
    </p>
    <p>
        This can be remapped with <code>Menu hotkey</code> in the Games and Apps page of TWiLight Menu++ settings.
    </p>
    <hr>
    <p>
        Press &#xE004;, &#xE005;, START, and SELECT to reset the game.
    </p>
    <p>
        Hold for 2 seconds to force the game to reset.
    </p>
    <hr>
    <p>
        Hold &#xE004;, &#xE005;, &#xE07A;, and &#xE000; for 2 seconds to create a RAM dump.
    </p>
    <hr>
    <p>
        Hold &#xE004;, &#xE005;, &#xE07A;, and &#xE001; for 2 seconds to return to TWiLight Menu++.
    </p>
    <hr>
    <p>
        Hold &#xE004;, &#xE005;, &#xE002;, and &#xE079; for 1 second to swap the screens.
    </p>
</div>

<div id="menu-controls" class="section-title">In-Game Menu Controls</div>
<div class="section-body">
    <div class="button-action-group">
        <p class="button-action button">&#xE07D;</p>
        <p class="button-action-text">Navigate menu</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE07E;</p>
        <p class="button-action-text">Change setting<br>(Options submenu)</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE000;</p>
        <p class="button-action-text">Select option</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE001;</p>
        <p class="button-action-text">Return to game</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE005;</p>
        <p class="button-action-text">Advance 1 frame</p>
    </div>
    <h3>Screenshot</h3>
    <div class="button-action-group">
        <p class="button-action button">&#xE006;</p>
        <p class="button-action-text">Change VRAM bank</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE000;</p>
        <p class="button-action-text">Save screenshot</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE001;</p>
        <p class="button-action-text">Cancel</p>
    </div>
    <h3>RAM Editor</h3>
    <div class="button-action-group">
        <p class="button-action button">&#xE006;</p>
        <p class="button-action-text">Navigate</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE000;</p>
        <p class="button-action-text">Enter edit mode</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE001;</p>
        <p class="button-action-text">Exit edit mode<br>Exit RAM editor</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE003;</p>
        <p class="button-action-text">Jump to address</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE005;</p>
        <p class="button-action-text">Hold to navigate faster</p>
    </div>
</div>

<div id="cheats" class="section-title">Cheats</div>
<div class="section-body">
    <p>
        nds-bootstrap can use Action Replay cheats via a <code>usrcheat.dat</code> database, which needs to be in <code>sd:/_nds/TWiLightMenu/extras</code>. Once the database is there, you can select which cheats to use from a game's per-game settings menu in TWiLight Menu++.
    </p>
    <hr>
    <p>
        DeadSkullzJr's cheat database is recommended as it's the largest and most up to date:<br><a href="https://cutt.ly/DSJCheats">cutt.ly/DSJCheats</a>
    </p>
    <p>
        Alternatively, if you would like to make one yourself, you can use use R4CEE on a computer:<br><a href="https://cutt.ly/r4cce">cutt.ly/r4cce</a>
    </p>
    <hr>
    <p>
        Keep in mind that nds-bootstrap's E-type cheat implementation is unstable and as a result, your code may or may not work. This is not a fault of the database, and we hope to get this issue fixed in nds-bootstrap soon.
    </p>
</div>
