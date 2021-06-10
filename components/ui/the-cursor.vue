<template>
    <div>
        <span class="the-cursor" :data-hover="isHoveringOnButton" :style="`--top: ${cursorPositionOnYAxis}px; --left: ${cursorPositionOnXAxis}px`">
        </span>
        <span class="the-cursor--border" :data-hover="isHoveringOnButton" :style="`--top: ${cursorPositionOnYAxis}px; --left: ${cursorPositionOnXAxis}px`"></span>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                cursorPositionOnXAxis: -900,
                cursorPositionOnYAxis: 0,
                isHoveringOnButton: false,
            }
        },

        mounted(){
            window.addEventListener("load", this.initCursor)
        },

        methods:{
            initCursor(){
                const w = document.querySelector("main");
                const buttons = w.querySelectorAll("button, a, .cursor-pointer")

                w.addEventListener('mousemove', (e) => {
                    this.cursorPositionOnXAxis = e.x
                    this.cursorPositionOnYAxis = e.y
                });

                buttons.forEach((button) =>{
                    button.addEventListener("mouseover", () => {
                        console.log('mouse enter triggered')
                        this.isHoveringOnButton = true
                    })
                    button.addEventListener("mouseout", () => {
                        this.isHoveringOnButton = false
                    })
                })
            }
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
        transition: .3s ease-out;
        opacity: .3;

        &[data-hover="true"]{
            opacity: 0;
        }

        top: calc(var(--top) - 75px);
        left: calc(var(--left) - 75px);
    }
}
</style>