<template>
<div>
    <nav class="section-container the-nav-bar">
        <div class="the-nav-bar__logo">Olamide|v3</div>
        <div class="the-nav-bar__links">
           <button class="the-nav-bar__links__btn btn--menu" :class="{ active: menuIsOpen }" @click="toggleMenuState">
               <span class="line"></span>
               <span class="line"></span>
               <span class="line"></span>
            </button>
        </div>
    </nav>
    <div class="the-nav-bar__menu" :class="{ isOpen : menuIsOpen }">
        <div class="the-nav-bar__menu__bg">
            <span></span><span></span><span></span><span></span>
        </div>
        
        <div class="the-nav-bar__menu__content">
            <div class="the-nav-bar__menu__links">
                <button class="the-nav-bar__menu__link" @click="goTo(`#works`)"><TheNavBarLink text="-Works"/></button>
                <a href="https://drive.google.com/file/d/1Y2YI8iBV0oHcrOhCL9YM3ao0IYOqSS3A/view" target="_blank" class="the-nav-bar__menu__link" @click="toggleMenuState"><TheNavBarLink text="Resume-"/></a>
                <a href="mailto:sholankedaniel@gmail.com" class="the-nav-bar__menu__link" target="_blank"><TheNavBarLink text="Contact-"/></a>
            </div>
            <TheFooter />
        </div>
    </div>
</div>
</template>

<script>
    export default {
        data(){
            return {
                menuIsOpen: false,
            }
        },

        created() {
            setInterval(this.genRandomRadius, 300)
        },

        methods : {
            toggleMenuState() {
                this.menuIsOpen = !this.menuIsOpen
            },
            goTo(targetSelector){
                this.toggleMenuState();
                window.locomotiveScroll.scrollTo(document.querySelector(targetSelector));
            }
        }
    }
</script>

<style lang="scss" scoped>
.the-nav-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 40px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 4;
    transform: translate(-50%);
    left: 50%;

    &__logo {
        font-weight: 900;
        font-style: italic;
    }

    &__links {
      .link {
        margin-left: 30px;
      }
      &__btn {
        background: transparent;
        color: inherit;
        border: none;
      }
      .btn--menu {
        position: relative;
        display: flex;
        align-items: center;
        width: 40px;
        height: 50px;

        &.active {
            .line {
                &:nth-child(3), &:nth-child(1)  {
                    transform: translateY(0) rotate(45deg) !important;
                }
                &:nth-child(2){
                    opacity: 0;
                }
                 &:nth-child(1) {
                    transform: translateY(0) rotate(-45deg) !important;
                 }
            }
        }
        
        .line {
            height: 1px;
            width: 100%;
            background: $white;
            position: absolute;
            transition: .2s ease;

            &:nth-child(3){
                transform: translateY(10px);
            }
            &:nth-child(1){
                transform: translateY(-10px);
            }
        }
      }
    }

    &__menu {
        position: fixed;
        top: 0;
        width: 100%;
        // background: $theme;
        left: 0;
        z-index: 3;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: space-between;

        //closed by default
        pointer-events: none;

        &__bg {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            height: 100%;
            width: 100%;
            position: absolute;

            span {
                background: $theme;
                transition: .5s ease;
                border: 1px solid rgba(255, 255, 255, 0.01);
          

                &:last-child {
                    border-right: none;
                }

                //hide 
                transform: translate(0, -100%);

                @for $n from 1 through 4 {
                    &:nth-child(#{$n}) {
                        transition-delay: 0.15s * $n;
                    }
                } 
            }
        }

        &__content {
            height: 100vh;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            position: relative;
            z-index: 1;

            // hide
            opacity: 0;
            transition: .4s ease-out;

        }

        &.isOpen {
            pointer-events: unset;

            .the-nav-bar__menu__bg {
                span {
                    transform: translate(0, 0);
                }
            }

            .the-nav-bar__menu__content {
                opacity: 1;
                transition-delay: .8s;
            }

        }

        &__links {
            margin-top: 150px;
            width: fit-content;
            margin-left: auto;
            margin-right: auto;
            position: relative;
            z-index: 1;
        }

        &__link {
            font-size: 150px;
            display: block;
            margin-left: 150px;
            width: fit-content;
            margin-bottom: 20px;
            background: transparent;
            border: 0;

            @include mobile {
                font-size: 60px;
                margin-left: 40px;
            }


            &:nth-child(even){
                margin-left: 0;
            }
       
        }
    }
}
</style>
