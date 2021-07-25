<template>
    <div class="the-background">
        <!-- <div class="the-background__cursor" :style="`--top: ${cursorPositionOnYAxis}px; --left: ${cursorPositionOnXAxis}px`"></div> -->
        <span v-for="(_, i) in Array.from({length: numberOfBoxes})" :key="i"></span>
    </div>
</template>

<script>
    export default {
        computed: {
            numberOfBoxes(){
                return this.window.innerWidth > 600 ? 160 : 50
            },

            window(){
                return window
            },

            cursorPositionOnXAxis(){
                return this.$store.getters.mousePosition.x
            },
            cursorPositionOnYAxis(){
                return this.$store.getters.mousePosition.y
            },
        }
        
    }
</script>

<style lang="scss" scoped>
.the-background {
    position: fixed;
    top: 0;
    z-index: -1;
    height: 100%;
    width: 100%;

    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-template-rows: repeat(10, 1fr);
    grid-gap: 2px;

    @include mobile {
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(10, 1fr);
    }

    &__cursor {
        height: 200px;
        width: 200px;
        background: #fff;
        opacity: .3;
        position: absolute;
        filter: blur(300px);

        top: calc(var(--top) - 100px);
        left: calc(var(--left) - 100px);
    }

    span {
        font-weight: 900;
        background: $black;
        border-radius: 10px;
        position: relative;
    }
}
</style>