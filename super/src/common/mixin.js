import {debounce} from "./utils";

export const itemListenerMixin = {
  data(){
    return{
      itemListener: null,
      newReflesh: null
    }
  },
  mounted(){
    this.newReflesh = debounce(this.$refs.scroll.reflesh,100)

    this.itemListener = ()=>{
      this.newReflesh()
    }
    this.$bus.$on("itemImgLoad",this.itemListener)
    // console.log("我是混入中的内容")
  }
}
