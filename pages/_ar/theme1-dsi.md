---
banner: /assets/images/dsi-theme.png
title: سمة Nintendo DSi
---

<div id="button-controls" class="section-title">أزرار التحكم</div>
<div class="section-body">
    <div class="button-action-group">
        <p class="button-action button">&#xE079;</p>
        <p class="button-action-text">نقل العنصر<br>(يجب ضبط طريقة الفرز على "مخصص")</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE07E;</p>
        <p class="button-action-text">العنصر السابق / التالي</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action"><span class="button">&#xE000; /</span> START</p>
        <p class="button-action-text">تشغيل التطبيق المحدد</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE001;</p>
        <p class="button-action-text">الرجوع إلى المجلد السابق</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE002;</p>
        <p class="button-action-text">حذف/إخفاء عنصر</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE003;</p>
        <p class="button-action-text">فتح الإعدادات المخصصة للعبة</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action">SELECT</p>
        <p class="button-action-text">افتح قائمة SELECT أو قائمة DS الكلاسيكية</p>
    </div>
</div>

<div id="touch-controls" class="section-title">التحكم باللمس</div>
<div class="section-body">
    <div class="button-action-group">
        <p class="button-action"><img src="/assets/images/left-right.png"></p>
        <p class="button-action-text">مرر عبر القائمة</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action"><img src="/assets/images/tap.png"></p>
        <p class="button-action-text">تشغيل التطبيق المحدد</p>
    </div>
    <!-- <hr>
    <div>
        <p>
            If the Sort Method is set to "Custom", you can drag the icon up to move it.
        </p>
    </div> -->
</div>

<div id="page-system" class="section-title">نظام الصفحات</div>
<div class="section-body">
    <p>
        تقسم سمة Nintendo DSi العناصر إلى صفحات بحد أقصى 40 عنصرًا في كل صفحة. يمكنك التنقل عبر الصفحات باستخدام &#xE004; و &#xE005;.
    </p>
    <ul>
        <li><p>سيؤدي الضغط على &#xE004; في أقصى يسار الصفحة إلى نقلك إلى العنصر الأول في الصفحة</p></li>
        <li><p>سيؤدي الضغط على &#xE005; في أقصى يمين الصفحة إلى نقلك إلى آخر عنصر في الصفحة</p></li>
    </ul>
    <p>
        شريط التمرير الموجود في الأسفل يُمثّل جميع العناصر في الصفحة، ويمكنك الضغط عليه للانتقال بسرعة إلى موقع محدد داخل الصفحة.
    </p>
    <p>
        إذا لم تعمل أزرار الأكتاف، يمكنك استخدام SELECT + &#xE07E; بدلاً من ذلك.
    </p>
</div>

<div id="custom-top-screen-image" class="section-title">صورة مخصصة للشاشة العلوية</div>
<div class="section-body">
    <div style="text-align: center;"><img style="border-color: black; border-width: 1px; border-style: dashed;" src="https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/romsel_dsimenutheme/nitrofiles/languages/{{ page.collection }}/photo_default.png"></div>
    <p>تدعم قائمة TWiLight Menu++ عرض صور مخصصة على الشاشة العلوية، تمامًا مثل قائمة Nintendo DSi الرسمية. ومع ذلك، بدلاً من سحبها من تطبيق كاميرا Nintendo DSi Camera، يمكنك وضع صور PNG في <code class="language-plaintext wrap">sd:/_nds/TWiLightMenu/dsimenu/photos</code></p>
    <ul>
        <li>أقصى عرض: 208 بكسل</li>
        <li>أقصى ارتفاع: 156 بكسل</li>
    </ul>
    <p>إذا كان حجم الصورة أقل من الحد الأقصى، فسيتم توسيطها بحدود سوداء.</p>
</div>

<div id="select-menu" class="section-title">قائمة SELECT</div>
<div class="section-body">
    <p>
        سيؤدي الضغط على SELECT في سمة Nintendo DSi إلى إظهار قائمة DS الكلاسيكية بشكل افتراضي. ومع ذلك، يمكنك تغييرها في إعدادات TWiLight Menu++ لتشغيل قائمة SELECT، وهي قائمة مصغرة مدمجة داخل السمة نفسها. فيما يلي خيارات القائمة الخاصة بقائمة SELECT.
    </p>
    <ul>
        <li><strong>القائمة الرئيسية</strong>: على أجهزة Nintendo DSi و Nintendo 3DS، يمكن استخدام هذا الخيار للعودة إلى القائمة الرئيسية</li>
        <li><strong>الإعدادات</strong>: سيؤدي تحديد هذا إلى تشغيل قائمة لإعدادات TWiLight Menu ++ ومشغلاتها</li>
        <li><strong>خيارات الشريط</strong>: في DS الأصلي أو DS Lite، يمكنك تشغيل أشرطة Slot-2 من هنا. على جهاز Nintendo DSi أو Nintendo 3DS الذي يعمل من بطاقة الـSD، يمكنك تشغيل بطاقة Slot-1 الخاصة بك، أو مع بعض الفلاش كارد ،والتبديل بين بطاقات الـSD التي يتصفحها TWiLight Menu++</li>
        <li><strong>الدليل</strong>: سيؤدي هذا إلى تشغيل دليل TWiLight Menu++، وهو ما تنظر إليه الآن (:</li>
    </ul>
</div>
