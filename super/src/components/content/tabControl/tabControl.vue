<template>
    <div class="tabControl">
      <div v-for="(item,index) in title"
           class="tabControl-item" :class="{active:  index===currentIndex }"
           @click="itemClick(index)">
        <span>{{item}}</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "tabControl",
      props:{
          title:{
            type:Array,
            default(){
              return []
            }
          }
      },
      data(){
          return{
            currentIndex:0,
          }
      },
      methods:{
        itemClick(index){
            this.currentIndex = index,
              this.$emit('tabClick',index)
          }
      }
    }
</script>

<style scoped>
  .tabControl{
    display: flex;
    text-align: center;
    font-size: 14px;
    background-color: #ffffff;
    z-index: 9;
  }
  .tabControl-item{
    flex: 1;
    line-height: 36px;
    height: 36px;

  }
  .active{
    color: var(--color-high-text);
  }
  .active span{
    border-bottom: 2px solid #ff5777 ;
    padding:3px;
  }
</style>
