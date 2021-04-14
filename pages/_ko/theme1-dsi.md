---
banner: /assets/images/dsi-theme.png
title: 닌텐도 DSi 테마
---

<div id="button-controls" class="section-title">버튼 조작</div>
<div class="section-body">
    <div class="button-action-group">
        <p class="button-action button">&#xE079;</p>
        <p class="button-action-text">항목 이동<br>(정렬 방식이 "사용자 지정"으로 설정돼야함)</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE07E;</p>
        <p class="button-action-text">이전 / 다음 항목</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action"><span class="button">&#xE000; /</span> START</p>
        <p class="button-action-text">선택한 응용프로그램 실행</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE001;</p>
        <p class="button-action-text">상위 디렉토리로 이동</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE002;</p>
        <p class="button-action-text">항목 제거 / 숨김</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action button">&#xE003;</p>
        <p class="button-action-text">게임 별 설정 열기</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action">SELECT</p>
        <p class="button-action-text">SELECT 또는 DS 클래식 메뉴 열기</p>
    </div>
</div>

<div id="touch-controls" class="section-title">터치 조작</div>
<div class="section-body">
    <div class="button-action-group">
        <p class="button-action"><img src="/assets/images/left-right.png"></p>
        <p class="button-action-text">목록 스크롤</p>
    </div>
    <hr>
    <div class="button-action-group">
        <p class="button-action"><img src="/assets/images/tap.png"></p>
        <p class="button-action-text">선택한 응용프로그램 실행</p>
    </div>
    <!-- <hr>
    <div>
        <p>
            If the Sort Method is set to "Custom", you can drag the icon up to move it.
        </p>
    </div> -->
</div>

<div id="page-system" class="section-title">페이지 시스템</div>
<div class="section-body">
    <p>
        닌텐도 DSi 테마는 한 페이지당 최대 40개로 항목을 분할합니다. &#xE004; 와 &#xE005; 트리거를 이용해서 페이지를 탐색할 수 있습니다.
    </p>
    <ul>
        <li><p>맨 왼쪽 페이지에서 &#xE004; 버튼을 누르면 페이지의 첫 번째 항목으로 이동하게 됩니다.</p></li>
        <li><p>맨 오른쪽 페이지에서 &#xE005; 버튼을 누르면 페이지의 마지막 항목으로 이동하게 됩니다</p></li>
    </ul>
    <p>
        하단의 스크롤 바는 한 페이지에 있는 모든 아이템을 표시하므로, 페이지의 특정 위치로 빠르게 이동하는데에 쓸 수 있습니다.
    </p>
    <p>
        트리거가 작동하지 않으면 SELECT + &#xE07E; 을 대신 사용 할 수 있습니다.
    </p>
</div>

<div id="custom-top-screen-image" class="section-title">사용자 지정 상단 화면 이미지</div>
<div class="section-body">
    <div style="text-align: center;"><img style="border-color: black; border-width: 1px; border-style: dashed;" src="/assets/images/photo-default.png"></div>
    <p>TWiLight Menu++는 닌텐도 DSi 공식 메뉴에서 상단 화면에 사용자 지정 사진을 띄우는것을 지원합니다. 하지만, DSi 카메라 애플리케이션에서 꺼내오고 싶지않으면, <code class="language-plaintext wrap">sd:/_nds/TWiLightMenu/dsimenu/photos</code>에 PNG 파일을 놓으세요.</p>
    <ul>
        <li>최대 너비: 208픽셀</li>
        <li>최대 높이: 156픽셀</li>
    </ul>
    <p>이미지가 최대 크기보다 작다면, 검정 테두리를 만든 채로 가운데 정렬시킵니다.</p>
</div>

<div id="select-menu" class="section-title">SELECT 메뉴</div>
<div class="section-body">
    <p>
        닌텐도 DSi 테마에서 SELECT 버튼을 누르면, 기본적으로 DS 클래식 메뉴가 나옵니다. 하지만, TWiLight Menu++ 설정에서는 테마 자체에 내장된 메뉴인 SELECT Menu를 실행하도록 변경할 수 있습니다. SELECT 메뉴에 대한 옵션은 다음과 같습니다.
    </p>
    <ul>
        <li><strong>홈 메뉴:</strong> 닌텐도 DSi 또는 닌텐도 3DS 본체에서 이 옵션을 선택하면 홈 메뉴로 돌아갑니다</li>
        <li><strong>설정:</strong> 이 옵션을 선택하면 TWiLight Menu++와 런처의 설정을 실행합니다</li>
        <li><strong>카트리지 옵션:</strong> 오리지널 DS 또는 DS Lite에서 Slot-2 디바이스를 여기에 실행할 수 있게됩니다. SD 카드에서 실행하는 닌텐도 DSi 와 닌텐도 3DS에 Slot-1 카드 또는 특정 flashcard들을 실행하거나, TWiLight Menu++가 탐색할 SD 카드를 바꿉니다</li>
        <li><strong>설명서</strong>: TWiLight Menu++ 설명서를 실행합니다. 지금 보고 계시는 것과 똑같아요 :P</li>
    </ul>
</div>
