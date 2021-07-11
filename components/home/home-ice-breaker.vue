<template>
    <div class="home-ice-breaker" data-scroll-section>
        <div class="home-ice-breaker__image">

            <div class="row" data-scroll data-scroll-direction="horizontal" data-scroll-speed="5">
                <HomeSong />
                <HomeSong image="https://372673.smushcdn.com/318461/wp-content/uploads/2021/07/Sinner-artwork-1024x1024.png?lossy=1&strip=1&webp=1" :info="{name: `Sinner`, artist: `Adekunle Gold`}" />
                <HomeSong image="https://media.pitchfork.com/photos/60d3557d00ab865e7d9d73e9/1:1/w_600/Doja%20Cat:%20Planet%20Her.jpeg" :info="{name: `Woman`, artist: `Doja Cat`}"/>
                <HomeSong image="https://cdns-images.dzcdn.net/images/cover/9955047483278bd0f93420951226ac44/350x350.jpg" :info="{name: `Billie Ellish`, artist: `NDA`}" />
                <HomeSong />
                <HomeSong image="https://372673.smushcdn.com/318461/wp-content/uploads/2021/07/Sinner-artwork-1024x1024.png?lossy=1&strip=1&webp=1"  />
                <HomeSong image="https://media.pitchfork.com/photos/60d3557d00ab865e7d9d73e9/1:1/w_600/Doja%20Cat:%20Planet%20Her.jpeg"/>
                <HomeSong image="https://cdns-images.dzcdn.net/images/cover/9955047483278bd0f93420951226ac44/350x350.jpg" />
                <HomeSong />
                <HomeSong image="https://372673.smushcdn.com/318461/wp-content/uploads/2021/07/Sinner-artwork-1024x1024.png?lossy=1&strip=1&webp=1" />
                <HomeSong image="https://media.pitchfork.com/photos/60d3557d00ab865e7d9d73e9/1:1/w_600/Doja%20Cat:%20Planet%20Her.jpeg"/>
                <HomeSong image="https://cdns-images.dzcdn.net/images/cover/9955047483278bd0f93420951226ac44/350x350.jpg" />
            </div>

            <div class="row" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-2">
                <HomeSong image="https://i0.wp.com/dnewz.com.ng/wp-content/uploads/2021/05/Mereba-%E2%80%93-AZEB-EP.jpg?fit=678%2C678&ssl=1" :info="{name: `Rider`, artist: `Mereba`}"/>
                <HomeSong image="https://372673.smushcdn.com/318461/wp-content/uploads/2021/06/Soundgasm-art-1024x1024.jpeg?lossy=1&strip=1&webp=1" :info="{name: `Soundgasm`, artist: `Rema`}"/>
                <HomeSong image="https://ratedrnb.com/cdn/2021/04/Jorja-Smith.png" :info="{name: `Home`, artist: `Jorja Smith`}"/>
                <HomeSong image="https://i0.wp.com/dnewz.com.ng/wp-content/uploads/2021/05/Mereba-%E2%80%93-AZEB-EP.jpg?fit=678%2C678&ssl=1"/>
                <HomeSong image="https://372673.smushcdn.com/318461/wp-content/uploads/2021/06/Soundgasm-art-1024x1024.jpeg?lossy=1&strip=1&webp=1"/>
                <HomeSong image="https://ratedrnb.com/cdn/2021/04/Jorja-Smith.png"/>
                <HomeSong image="https://i0.wp.com/dnewz.com.ng/wp-content/uploads/2021/05/Mereba-%E2%80%93-AZEB-EP.jpg?fit=678%2C678&ssl=1"/>
                <HomeSong image="https://372673.smushcdn.com/318461/wp-content/uploads/2021/06/Soundgasm-art-1024x1024.jpeg?lossy=1&strip=1&webp=1"/>
                <HomeSong image="https://ratedrnb.com/cdn/2021/04/Jorja-Smith.png"/>
   
            </div>

            <div class="row" data-scroll data-scroll-direction="horizontal" data-scroll-speed="3">
                <HomeSong image="https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Burna_Boy_-_African_Giant.png/220px-Burna_Boy_-_African_Giant.png" :info="{name: `Ye`, artist: `Burna Boy`}"/>
                <HomeSong image="https://media.pitchfork.com/photos/5fa6fce323b17a901fd1ec65/1:1/w_600/Wizkid.jpg" :info="{name: `No Stress`, artist: `Big Wiz`}"/>
                <HomeSong image="https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Benny_Blanco%2C_Halsey_and_Khalid_Eastside.png/220px-Benny_Blanco%2C_Halsey_and_Khalid_Eastside.png" :info="{name: `Eastside(with Halsey & Khalid)`, artist: `Blanco, Halsey, Khalid`}"/>
                <HomeSong image="https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Burna_Boy_-_African_Giant.png/220px-Burna_Boy_-_African_Giant.png"/>
                <HomeSong image="https://media.pitchfork.com/photos/5fa6fce323b17a901fd1ec65/1:1/w_600/Wizkid.jpg"/>
                <HomeSong image="https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Benny_Blanco%2C_Halsey_and_Khalid_Eastside.png/220px-Benny_Blanco%2C_Halsey_and_Khalid_Eastside.png"/>
                <HomeSong image="https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Burna_Boy_-_African_Giant.png/220px-Burna_Boy_-_African_Giant.png"/>
                <HomeSong image="https://media.pitchfork.com/photos/5fa6fce323b17a901fd1ec65/1:1/w_600/Wizkid.jpg"/>
                <HomeSong image="https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Benny_Blanco%2C_Halsey_and_Khalid_Eastside.png/220px-Benny_Blanco%2C_Halsey_and_Khalid_Eastside.png"/>
            
            </div>



        </div>
        <div class="home-ice-breaker__text">
            <p class="home-ice-breaker__text__intro">Ice Breakers -</p>
            <p class="home-ice-breaker__text__description">
                I love listening to Afro beats music, here’s my <a href="/" target="_blank" class="link link--no-decoration"><UnderlineLink decoration-color="#b6e69a">Spotify Profile</UnderlineLink></a>. I also enjoy traveling and exotic dishes (work with me so I can fund this).  <a href="/" target="_blank" class="link link--no-decoration"><UnderlineLink decoration-color="#b6e69a">Reach Out</UnderlineLink></a>  to know more about me.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.home-ice-breaker {
    display: flex;
    margin: 250px 0 50px 0;

    @include mobile {
        flex-direction: column-reverse;
    }

    &__image {
        flex: 1;
        overflow: hidden;
        position: relative;

        &::after {
            content: "";
            height: 100%;
            width: 40%;
            position: absolute;
            right: -2px;
            top: 0;
            background: linear-gradient(270deg, #131414, transparent);
        }

        .row {
            display: flex;
            flex-wrap: nowrap;
            white-space: nowrap;
            
            &:nth-child(2){
                transform: translateX(-70px);
            }

             &:nth-child(3){
                transform: translateX(-200px);
            }
        }

    }

    &__text {
        flex: 1;
        max-width: 720px;
        padding: 40px 60px 40px 100px;

        @include mobile {
            padding: 0 20px 40px 20px;
        }

        &__intro {
            font-size: 24px;
        }

        &__description{
            line-height: 1.5;
            font-size: 21px;
            line-height: 1.9;
            opacity: .7;
            margin-top: 40px;
        }
    }
}
</style>