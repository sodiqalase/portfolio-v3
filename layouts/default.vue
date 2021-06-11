<template>
  <main class="page-container">
    <TheNavBar />
    <div class="page js-locomote">
      <Nuxt />
      <TheFooter />
    </div>
    <TheLoader />
    <TheCursor />
  </main>
</template>

<script>

import LocomotiveScroll from 'locomotive-scroll';

export default {
  created() {

    if(document.readyState === "complete") {
      this.initLocomote()
    }else {
      window.addEventListener("load", () => { this.initLocomote() })
    }
  }, 
  methods: {
    initLocomote() {
      const locomote = document.querySelector(".js-locomote")
      window.locomotiveScroll = new LocomotiveScroll({
        el: locomote,
        smooth: true,
        smartphone: { smooth: true },
      });
    }
  }
}
</script>

<style lang="scss" scoped>
</style>