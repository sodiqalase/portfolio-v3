<template>
  <main class="page-container">
    <TheNavBar />
    <div class="page js-locomote">
      <Nuxt />
      <TheFooter />
    </div>
    <TheCursor />
  </main>
</template>

<script>

import LocomotiveScroll from 'locomotive-scroll';

export default {
  mounted() {
    const locomote = document.querySelector(".js-locomote")
  
    window.addEventListener("load", () => {
        var scroll = new LocomotiveScroll({
              el: locomote,
              smooth: true
        });
    })
  }
}
</script>

<style lang="scss" scoped>
</style>