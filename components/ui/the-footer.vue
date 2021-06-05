<template>
    <div data-scroll-section class="section-container the-footer flex--align-center flex--space-between">
        <div class="the-footer__links flex--align-center">
            <a href="https://twitter.com/Olamidaay" target="_blank" class="link link--no-style"><underline-link>Twitter</underline-link></a>
            <a href="https://www.linkedin.com/in/sholanke-olamide-9aa751176/" target="_blank" class="link link--no-style"><underline-link>LinkedIn</underline-link></a>
            <a href="https://github.com/Sholanke" target="_blank"  class="link link--no-style"><underline-link>GitHub</underline-link></a>
            <a href="mailto:sholankedaniel@gmail.com" target="_blank" class="link link--no-style"><underline-link>Gmail</underline-link></a>
        </div>
        <p>Designed and Developed by Olamide</p>
    </div>
</template>

<script>
import underlineLink from './underline-link.vue'
    export default {
  components: { underlineLink },
        
    }
</script>

<style lang="scss" scoped>
.the-footer {
    padding-top: 40px;
    padding-bottom: 80px;
    width: 100%;

    &__links {
        .link {
            margin-right: 40px;
            font-size: 16px;
        }
    }
}
</style>