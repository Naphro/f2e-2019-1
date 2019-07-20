<template lang="pug">
    div#app
        nav.navbar
            a
                i.material-icons.list-icon list
            a
                i.material-icons.assignment-icon assessment
            a
                i.material-icons.library_music-icon library_music
            div
                span POMODORO
        div.main
            div.doing
                div.doing__content
                    div.doing__text
                        i.material-icons
                        div the First thing to do today
                    div.doing__status
                        span.doing__small-circle
                        span.doing__small-circle
                div.doing__countdown 25:00
            div.clock
                div.clock__border
                    div.clock__center
                        i.material-icons.clock__btn
                        //i.material-icons.play-icon pause_circle_filled
                        i.material-icons.clock__square
            div.todo__add
                input(placeholder='add a new mission…')
                i.material-icons.todo__add-icon add
            ul.todo__list
                li.todo__item
                    i.material-icons.panorama_fish_eye-icon panorama_fish_eye
                    div.todo__item__text the second thing to do today
                    i.material-icons.todo__item__play-icon play_circle_outline
                li.todo__item
                    i.material-icons.panorama_fish_eye-icon panorama_fish_eye
                    div.todo__item__text the second thing to do today
                    i.material-icons.todo__item__play-icon play_circle_outline
                li.todo__item
                    i.material-icons.panorama_fish_eye-icon panorama_fish_eye
                    div.todo__item__text the forth thing to do today
                    i.material-icons.todo__item__play-icon play_circle_outline
                li.todo__item--more MORE
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
    $nav-height: 60px

    %nav-icon
        font-size: 24px
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

    body
        height: 100%
        margin: 0

    #app
        height: 100%
        display: flex

    .main
        margin-top: $nav-height
        width: 100%
        height: 100%
        display: flex
        flex-direction: column
        align-items: center
        background-color: $background-color
        overflow-y: auto

    .todo__add-icon
        font-size: 24px
        color: $primary-color
        position: absolute
        right: 5px

    .todo__add
        width: 270px
        height: 30px
        background-color: $white
        position: relative
        box-sizing: border-box
        margin: 0 20px 20px 20px
        padding: 5px
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

    .doing
        display: flex
        flex-direction: column
        align-items: flex-start
        margin: 20px

    .doing__content
        /*height: 48px*/
        display: flex
        flex-direction: column

    .doing__text
        font-size: 20px
        color: $secondary-color
        display: flex
        align-items: center
        i
            font-size: 36px
            margin: 2px 8px 2px 0
            &::before
                content: 'check_circle_outline'

    .doing__status
        margin-left: 44px
        /*height: 12px*/

    .doing__small-circle
        width: 12px
        height: 12px
        border-radius: 50%
        border: 1px solid $primary-color
        display: inline-block
        margin-right: 8px

    .doing__countdown
        font-size: 100px
        color: $primary-color
        margin: auto

    .todo__list
        display: flex
        flex-direction: column
        justify-content: flex-end
        width: 270px
        list-style: none
        margin: 0 20px 20px 20px;

    .todo__item
        margin-top: 9px
        padding-bottom: 8px
        box-sizing: border-box
        display: flex
        align-items: center
        width: 270px
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

    .panorama_fish_eye-icon
        font-size: 24px
        color: $secondary-color

    .clock
        width: 270px
        height: 270px
        margin: 0 20px 20px 20px

    .clock__border
        width: 100%
        height: 100%
        border-radius: 50%
        border: 4px solid $primary-color
        display: flex
        justify-content: center
        align-items: center

    .clock__center
        width: 253px
        height: 253px
        background-color: $primary-color
        border-radius: 50%
        display: flex
        justify-content: flex-start
        align-items: center

    .clock__center--running
        width: 504px
        height: 504px
        background-color: $white
        z-index: 1
        border: 4px solid $primary-color


    .clock__btn
        display: block
        font-size: 96px
        color: $white
        position: relative
        width: 96px
        height: 96px
        margin-left: calc(50% - 48px)
        &::before
            content: 'play_circle_filled_white'

    .clock__btn--running
        color: $primary-color
        &::before
            content: 'pause_circle_filled'

    .clock__square
        font-size: 24px
        color: $white
        width: 24px
        transform: translateY(36px)
        &::before
            content: 'stop'

    .clock__square--running
        color: $primary-color

    .navbar
        position: fixed
        background-color: $secondary-color
        top: 0
        width: 100vw
        height: $nav-height
        display: flex
        align-items: center
        padding: 15px
        a
            margin-right: 15px
            i
                @extend %nav-icon
        div
            margin-left: auto
            span
                display: block
                font-family: 'Futura', 'Roboto', sans-serif
                font-size: 24px
                color: $white
                height: 36px

    @media (min-width: 800px)
        .main
            flex-wrap: wrap

        .clock
            order: 1
            width: 405px
            height: 405px
            margin: 22px 20px 0 0

        .clock__center
            width: 378px
            height: 378px

    @media (min-width: 1280px)

        html
            overflow: hidden

        .main
            margin-top: 0
            padding: 48px 85px
            justify-content: space-between
            align-items: flex-start

        .navbar
            right: 0px
            width: 35%
            height: 100%
            padding: 48px 85px
            flex-direction: column
            align-items: flex-end
            a
                margin-right: 0px
                margin-bottom: 48px
                i
                    font-size: 36px
            div
                margin-left: 0
                margin-top: auto
                transform: translateX(-36px)
                span
                    transform: rotate(90deg)
                    transform-origin: right bottom

        .doing
            width: 454px
            height: 33.33%
            min-height: 240px
            margin: 0

        .doing__circle
            width: 48px
            height: 48px
            margin-right: 16px

        .doing__text
            font-size: 24px

        .doing__countdown
            font-size: 176px

        .clock
            width: 540px
            height: 540px
            margin: auto calc(35vw - 270px - 85px) auto auto
            z-index: 1

        .clock__center
            width: 506px
            height: 506px

        .todo__add-icon
            right: 16px

        .todo__add
            width: 445px
            height: 56px
            margin: 0
            padding: 16px
            order: -1

        .todo__list
            width: 445px
            margin: 0

        .todo__item
            width: 445px



</style>
