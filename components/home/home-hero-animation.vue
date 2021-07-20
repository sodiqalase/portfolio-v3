<template>
    <div class="home-page__hero-animation" :class="{show: $store.getters.initHeroAnimation}">
        <div class="home-page__hero-animation__img-wrapper" data-scroll data-scroll-speed="-3" data-scroll-position="horizontal">

            <div class="img-container" data-is-active="true">
                <img :src="images[images.length - 1]" alt="">
            </div>

            <div class="img-container" v-for="(image, i) in images" :key="i" :data-is-active="+activeImageIndex >= +i">
                <img :src="image" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                images: ["/assets/img/olamide.png", "/assets/img/olamide-2.png", "/assets/img/olamide.jpeg"],
                // images: ["https://i.pinimg.com/564x/5e/c1/ec/5ec1ec2c3d585b9bfca2a1a60e70ad90.jpg", "https://mir-s3-cdn-cf.behance.net/projects/original/8006a234921117.Y3JvcCwxNTAwLDExNzIsMCww.jpg", "https://mir-s3-cdn-cf.behance.net/projects/original/ad38c029297537.55ec81eb9e80b.jpg", "https://dr.savee-cdn.com/things/thumbnails/5/9/9d9598a1ff1f1ea2636456.jpg"],
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
        border-radius: 8px;
        overflow: hidden;
        position: absolute;
        height: 100%;
        width: 100%;

        clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
        transition: .8s ease;

        &__img-wrapper {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 120%;
            width: 100%;
        }


        &.show {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        }

        .img-container {
            position: absolute;
            height: 100%;
            width: 100%;
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
                object-position: center;

                will-change: transform;


            }

            &[data-is-active=true]{
                clip-path: circle(141.4% at 100% 100%);
                transition: 1.5s;

                img {
                    transform: scale(1);
                }
            }

        }
    }
}
</style>