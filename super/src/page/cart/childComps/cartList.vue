<template>
    <div class="cart-list">
      <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item,index) in cartList"
                      :cart-info="item"
                      :key="index"></cart-list-item>
      </scroll>
    </div>
</template>

<script>
    import Scroll from "../../../components/common/scroll/scroll";
    import {mapGetters} from 'vuex'
    import CartListItem from "./cartListItem";

    export default {
        name: "cartList",
      components: {CartListItem, Scroll},
      computed:{
          ...mapGetters([
            'cartList'
          ])
      },
      activated() {
        this.$refs.scroll.reflesh()
      }
    }
</script>

<style scoped>
  .cart-list{
    height: 100%;;
  }
  .content{
    height: 100%;
    overflow: hidden;
  }
</style>
