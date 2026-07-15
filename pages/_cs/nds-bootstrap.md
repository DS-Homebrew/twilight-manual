---
banner: /assets/images/nds-bootstrap.png
title: nds-bootstrap
---

<div id="about" class="section-title">O nds-bootstrap</div>
<div class="section-body">
    <p>
        nds-bootstrap je homebrew aplikace, kterou používá TWiLight Menu++ k načítání dump kazet DS(i), DSiWare a homebrew v režimu DS z SD karty Nintendo DSi / 3DS.
    </p>
    <p>
        It can also be used on flashcards, however DS game compatibility on flashcards is slightly lower, and can vary between different flashcards, so it's primarily intended for homebrew-only flashcards and flashcards with low compatibility.
    </p>
</div>

<div id="compatibility" class="section-title">Kompatibilita</div>
<div class="section-body">
    <p>
        To see if a game is compatible with nds-bootstrap, check the compatibility list:<br><a href="https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc">docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc</a>
    </p>
</div>

<div id="controls" class="section-title">Ovládání ve hře</div>
<div class="section-body">
    <p>
        Stisknutím tlačítek &#xE004;, &#xE07A; a SELECT otevřete herní nabídku. This is known to not work on Ace3DS+ flashcards and it's clones, if set to autoboot TWLMenu++.
    </p>
    <p>
        To lze přemapovat pomocí klávesové zkratky <code>Menu</code> na stránce nds-bootstrap v nastavení TWiLight Menu++.
    </p>
    <hr>
    <p>
        Stisknutím tlačítek &#xE004;, &#xE005;, START a SELECT resetujete hru.
    </p>
    <p>
        Podržením na 2 sekundy donutíte hru k resetu.
    </p>
    <hr>
    <p>
        Podržením &#xE004;, &#xE005;, &#xE07A; a &#xE001; po dobu 2 sekund se vrátíte do nabídky TWiLight Menu++.
    </p>
</div>

<div id="menu-controls" class="section-title">Ovládání herní nabídky</div>
<div class="section-body">
    <div class="button-action-group">
        <p class="button-action button">&#xE07D;</p>
        <p class="button-action-text">Navigace v menu</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE07E;</p>
        <p class="button-action-text">Změna nastavení<br>(podnabídka Možnosti)</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE000;</p>
        <p class="button-action-text">Vyberte možnost</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE001;</p>
        <p class="button-action-text">Návrat do hry</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE005;</p>
        <p class="button-action-text">Posun o 1 snímek</p>
    </div>
    <h3>Snímek obrazovky</h3>
    <div class="button-action-group">
        <p class="button-action button">&#xE006;</p>
        <p class="button-action-text">Změna VRAM</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE000;</p>
        <p class="button-action-text">Uložit snímek obrazovky</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE001;</p>
        <p class="button-action-text">Zrušit</p>
    </div>
    <h3>Editor RAM</h3>
    <div class="button-action-group">
        <p class="button-action button">&#xE006;</p>
        <p class="button-action-text">Navigace</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE000;</p>
        <p class="button-action-text">Vstup do režimu úprav</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE001;</p>
        <p class="button-action-text">Ukončení režimu úprav<br>Ukončení editoru RAM</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE003;</p>
        <p class="button-action-text">Přejít na adresu</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE005;</p>
        <p class="button-action-text">Podržením navigaci zrychlíte</p>
    </div>
</div>

<div id="cheats" class="section-title">Cheaty</div>
<div class="section-body">
    <p>
        nds-bootstrap může používat cheaty Action Replay prostřednictvím databáze <code>usrcheat.dat</code>, která musí být v <code>sd:/_nds/TWiLightMenu/extras</code>. Po vytvoření databáze můžete v nabídce nastavení hry v TWiLight Menu++ vybrat, které cheaty chcete použít.
    </p>
    <hr>
    <p>
        Doporučujeme databázi cheatů DeadSkullzJr, protože je největší a nejaktuálnější:<br><a href="https://r.pk11.us/DSJCheats">r.pk11.us/DSJCheats</a>
    </p>
    <p>
        Pokud si ho chcete vytvořit sami, můžete použít program R4CCE na počítači:<br><a href="https://r.pk11.us/r4cce">r.pk11.us/r4cce</a>
    </p>
    <hr>
    <p>
        Mějte na paměti, že implementace cheatů typu E v nds-bootstrap je nestabilní, a proto váš kód může, ale nemusí fungovat. Nejedná se o chybu databáze a doufáme, že tento problém bude v nds-bootstrap brzy opraven.
    </p>
</div>
