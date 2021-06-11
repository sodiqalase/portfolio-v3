<template>
  <div class="home-page">
    <div  data-scroll-section class="section-container home-page__hero">
      <div class="home-page__hero__text">
          <p class="home-page__hero__heading fade-up-container" data-scroll data-scroll-speed="2.5" data-scroll-position="horizontal"><span class="pre-fade-up" :class="{'fade-up': initHeroAnimation}"> - Hey there,</span></p>
          <p class="home-page__hero__heading fade-up-container" data-scroll data-scroll-speed="2" data-scroll-position="horizontal"> <span class="pre-fade-up" :class="{'fade-up': initHeroAnimation}">I am</span> </p>
          <p class="home-page__hero__heading fade-up-container" data-scroll data-scroll-speed="1" data-scroll-position="horizontal"><span class="pre-fade-up" :class="{'fade-up': initHeroAnimation}">Olamide</span> </p>
          <p class="home-page__hero__description fade-up-container">
            <span class="pre-fade-up" :class="{'fade-up': initHeroAnimation}">
              I'm currently a Frontend Engineer Intern at <a href="https://flutterwave.com/" target="_blank" class="link link--no-decoration"><UnderlineLink decoration-color="#b6e69a">Flutterwave</UnderlineLink></a>, where I focus on improving the quality of frontend code by paying close attention to details with the help of grade A softwares and developer tools/processes.
            </span>
          </p>
      </div>
      <div class="home-page__hero__illustration">
          <div class="home-page__hero__illustration__line"  data-scroll data-scroll-speed="1" data-scroll-position="horizontal"></div>
          <div class="home-page__hero__illustration__main">
            <HomeHeroAnimation />
          </div>
        </div>
    </div>
    
    <div  data-scroll-section class="section-container home-page__talk">
      <a href="mailto:sholankedaniel@gmail.com" class="link link--no-style">
        <UnderlineLink> Let's talk </UnderlineLink>
      </a>
    </div>

    <div id="works" class="section-container home-page__projects" data-scroll-section>
      <p class="home-page__projects__intro" data-scroll data-scroll-speed="2" data-scroll-position="horizontal">Works - </p>
      <div class="home-page__projects__main">
        <HomeProject year="/21" path='https://beezop.netlify.app/' projectTitle='Beezop / Product and Project Management' imageSrc="/assets/img/beezop.png" />
        <HomeProject path='https://www.rizevo.com/' projectTitle='Rizevo / Booking and Reservation' imageSrc="/assets/img/rizevo.png"/>
        <HomeProject path='https://creft.io/' projectTitle='Creft / Social Networking' imageSrc="/assets/img/creft.png"/>
        <HomeProject path='https://jaykay.design/#/' projectTitle='Jaykay / Personal and Professional Portfolio' imageSrc="/assets/img/jaykay.png"/>
        <HomeProject path='http://chorebuddy.surge.sh/' projectTitle='Chore Buddy / Home Service' imageSrc="/assets/img/chore-buddy.png"/>
        <HomeProject path='https://cruuunchify-clone.netlify.app/' projectTitle='Cruuunchify Clone / Media' imageSrc="/assets/img/crunchify.png"/>
      </div>
    </div>

    <div data-scroll-section class="home-page__huge-name__section">
      <div class="home-page__huge-name__container">
        <div class="home-page__huge-name" data-scroll data-scroll-direction="horizontal" data-scroll-speed="3">
          Sholanke <i>Olamide</i> Daniel <i>Professional</i> developer
        </div>
      </div>
      <div class="home-page__huge-name__container">
        <div class="home-page__huge-name" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-3">
          <i>Professional</i> developer. Sholanke <i>Olamide</i> Daniel
        </div>
      </div>
      <div class="home-page__huge-name__container">
        <div class="home-page__huge-name" data-scroll data-scroll-direction="horizontal" data-scroll-speed="4">
          Sholanke Daniel <i>Olamide</i> IS A <i>Professional</i> developer
        </div>
      </div>
    </div>

    <HomeExperience />
    <HomeSkills />

    <div data-scroll-section class="section-container home-page__contact">
      <span class=" home-page__contact__circle"></span>
      <p class="intro" data-scroll data-scroll-speed="1">Let's work together</p>
      <a href="mailto:sholankedaniel@gmail.com"><TheNavBarLink text="-CONTACT-" data-scroll data-scroll-speed="2" class="the-nav-bar__menu__link home-page__contact__huge-link"/></a>
    </div>
  
  </div>
</template>


<script>
export default {
  computed: {
    initHeroAnimation() {
      return this.$store.getters.initHeroAnimation
    }
  }

}
</script>

<style lang="scss" scoped>
.home-page{ 
  
  &__hero {
    padding-top: 180px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include mobile{ 
      display: block;
      padding-top: 200px;
    }

    &__text {
      max-width: 550px;
      flex-shrink: 0;
      margin-right: 100px;

      @include mobile {
        max-width: unset;
        margin-right: 0;
      }
    }

    &__illustration {
      flex: 1;
      height: 500px;

      @include mobile {
        display: none;
      }

      &__main {
        max-width: 400px;
        width: 100%;
        height: 100%;
        margin-right: auto;
        margin-left: auto;
        position: relative;
      }

      &__line {
        height: 1px;
        width: 300px;
        background: $white;
        z-index: 1;
        position: absolute;
        top: 70%;
        right: 10px;
      }
    }

    &__heading {
      font-size: $font-xxlg;
      line-height: 1;

      @include mobile {
        font-size: 60px;
      }
    }

    &__description {
       font-size: $font-xlg;
        line-height: 1.9;
        margin-top: 50px;
        opacity: .8;
    }
  }

  &__huge-name {
    color: transparent;
    width: fit-content;
    font-weight: 900;
    font-size: 5.5vw;
    white-space: nowrap;
    text-transform: uppercase;
    line-height: 1;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: rgb(214, 214, 214);
    
    i {
      -webkit-text-stroke-color: lighten($theme, 8px);
    }

    &__section {
      margin-bottom: 200px;

      @include mobile {
        display: none;
      }
    }
      
    &__container {
      transform-origin: center;
      width: 50vw;
    }
  }

  &__talk {
    margin-top: 50px;
    display: flex;
    justify-content: flex-end;
    color: #fff;

    .link {
      font-size: $font-lg;
    }
  }

  &__projects {
    margin-bottom: 200px;

    @include mobile {
      margin-bottom: 100px;
    }

    &__intro {
      font-size: $font-xlg-med;
      margin-top: 130px;
      margin-bottom: 50px;
    }

    &__main {
      display: grid;
      padding-top: 60px;
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
      grid-gap: 50px;

      @include mobile {
        grid-template-columns: 1fr;
        grid-gap: 60px;

      }
    }
  }

  &__contact {
    display: grid;
    place-items: center;
    padding-top: 200px;
    padding-bottom: 200px;

    @include mobile {
      padding-top: 100px;
      padding-bottom: 100px;
    }

    p.intro {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: $font-lg;
      text-transform: uppercase;
      margin-bottom: 50px;
      opacity: .7;
      letter-spacing: 1px;

      @include mobile {
        font-size: 14px;
      }
    }

    &__huge-link {
      margin-left: auto;
      margin-right: auto;
      font-size: 10vw;

      @include mobile {
        font-size: 12vw;
      }
    }
  }
}
</style>

