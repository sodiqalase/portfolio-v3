<template>
    <div class="section-container home-skills" data-scroll-section>
       <div class="home-skills__intro">
           <p class="home-skills__intro__title" data-scroll data-scroll-speed="1">Skills and Languages - </p>
           <p class="home-skills__intro__description" data-scroll data-scroll-speed="2">
               I am Sholanke Olamide, a creative and passionate software developer and UI enthusiast who focuses on building products that solves real problems through enjoyable and meaningful experiences. <br> <br> But before all these things, I am a fast and open minded learner willing to accept and learn from my mistakes.
           </p>
       </div>
       <div class="home-skills__main">
           <span class="home-skills__main__skill" style="--lang-color: red;">NUXT JS</span>
           <span class="home-skills__main__skill" style="--lang-color: red;">VUE JS</span>
           <span class="home-skills__main__skill" style="--lang-color: red;">REACT JS</span>
           <span class="home-skills__main__skill" style="--lang-color: red;">TYPESCRIPT</span>
           <span class="home-skills__main__skill" style="--lang-color: red;">JAVASCRIPT</span>
           <span class="home-skills__main__skill" style="--lang-color: red;">HTML5</span>
           <span class="home-skills__main__skill" style="--lang-color: red;">SASS</span>
           <span class="home-skills__main__skill" style="--lang-color: red;">SCSS</span>
           <span class="home-skills__main__skill" style="--lang-color: red;">CSS3</span>
           <span class="home-skills__main__skill" style="--lang-color: red;">Responsive Design</span>
           <span class="home-skills__main__skill" style="--lang-color: red;">FIGMA</span>
           <span class="home-skills__main__skill" style="--lang-color: red;">Performance Optimization</span>
           <span class="home-skills__main__skill" style="--lang-color: red;">AJAX</span>
           <span class="home-skills__main__skill" style="--lang-color: red;">Agile Development</span>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.home-skills {
    margin-top: 200px;
    display: grid;
    grid-template-columns: 1fr 1fr;

    &__intro {
        padding-right: 60px;
        border-right: 1px solid $black-secondary;

        &__title {
            font-size: 24px;
        }
        &__description {
            line-height: 1.5;
            font-size: 21px;
            line-height: 1.9;
            opacity: .7;
            margin-top: 40px;
        }
    }
    &__main {
        padding-left: 60px;

        &__skill {
            background: $black-purple;
            padding: 10px 20px;
            border-left: 2px solid $theme;
            font-weight: 600;
            font-size: 14px;
            display: inline-block;
            margin: 0 15px 15px 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
    }
}
</style>