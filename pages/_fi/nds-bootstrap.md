---
banner: /assets/images/nds-bootstrap.png
title: nds-bootstrap
---

<div id="about" class="section-title">Tietoja</div>
<div class="section-body">
    <p>
        nds-bootstrap is a homebrew application used by TWiLight Menu++ to load DS(i) cartridge dumps, DSiWare, and DS-mode homebrew from the Nintendo DSi / 3DS SD card.
    </p>
    <p>
        It can also be used on flashcards, however DS game compatibility on flashcards is slightly lower, and can vary between different flashcards, so it's primarily intended for homebrew-only flashcards and flashcards with low compatibility.
    </p>
</div>

<div id="compatibility" class="section-title">Yhteensopivuus</div>
<div class="section-body">
    <p>
        To see if a game is compatible with nds-bootstrap, check the compatibility list:<br><a href="https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc">docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc</a>
    </p>
</div>

<div id="controls" class="section-title">Pelin sisäiset ohjaimet</div>
<div class="section-body">
    <p>
        Avaa pelin sisäinen valikko painamalla &#xE004;, &#xE07A; ja SELECT. This is known to not work on Ace3DS+ flashcards and it's clones, if set to autoboot TWLMenu++.
    </p>
    <p>
        This can be remapped with <code>Menu hotkey</code> in the nds-bootstrap page of TWiLight Menu++ settings.
    </p>
    <hr>
    <p>
        Paina &#xE004;, &#xE005;, START ja SELECT käynnistääksesi peli uudelleen.
    </p>
    <p>
        Pidä painettuna 2 sekuntia pakottaaksesi pelin käynnistymään uudelleen.
    </p>
    <hr>
    <p>
        Pidä &#xE004;, &#xE005;, &#xE07A;ja &#xE001; painettuna 2 sekunnin ajan palataksesi TWiLight Menu++ -valikkoon.
    </p>
</div>

<div id="menu-controls" class="section-title">Pelin sisäisen valikon ohjaimet</div>
<div class="section-body">
    <div class="button-action-group">
        <p class="button-action button">&#xE07D;</p>
        <p class="button-action-text">Selaa valikkoa</p>
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
        <p class="button-action-text">Palaa peliin</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE005;</p>
        <p class="button-action-text">Advance 1 frame</p>
    </div>
    <h3>Kuvakaappaus</h3>
    <div class="button-action-group">
        <p class="button-action button">&#xE006;</p>
        <p class="button-action-text">Change VRAM bank</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE000;</p>
        <p class="button-action-text">Tallenna kuvakaappaus</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE001;</p>
        <p class="button-action-text">Peruuta</p>
    </div>
    <h3>RAM-editori</h3>
    <div class="button-action-group">
        <p class="button-action button">&#xE006;</p>
        <p class="button-action-text">Selaa</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE000;</p>
        <p class="button-action-text">Siirry muokkaustilaan</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE001;</p>
        <p class="button-action-text">Poistu muokkaustilasta<br>Poistu RAM-editorista</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE003;</p>
        <p class="button-action-text">Siirry osoitteeseen</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE005;</p>
        <p class="button-action-text">Pidä painettuna selataksesi nopeammin</p>
    </div>
</div>

<div id="cheats" class="section-title">Huijaukset</div>
<div class="section-body">
    <p>
        nds-bootstrap voi käyttää Action Replay -huijauskoodeja <code>usrcheat.dat</code>-tietokannan kautta, jonka on oltava <code>sd:/_nds/TWiLightMenu/extras</code> hakemistossa. Kun tietokanta on olemassa, voit valita käytettävät huijauskoodit pelin pelikohtaisista asetuksista TWiLight Menu++:ssa.
    </p>
    <hr>
    <p>
        DeadSkullzJr:n huijaustietokantaa suositellaan, koska se on suurin ja ajantasaisin:<br><a href="https://r.pk11.us/DSJCheats">r.pk11.us/DSJCheats</a>
    </p>
    <p>
        Vaihtoehtoisesti, jos haluat tehdä sellaisen itse, voit käyttää R4CCE:tä tietokoneella:<br><a href="https://r.pk11.us/r4cce">r.pk11.us/r4cce</a>
    </p>
    <hr>
    <p>
        Muista, että nds-bootstrapin E-tyypin huijauskoodin toteutus on epävakaa, minkä seurauksena koodisi ei välttämättä toimi. Tämä ei ole tietokannan vika, ja toivomme saavamme tämän ongelman korjattua nds-bootstrapissa pian.
    </p>
</div>
