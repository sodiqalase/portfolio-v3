<template>
    <div class="home-project">
        <div class="home-project__image" data-scroll data-scroll-speed="1" data-scroll-position="top"></div>
        <div class="home-project__text" data-scroll data-scroll-speed="1.7" data-scroll-position="top">
            <div class="home-project__text__info">
                <p>/19</p>
                <p>Finance</p>
            </div>
            <p class="home-project__text__name">Beezop / Web Branding Photography</p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.home-project {
    flex-shrink: 0;

    &__image {
        height: 250px;
        background: $black-secondary;
        margin-bottom: 24px;
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