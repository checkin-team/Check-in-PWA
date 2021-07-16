import ACTION from "../actions/actionTypes";
import HOMEACTION from '../../Home/actions/actionTypes';

const initialState = {
  items: {
    isLoading: false,
    data: [],
    error: ""
  },
  order:{
    isLoading:'idle',
    data:'',
    error:{},
  }
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    // case ACTION.SET_STATE:
    //   return { ...state, ...payload }

    case HOMEACTION.SEND_TO_CART:
      return {
        ...state,
        items: {
          ...state.items,
          data: [...state.items.data, payload]
        }
      }

    case ACTION.ADD_ITEM:
      return {
        ...state,
        items: {
          ...state.items,
          data: [...state.items.data, payload]
        }
      }

    case ACTION.REMOVE_ITEM:
    const index= state.items.data.findIndex((item)=>item.name==payload.name)  
    const list= state;
    list.items.data[index].cartValue-=1;
    list.items.data.splice(index,1);
    return {
        ...state,
        items: {
          ...state.items,
          data: [...list.items.data],
        }
      }
    case ACTION.INCREASE_ITEM:return{
      ...state,
      items: {
        ...state.items,
        data: [...payload.items.data]
      }
    }
    case ACTION.DECREASE_ITEM:return{
      ...state,
      items: {
        ...state.items,
        data: [...payload.items.data]
      }
    }
    case ACTION.PLACE_ORDER_REQ: return{
      ...state,
      order:{
        ...state.order,
        isLoading:true,
      }
    }
    case ACTION.PLACE_ORDER_SUCCESS: return{
      ...state,
      order:{
        ...state.order,
        isLoading:false,
        data: payload
      }
    }
    case ACTION.PLACE_ORDER_FAILURE: return{
      ...state,
      order:{
        ...state.order,
        isLoading:false,
        error: payload,
      }
    }
    case ACTION.EMPTY_CART_REQ: return state
    case ACTION.EMPTY_CART_SUCCESS: return{
      ...state,
      
      items:{
        ...state.items,
        data:[],
      },
      order: {
        ...state.order,
        isLoading:"idle",
        data: '',
      },
    }
    case ACTION.EMPTY_CART_FAILURE: return {
      ...state,
      items:{
        ...state.items,
        error: payload,
      }
    }
    default:
      return state
  }
}
const initialAmountState= {
  Total: 0,
}

export const AmountReducer = (state=initialAmountState,{type,payload})=>{
  switch(type){
    case ACTION.CALCULATE_AMOUNT: return {
     Total: payload,
    } 
    default: return state
  }
}