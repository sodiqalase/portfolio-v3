<template>
    <div class="the-loader__container" v-bind:class="{start: startLoader}">
        <div class="the-loader" v-bind:class="{start: startLoader}">
            <p class="the-loader__counter">'
                <span class="tens">0</span>
                <span class="tens tens--loader">
                    <span class="text" v-for="(i) in counterNumbers" :key="i">{{ numberToCounter(i) }}</span>
                </span>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                startLoader : false,
                counterNumbers: [0, 5, 17, 20, 26, 30, 35, 40, 49, 54, 63, 67, 70, 74, 79, 83, 84, 90, 97, 98, 99]
            }
        },
        mounted(){
            window.addEventListener("load", () => { 
                this.startLoader = true;
                setTimeout(()=> {
                    this.$store.dispatch("initHeroAnimation")
                }, 4500)
            })
        },
        methods: {
            numberToCounter(i) {
                return `${i}`.length < 2 ? `0${i}` : i 
            }
        }
    }
</script>

<style lang="scss" scoped>
$loaderTime: 4s;

.the-loader {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: $theme;
    will-change: contents;
    padding: 60px 100px;
    align-items: center;
    justify-content: center;
    display: none;

    &.start {
        display: flex;
    }

    &__container {
        background: $black;
        position: fixed;
        height: 100%;
        width: 100%;
        z-index: 4;
        bottom: 0;
        left: 0;
        transition: .5s ease;

        animation-duration: 2.5s;
        animation-fill-mode: forwards;
        animation-delay: $loaderTime - 1;
        animation-timing-function: cubic-bezier( 0.79, 0.33, 0.14, 0.53 );

        &.start {
            background: $theme;
            animation-name: loadOut;
        }
    }

    &:after {
        content: "";
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: $black-alternate;
        transform: translate(-100%,0);

        animation-duration: $loaderTime;
        animation-fill-mode: forwards;
        animation-name: loadProgress;
        animation-timing-function: cubic-bezier( 0.79, 0.33, 0.14, 0.53 );
    }

    @keyframes loadProgress {
        0% {
            transform: translate(-100%, 0);
            clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);

        }
        100% {
            transform: translate(0, 0);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);

            pointer-events: none;
        }
    }

    @keyframes loadOut {
        0% {
            transform: scale(1);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        }
        100% {
            transform: scale(4);
            clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);

            pointer-events: none;
        }
    }


    &__counter {
        font-size: 100px;
        display: flex;
        align-items: flex-end;
        height: 100px;
        overflow: hidden;
        position: relative;
        z-index: 2;
        width: fit-content;

        @include mobile {
            font-size: 60px;
            height: 60px;
        }

        .tens {
            display: flex;
            flex-direction: column;
            line-height: 1;

            &--loader {
                transform: translate(0,97%);

                animation-name: load;
                animation-duration: $loaderTime;
                animation-fill-mode: forwards;
                animation-timing-function: cubic-bezier( 0.79, 0.33, 0.14, 0.53 );

            }

            @keyframes load {
                0% {
                    transform: translate(0,97%);
                }
                100% {
                    transform: translate(0,0%);
                }
            }
        }
    }
}
</style>