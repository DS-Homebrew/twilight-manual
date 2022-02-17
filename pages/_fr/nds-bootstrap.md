---
banner: /assets/images/nds-bootstrap.png
title: nds-bootstrap
---

<div id="about" class="section-title">À propos</div>
<div class="section-body">
    <p>
        nds-bootstrap est une application homebrew utilisée par TWiLight Menu++ pour charger des dumps de cartouches DS(i), DSiWare et des homebrews en mode DS à partir de la carte SD sur Nintendo DSi/3DS.
    </p>
    <p>
        Il peut également être utilisé sur les linkers, cependant, la compatibilité sur les linkers étant plus faible, il est donc principalement destiné aux linkers homebrews seuls et aux linkers avec une faible compatibilité.
    </p>
</div>

<div id="compatibility" class="section-title">Compatibilité</div>
<div class="section-body">
    <p>
        Pour savoir si un jeu est compatible avec nds-bootstrap, vérifiez la liste de compatibilité :<br><a href="https://r.pk11.us/nds-compatibility">r.pk11.us/nds-compatibility</a>
    </p>
    <p>
        Pour une meilleure compatibilité avec les linkers, nous vous recommandons de vous procurer un DS Memory Expansion Pak.
    </p>
</div>

<div id="controls" class="section-title">Contrôles en jeu</div>
<div class="section-body">
    <p>
        Appuyez sur &#xE004;, &#xE07A; et SELECT pour ouvrir le menu en jeu.
    </p>
    <p>
        Ceci peut être remappé avec <code>Touche de raccourci du menu</code> dans la page nds-bootstrap des paramètres du menu TWiLight.
    </p>
    <hr>
    <p>
        Appuyez sur &#xE004;, &#xE005;, START et SELECT pour réinitialiser le jeu.
    </p>
    <p>
        Maintenez pendant 2 secondes pour forcer le jeu à réinitialiser.
    </p>
    <hr>
    <p>
        Maintenez &#xE004;, &#xE005;, &#xE07A; et &#xE000; pendant 2 secondes pour créer un dump de la RAM.
    </p>
    <hr>
    <p>
        Maintenez &#xE004;, &#xE005;, &#xE07A; et &#xE001; pendant 2 secondes pour revenir à TWiLight Menu++.
    </p>
    <hr>
    <p>
        Maintenez &#xE004;, &#xE005;, &#xE002; et &#xE079; pendant 1 seconde pour permuter les écrans.
    </p>
</div>

<div id="menu-controls" class="section-title">Contrôles du menu en jeu</div>
<div class="section-body">
    <div class="button-action-group">
        <p class="button-action button">&#xE07D;</p>
        <p class="button-action-text">Naviguer sur le menu</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE07E;</p>
        <p class="button-action-text">Modifier le paramètre<br>(sous-menu des options)</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE000;</p>
        <p class="button-action-text">Sélectionner une option</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE001;</p>
        <p class="button-action-text">Retour au jeu</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE005;</p>
        <p class="button-action-text">Avancer de 1 frame</p>
    </div>
    <h3>Capture d'écran</h3>
    <div class="button-action-group">
        <p class="button-action button">&#xE006;</p>
        <p class="button-action-text">Changer de banque VRAM</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE000;</p>
        <p class="button-action-text">Enregistrer la capture d’écran</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE001;</p>
        <p class="button-action-text">Annuler</p>
    </div>
    <h3>Éditeur de RAM</h3>
    <div class="button-action-group">
        <p class="button-action button">&#xE006;</p>
        <p class="button-action-text">Naviguer</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE000;</p>
        <p class="button-action-text">Entrer en mode édition</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE001;</p>
        <p class="button-action-text">Quitter le mode édition<br>Quitter l'éditeur de RAM</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE003;</p>
        <p class="button-action-text">Aller à l'adresse</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE005;</p>
        <p class="button-action-text">Maintenez pour naviguer plus rapidement</p>
    </div>
</div>

<div id="cheats" class="section-title">Codes de triche</div>
<div class="section-body">
    <p>
        nds-bootstrap peut utiliser des codes de triches Action Replay via une base de données <code>usrcheat.dat</code> qui doit être placée dans <code>sd:/_nds/TWiLightMenu/extras</code>. Une fois que la base de données est présente, vous pouvez sélectionner les codes de triche à utiliser dans le menu des paramètres de chaque jeu dans TWiLight Menu++.
    </p>
    <hr>
    <p>
        La base de données de triche de DeadSkullzJr est recommandée car elle est la plus complète et la plus à jour :<br><a href="https://r.pk11.us/DSJCheats">r.pk11.us/DSJCheats</a>
    </p>
    <p>
        Sinon, si vous souhaitez en faire une vous-même, vous pouvez utiliser R4CCE sur un ordinateur :<br><a href="https://r.pk11.us/r4cce">r.pk11.us/r4cce</a>
    </p>
    <hr>
    <p>
        Gardez à l'esprit que l'implémentation de codes de triche de type E de nds-bootstrap est instable et que, par conséquent, votre code pourrait ne pas fonctionner. Ce n'est pas un défaut de la base de données, et nous espérons que ce problème sera bientôt corrigé dans nds-bootstrap.
    </p>
</div>
