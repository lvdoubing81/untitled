<template>
    <div class="wrapper"  ref="wrapper">
      <div class="content>">
        <slot></slot>
      </div>
    </div>
</template>

<script>
  import BScroll from  'better-scroll'

    export default {
        name: "scroll",
      props:{
          probeType:{
            type:Number,
            default(){
              return 0
            }
          },
        pullUpLoad:{
            type:Boolean,
            default() {
              return false;
            }
        }
      },
      data(){
          return{
            scroll:null,
            ifShow:false,
          }
      },
      mounted() {

          this.scroll = new BScroll(this.$refs.wrapper,{
            probeType:this.probeType,
            click:true,
            pullUpLoad: this.pullUpLoad
          })
        if(this.probeType === 2 || this.probeType === 3){
          this.scroll.on("scroll",(position)=>{
            this.$emit("scroll",position)
          })
        }
            if(this.pullUpLoad){
              this.scroll.on("pullingUp",()=>{
                this.$emit("pullingUp")
              })
            }


      },
      methods:{
          scrollTo(x,y,time){
            this.scroll && this.scroll.scrollTo(x,y,time)
          },
        reflesh(){
            this.scroll && this.scroll.refresh()

        },
        finishPullUP(){
             this.scroll && this.scroll.finishPullUp()
        },
        getScrollY(){
            return this.scroll ? this.scroll.y : 0
        }

      }
    }
</script>

<style scoped>

</style>
