<template>
<div>
    <nav class="section-container the-nav-bar">
        <div class="the-nav-bar__logo">7evenSTudio</div>
        <div class="the-nav-bar__links">
           <button class="the-nav-bar__links__btn btn--menu" :class="{ active: menuIsOpen }" @click="toggleMenuState">
               <span class="line"></span>
               <span class="line"></span>
               <span class="line"></span>
            </button>
        </div>
    </nav>
    <div class="the-nav-bar__menu" :class="{ isOpen : menuIsOpen }">
        <div class="the-nav-bar__menu__links">
            <a href="#" class="the-nav-bar__menu__link"><TheNavBarLink text="-Works"/></a>
            <a href="#" class="the-nav-bar__menu__link"><TheNavBarLink text="Studio-"/></a>
            <a href="#" class="the-nav-bar__menu__link"><TheNavBarLink text="Contact-"/></a>
        </div>
        <TheFooter />
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
        background: $theme;
        left: 0;
        z-index: 3;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        //closed by default
        pointer-events: none;
        transform: scale(1.5);
        height: 100vh;
        clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
        transition: .8s ease;

        &.isOpen {
            pointer-events: unset;
            transform: scale(1);
            clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);

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


            &:nth-child(even){
                margin-left: 0;
            }
       
        }
    }
}
</style>