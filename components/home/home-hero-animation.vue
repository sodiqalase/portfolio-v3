<template>
    <div class="home-page__hero-animation">
        <!-- <img src="/assets/img/beezop.png" alt=""> -->
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.home-page {
    &__hero-animation {
        // background-color: red;
        position: absolute;
        height: 100%;
        width: 100%;

        img {
            position: absolute;
            height: 100%;
            width: 100%;
            object-position: left;
        }
    }
}
</style>