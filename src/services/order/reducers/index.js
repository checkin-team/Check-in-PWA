import ACTION from "../actions/actionTypes"

const initState = {
    orderStatus : {isLoading:"idle",data:[],error:{}},
    paymentSuccessDetails: {
        isLoading:'idle'
    }
}

export default (state = initState, action) => {
    switch (action.type) {

        case ACTION.GET_ORDER_STATUS_REQ:
            return {
                ...state,
                orderStatus:{
                    ...state.orderStatus,
                    isLoading:true,
                }
            }
            case ACTION.GET_ORDER_STATUS_SUCCESS:
                return {
                    ...state,
                    orderStatus:{
                        ...state.orderStatus,
                        isLoading:false,
                        data: [...action.payload],
                    }
                }
        case ACTION.FAILED_TO_GET_ORDER_STATUS:
            return {
                ...state,
                orderStatus : {
                    ...state.orderStatus,
                    isLoading:false,
                    error: {...action.payload}
                }
            }

        case ACTION.GET_PAYMENT_DETAILS_REQ:
            return {
                ...state,
                paymentSuccessDetails : {
                    ...state.paymentSuccessDetails,
                    isLoading:true
                }
            }
        case ACTION.GET_PAYMENT_DETAILS_SUCCESS:
            return {
                ...state,
                paymentSuccessDetails : {
                    ...state.paymentSuccessDetails,
                    isLoading: false,
                    data: action.payload,        
                }
            }
        
        case ACTION.PAYMENT_DEATILS_LOADING_FAILED:
            return {
                ...state,
                paymentSuccessDetails : {
                    ...state.paymentSuccessDetails,
                    isLoading:false,
                    error: action.payload
                }}
        default:
            return state
    }
}