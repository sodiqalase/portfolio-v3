<template>
  <div class="home-page">
    <div  data-scroll-section class="section-container home-page__hero">
      <div class="home-page__hero__text">
          <p class="home-page__hero__heading" data-scroll data-scroll-speed="2.5" data-scroll-position="horizontal"> - Hey, there</p>
          <p class="home-page__hero__heading" data-scroll data-scroll-speed="2" data-scroll-position="horizontal"> I am</p>
          <p class="home-page__hero__heading" data-scroll data-scroll-speed="1" data-scroll-position="horizontal">Olamide⚡️</p>
          <p class="home-page__hero__description">I focus on improving the quality of front-end code by paying close attention to minor details with the help of grade A softwares and developer tools/processes.</p>
      </div>
      <div class="home-page__hero__illustration">
          <div class="home-page__hero__illustration__line"></div>
          <div class="home-page__hero__illustration__main"></div>
        </div>
    </div>
    
    <div  data-scroll-section class="section-container home-page__talk">
      <a href="mailto:sholankedaniel@gmail.com" class="link link--no-style">
        <UnderlineLink> Let's talk </UnderlineLink>
      </a>
    </div>

    <div class="section-container home-page__projects" data-scroll-section>
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

}
</script>

<style lang="scss" scoped>
.home-page{ 
  
  &__hero {
    padding-top: 250px;
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
    }
  }

  &__contact {
    display: grid;
    place-items: center;
    padding-top: 200px;
    padding-bottom: 200px;

    p.intro {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: $font-lg;
      text-transform: uppercase;
      margin-bottom: 50px;
      opacity: .7;
      letter-spacing: 1px;
    }

    &__circle {
      // display: block;
      // width: 300px;
      // height: 300px;
      // border: 1px solid #fff;
    }

    &__huge-link {
      margin-left: auto;
      margin-right: auto;
      font-size: 10vw;
    }
  }
}
</style>

