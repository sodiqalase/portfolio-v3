<template>
    <div class="home-page__hero-animation" :class="{show: $store.getters.initHeroAnimation}">
        <div class="img-container" data-is-active="true">
            <img :src="images[images.length - 1]" alt="">
        </div>

         <div class="img-container" v-for="(image, i) in images" :key="i" :data-is-active="+activeImageIndex >= +i">
            <img :src="image" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                images: ["/assets/img/olamide.png", "/assets/img/olamide-2.png", "/assets/img/olamide.jpeg"],
                activeImageIndex: 0
            }
        },

        mounted() {
            setInterval(()=> {
                this.activeImageIndex = this.activeImageIndex === this.images.length - 1 ? -1 : this.activeImageIndex + 1
            }, 4200)
        },
    }
</script>

<style lang="scss" scoped>

.home-page {
    will-change: contents;
    
    &__hero-animation {
        background: $black-secondary;
        position: absolute;
        height: 100%;
        width: 100%;

        clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
        transition: .8s ease;



        &.show {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        }

        .img-container {
            position: absolute;
            height: 100%;
            width: 100%;
            object-position: left;
            background-color: $black-secondary;
            transition: 0s;
            overflow: hidden;

            clip-path: circle(0.0% at 100% 100%);

            will-change: clip-path, transition;


            img {
                position: absolute;
                height: 100%;
                width: 100%;
                transform: scale(2.5);
                transition: 1.5s;

                will-change: transform;


            }

            &[data-is-active=true]{
                clip-path: circle(141.4% at 100% 100%);
                transition: 1.1s;

                img {
                    transform: scale(1);
                }
            }

        }
    }
}
</style>