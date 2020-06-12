<template>
    <div class="list-item">
      <div class="item-selector">
        <check-button :is-checked="cartInfo.checked" @click.native="checkClick"></check-button>
<!--          <CheckButton @checkBtnClick="checkedChange" :value="itemInfo.checked"></CheckButton>-->
      </div>
      <div class="item-img">
        <img :src="cartInfo.image">
      </div>
      <div class="item-info">
        <div class="item-title">{{cartInfo.title}}</div>
        <div class="item-desc">{{cartInfo.desc}}</div>
        <div class="info-bottom">
          <div class="item-price">￥{{cartInfo.realPrice}}</div>
          <div class="item-flex"></div>
          <div class="item-count">x{{cartInfo.count}}</div>
        </div>
      </div>
    </div>
</template>

<script>
    import CheckButton from "../../../components/content/checkButton/checkButton";
    export default {
        name: "cartListItem",
      components: {CheckButton},
      props:{
        cartInfo:{
          type:Object,
          default(){
            return {}
          }
        },

      },
      methods:{
        checkClick(){
          this.$store.commit('check_click',this.cartInfo)
        }
      }
    }
</script>

<style scoped>
  .list-item{
    width: 100%;
    display: flex;
    font-size: 0;
    border-bottom: 1px solid #ccc;
    padding: 6px 0 ;
  }
  .item-selector{
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 3px;
  }
  .item-title, .item-desc{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-img img{
    width: 70px;
    height: 100px;
    display: block;
    border-radius: 5px;
    margin-right: 3px;
  }
  .item-info{
    font-size: 17px;
    color: #333333;
    padding: 6px 12px;
    position: relative;
    overflow: hidden;
  }
  .item-info .item-desc{
    font-size: 14px;
    color: #666;
    margin-top: 12px;
  }

  .info-bottom{
    margin-top: 12px;
    display: flex;
    position: absolute;
    bottom: 12px;
    left: 12px;
    right: 12px;
  }
  .info-bottom .item-price{
    color: orange;
  }
  .item-flex{
    flex: 1;
  }



</style>
