<template lang="pug">
    div#app.main
        div.main__left
            div.content
                div.mission__input
                    i.text--default add a new mission…
                    i.material-icons.add-icon add
                div.current-item
                    div.current-item__circle
                    div.current-item__content
                        div.current-item__text the First thing to do today
                        div.current-item__small-circle
                div.countdown 25:00
                div.todo-items
                    div.todo-item
                        i.material-icons.panorama_fish_eye-icon panorama_fish_eye
                        div.todo-item__text the second thing to do today
                        i.material-icons.todo-item__play-icon play_circle_outline
                    div.todo-item
                        i.material-icons.panorama_fish_eye-icon panorama_fish_eye
                        div.todo-item__text the second thing to do today
                        i.material-icons.todo-item__play-icon play_circle_outline
                    div.todo-item
                        i.material-icons.panorama_fish_eye-icon panorama_fish_eye
                        div.todo-item__text the forth thing to do today
                        i.material-icons.todo-item__play-icon play_circle_outline
                    div.todo-item--more MORE
        div.clock
            div.clock__center--running
            div.clock__border
            //- i.material-icons.play-icon play_circle_filled_white
            i.material-icons.play-icon--running pause_circle_filled
            i.material-icons.square-icon--running stop
        div.main__right
            div.navbar
                i.material-icons.list-icon list
                i.material-icons.assignment-icon assessment
                i.material-icons.library_music-icon library_music
                div.pomodoro POMODORO
</template>

<script>
    export default {
        name: 'app'
    }

</script>

<style lang="sass">

    $primary-color: #FF4384
    $secondary-color: #003164

    %primary-font
        font-family: 'Roboto', sans-serif
        font-weight: bold

    html
        width: 1280px
        height: 800px

    body
        width: 100%
        height: 100%
        margin: 0

    .main
        width: 100%
        height: 100%
        display: flex
        justify-content: flex-start
        position: relative
        overflow-x: hidden
        &__left
            width: 65%
            height: 100%
            background-color: #FFEDF7
            position: relative
        &__right
            width: 35%
            height: 100%
            background-color: $secondary-color
            position: relative

    .content
        width: calc(1280px * 0.65)
        height: 100%
        position: absolute
        right: 0

    .navbar
        width: calc(1280px * 0.35)
        height: 100%
        position: absolute
        left: 0


    .clock
        position: absolute
        top: 50%
        left: 65%
        &__center
            width: 506px
            height: 506px
            background-color: $primary-color
            position: absolute
            z-index: 1
            top: calc(50% - 253px)
            right: calc(50% - 253px)
            box-sizing: border-box
            border-radius: 50%
            &--running
                width: 504px
                height: 504px
                background-color: #FFFFFF
                position: absolute
                z-index: 1
                top: calc(50% - 252px)
                right: calc(50% - 252px)
                box-sizing: border-box
                border-radius: 50%
                border: 4px solid $primary-color
        &__border
            width: 540px
            height: 540px
            position: absolute
            z-index: 1
            top: calc(50% - 270px)
            right: calc(50% - 270px)
            box-sizing: border-box
            border-radius: 50%
            border: 4px solid $primary-color

    .add-icon
        font-size: 24px
        color: $primary-color
        position: absolute
        right: 16px

    .play-icon
        font-size: 96px
        color: #FFFFFF
        width: 96px
        position: absolute
        z-index: 1
        top: calc(50% - 48px)
        right: calc(50% - 48px)
        &--running
            font-size: 96px
            color: $primary-color
            width: 96px
            position: absolute
            z-index: 1
            top: calc(50% - 48px)
            right: calc(50% - 48px)

    .square-icon
        font-size: 24px
        color: #FFFFFF
        width: 24px
        position: absolute
        z-index: 1
        top: calc(50% + 24px)
        left: calc(50% + 48px)
        &--running
            font-size: 24px
            color: $primary-color
            width: 24px
            position: absolute
            z-index: 1
            top: calc(50% + 24px)
            left: calc(50% + 48px)

    .list-icon
        font-size: 36px
        color: rgba(255, 255, 255, 1)
        position: absolute
        top: 48px
        right: 85px

    .assignment-icon
        font-size: 36px
        color: rgba(255, 255, 255, 1)
        position: absolute
        top: 132px
        right: 85px


    .library_music-icon
        font-size: 36px
        color: rgba(255, 255, 255, 1)
        position: absolute
        top: 216px
        right: 85px

    .panorama_fish_eye-icon
        font-size: 24px
        color: $secondary-color

    .pomodoro
        font-family: 'Futura', 'Roboto', sans-serif
        font-weight: bold
        font-size: 24px
        color: #FFFFFF
        transform: rotate(90deg)
        transform-origin: 100% 0
        position: absolute
        top: 752px
        right: 85px

    .mission__input
        width: 445px
        height: 56px
        background-color: #FFFFFF
        position: relative
        top: 48px
        left: 85px
        box-sizing: border-box
        padding: 16px
        margin: 0px
        display: flex
        justify-content: space-between
        align-items: center

    .text--default
        @extend %primary-font
        font-size: 16px
        color: $primary-color
        text-transform: uppercase

    .countdown
        @extend %primary-font
        font-size: 176px
        color: $primary-color
        position: absolute
        top: calc(50% - 103px)
        left: 80px

    .current-item
        position: absolute
        top: 249px
        left: 85px
        display: flex
        align-items: flex-start
        &__text
            @extend %primary-font
            font-size: 24px
            color: $secondary-color
            text-transform: uppercase
        &__circle
            box-sizing: border-box
            width: 48px
            height: 48px
            background-color: transparent
            border: 2px solid $secondary-color
            border-radius: 50%
            margin-right: 16px
        &__content
            height: 48px
            display: flex
            flex-direction: column
            justify-content: space-between
        &__small-circle
            width: 12px
            height: 12px
            border-radius: 50%
            border: 1px solid $primary-color
            align-self: end

    .todo-items
        position: absolute
        left: 85px
        top: 610px
        display: flex
        flex-direction: column

    .todo-item
        margin-top: 9px
        padding-bottom: 8px
        box-sizing: border-box
        display: flex
        align-items: center
        width: 445px
        border-bottom: 1px solid rgba(0, 49, 100, 0.2)
        &:nth-of-type(1)
            margin-top: 0
        &__play-icon
            font-size: 24px
            color: $secondary-color
            width: 24px
            margin-left: auto
        &__text
            @extend %primary-font
            font-size: 16px
            color: $secondary-color
            padding-left: 4px
            text-transform: uppercase
        &--more
            margin-top: 9px
            margin-left: auto
            @extend %primary-font
            font-size: 16px
            color: $primary-color

</style>
