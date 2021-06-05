<template>
  <div class="home-page">
    <div  data-scroll-section class="section-container home-page__hero">
      <div class="home-page__hero__text">
          <p class="home-page__hero__heading" data-scroll data-scroll-speed="3" data-scroll-position="horizontal"> - Building</p>
          <p class="home-page__hero__heading" data-scroll data-scroll-speed="2.5" data-scroll-position="horizontal"> With</p>
          <p class="home-page__hero__heading" data-scroll data-scroll-speed="1" data-scroll-position="horizontal">Distinctions</p>
          <p class="home-page__hero__description">I focus on improving the quality of front-end code by paying close attention to minor details with the help of grade A softwares and developer tools/processes.</p>
      </div>
      <div class="home-page__hero__illustration">
          <div class="home-page__hero__illustration__line"></div>
          <div class="home-page__hero__illustration__main"></div>
        </div>
    </div>
    
    <div  data-scroll-section class="section-container home-page__talk">
      <UnderlineLink>
        <a href="#" class="link link--no-style">Let's talk</a>
      </UnderlineLink>
    </div>

    <div class="section-container home-page__projects" data-scroll-section>
      <p class="home-page__projects__intro" data-scroll data-scroll-speed="2" data-scroll-position="horizontal">Works - </p>
      <div class="home-page__projects__main">
        <HomeProject />
        <HomeProject />
        <HomeProject />
        <HomeProject />
        <HomeProject />
        <HomeProject />
      </div>
    </div>

    <div data-scroll-section class="home-page__huge-name__section">
      <div class="home-page__huge-name__container">
        <div class="home-page__huge-name" data-scroll data-scroll-direction="horizontal" data-scroll-speed="20">
          I'm moving in this direction, which is sooo cool!
        </div>
      </div>
      <div class="home-page__huge-name__container">
        <div class="home-page__huge-name" data-scroll data-scroll-direction="horizontal" data-scroll-speed="10">
         SOOO CUSTOMIZABLE. RIGHT?
        </div>
      </div>
      <div class="home-page__huge-name__container">
        <div class="home-page__huge-name" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-30">
          I'm moving in this direction, which is sooo cool!
        </div>
      </div>
    </div>

    <HomeExperience />

  </div>
</template>


<script>
export default {

}
</script>

<style lang="scss" scoped>
.home-page{ 
  min-height: 500vh;
  
  &__hero {
    padding-top: 200px;
    display: flex;
    justify-content: space-between;

    &__text {
      max-width: 500px;
      flex-shrink: 0;
      margin-right: 100px;
    }

    &__illustration {
      flex: 1;
      position: relative;

      &__main {
        background: $black-secondary;
        max-width: 500px;
        width: 100%;
        height: 100%;
        margin-right: auto;
        margin-left: auto;
      }

      &__line {
        height: 1px;
        width: 200px;
        background: $white;
        position: absolute;
        top: 70%;
        right: 0;
      }
    }

    &__heading {
      font-size: $font-xxlg;
      line-height: 1;
    }

    &__description {
       font-size: $font-xlg;
        line-height: 1.9;
        margin-top: 50px;
        opacity: .8;
    }
  }

  &__huge-name {
    background: rgb(224, 224, 224);
    color: $black;
    width: fit-content;
    font-weight: 900;
    font-size: 8vw;
    white-space: nowrap;
    text-transform: uppercase;
    line-height: 1;

    &__section {
      padding-top: 200px;
      height: 700px;
    }
      
    &__container {
      transform: translateX(0vw) rotate(15deg);
      transform-origin: center;
      padding-bottom: 100px;
      width: 50vw;

      &:nth-child(2) {
        transform: translateX(0vw) rotate(0);
        margin-top: -400px;
      }
      &:nth-child(3) {
        transform: translateY(300px) translateX(-1000px)  rotate(-10deg);
        margin-top: -150px;
      }
    }
  }

  &__talk {
    margin-top: 100px;
    display: flex;
    justify-content: flex-end;
    color: #fff;

    .link {
      font-size: $font-lg;
    }
  }

  &__projects {
    &__intro {
      font-size: $font-xlg-med;
      margin-top: 130px;
      margin-bottom: 100px;
    }

    &__main {
      display: grid;
      padding-top: 60px;
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
      grid-gap: 50px;
    }
  }
}
</style>

