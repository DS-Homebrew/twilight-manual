---
banner: /assets/images/nds-bootstrap.png
title: nds-bootstrap
---

<div id="about" class="section-title">Om</div>
<div class="section-body">
    <p>
        nds-bootstrap er en homebrew applikasjon brukt av TWiLight Menu++ for å laste DS(i) kort dumper, DSiWare, og DS-modus homebrew fra Nintendo DSi / 3DS SD-kort.
    </p>
    <p>
        Den kan også brukes på flashkort, men kompatibiliteten på flashkort er lavere, så den er primært beregnet for homebrew-only flashkort og flashkort med lav kompatibilitet.
    </p>
</div>

<div id="compatibility" class="section-title">Kompatibilitet</div>
<div class="section-body">
    <p>
        For å se om et spill er kompatibelt med nds-bootstrap, sjekk kompabilitetslisten:<br><a href="https://r.pk11.us/nds-compatibility">r.pk11.us/nds-compatibility</a>
    </p>
    <p>
        For den beste kompatibiliteten på flashkortet. Vi anbefaler å få en DS Memory Expansion Pake.
    </p>
</div>

<div id="controls" class="section-title">I spill styring</div>
<div class="section-body">
    <p>
        Trykk &#xE004;, &#xE07A; og SELECT for å åpne menyen i spillet.
    </p>
    <p>
        Dette kan tilordnes med <code>Meny-hurtigtasten</code> på nds-bootstrap siden av TWiLight Menu++.
    </p>
    <hr>
    <p>
        Trykk &#xE004;, &#xE005;, START, og SELECT for å tilbakestille spillet.
    </p>
    <p>
        Hold i 2 sekunder for å tvinge spillet til å tilbakestille.
    </p>
    <hr>
    <p>
        Hold &#xE004;, &#xE005;, &#xE07A;, og &#xE000; i 2 sekunder for å lage en RAM dump.
    </p>
    <hr>
    <p>
        Hold &#xE004;, &#xE005;, &#xE07A;, og &#xE001; i 2 sekunder for å gå tilbake til TWiLight Menu++.
    </p>
    <hr>
    <p>
        Hold &#xE004;, &#xE005;, &#xE002;, og &#xE079; i 1 sekund for å bytte om skjermene.
    </p>
</div>

<div id="menu-controls" class="section-title">I spill meny styring</div>
<div class="section-body">
    <div class="button-action-group">
        <p class="button-action button">&#xE07D;</p>
        <p class="button-action-text">Naviger meny</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE07E;</p>
        <p class="button-action-text">Endre innstilling<br>(Alternativ submenu)</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE000;</p>
        <p class="button-action-text">Velg alternativ</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE001;</p>
        <p class="button-action-text">Gå tilbake til spill</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE005;</p>
        <p class="button-action-text">Frem 1 et bilde</p>
    </div>
    <h3>Skjermdump</h3>
    <div class="button-action-group">
        <p class="button-action button">&#xE006;</p>
        <p class="button-action-text">Endre VRAM bank</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE000;</p>
        <p class="button-action-text">Lagre skjermdump</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE001;</p>
        <p class="button-action-text">Avbryt</p>
    </div>
    <h3>RAM Redaktør</h3>
    <div class="button-action-group">
        <p class="button-action button">&#xE006;</p>
        <p class="button-action-text">Naviger</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE000;</p>
        <p class="button-action-text">Gå inn i Redigeringsmodus</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE001;</p>
        <p class="button-action-text">Avslutt redigeringsmodus<br>Avslutt RAM Redaktør</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE003;</p>
        <p class="button-action-text">Hopp til adresse</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE005;</p>
        <p class="button-action-text">Hold for å navigere raskere</p>
    </div>
</div>

<div id="cheats" class="section-title">Juksekoder</div>
<div class="section-body">
    <p>
        nds-bootstrap kan bruke Action Replay juksekoder via en <code>usrcheat.dat</code> database, som må plasseres på <code>sd:/_nds/TWiLightMenu/extras</code>. Når databasen er der, kan du velge hvilken juksekode du skal bruke fra menyen for hvert spill i TWiLight Menu++.
    </p>
    <hr>
    <p>
        DeadullzJr's juksedatabase anbefales da det er den største og mest oppdatert:<br><a href="https://r.pk11.us/DSJCheats">r.pk11.us/DSJCheats</a>
    </p>
    <p>
        Alternativt hvis du vil lage en selv, kan du bruke R4CEE på en datamaskin::<br><a href="https://r.pk11.us/r4cce">r.pk11.us/r4cce</a>
    </p>
    <hr>
    <p>
        Husk at implementeringen av nds-bootstraps E-type juksekode er ustabil, og at koden din kan fungere eller kanskje ikke. Dette er ikke en feil i databasen, og vi håper å få dette problemet fikset i nds-bootstrap snart.
    </p>
</div>
