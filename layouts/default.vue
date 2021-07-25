<template>
  <main class="page-container">

    <TheBackground />
    <div class="page-container__page-content">
      <TheNavBar />
      <div class="page js-locomote">
        <Nuxt />
        <TheFooter />
      </div>
      <TheLoader />
      <TheCursor />
    </div>

  </main>
</template>

<script>

import LocomotiveScroll from 'locomotive-scroll';

export default {
  mounted() {
    if(document.readyState === "complete") {
      this.initLocomote()
    }else {
      window.addEventListener("load", () => { this.initLocomote() })
    }
  }, 
  methods: {
    initLocomote() {
      
      const locomote = this.$el.querySelector(".js-locomote")

      window.locomotiveScroll = new LocomotiveScroll({
        el: locomote,
        smooth: true,
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.page-container {
  &__page-content {
    position: relative;
    z-index: 1;
  }
}
</style>