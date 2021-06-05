<template>
    <div class="the-nav-bar__link">
        <div class="word word--fake">
            <span v-for="(letter, index) in text" :key="index" class="letter" :style="`--index: ${index};`">{{ letter }}</span>
        </div>
        <div class="word">
            <span v-for="(letter, index) in text" :key="index" class="letter" :style="`--index: ${index};`">{{ letter }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            text: {
                type: String,
                default: "Click here"
            }
        }
    }
</script>

<style lang="scss" scoped>
.the-nav-bar{
    &__link {
        width: fit-content;
        position: relative;
        overflow: hidden;
        
        &:hover {
            .word { 
                .letter{ 
                    transform: translate3d(0,55%,0) rotateX(-90deg) rotate(22deg);
                }

                    &--fake {
                    .letter{
                        transform: translate3d(0,100%,0) rotateX(0) rotate(0);
                    }
                }
            }
        }
        .word {
            display: flex;
            line-height: 1;

            .letter {
                transition: .4s ease;
                transition-delay: calc(60ms * var(--index));
                background: linear-gradient(0, transparent 0%, $white 60%);
                background-clip: text;
                color: transparent !important;
            }

            &--fake {
                position: absolute;
                top: 0;
                transform: translateY(-100%);

                .letter{
                    transform: translate3d(0,45%,0) rotateX(90deg) rotate(-22deg);
                }
            }
        }
    }
}
</style>