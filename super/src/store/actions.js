import {
  ADD_COUNT,
  ADD_TO_CART,
  CHECK_ALL,
  NO_CHECK_ALL
} from "./mutation-types";


export default {
  addCart(context,payload){
    return new Promise((resolve,reject)=>{
      //查找是否有相同商品
      let oldPruduct = context.state.cartList.find(item => item.iid === payload.iid)
      if(oldPruduct){
        //如果有，对应商品的数量加一
        context.commit(ADD_COUNT,oldPruduct)
        resolve("当前的商品数量加1")
        // oldPruduct.count += 1
      }else {
        //如果没有，再添加商品信息到购物车
        context.commit(ADD_TO_CART,payload)
        resolve("添加商品到购物车")
        // state.cartList.push(payload)
      }
    })


  },
   checkedAll(context){
      let checkedAll = context.state.cartList.find(item =>item.checked === false)
    if(checkedAll){
      context.commit(CHECK_ALL)
    }else {
      context.commit(NO_CHECK_ALL)
    }
  }
}
