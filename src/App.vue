<template lang="pug">
    div#app
        div.main
            div.todo-add
                input(placeholder='add a new mission…')
                //i.text--default
                i.material-icons.add-icon add
            div.current
                div.current-item
                    div.current-item__circle
                    div.current-item__content
                        div.current-item__text the First thing to do today
                        div.current-item__small-circle
                div.countdown 25:00
            ul.todo__list
                li.todo-item
                    i.material-icons.panorama_fish_eye-icon panorama_fish_eye
                    div.todo-item__text the second thing to do today
                    i.material-icons.todo-item__play-icon play_circle_outline
                li.todo-item
                    i.material-icons.panorama_fish_eye-icon panorama_fish_eye
                    div.todo-item__text the second thing to do today
                    i.material-icons.todo-item__play-icon play_circle_outline
                li.todo-item
                    i.material-icons.panorama_fish_eye-icon panorama_fish_eye
                    div.todo-item__text the forth thing to do today
                    i.material-icons.todo-item__play-icon play_circle_outline
                li.todo-item--more MORE
            div.clock
                div.clock__border
                    div.clock__center
                        //- i.material-icons.play-icon play_circle_filled_white
                        //i.material-icons.play-icon--running pause_circle_filled
                        //i.material-icons.square-icon--running stop
        nav.navbar
            a
                i.material-icons.list-icon list
            a
                i.material-icons.assignment-icon assessment
            a
                i.material-icons.library_music-icon library_music
            div
                span POMODORO
</template>

<script>
    export default {
        name: 'app'
    }

</script>

<style lang="sass">

    $white: #FFFFFF
    $primary-color: #FF4384
    $background-color: #FFEDF7
    $secondary-color: #003164

    %nav-icon
        font-size: 36px
        color: $white

    *
        box-sizing: border-box
        font-family: 'Roboto', sans-serif
        font-weight: bold
        text-transform: uppercase

    ul
        padding: 0
        list-style: none

    html
        height: 100%
        overflow: hidden

    body
        height: 100%
        margin: 0

    #app
        height: 100%
        display: flex

    .main
        width: 100%
        height: 100%
        display: flex
        flex-direction: column
        justify-content: space-between
        flex-wrap: wrap
        background-color: $background-color
        padding: 48px 85px

    .navbar
        position: fixed
        right: 0px
        width: 35%
        height: 100%
        background-color: $secondary-color
        padding: 48px 85px
        display: flex
        flex-direction: column
        align-items: flex-end
        z-index: 1
        a
            margin-bottom: 48px
            i
                @extend %nav-icon
        div
            margin-top: auto
            transform: translateX(-36px)
            span
                display: block
                font-family: 'Futura', 'Roboto', sans-serif
                font-size: 24px
                color: $white
                transform: rotate(90deg)
                transform-origin: right bottom
                height: 36px

    .clock
        display: flex
        min-width: 540px
        min-height: 540px
        /*margin-top: auto*/
        /*margin-bottom: auto*/
        /*margin-right: calc(35vw - 270px - 85px)*/
        /*margin-left: auto*/
        margin: auto calc(35vw - 270px - 85px) auto auto
        z-index: 2
        &__center
            width: 506px
            height: 506px
            background-color: $primary-color
            z-index: 1
            border-radius: 50%
            margin: auto
            &--running
                width: 504px
                height: 504px
                background-color: $white
                z-index: 1
                top: calc(50% - 252px)
                right: calc(50% - 252px)
                box-sizing: border-box
                border-radius: 50%
                border: 4px solid $primary-color
        &__border
            width: 100%
            height: 100%
            margin: auto
            z-index: 2
            border-radius: 50%
            border: 4px solid $primary-color
            line-height: 532px

    .add-icon
        font-size: 24px
        color: $primary-color
        position: absolute
        right: 16px

    .play-icon
        font-size: 96px
        color: $white
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
        color: $white
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


    //.list-icon
        font-size: 36px
        color: $white
        position: absolute
        top: 48px
        right: 85px

    //.assignment-icon
        font-size: 36px
        color: $white
        position: absolute
        top: 132px
        right: 85px


    //.library_music-icon
        font-size: 36px
        color: $white
        position: absolute
        top: 216px
        right: 85px


    .panorama_fish_eye-icon
        font-size: 24px
        color: $secondary-color

    .todo-add
        width: 445px
        height: 56px
        background-color: $white
        position: relative
        box-sizing: border-box
        padding: 16px
        margin: 0px
        display: flex
        justify-content: space-between
        align-items: center
        input
            width: calc(100% - 24px - 16px)
            font-size: 16px
            color: $secondary-color
            border: none
            text-overflow: ellipsis
            &::placeholder
                color: $primary-color
                font-style: italic

    .countdown
        font-size: 176px
        color: $primary-color

    .current
        height: 33.33%
        min-height: 240px
        width: 454px

    .current-item
        display: flex
        align-items: flex-start
        &__text
            font-size: 24px
            color: $secondary-color
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

    .todo__list
        /*height: 33.33%*/
        /*position: absolute*/
        /*left: 85px*/
        /*top: 610px*/
        display: flex
        flex-direction: column
        justify-content: flex-end
        width: 445px
        /*padding-left: 0*/
        list-style: none
        margin: 0

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
            font-size: 16px
            color: $secondary-color
            padding-left: 4px
        &--more
            margin-top: 9px
            margin-left: auto
            font-size: 16px
            color: $primary-color

</style>
