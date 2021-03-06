import { combineReducers } from "redux"
import authReducer from "../../services/Authentication/reducers"
import homeReducer from "../../services/Home/reducers/index"
import menuReducer from "../../services/MenuServices/reducers/index"
import cartReducer from "../../services/Cart/reducers/index"
import checkoutReducer from "../../services/Checkout/reducers/index"
import {AmountReducer} from "../../services/Cart/reducers/index";
import orderReducer from '../../services/order/reducers/index';

const appReducer = combineReducers({
  authentication: authReducer,
  home: homeReducer,
  menu: menuReducer,
  cart: cartReducer,
  checkout: checkoutReducer,
  amount: AmountReducer,
  order: orderReducer,
})

const rootReducer = (state, action) => {
  // if (action.type === ACTION.SIGNOUT_SUCCESS) {
  //   state = undefined
  // }
  return appReducer(state, action)
}

export default rootReducer