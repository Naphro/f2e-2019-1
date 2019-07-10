<template>
    <div id="app" class="main__background">
        <div class="content">
            <div class="mission__input">
                <i class="text--default">add a new mission…</i>
                <i class="material-icons add-icon">add</i>
            </div>
            <div class="current-item">
                <div class="current-item__ring"></div>
                <div class="current-item__text">the First thing to do today</div>
            </div>
            <div class="countdown">25:00</div>
            <div class="clock">
                <div class="clock__center"></div>
                <div class="clock__border"></div>
                <i class="material-icons play-icon">play_circle_filled_white</i>
                <i class="material-icons stop-icon">stop</i>
            </div>
            <div class="to-do-items">
                <div class="to-do-item">
                    <i class="material-icons panorama_fish_eye-icon">panorama_fish_eye</i>
                    <div class="to-do-item__text">the second thing to do today</div>
                    <i class="material-icons to-do-item__play-icon">play_circle_outline</i>
                </div>
                <div class="to-do-item">
                    <i class="material-icons panorama_fish_eye-icon">panorama_fish_eye</i>
                    <div class="to-do-item__text">the third thing to do today</div>
                    <i class="material-icons to-do-item__play-icon">play_circle_outline</i>
                </div>
                <div class="to-do-item">
                    <i class="material-icons panorama_fish_eye-icon">panorama_fish_eye</i>
                    <div class="to-do-item__text">the forth thing to do today</div>
                    <i class="material-icons to-do-item__play-icon">play_circle_outline</i>
                </div>
                <div class="to-do-item--more">
                    MORE
                </div>
            </div>
        </div>
        <div class="navbar">
            <i class="material-icons list-icon">list</i>
            <i class="material-icons assignment-icon">assessment</i>
            <i class="material-icons library_music-icon">library_music</i>
            <div class="pomodoro">POMODORO</div>
        </div>
    </div>
</template>

<script>


    export default {
        name: 'app',
        components: {}
    }
</script>

<style>

    html, body {
        margin: 0;
        width: 1280px;
        height: 800px;
        /*overflow: hidden;*/
    }

    .main__background {
        height: 100%;
        background-color: #FFEDF7;
        display: flex;
        justify-content: flex-start;
    }

    .content {
        width: 65%;
        height: 100%;
        position: relative;
    }

    .navbar {
        /*float: right;*/
        width: 35%;
        height: 100%;
        background-color: #003164;

        position: relative;
    }

    .clock {
        width: 540px;
        height: 540px;

        position: absolute;
        top: 130px;
        right: -270px;
    }

    .clock__center {
        width: 506px;
        height: 506px;
        background-color: #FF4384;

        position: absolute;
        z-index: 1;
        top: calc(50% - 253px);
        right: calc(50% - 253px);
        box-sizing: border-box;
        border-radius: 50%;
    }

    .clock__border {
        width: 540px;
        height: 540px;

        position: absolute;
        z-index: 1;
        top: calc(50% - 270px);
        right: calc(50% - 270px);

        box-sizing: border-box;
        border-radius: 50%;
        border: 4px solid #FF4384;
    }

    .add-icon {
        font-size: 24px;
        color: #FF4384;

        position: absolute;
        right: 16px;
    }

    .play-icon {
        font-size: 96px;
        color: rgba(255, 255, 255, 1);

        width: 96px;
        position: absolute;
        z-index: 1;
        top: calc(50% - 48px);
        right: calc(50% - 48px);
    }

    .stop-icon {
        font-size: 24px;
        color: rgba(255, 255, 255, 1);

        width: 24px;
        position: absolute;
        z-index: 1;
        top: calc(50% + 24px);
        left: calc(50% + 48px);
    }

    .list-icon {
        font-size: 36px;
        color: rgba(255, 255, 255, 1);

        position: absolute;
        top: 48px;
        right: 85px;
    }

    .assignment-icon {
        font-size: 36px;
        color: rgba(255, 255, 255, 1);

        position: absolute;
        top: 132px;
        right: 85px;
    }

    .library_music-icon {
        font-size: 36px;
        color: rgba(255, 255, 255, 1);

        position: absolute;
        top: 216px;
        right: 85px;
    }

    .panorama_fish_eye-icon {
        font-size: 24px;
        color: #003164;
    }

    .to-do-item__play-icon {
        font-size: 24px;
        color: #003164;
        width: 24px;
        margin-left: auto;
    }

    .pomodoro {
        font-family: Futura;
        font-weight: bold;
        font-size: 24px;
        color: #FFFFFF;

        transform: rotate(90deg);
        transform-origin: 100% 0;

        position: absolute;
        top: 752px;
        right: 85px;

    }

    .mission__input {
        width: 445px;
        height: 56px;
        background-color: #FFFFFF;

        position: relative;
        top: 48px;
        left: 85px;

        box-sizing: border-box;
        padding: 16px;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .text--default {
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        font-size: 16px;
        color: #FF4384;

        text-transform: uppercase;
    }

    .countdown {
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        font-size: 176px;
        color: #FF4384;

        position: absolute;
        top: calc(50% - 103px);
        left: 80px;
    }

    .current-item {
        position: absolute;
        top: 249px;
        left: 85px;

        display: flex;
        align-items: start;
    }

    .current-item__text {
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        font-size: 24px;
        color: #003164;
        padding-left: 16px;

        text-transform: uppercase;
    }

    .current-item__ring {
        box-sizing: border-box;
        width: 48px;
        height: 48px;
        background-color: transparent;
        border: 2px solid #003164;
        border-radius: 50%;
    }

    .to-do-items {
        position: absolute;
        left: 85px;
        top: 610px;

        display: flex;
        flex-direction: column;
    }

    .to-do-item {
        margin-top: 9px;
        padding-bottom: 8px;
        box-sizing: border-box;
        display: flex;
        width: 445px;
        border-bottom: 1px solid rgba(0, 49, 100, 0.2);
    }

    .to-do-item:nth-of-type(1) {
        margin-top: 0;
    }

    .to-do-item__text {
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        font-size: 16px;
        color: #003164;
        padding-left: 4px;
        text-transform: uppercase;
    }

    .to-do-item--more {
        margin-top: 9px;
        margin-left: auto;

        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        font-size: 16px;
        color: #FF4384;
    }
</style>
