---
banner: /assets/images/nds-bootstrap.png
title: nds-bootstrap
---

<div id="about" class="section-title">Über</div>
<div class="section-body">
    <p>
        nds-bootstrap ist eine Homebrew-Anwendung die von TWiLight Menu++ benutzt wird, um DS(i)-Karten-Dumps, DSiWare, und DS-Modus-Homebrew von der Nintendo DSi/3DS-SD-Karte zu starten.
    </p>
    <p>
        Es kann auch auf Flashkarten verwendet werden, aber die Kompatibilität auf Flashkarten ist niedriger und ist daher hauptsächlich für nur-Homebrew-Flashkarten und Flashkarten mit geringer Kompatibilität gedacht.
    </p>
</div>

<div id="compatibility" class="section-title">Kompatibilität</div>
<div class="section-body">
    <p>
        Um zu sehen ob ein Spiel mit nds-bootstrap kompatibel ist, überprüfe die Kompatibilitätsliste:<br><a href="https://r.pk11.us/nds-compatibility">r.pk11.us/nds-compatibility</a>
    </p>
    <p>
        Für die beste Kompatibilität mit Flashkarten empfehlen wir ein DS Memory Expansion Pak.
    </p>
</div>

<div id="controls" class="section-title">In-Game-Steuerung</div>
<div class="section-body">
    <p>
        Drücke &#xE004;, &#xE07A;, und SELECT, um das Ingame-Menü zu öffnen.
    </p>
    <p>
        Dies kann mit <code>Menü-Hotkey</code> auf der Spiel- und App-Seite der TWiLight Menu++ Einstellungen erneut festgelegt werden.
    </p>
    <hr>
    <p>
        Drücke &#xE004;, &#xE005;, START und SELECT, um das Spiel zurückzusetzen.
    </p>
    <p>
        2 Sekunden gedrückt halten, um das Spiel zum Zurücksetzen zu zwingen.
    </p>
    <hr>
    <p>
        Halte &#xE004;, &#xE005;, &#xE07A;, und &#xE000; für 2 Sekunden gedrückt, um einen RAM Dump zu erstellen.
    </p>
    <hr>
    <p>
        Halte &#xE004;, &#xE005;, &#xE07A;, und &#xE001; für 2 Sekunden gedrückt, um zu TWiLight Menu++ zurückzukehren.
    </p>
    <hr>
    <p>
        Halte &#xE004;, &#xE005;, &#xE002;, und &#xE079; für 1 Sekunde gedrückt, um die Bildschirme zu tauschen.
    </p>
</div>

<div id="menu-controls" class="section-title">In-Game-Menü-Steuerung</div>
<div class="section-body">
    <div class="button-action-group">
        <p class="button-action button">&#xE07D;</p>
        <p class="button-action-text">Menü navigieren</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE07E;</p>
        <p class="button-action-text">Einstellung ändern<br>(Untermenü Optionen)</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE000;</p>
        <p class="button-action-text">Option wählen</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE001;</p>
        <p class="button-action-text">Zurück zum Spiel</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE005;</p>
        <p class="button-action-text">Einen Frame weiter springen</p>
    </div>
    <h3>Screenshot</h3>
    <div class="button-action-group">
        <p class="button-action button">&#xE006;</p>
        <p class="button-action-text">VRAM-Bank ändern</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE000;</p>
        <p class="button-action-text">Screenshot speichern</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE001;</p>
        <p class="button-action-text">Abbrechen</p>
    </div>
    <h3>RAM-Editor</h3>
    <div class="button-action-group">
        <p class="button-action button">&#xE006;</p>
        <p class="button-action-text">Navigieren</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE000;</p>
        <p class="button-action-text">Bearbeitungsmodus aktivieren</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE001;</p>
        <p class="button-action-text">Bearbeitungsmodus beenden<br>RAM-Editor beenden</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE003;</p>
        <p class="button-action-text">Zu Adresse springen</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE005;</p>
        <p class="button-action-text">Halten um schneller zu navigieren</p>
    </div>
</div>

<div id="cheats" class="section-title">Cheats</div>
<div class="section-body">
    <p>
        nds-bootstrap kann Action Replay Cheats über eine <code>usrcheat.dat</code> Datenbank anwenden, die in <code>sd:/_nds/TWiLightMenu/extras</code> platziert werden muss. Sobald die Datenbank vorhanden ist, kannst du in TWiLight Menu++ im Spieleinstellungsmenü eines Spiels auswählen, welche Cheats verwendet werden sollen.
    </p>
    <hr>
    <p>
        DeadSkullzJr's Cheatdatenbank wird empfohlen, da es die größte und aktuellste ist:<br><a href="https://r.pk11.us/DSJCheats">r.pk11.us/DSJCheats</a>
    </p>
    <p>
        Wenn du selbst eine erstellen möchtest, kannst du alternativ R4CCE auf einem Computer verwenden:<br><a href="https://r.pk11.us/r4cce">r.pk11.us/r4cce</a>
    </p>
    <hr>
    <p>
        Denke daran, dass die Implementierung von E-Type Cheats in nds-bootstrap instabil ist und dein Code daher möglicherweise nicht funktioniert. Das ist kein Fehler an der Datenbank, und wir hoffen, dieses Problem in nds-bootstrap bald beheben zu können.
    </p>
</div>
