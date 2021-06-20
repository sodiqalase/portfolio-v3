<template>
    <div class="home-project">
        <a target="_blank" :href="path" class="home-project__image">
            <img :src="imageSrc" alt="" srcset="">
        </a>
        <div class="home-project__text" data-scroll :data-scroll-speed="scrollSpeed" data-scroll-position="top">
            <div class="home-project__text__info">
                <p>{{ year }}</p>
            </div>
            <p class="home-project__text__name">{{ projectTitle }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            year: {
                type: String,
                default: "/20"
            },
            path: {
                type: String,
                default: "#"
            },
            imageSrc: {
                type: String,
                default: "/assets/img/chore-buddy.png"
            },
            projectTitle: {
                type: String,
                default: "Beezop / Web Branding Photography"
            }
        },
        computed: {
            scrollSpeed() {
                return window.innerWidth > 600 ? 0.55 : 0.2;
            }
        }
    }
</script>

<style lang="scss" scoped>
.home-project {
    flex-shrink: 0;

    &__image {
        display: block;
        height: 250px;
        background: $black-secondary;
        margin-bottom: 24px;
        position: relative;
        overflow: hidden;
        border-radius: 4px;

        > img {
            height: 100%;
            width: 100%;
            position: absolute;
            transition: 1s;
            object-position: top;
            filter: brightness(.8);

            &:hover {
                filter: brightness(.5);
                transform: scale(1.2);
            }
        }
    }

    &__text {
        &__name {
            font-size: 30px;
            max-width: 300px;
            margin-top: 20px;
        }
        &__info {
            display: flex;
            justify-content: space-between;
        }
    }
        
}
</style>