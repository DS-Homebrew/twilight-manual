---
banner: /assets/images/dsi-theme.png
title: Nintendo DSi Tema
---

<div id="button-controls" class="section-title">Knappstyrning</div>
<div class="section-body">
    <div class="button-action-group">
        <p class="button-action button">&#xE079;</p>
        <p class="button-action-text">Flytta objekt<br>(sorteringsmetod måste vara inställd på "Anpassad")</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE07E;</p>
        <p class="button-action-text">Föregående / nästa objekt</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action"><span class="button">&#xE000; /</span> START</p>
        <p class="button-action-text">Starta vald applikation</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE001;</p>
        <p class="button-action-text">Gå upp en nivå</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE002;</p>
        <p class="button-action-text">Ta bort / dölj objekt</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE003;</p>
        <p class="button-action-text">Öppna spelspecifika inställningar</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action">SELECT</p>
        <p class="button-action-text">Öppna SELECT menyn eller DS Classic Menu</p>
    </div>
</div>

<div id="touch-controls" class="section-title">Touchstyrning</div>
<div class="section-body">
    <div class="button-action-group">
        <p class="button-action"><img src="/assets/images/left-right.png"></p>
        <p class="button-action-text">Bläddra igenom listan</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action"><img src="/assets/images/tap.png"></p>
        <p class="button-action-text">Starta vald applikation</p>
    </div>
    <!-- <hr>
    <div>
        <p>
            If the Sort Method is set to "Custom", you can drag the icon up to move it.
        </p>
    </div> -->
</div>

<div id="page-system" class="section-title">Sidsystem</div>
<div class="section-body">
    <p>
        Nintendo DSi temat delar upp objekt i sidor med högst 40 objekt per sida. Du kan navigera genom sidorna med hjälp av &#xE004; och &#xE005;.
    </p>
    <ul>
        <li><p>Att trycka &#xE004; på den vänstra sidan tar dig till den första objekten på sidan</p></li>
        <li><p>Att trycka &#xE005; på den högra sidan tar dig till den sista objekten på sidan</p></li>
    </ul>
    <p>
        Rullningslistan längst ner representerar alla objekt på en sida så att du kan trycka på den för att snabbt flytta till en viss plats på sidan.
    </p>
    <p>
        Om dina triggers inte fungerar så kan du använda SELECT + &#xE07E; istället.
    </p>
</div>

<div id="custom-top-screen-image" class="section-title">Anpassad toppbildsbild</div>
<div class="section-body">
    <div style="text-align: center;"><img style="border-color: black; border-width: 1px; border-style: dashed;" src="https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/romsel_dsimenutheme/nitrofiles/languages/{{ page.collection }}/photo_default.png"></div>
    <p>TWiLight Menu+ + stöder visning av anpassade bilder på den översta skärmen, precis som den officiella Nintendo DSi Menyn. I stället för att ta bilder från appen Nintendo DSi Camera kan du placera PNG-bilder i <code class="language-plaintext wrap">sd:/_nds/TWiLightMenu/dsimenu/photos</code></p>
    <ul>
        <li>Maximal bredd: 208 pixlar</li>
        <li>Maximal höjd: 156 pixlar</li>
    </ul>
    <p>Om bildstorleken är mindre än den maximala kommer svarta kanter att omge din bild.</p>
</div>

<div id="select-menu" class="section-title">SELECT meny</div>
<div class="section-body">
    <p>
        Att trycka på SELECT i Nintendo DSi temat kommer att ta upp DS Classic Menu som standard. Men i TWiLight Menu++'s inställningar kan du ändra det till att öppna SELECT menyn, en miniatyrmeny inbäddad i själva temat. Här är menyalternativen för SELECT menyn.
    </p>
    <ul>
        <li><strong>Hemmenyn:</strong> På Nintendo DSi och Nintendo 3DS så visas detta alternativ för att återvända till hemmenyn</li>
        <li><strong>Inställningar:</strong> Om du väljer detta kommer du att starta en meny för att konfigurera TWiLight Menu++ och dess launchers</li>
        <li><strong>Cartridge Alternativ</strong>: På en original DS eller DS Lite så kan du starta dina Slot-2-kassetter härifrån. På en Nintendo DSi och Nintendo 3DS som kör från SD-kortet, så kan du köra ditt Slot-1 kort eller, med vissa minneskort, växla vilket SD-kort TWiLight Menu++ navigerar</li>
        <li><strong>Manual</strong>: Detta kommer att starta manualen för TWiLight Menu++, det är vad du tittar på just nu :P</li>
    </ul>
</div>
