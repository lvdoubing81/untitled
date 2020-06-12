<template>
    <div class="bottom-bar">
      <div class="check-content">
        <check-button class="check-box" :is-checked="isAll" @click.native="checkedAll"></check-button>
      </div>
      <span>全选</span>
      <div class="price">
        合计：{{totalPrice}}
      </div>

      <div class="buy">
        <span>去结算</span>({{cartLength}})
      </div>
    </div>
</template>

<script>
    import CheckButton from "../../../components/content/checkButton/checkButton";
    export default {
        name: "cartBottomBar",
      components: {CheckButton},
      computed:{
          totalPrice(){
            return "￥" + this.$store.state.cartList.filter(item =>{
              return item.checked
            }).reduce((preValue,item)=>{
              return  preValue + item.realPrice * item.count
            },0).toFixed(2)
          },
        cartLength(){
            return this.$store.state.cartList.filter(item =>{
              return item.checked
            }).length
        },
        isAll(){
            if(!this.$store.state.cartList.length){
              return false
            }else {
              return !(this.$store.state.cartList.find(item =>!item.checked))
            }

        }
      },
      methods:{
        checkedAll(){
          this.$store.dispatch("checkedAll")
        }
      }
    }
</script>

<style scoped>
    .bottom-bar{
      display: flex;
      height: 49px;
      background-color: #eeeeee;
      align-items: center;
      padding-left: 6px;
      font-size: 14px;
    }
  .check-box{
    /*width: 24px;*/
    /*height: 24px;*/
    margin-right: 6px;
  }
  .price{
    padding-left: 16px;
    flex: 1;
  }
  .buy{
    line-height: 48px;
    height: 48px;
    padding:0 12px;;
    background-color: rgba(255, 213, 0, 0.96);
  }
</style>
