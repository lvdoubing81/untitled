<template>
  <swiper>
    <swiper-item v-for="item in banner">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="swiperImgLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>

  import {Swiper,SwiperItem} from '@/components/common/swiper/index'

    export default {
        name: "homeSwiper",
      data(){
          return{
            isLoad:false
          }
      },
      props:{
          banner:{
            type:Array,
            default(){
              return []
            }
          }
      },
      components:{
        Swiper,
        SwiperItem
      },
      methods:{
        swiperImgLoad(){
          if(!this.isLoad){
            this.isLoad = true
            this.$emit('swiperImgLoad')
          }
        }
      }
    }
</script>

<style scoped>

</style>
