<template>
  <div>
  <swiper class="Detail-swiper">
    <swiper-item v-for="item in topImages">
        <img :src="item" alt="">
    </swiper-item>
  </swiper>
  </div>
</template>

<script>

  import {Swiper,SwiperItem} from '@/components/common/swiper/index'

    export default {
        name: "detaliSwiper",
      props:{
          topImages:{
            type:Array,
            default(){
              return []
            }
          }
      },
      components:{
        Swiper,
        SwiperItem
      }
    }
</script>

<style scoped>
  .Detail-swiper{
    height: 300px;
    overflow: hidden;
  }
</style>
