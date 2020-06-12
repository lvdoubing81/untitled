<template>
    <div class="check-btn" :class="{check: isChecked}">
      <img v-show="isChecked" src="~assets/images/cart/tick.svg">
    </div>
</template>

<script>
    export default {
        name: "checkButton",
      props:{
        isChecked:{
          type:Boolean,
          default:false
        }
      }
    }
</script>

<style scoped>
  .check-btn{
    width: 20px;
    height: 20px;
    border: 1px solid rgba(3,3,3,.3);
    border-radius: 50%;
  }
  .check{
    border: 1px solid rgba(255,87,119,1);
    background-color: #ff5777;
  }
</style>
