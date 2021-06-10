<template>
    <div class="the-loader" v-if="!loaded">
        <p class="the-loader__counter">'
            <span class="tens">0</span>
            <span class="tens tens--loader">
                <span class="text" v-for="(i) in counterNumbers" :key="i">{{ numberToCounter(i) }}</span>
            </span>
        </p>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                loaded: false,
                counterNumbers: [0, 5, 17, 20, 26, 30, 35, 40, 49, 54, 63, 67, 70, 74, 79, 83, 84, 90, 97, 98, 99]
            }
        },
        methods: {
            numberToCounter(i) {
                return `${i}`.length < 2 ? `0${i}` : i 
            }
        }
    }
</script>

<style lang="scss" scoped>
.the-loader {
    position: fixed;
    z-index: 4;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: $black-alternate;
    
    will-change: contents;

    display: flex;
    align-items: flex-end;
    padding: 60px 100px;

    animation-duration: .5s;
    animation-fill-mode: forwards;
    animation-name: loadOut;
    animation-delay: 7.5s;

    @keyframes loadOut {
        0% {
            transform: translate(0, 0);
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: translate(-100px, 0);
            pointer-events: none;
        }
    }


    &__counter {
        font-size: 200px;
        display: flex;
        align-items: flex-end;
        height: 200px;
        overflow: hidden;
        position: relative;
        z-index: 2;

        .tens {
            display: flex;
            flex-direction: column;
            line-height: 1;

            &--loader {
                transform: translate(0,97%);

                animation-name: load;
                animation-duration: 8s;
                animation-fill-mode: forwards;

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