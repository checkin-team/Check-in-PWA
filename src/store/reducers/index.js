import { combineReducers } from "redux"
import authReducer from "../../services/Authentication/reducers"
import homeReducer from "../../services/Home/reducers/index"
import menuReducer from "../../services/MenuServices/reducers/index"
import cartReducer from "../../services/Cart/reducers/index"
import checkoutReducer from "../../services/Checkout/reducers/index"


const appReducer = combineReducers({
  authentication: authReducer,
  home: homeReducer,
  menu: menuReducer,
  cart: cartReducer,
  checkout: checkoutReducer
})

const rootReducer = (state, action) => {
  // if (action.type === ACTION.SIGNOUT_SUCCESS) {
  //   state = undefined
  // }
  return appReducer(state, action)
}

export default rootReducer