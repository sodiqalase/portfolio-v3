<template>
    <div class="underline-link" :style="`--line-color: ${decorationColor};`">
        <slot/>
    </div>
</template>

<script>
    export default {
        props: {
            decorationColor: {
                default: "#fff",
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
.underline-link {
    position: relative;
    overflow: hidden;
    padding-bottom: 4px;
    letter-spacing: 1px;
    display: inline-block;
    line-height: 1;
    transform: translateY(30%);

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
        background: var(--line-color);
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