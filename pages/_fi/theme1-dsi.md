---
banner: /assets/images/dsi-theme.png
title: Nintendo DSi UI
---

<div id="button-controls" class="section-title">Painikeohjaimet</div>
<div class="section-body">
    <div class="button-action-group">
        <p class="button-action button">&#xE079;</p>
        <p class="button-action-text">Siirrä kohde<br>(Lajittelumenetelmäksi on asetettava "Mukautettu")</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE07E;</p>
        <p class="button-action-text">Edellinen / seuraava</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action"><span class="button">&#xE000; /</span> START</p>
        <p class="button-action-text">Käynnistä valittu sovellus</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE001;</p>
        <p class="button-action-text">Siirry ylähakemistoon</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE002;</p>
        <p class="button-action-text">Poista / piilota kohde</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE003;</p>
        <p class="button-action-text">Avaa pelikohtaiset asetukset</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action">SELECT</p>
        <p class="button-action-text">Avaa SELECT-valikko tai DS Classic Menu</p>
    </div>
</div>

<div id="touch-controls" class="section-title">Kosketusohjaimet</div>
<div class="section-body">
    <div class="button-action-group">
        <p class="button-action"><img src="/assets/images/left-right.png"></p>
        <p class="button-action-text">Selaa listaa</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action"><img src="/assets/images/tap.png"></p>
        <p class="button-action-text">Käynnistä valittu sovellus</p>
    </div>
    <!-- <hr>
    <div>
        <p>
            If the Sort Method is set to "Custom", you can drag the icon up to move it.
        </p>
    </div> -->
</div>

<div id="page-system" class="section-title">Sivujärjestelmä</div>
<div class="section-body">
    <p>
        The Nintendo DSi UI splits items into pages with a maximum of 40 items per page. Voit selata sivuja käyttämällä &#xE004; ja &#xE005; -liipaisimia.
    </p>
    <ul>
        <li><p>Painamalla &#xE004; vasemmanpuoleisimmalla sivulla siirryt sivun ensimmäiseen kohtaan</p></li>
        <li><p>Painamalla &#xE005; oikeanpuoleisimmalla sivulla siirryt sivun viimeiseen kohtaan</p></li>
    </ul>
    <p>
        The scrollbar at the bottom represents all of the items on a page so you can tap on it to quickly move to a specific location in the page.
    </p>
    <p>
        Jos liipaisimet eivät toimi, voit käyttää SELECT + &#xE07E; sen sijaan.
    </p>
</div>

<div id="custom-top-screen-image" class="section-title">Mukautettu ylänäytön kuva</div>
<div class="section-body">
    <div style="text-align: center;"><img style="border-color: black; border-width: 1px; border-style: dashed;" src="https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/romsel_dsimenutheme/nitrofiles/languages/{{ page.collection }}/photo_default.png"></div>
    <p>TWiLight Menu++ supports displaying custom photos on the top screen, just like the official Nintendo DSi Menu. However, rather than have it pull from the Nintendo DSi Camera application, you can place PNG images in <code class="language-plaintext wrap">sd:/_nds/TWiLightMenu/dsimenu/photos</code></p>
    <ul>
        <li>Enimmäisleveys: 208 pikseliä</li>
        <li>Enimmäiskorkeus: 156 pikseliä</li>
    </ul>
    <p>Jos kuvan koko on pienempi kuin enimmäiskoko, se keskitetään mustilla reunuksilla.</p>
</div>

<div id="select-menu" class="section-title">SELECT-valikko</div>
<div class="section-body">
    <p>
        Pressing SELECT in the Nintendo DSi UI will bring up the DS Classic Menu by default. However, in the TWiLight Menu++ settings, you can change it to launch the SELECT Menu, a miniature menu embedded inside the UI itself. Tässä ovat SELECT-valikon valikkovaihtoehdot.
    </p>
    <ul>
        <li><strong>Aloitusvalikko</strong>: Nintendo DSi- ja Nintendo 3DS -konsoleissa tätä toimintoa voi käyttää palatakseen aloitusvalikkoon</li>
        <li><strong>Asetukset</strong>: Tämän valitseminen avaa valikon TWiLight Menu++:n ja sen käynnistysohjelmien määrittämiseksi</li>
        <li><strong>Pelikasettien asetukset</strong>: Alkuperäisessä DS- tai DS Lite -konsolissa voit käynnistää Slot-2 -kasetit täältä. On a Nintendo DSi and Nintendo 3DS running from the SD card, you can run your Slot-1 card or, with certain flashcards, switch which SD card TWiLight Menu++ navigates</li>
        <li><strong>Manual</strong>: This will launch the manual for TWiLight Menu++, it's what you're looking at right now :P</li>
    </ul>
</div>
