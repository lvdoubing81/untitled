<template>
  <div class="goods-item" @click="toDetail">
    <div><img :src="showImage" @load="itemImgLoad"></div>
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{sell}}</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "goodsListItem",
      props:{
          goodsItem:{
            type:Object,
            default(){
              return {}
            }
          }
      },
      computed:{
        showImage(){
          return this.goodsItem.image || this.goodsItem.show.img
        },
        sell(){
          return this.goodsItem.sale || this.goodsItem.itemLikes
        }
      },
      methods:{
        itemImgLoad(){
          this.$bus.$emit("itemImgLoad")
        },
        toDetail(){
          this.$router.push('detail/'+this.goodsItem.iid)
        }
      }
    }
</script>

<style scoped>
  .goods-item{
    width: 48%;
    margin: 6px 0;
  }
  .goods-item img{
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    font-size: 12px;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price{
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods-info .collect{
    position: relative;
  }
  .goods-info .collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/images/common/collect.svg") 0 0/14px 14px;
  }
</style>
