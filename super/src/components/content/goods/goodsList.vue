<template>
  <div class="goods-list">
    <goods-list-item v-for="item in goods" :goodsItem="item">
    </goods-list-item>
  </div>
</template>

<script>

  import goodsListItem from "./goodsListItem";

    export default {
        name: "goodsList",
      props:{
          goods:{
            type:Array,
            default(){
              return []
            }
          }
      },
      components:{
          goodsListItem
      }
    }
</script>

<style scoped>
  .goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

  }
</style>
