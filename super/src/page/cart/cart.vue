<template>
    <div class="cart">
      <!--导航-->
      <navbar class="nav-bar">
        <div slot="center">购物车({{cartLength}})</div>
      </navbar>
      <!--商品列表-->
      <cart-list class="cart-list"></cart-list>

      <!--底部汇总-->
      <cart-bottom-bar></cart-bottom-bar>
    </div>
</template>

<script>
  import navbar from "../../components/common/navbar/navbar";
  import CartList from "./childComps/cartList";
  import CartBottomBar from "./childComps/cartBottomBar";

  import {mapGetters} from 'vuex'


    export default {
        name: "cart",
      components:{
        CartBottomBar,
        navbar,
        CartList,
      },
      computed:{
          ...mapGetters([
            'cartLength',
          ])
      },


    }
</script>

<style scoped>
  .cart{
    height: 100vh;
  }
  .nav-bar{
    background-color: var(--color-tint);
    color: #ffffff;
  }
  .cart-list{
    height: calc(100% - 44px - 49px - 49px)
  }
</style>
