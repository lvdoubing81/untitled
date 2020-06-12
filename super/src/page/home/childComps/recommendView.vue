<template>
  <div>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommend">
      <a :href="item.link">
        <img :src="item.image">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>

  </div>
</template>

<script>
    export default {
        name: "recommendView",
        props:{
          recommend:{
            type:Array,
            default() {
              return [];
            }
          }
        },
    }
</script>

<style scoped>
  .recommend{
    display: -webkit-box;
    display: flex;
    padding: 6px 0 20px 0;
    border-bottom: 8px solid #eee;
  }
  .recommend-item{
    text-align: center;
    flex: 1;
    font-size: 12px;
  }
  .recommend-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 6px;

  }
</style>
