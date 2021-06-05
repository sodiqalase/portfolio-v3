<template>
  <main class="page-container">
    <TheNavBar />
    <div class="page js-locomote">
       <Nuxt />
    </div>
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

        scroll.on("scroll", (e) => {
          console.log(e.scroll.y)
        })
         scroll.on("projectsInView", (e) => {
          console.log("PROJECTS IN VIEW")
        })
    })
  }
}
</script>

<style lang="scss" scoped>
</style>