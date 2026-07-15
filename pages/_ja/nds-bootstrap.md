---
banner: /assets/images/nds-bootstrap.png
title: nds-bootstrap
---

<div id="about" class="section-title">nds-bootstrapとは</div>
<div class="section-body">
    <p>
        nds-bootstrapは、ニンテンドーDSi・3DSのSDカードからDSカートリッジダンプ、DSiウェアとDSモードの自作ソフトを読み取りための、TWiLight Menu++で使われる自作アプリです。
    </p>
    <p>
        It can also be used on flashcards, however DS game compatibility on flashcards is slightly lower, and can vary between different flashcards, so it's primarily intended for homebrew-only flashcards and flashcards with low compatibility.
    </p>
</div>

<div id="compatibility" class="section-title">互換性</div>
<div class="section-body">
    <p>
        ゲームがnds-bootstrapと互換性があるかどうかを確認するには、互換性リストを確認してください：<br><a href="https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc">docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc</a>
    </p>
</div>

<div id="controls" class="section-title">ゲーム内コントロール</div>
<div class="section-body">
    <p>
        &#xE004;、&#xE07A;、SELECTを押してゲーム内メニューを開きます。 This is known to not work on Ace3DS+ flashcards and it's clones, if set to autoboot TWLMenu++.
    </p>
    <p>
        これは、TWiLight Menu++設定のnds-bootstrapのページの<code>メニューホットキー</code>で変更できます。
    </p>
    <hr>
    <p>
        &#xE004;、&#xE005;、START、SELECTを押してゲームをリセットします。
    </p>
    <p>
        2 秒間長押しすると、ゲームを強制的にリセットします。
    </p>
    <hr>
    <p>
        &#xE004;、&#xE005;、&#xE07A;、&#xE001;を2秒で長押してTWILight Menu++に戻ります。
    </p>
</div>

<div id="menu-controls" class="section-title">ゲーム内メニューのコントロール</div>
<div class="section-body">
    <div class="button-action-group">
        <p class="button-action button">&#xE07D;</p>
        <p class="button-action-text">メニューをナビゲート</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE07E;</p>
        <p class="button-action-text">設定を変更<br>（設定サブメニュー）</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE000;</p>
        <p class="button-action-text">オプションを選択</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE001;</p>
        <p class="button-action-text">ゲームに戻る</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE005;</p>
        <p class="button-action-text">1フレーム進む</p>
    </div>
    <h3>スクリーンショット</h3>
    <div class="button-action-group">
        <p class="button-action button">&#xE006;</p>
        <p class="button-action-text">VRAMバンクを変更</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE000;</p>
        <p class="button-action-text">スクリーンショットを保存</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE001;</p>
        <p class="button-action-text">キャンセル</p>
    </div>
    <h3>RAMエディター</h3>
    <div class="button-action-group">
        <p class="button-action button">&#xE006;</p>
        <p class="button-action-text">移動</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE000;</p>
        <p class="button-action-text">編集モードに入る</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE001;</p>
        <p class="button-action-text">編集モードを終了<br>RAMエディターを終了</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE003;</p>
        <p class="button-action-text">アドレスにジャンプ</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE005;</p>
        <p class="button-action-text">長押しで素早く移動</p>
    </div>
</div>

<div id="cheats" class="section-title">チート</div>
<div class="section-body">
    <p>
        nds-bootstrapは、<code>usrcheat.dat</code>データベースからAction Replayチートを使用できます。これは<code>sd:/_nds/TWiLightMenu/extras</code>に配置が必要です。 データベースがあると、TWiLight Menu++でゲームのゲームごとの設定メニューからどのチートを使用するのかを選択できます。
    </p>
    <hr>
    <p>
        DeadSkullzJrのチートデータベースは最大と最新のものとしておすすめます：<br><a href="https://r.pk11.us/DSJCheats"> r.pk11.us/DSJCheats</a>
    </p>
    <p>
        あるいは、自分で作成するのが好きな場合は、パソコンでR4CCEを使用して作成することもできます：<br><a href="https://r.pk11.us/r4cce">r.pk11.us/r4cce</a>
    </p>
    <hr>
    <p>
        nds-bootstrapのEタイプチート実装は不安定であり、その結果、コードが機能するかしないことに注意してください。 これはデータベースの問題ではなく、nds-bootstrapでこの問題をすぐに修正されることを望んでいます。
    </p>
</div>
