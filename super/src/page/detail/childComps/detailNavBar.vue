<template>
  <navbar>
    <div slot="left" class="back" @click="back">
      <img src="@/assets/images/common/back.svg" alt="">
    </div>
    <div slot="center" class="title">
      <div v-for="(item , index) in title"
           class="title-item"
           @click="titleClick(index)"
           :class="{active : index == currentIndex}">{{item}}</div>
    </div>
  </navbar>
</template>

<script>
   import navbar from "../../../components/common/navbar/navbar";


   export default {
        name: "detailNavBar",
      data(){
          return{
            title:["商品","参数","评论","推荐"],
            currentIndex:0,
          }
      },
      components:{
          navbar
      },
     methods:{
        titleClick(index){
          this.currentIndex = index
          this.$emit("titleClick",index)
        },
        back(){
          this.$router.back()
        }
      }
    }
</script>

<style scoped>
  .title{
    display: flex;
  }
  .title-item{
    flex: 1;
    font-size: 13px;
  }
  .active{
    color: #ff5777;
  }
  .back img{
    margin-top: 12px;
  }
</style>
