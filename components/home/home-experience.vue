<template>
    <div class="section-container home-experience" data-scroll-section>
        <div class="home-experience__intro">
            <p class="home-experience__intro__small-text"> - Experience</p>
            <p class="home-experience__intro__title">
                <span data-scroll data-scroll-speed="1" data-scroll-position="horizontal">Some places</span>
                <span data-scroll data-scroll-speed="2" data-scroll-position="horizontal">I've worked</span>
            </p>
            <div class="home-experience__logos" data-scroll data-scroll-speed="3" data-scroll-position="horizontal">
                <img src="/assets/logos/flutterwave.svg" /> <span class="spacer"></span>
                <img src="/assets/logos/beezop.svg" /> <span class="spacer"></span>
                <img src="/assets/logos/rizevo.svg" /> <span class="spacer"></span>
                <img src="/assets/logos/africave.svg" />
            </div>
        </div>
     
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.home-experience {

    &__logos {
        margin-top: 20px;
        display: flex;
        align-items: center;
        

        img {
            height: 50px;
            filter: grayscale(1);

            & + .spacer {
                width: 1px;
                background: rgba(255, 255, 255, 0.24);
                display: block;
                margin: 0 40px;
                transform: rotate(30deg);
                height: 80px;
            }
        }
    }

    &__intro {
        &__small-text {
            margin-left: 200px;
            font-size: $font-xlg;
            opacity: .8;
            margin-bottom: 40px;
        }

        &__title {
            font-size: 80px;

            span {
                display: flex;
                line-height: 1.4;
                text-transform: uppercase;

                &:nth-child(1){
                    margin-left: 200px;
                }
            }
        }
    }
}
</style>