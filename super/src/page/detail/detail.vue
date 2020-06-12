<template>
    <div class="detail">
      <detail-nav-bar ref="nav" class="datail-nav" @titleClick="titleClick"></detail-nav-bar>
      <scroll ref="scroll"
              @scroll="contentScroll"
              :probe-type="3"
              class="content">
      <detali-swiper :top-images="topImages"></detali-swiper>
      <detail-base-info :goods-info="goodsInfo"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
        <detail-image-info :detail-info="detailInfo" @detailImgLoad="detailImgLoad"></detail-image-info>
        <detail-params-info ref="params" :itemParams="itemParams"></detail-params-info>
        <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
        <goods-list ref="recommend" :goods="recommends"></goods-list>
      </scroll>
      <detailBottomBar @addCart="addCart"></detailBottomBar>
    </div>
</template>

<script>
    import detailNavBar from "./childComps/detailNavBar";
    import detaliSwiper from "./childComps/detaliSwiper";
    import detailBaseInfo from "./childComps/detailBaseInfo";
    import detailShopInfo from "./childComps/detailShopInfo";
    import detailImageInfo from "./childComps/detailImageInfo";
    import detailParamsInfo from "./childComps/detailParamsInfo";
    import detailCommentInfo from "./childComps/detailCommentInfo";
    import goodsList from "../../components/content/goods/goodsList";
    import detailBottomBar from "./childComps/detailBottomBar";

    import scroll from "../../components/common/scroll/scroll";

    import {getDetail,GoodsInfo,Shop,getRecommend} from "../../network/detail";
    import {debounce} from "../../common/utils";
    import {itemListenerMixin} from "../../common/mixin";


    export default {
        name: "detail",
      mixins:[itemListenerMixin],
      data(){
          return{
            iid:null,
            topImages:[],
            goodsInfo: {},
            shop:{},
            detailInfo:{},
            itemParams:{},
            commentInfo:{},
            recommends:[],
            titleTopYs:[],
            getTitleTop:null,
            currentIndex:0,
            cartInfo:{}
          }
      },
      components:{
          detailNavBar,
          detaliSwiper,
          detailBaseInfo,
          detailShopInfo,
          detailImageInfo,
          detailParamsInfo,
          detailCommentInfo,
          scroll,
          goodsList,
         detailBottomBar

      },
      created() {
          //1 保存传入的id
        this.iid = this.$route.params.iid
        //2 利用保存的id获取数据
        getDetail(this.iid).then(res=>{
          const data = res.result
          this.topImages = res.result.itemInfo.topImages
          // console.log(data)
          //3 封装商品信息
          this.goodsInfo = new GoodsInfo(data.itemInfo,data.columns,data.shopInfo.services)
          //4 封装商店信息
          this.shop = new Shop(data.shopInfo)
          //5 获取详情信息
          this.detailInfo = data.detailInfo
          //6 获取参数信息
          this.itemParams = data.itemParams
          //7 获取评论信息
          if(data.rate.cRate !== 0){
            this.commentInfo = data.rate.list[0]
          }


        })

        getRecommend().then(res=>{
          // console.log(res)
          this.recommends = res.data.list
          // console.log(this.recommends)

        })

        this.getTitleTop = debounce(()=>{
          this.titleTopYs = []
          this.titleTopYs.push(0)
          this.titleTopYs.push(this.$refs.params.$el.offsetTop - 44)
          this.titleTopYs.push(this.$refs.comment.$el.offsetTop - 44)
          this.titleTopYs.push(this.$refs.recommend.$el.offsetTop - 44)
          this.titleTopYs.push(Number.MAX_VALUE)
          console.log(this.titleTopYs)
        },200)
      },
      mounted() {

      },
      methods: {
        detailImgLoad() {
          debounce(this.$refs.scroll.reflesh(), 200)
          this.getTitleTop()
        },
        titleClick(index) {
          console.log(index)
          this.$refs.scroll.scrollTo(0, -this.titleTopYs[index], 200)
        },
        contentScroll(position) {
          let length = this.titleTopYs.length
          const positionY = -position.y
          for (let i = 0; i < length - 1; i++) {
            if ((this.currentIndex !== i && positionY >= this.titleTopYs[i] && positionY < this.titleTopYs[i + 1])) {
              this.currentIndex = i
              this.$refs.nav.currentIndex = this.currentIndex
            }
          }
        },
        addCart() {
          //获取购物车需要展示的信息
          const product = {}
          product.image = this.topImages[0];
          product.title = this.goodsInfo.title;
          product.desc = this.goodsInfo.desc;
          product.realPrice = this.goodsInfo.realPrice;
          product.count = 1;
          product.iid = this.iid;

          this.$store.dispatch("addCart",product).then(res=>{
            console.log(res)
          })
        }
      }
    }
</script>

<style scoped>
  .detail{
    position: relative;
    z-index: 9;
    height: 100vh;
    background-color: #ffffff;
    overflow: hidden;
  }
  .datail-nav{
    position: relative;
    z-index: 9;
    background-color: #ffffff;
  }
  .content{
    height: calc(100% - 44px - 58px);
  }
</style>
