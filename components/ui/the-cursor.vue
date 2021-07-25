<template>
    <div>
        <span class="the-cursor" :data-hover="isHoveringOnButton" :style="`--top: ${cursorPositionOnYAxis}px; --left: ${cursorPositionOnXAxis}px`">
        </span>
        <span class="the-cursor--border" :data-hover="isHoveringOnButton" :style="`--top: ${cursorPositionOnYAxis}px; --left: ${cursorPositionOnXAxis}px`"></span>

        <audio id="sleep-sound" loop src="/assets/sleep.mp3"/>

    </div>
</template>

<script>
    export default {
        data(){
            return {
                isHoveringOnButton: false,
            }
        },

        mounted(){
            if(document.readyState === "complete") {
               this.initCursor();
            }else {
                window.addEventListener("load", () => { this.initCursor() });
            }
        },

        computed :{
            cursorPositionOnXAxis(){
                return this.$store.getters.mousePosition.x
            },
            cursorPositionOnYAxis(){
                return this.$store.getters.mousePosition.y
            },
        },

        methods:{
            initCursor(){
                const w = document.querySelector("main");
                const buttons = w.querySelectorAll("button, a, .cursor-pointer")

                w.addEventListener('mousemove', (e) => {
                    const sleepSound = this.$el.querySelector("#sleep-sound")
                    sleepSound.volume = .4;
                    try{ 
                        // sleepSound.play()
                    }catch{
                    }
                    this.$store.dispatch("setMousePosition", {x: e.x, y:e.y})
                });

                buttons.forEach((button) =>{
                    button.addEventListener("mouseover", () => {
                        this.isHoveringOnButton = true
                    })
                    button.addEventListener("mouseout", () => {
                        this.isHoveringOnButton = false
                    })
                })
            },

        }
    }
</script>

<style lang="scss" scoped>
.the-cursor {
    position: fixed;
    z-index: 5;
    height: 8px;
    width: 8px;
    background: #fff;
    pointer-events: none;
    border-radius: 100vh;
    transition: .1s ease-out;
    
    top: calc(var(--top) - 4px);
    left: calc(var(--left) - 4px);

    @include mobile {
        display: none;
    }

    &[data-hover="true"]{
        border: 2px solid #fff;
        background: rgba(255, 255, 255, 0.322);
        box-shadow: 0 0 10px 3px rgba(59, 59, 59, 0.158);

        height: 15px;
        width: 15px;

        top: calc(var(--top) - 7.5px);
        left: calc(var(--left) - 7.5px);
    }

    &--border {
        @extend .the-cursor;
        height: 150px;
        width: 150px;
        border: 1px solid #fff;
        background: transparent !important;
        transition: .35s ease-out;
        opacity: .3;

        &[data-hover="true"]{
            opacity: 0;
        }

        top: calc(var(--top) - 75px);
        left: calc(var(--left) - 75px);
    }
}
</style>