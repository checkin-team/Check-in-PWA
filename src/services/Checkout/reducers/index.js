import actionTypes from "../actions/actionTypes"
import ACTION from "../actions/actionTypes"

const initialState = {
  settleBillDetails: { isLoading: "idle",data:'',error:{}},
  checkout: { isLoading: "idle",data:{},error:{}},
  razorpay: { isLoading: "idle",data:{},error:{}},
  callback: { isLoading: "idle",data:{},error:{}},
  applyPromo: { isLoading: "idle",data:{},error:{}},
  removePromo: { isLoading: "idle",data:{},error:{}},
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    // case ACTION.GET_SETTLEBILL_DEATILS:
    //   return{
    //     ...state,
    //     settleBillDetails: payload
    //   }
    case ACTION.SETTLE_BILL_REQ: 
    return {
      ...state,
      settleBillDetails:{...state.settleBillDetails,
        isLoading:true,
      }
    }
    case ACTION.SETTLE_BILL_SUCCESS: 
    return {
      ...state,
      settleBillDetails:{...state.settleBillDetails,
        isLoading:false,
        data: {...payload}
      }
    }
    case ACTION.SETTLE_BILL_FAILURE: 
    return {
      ...state,
      settleBillDetails:{...state.settleBillDetails,
        isLoading:false,
        error: payload
      }
    }
    
    case ACTION.CHECKOUT_REQ: 
    return {
      ...state,
      checkout:{...state.checkout,
        isLoading:true,
      }
    }
    case ACTION.CHECKOUT_SUCCESS: 
    return {
      ...state,
      checkout:{...state.checkout,
        isLoading:false,
        data: payload
      }
    }
    case ACTION.CHECKOUT_FAILURE: 
    return {
      ...state,
      checkout:{...state.checkout,
        isLoading:false,
        error: payload
      }
    }
    case ACTION.RAZORPAY_CALL_REQ: 
    return {
      ...state,
      razorpay:{...state.razorpay,
        isLoading:true,
      }
    }
    case ACTION.RAZORPAY_CALL_SUCCESS: 
    return {
      ...state,
      razorpay:{...state.razorpay,
        isLoading:false,
        data: {...payload}
      }
    }
    case ACTION.RAZORPAY_CALL_FAILURE: 
    return {
      ...state,
      razorpay:{...state.razorpay,
        isLoading:false,
        error: payload
      }
    }
    case ACTION.RAZORPAY_CALLBACK_REQ: 
    return {
      ...state,
      callback:{...state.callback,
        isLoading:true,
      }
    }
    case ACTION.RAZORPAY_CALLBACK_SUCCESS: 
    return {
      ...state,
      callback:{...state.callback,
        isLoading:false,
        data: {...payload}
      }
    }
    case ACTION.RAZORPAY_CALLBACK_FAILURE: 
    return {
      ...state,
      callback:{...state.callback,
        isLoading:true,
        error: payload
      }
    }
    case ACTION.APPLY_PROMO_REQ: 
    return {
      ...state,
      applyPromo:{...state.applyPromo,
        isLoading:true,
      }
    }
    case ACTION.APPLY_PROMO_SUCCESS: 
    return {
      ...state,
      applyPromo:{...state.applyPromo,
        isLoading:false,
        data: payload
      }
    }
    case ACTION.APPLY_PROMO_FAILURE: 
    return {
      ...state,
      applyPromo:{...state.applyPromo,
        isLoading:false,
        error: payload
      }
    }
    case ACTION.REMOVE_PROMO_REQ: 
    return {
      ...state,
      removePromo:{...state.removePromo,
        isLoading:true,
      }
    }
    case ACTION.REMOVE_PROMO_SUCCESS: 
    return {
      ...state,
      applyPromo:{
        ...state.applyPromo,
        isLoading: "idle",
        data: [],
        error:{},
      },
      removePromo:{...state.removePromo,
        isLoading:false,
        data: payload
      }
    }
    case ACTION.REMOVE_PROMO_FAILURE: 
    return {
      ...state,
      
      removePromo:{...state.removePromo,
        isLoading:false,
        error: payload
      }
    }
    default:
      return state
  }
}
