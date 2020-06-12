import {
  ADD_COUNT,
  ADD_TO_CART,
  CHECK_CLICK,
  CHECK_ALL,
  NO_CHECK_ALL
} from "./mutation-types";

export default {
  [ADD_COUNT](state,payload){
    payload.count +=1
  },
  [ADD_TO_CART](state,payload){
    payload.checked = true
    state.cartList.push(payload)
  },
  [CHECK_CLICK](state,payload){
    payload.checked = !payload.checked
  },
  [CHECK_ALL](state){
    state.cartList.forEach(item=> item.checked = true)
  },
  [NO_CHECK_ALL](state){
    state.cartList.forEach(item=> item.checked = false)
  }
}
