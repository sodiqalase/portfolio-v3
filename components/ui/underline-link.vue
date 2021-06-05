<template>
    <div class="underline-link">
        <slot/>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.underline-link {
    position: relative;
    overflow: hidden;
    padding-top: 4px;
    padding-bottom: 4px;
    letter-spacing: 1px;

    &:hover {
        &::after {
            transform: translateX(100%);
            transition-delay: 0s;

        }
        &::before {
            transform: translateX(0);
            transition-delay: .25s;
        }

    }

    &::after, &::before {
        content: "";
        display: block;
        height: 1px;
        width: 100%;
        background: $white;
        position: absolute;
        bottom: 0;
        transition: .3s ease-out;
        transition-delay: .25s;
    }

    &::before {
        transform: translateX(-100%);
        transition-delay: 0s;
    }
}
</style>