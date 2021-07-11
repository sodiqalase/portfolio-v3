<template>
    <div class="home-ice-breaker__image__song">
        <div class="image" :style="{'background-image': `url(${image})`}"></div>
        <div class="title">
            <strong>
                {{info.name}}
            </strong>
                {{info.artist}}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            image : {
                type: String,
                default : "https://cdn.shopify.com/s/files/1/0844/5451/products/albums-151a-1_1200x1200.jpg?v=1530546471"
            },
            info: {
                type: Object,
                default(){
                    return { name: "I am the anti-christ to you", artist: "Kishi Bashi" }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.home-ice-breaker {
    &__image {
        &__song {
            display: flex;
            align-items: center;
            padding: 15px 10px;
            margin: 20px 0 20px 20px;
            background: rgba(255, 255, 255, 0.02);
            box-shadow: 0 0 30px rgba(0, 0, 0, 0.342);
            min-width: 220px;
            border-radius: 5px;

            @include mobile{ 
                min-width: 200px;
            }


            .image {
                height: 50px;
                width: 50px;
                display: block;
                background: $theme;
                border-radius: 4px;
                margin-right: 15px;
                background-size: cover;
                background-position: center;
            }

            .title {
                font-family: Arial, Helvetica, sans-serif;
                font-size: 12px;

                strong {
                    font-size: 14px;
                    margin-bottom: 8px;
                    display: block;
                    font-family: Arial, Helvetica, sans-serif;
                    max-width: 130px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
    }
}
</style>