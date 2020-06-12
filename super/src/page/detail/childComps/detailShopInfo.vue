<template>
    <div v-if="Object.keys(shop).length!== 0" class="shop-info">
      <div class="shop-top">
        <img :src="shop.logo">
        <span class="title">{{shop.name}}</span>
      </div>
      <div class="shop-middle">
        <div class="shop-middle-item shop-middle-left">
          <div class="info-sells">
            <div class="sell-count">{{shop.sells}}</div>
            <div class="sell-text">总销量</div>
          </div>
          <div class="info-goods">
            <div class="goods-count">{{shop.goodsCount}}</div>
            <div class="goods-text">全部宝贝</div>
          </div>
        </div>
        <div class="shop-middle-item shop-middle-right">
          <table>
            <tr v-for="(item,index) in shop.score" :key="index">
              <td>{{item.name}}</td>
              <td class="score" :class="{'score-better' : item.isBetter}">{{item.score}}</td>
              <td class="better" :class="{'better-more' : item.isBetter}">
                <span>{{item.isBetter? '高':'低'}}</span></td>
            </tr>
          </table>
        </div>
      </div>
      <div class="shop-bottom">
        <div class="enter-shop">
          <span>进店逛逛</span></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "detailShopInfo",
      props:{
          shop:{
            type:Object
          }
      }
    }
</script>

<style scoped>
  .shop-info{
    padding: 24px 9px;
    border-bottom: 6px solid #f2f5f8;
  }
  .shop-top{
    line-height: 45px;
    display: flex;
    align-items: center;
  }
  .shop-top img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.1);
  }
  .shop-top .title{
    margin-left: 12px;
    vertical-align: center;
  }
  .shop-middle{
    margin-top: 15px;
    display: flex;
    align-items: center;
  }
  .shop-middle-item{
    flex: 1;
  }
  .shop-middle-left{
    display: flex;
    justify-content: space-evenly;
    color: #333333;
    text-align: center;
    border-right: 1px solid rgba(0,0,0,.1);
  }
  .sell-count, .goods-count{
    font-size: 18px;
  }
  .sell-text, .goods-text{
    margin-top: 12px;
    font-size: 12px;
  }
  .shop-middle-right{
    font-size: 13px;
    color: #333333;
  }
  .shop-middle-right table{
    width: 120px;
    margin-left: 30px;
  }
  .shop-middle-right table td{
    padding: 6px 0;
  }
  .shop-middle-right .score{
    color: #5ea732;
  }
  .shop-middle-right .score-better{
    color: #f13e3a;
  }
  .shop-middle-right .better span{
    background-color: #5ea732;
    color: #fff;
    text-align: center;
  }
  .shop-middle-right .better-more span{
    background-color: #f13e3a;
  }
  .shop-bottom{
    margin-top: 12px;
    text-align: center;
  }
  .shop-bottom .enter-shop span{
    padding: 6px 24px;
    background-color: #E8E8E8;
    border-radius: 5px;
  }

</style>
