---
banner: /assets/images/nds-bootstrap.png
title: nds-bootstrap
---

<div id="about" class="section-title">Om</div>
<div class="section-body">
    <p>
        nds-bootstrap er et homebrew-program brugt at TWiLight Menu++ til at køre dumps af DS(i)-spilkort, DSiWare og DS-homebrew fra din Nintendo DSi/3DS konsols SD-kort.
    </p>
    <p>
        Det kan også bruges på flashcarts men kompatibiliteten på dem er lavere, så det er primært tiltænkt flashcarts, der kun kan køre homebrew eller i forvejen har lav kompatibilitet.
    </p>
</div>

<div id="compatibility" class="section-title">Kompatibilitet</div>
<div class="section-body">
    <p>
        For at se om et spil er kompatibelt med nds-bootstrap, kan du tjekke kompatibilitetslisten: <br><a href="https://cutt.ly/nds-compatibility">cutt.ly/nds-compatibility</a>
    </p>
    <p>
        For bedst kompatibilitet med flashcarts, forslår vi at skaffe en "DS Memory Expansion Pak".
    </p>
</div>

<div id="controls" class="section-title">Spilkontrol</div>
<div class="section-body">
    <p>
        Tryk &#xE004;, &#xE07A;, og SELECT for at åbne menuen i spillet.
    </p>
    <p>
        Dette kan genkortlægges med <code>Menu hotkey</code> på Spil og Apps siden i TWiLight Menu++ indstillinger.
    </p>
    <hr>
    <p>
        Tryk på &#xE004;, &#xE005;, START, og SELECT for at genstarte spillet.
    </p>
    <p>
        Hold i 2 sekunder for at tvinge spillet til at nulstille.
    </p>
    <hr>
    <p>
        Hold &#xE004;, &#xE005;, &#xE07A;, og &#xE000; nede i 2 sekunder for at lave et RAM-dump.
    </p>
    <hr>
    <p>
        Hold &#xE004;, &#xE005;, &#xE07A;, og &#xE001; i 2 sekunder for at vende tilbage til TWiLight Menu++.
    </p>
    <hr>
    <p>
        Hold &#xE004;, &#xE005;, &#xE002; og &#xE079; nede i ét sekund for at bytte om på skærmene.
    </p>
</div>

<div id="menu-controls" class="section-title">Spilmenukontrol</div>
<div class="section-body">
    <div class="button-action-group">
        <p class="button-action button">&#xE07D;</p>
        <p class="button-action-text">Naviger menu</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE07E;</p>
        <p class="button-action-text">Skift indstilling<br>(Indstillinger undermenu)</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE000;</p>
        <p class="button-action-text">Vælg indstilling</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE001;</p>
        <p class="button-action-text">Vend tilbage til spil</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE005;</p>
        <p class="button-action-text">Avancer én frame</p>
    </div>
    <h3>Skærmbillede</h3>
    <div class="button-action-group">
        <p class="button-action button">&#xE006;</p>
        <p class="button-action-text">Skift VRAM bank</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE000;</p>
        <p class="button-action-text">Gem skærmbillede</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE001;</p>
        <p class="button-action-text">Annuller</p>
    </div>
    <h3>RAM Editor</h3>
    <div class="button-action-group">
        <p class="button-action button">&#xE006;</p>
        <p class="button-action-text">Navigér</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE000;</p>
        <p class="button-action-text">Start redigeringstilstand</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE001;</p>
        <p class="button-action-text">Afslut redigeringstilstand<br>Afslut RAM editor</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE003;</p>
        <p class="button-action-text">Spring til adresse</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE005;</p>
        <p class="button-action-text">Hold for at navigere hurtigere</p>
    </div>
</div>

<div id="cheats" class="section-title">Snydekoder</div>
<div class="section-body">
    <p>
        nds-bootstrap kan anvende Action Replay snydekoder via en <code>usrcheat.dat</code> database, der kan placeres i <code>sd:/_nds/TWiLightMenu/extras</code>. Når databasen er fundet, kan du vælge, hvilke snydekoder der skal bruges fra menuen til indstillinger for et spil i TWiLight Menu++.
    </p>
    <hr>
    <p>
        DeadSkullzJrs snydekodedatabase anbefales, da den er den største og bedst vedligeholdt:<br><a href="https://cutt.ly/DSJCheats">cutt.ly/DSJCheats</a>
    </p>
    <p>
        Alternativt, hvis du hellere vil lave en selv, kan du bruge R4CEE på en computer:<br><a href="https://cutt.ly/r4cce">cutt.ly/r4cce</a>
    </p>
    <hr>
    <p>
        Vær opmærksom på at nds-bootstraps implementering af E-type snydekoder er ustabil og derfor er det ikke garanteret, at dine koder virker som forventet. Dette er ikke en fejl i selve databasen, og vi håber snart at få problemet i nds-bootstrap løst.
    </p>
</div>
