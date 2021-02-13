---
layout: manual-page
banner: /assets/images/dsi-theme.png
title: Nintendo DSi 主题
---

<div class="section-title">操作方式</div>
<div class="section-body">
    <div class="button-action-group">
        <p class="button-action button">&#xE079;</p>
        <p class="button-action-text">移动项目<br>(排序方式必须为"自定义")</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE07E;</p>
        <p class="button-action-text">上一个/下一个项目</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action"><span class="button">&#xE000; /</span> START</p>
        <p class="button-action-text">启动选择的应用</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE001;</p>
        <p class="button-action-text">上一级目录</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE002;</p>
        <p class="button-action-text">删除 / 隐藏项目</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE003;</p>
        <p class="button-action-text">打开游戏子设置菜单</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action">SELECT</p>
        <p class="button-action-text">打开SELECT菜单或DS Classic菜单</p>
    </div>
</div>

<div class="section-title">触摸控制方法</div>
<div class="section-body">
    <div class="button-action-group">
        <p class="button-action"><img src="/assets/images/left-right.png"></p>
        <p class="button-action-text">滚动列表</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action"><img src="/assets/images/tap.png"></p>
        <p class="button-action-text">启动选择的应用</p>
    </div>
    <!-- <hr>
    <div>
        <p>
            If the Sort Method is set to "Custom", you can drag the icon up to move it.
        </p>
    </div> -->
</div>

<div class="section-title">翻页系统</div>
<div class="section-body">
    <p>
        The Nintendo DSi theme splits items into pages with a maximum of 40 items per page. You can navigate through the pages using the &#xE004; and &#xE005; triggers.
    </p>
    <ul>
        <li><p>Pressing &#xE004; on the leftmost page will take you to the first item on the page</p></li>
        <li><p>Pressing &#xE005; on the rightmost page will take you to the last item on the page</p></li>
    </ul>
    <p>
        The scrollbar at the bottom represents all of the items on a page so you can tap on it to quickly move to a specific location in the page.
    </p>
    <p>
        If your triggers do not work, you can use SELECT + &#xE07E; instead.
    </p>
</div>

<div class="section-title">Custom Top Screen Image</div>
<div class="section-body">
    <div style="text-align: center;"><img style="border-color: black; border-width: 1px; border-style: dashed;" src="/assets/images/photo-default.png"></div>
    <p>TWiLight Menu++ supports displaying custom photos on the top screen, just like the official Nintendo DSi Menu. However, rather than have it pull from the Nintendo DSi Camera application, you can place PNG images in <code class="language-plaintext wrap">sd:/_nds/TWiLightMenu/dsimenu/photos</code></p>
    <ul>
        <li>Maximum width: 208 pixels</li>
        <li>Maximum height: 156 pixels</li>
    </ul>
    <p>If the image size is less than the maximum, it will be centered with black boarders.</p>
</div>

<div class="section-title">SELECT Menu</div>
<div class="section-body">
    <p>
        Pressing SELECT in the Nintendo DSi theme will bring up the DS Classic Menu by default. However, in the TWiLight Menu++ settings, you can change it to launch the SELECT Menu, a miniature menu embedded inside the theme itself. Here are the menu options for the SELECT Menu.
    </p>
    <ul>
        <li><strong>HOME菜单:</strong> 仅在Nintendo DSi或是Nintendo 3DS主机中出现，点击后主机将自动退出软件，并返回到主机的HOME菜单。</li>
        <li><strong>Settings</strong>: Selecting this will launch a menu for configuring TWiLight Menu++ and its launchers</li>
        <li><strong>卡带有关选项:</strong> 对于DS/DS Lite，在此您可以直接加载Slot-2卡槽内的设备。 对于在主机SD卡内运行本软件的DSi/3DS主机，在此您可以直接加载Slot-1卡槽内的设备或是烧录卡。</li>
        <li><strong>说明书</strong>: 这将启动TWiLight Menu++的说明书, 它就是你现在看到的 :P</li>
    </ul>
</div>
