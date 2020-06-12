<template>
  <div>
<!--    <div style="height: 44px;"></div>-->
  <div id="home">
    <navbar class="home-nav">
      <div slot="center">购物街</div>
    </navbar>
    <tab-control :title="['流行','新款','精选']"
                 ref="tabControl1"
                 v-show="isTabFixed"
                 class="tab-control"
                 @tabClick="tabClick"></tab-control>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @pullingUp="loadMore"
            @scroll="contentScroll">
    <home-swiper :banner="banner" @swiperImgLoad="swiperImgLoad"></home-swiper>
    <recommend-view :recommend="recommend" />
    <featrue-view></featrue-view>
    <tab-control :title="['流行','新款','精选']"
                 ref="tabControl2"
                 :class="{fixed:isTabFixed}"
                 @tabClick="tabClick"></tab-control>
    <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
<!--    <div style="height: 49px"></div>-->
  </div>
</template>

<script>
  import homeSwiper from "./childComps/homeSwiper";
  import recommendView from "./childComps/recommendView";
  import featrueView from "./childComps/featrueView";

  import navbar from "@/components/common/navbar/navbar";
  import scroll from "../../components/common/scroll/scroll";

  import tabControl from "../../components/content/tabControl/tabControl";
  import goodsList from "../../components/content/goods/goodsList";
  import backTop from "../../components/content/backTop/backTop";

  import { getHomeMultidata, getHomeGoods} from "@/network/home";
  import {itemListenerMixin} from "../../common/mixin";


  export default {
      name: "home",
    mixins:[itemListenerMixin],
      data() {
      return{
        banner:[],
        recommend:[],
        goods:{
          pop:{page:0,list:[]},
          new:{page:0,list:[]},
          sell:{page:0,list:[]}
        },
        currentType: 'pop',
        isShowBackTop:false,
        isTabFixed:false,
        tabOffsetTop:0,
        saveY:0
      }
    },
      components:{
        homeSwiper,
        recommendView,
        featrueView,

        navbar,
        scroll,

        tabControl,
        goodsList,
        backTop
      },
      created() {
          this.getHomeMultidata();
          this.getHomeGoods('pop')
          this.getHomeGoods('new');
          this.getHomeGoods('sell');

      },
    mounted() {

    },
    activated() {
        this.$refs.scroll.reflesh()
        this.$refs.scroll.scrollTo(0, this.saveY, 0)

    },
    deactivated() {
        this.saveY = this.$refs.scroll.getScrollY()
    },
    methods:{
      /*
      事件监听相关事件
       */
        tabClick(index){
          switch (index) {
            case 0:
              this.currentType = 'pop'
              break
            case 1:
              this.currentType = 'new'
              break
            case 2:
              this.currentType = 'sell'
              break
          }
          this.$refs.tabControl1.currentIndex = index
          this.$refs.tabControl2.currentIndex = index
        },
      backClick(){
        this.$refs.scroll.scrollTo(0,0,800)
      },
      contentScroll(position){
          //判断backTop是否显示
        this.isShowBackTop = (-position.y)>1000

         //判断tabControl是否吸顶
        this.isTabFixed = (-position.y)>this.tabOffsetTop
      },
      loadMore(){
        this.getHomeGoods(this.currentType)
      },
      swiperImgLoad(){
        //获取tabControl的offsetTop
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      },




        /*
        网络请求事件
         */
        getHomeMultidata(){
          getHomeMultidata().then(res=>{
            this.banner = res.data.banner.list
            this.recommend = res.data.recommend.list
          })
        },
      getHomeGoods(type){
        // console.log(this.goods[type])
          const page = this.goods[type].page + 1
          getHomeGoods(type,page).then(res=>{
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page +=1

            this.$refs.scroll.finishPullUP()

          })
      }
    },
    computed:{
    }
  }
</script>

<style scoped>
  #home{
    height: 100vh;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #ffffff;
    z-index: 9;
  }
  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .tab-control{
    position: relative;
    z-index: 9;
  }
</style>
