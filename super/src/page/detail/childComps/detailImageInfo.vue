<template>
    <div v-if="Object.keys(detailInfo).length!== 0" class="detail-img-info">
        <div class="info-desc clear-fix">
          <div class="start"></div>
          <div class="desc">{{detailInfo.desc}}</div>
          <div class="end"></div>
        </div>
      <div v-for="item in detailInfo.detailImage">
       <div class="info-key">{{item.key}}</div>
        <div class="info-list">
        <img v-for="(item,index) in item.list" :src="item" :key="index" @load="detailImgLoad">
       </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "detailImageInfo",
      props:{
          detailInfo:{
            type:Object,
            default(){
              return {}
            }
          }
      },
      data(){
          return{
            counter:0,
          }
      },
      methods:{
        detailImgLoad(){
          this.$emit("detailImgLoad")
        }
      }
    }

</script>

<style scoped>
  .detail-img-info{
    padding: 12px 0;
    border-bottom: 6px solid #f2f5f8;
  }
  .info-desc{
    padding: 0 12px;
  }
  .info-desc .start,.info-desc .end{
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }
  .info-desc .start{
    float: left;
  }
  .info-desc .end{
    float: right;
  }
  .info-desc .start::before,.info-desc .end::after{
    content: "";
    position: absolute;
    width: 5px;
    height: 5px;
    background: #333;
    bottom: 0;
  }
  .info-desc .end::after{
    right: 0;
  }
  .info-desc .desc{
    padding: 12px;
    font-size: 14px;
  }
  .info-key{
    margin: 12px 0 12px 15px;
  }
  .info-list{
    padding: 0 6px;
  }
  .info-list img{
    width: 100%;
  }
</style>
