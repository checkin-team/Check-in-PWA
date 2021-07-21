import ACTION from "../actions/actionTypes"

const initState = {
    details: {
        isLoading: 'idle',
        data: {},
        error: ""
    },
    cart: {},
    trendingDishes: {
        isLoading: true,
        data: [],
        error: ""
    },
    serviceRequest : {isLoading:"idle"},
    orderNumbers: [],
    totalAmount: [],
    requestData:{
        isLoading:'idle',
        data:[],
        error:'',
    },
    userDetails: {
        isLoading: 'idle',
        data: {},
        error: {},
    },
    
}


export const HomeReducer = (state = initState, action) => {
    switch (action.type) {
        case ACTION.GET_AMOUNT_SUCCESS:
            return {
                ...state,
                totalAmount: action.payload
            }

        case ACTION.GET_AMOUNT_FAIL:
            return {
                ...state,
                totalAmount: action.payload
            }
        case ACTION.GET_ORDER_STATUS_SUCCESS:
            return {
                ...state,
                orderNumbers: action.payload
            }

        case ACTION.GET_ORDER_STATUS_FAIL:
            return {
                ...state,
                orderNumbers: action.payload
            }

        
        case ACTION.LOAD_RESTAURENT_DETAILS_REQ:
            return {
                ...state,
                details: {
                    ...state.details,
                    error: "",
                    isLoading: true
                }
            }
        case ACTION.SEND_REQUEST_REQ:
            return {
                ...state,
                serviceRequest : {
                    ...state.serviceRequest,
                    isLoading: true,
                }
            }
            case ACTION.SEND_REQUEST_SUCCESS:
                return {
                    ...state,
                    serviceRequest : {
                        ...state.serviceRequest,
                        isLoading: false,
                        payload: action.payload
                    }
                }
                case ACTION.SEND_REQUEST_FAILURE:
                    return {
                        ...state,
                        serviceRequest : {
                            ...state.serviceRequest,
                            isLoading: false,
                            payload: action.payload,
                        }
                    }    
        case ACTION.LOAD_REQUEST_DATA_REQUEST:
            return {
                ...state,
                requestData:{
                    ...state.requestData,
                    isLoading:true,
                },
            }
            case ACTION.LOAD_REQUEST_DATA_SUCCESS:
            return {
                ...state,
                requestData:{
                    ...state.requestData,
                    data:[...action.payload],
                    isLoading:false,
                },
            }
            case ACTION.LOAD_REQUEST_DATA_FAILURE:
            return {
                ...state,
                requestData:{
                    ...state.requestData,
                    isLoading:false,
                    error:action.payload,
                },
            }
        case ACTION.LOAD_RESTAURENT_DETAILS_SUCCESS:
            return {
                ...state,
                details: {
                    isLoading: false,
                    data: action.payload,
                    error: ""
                }
            }

        case ACTION.LOAD_RESTAURENT_DETAILS_FAILURE:
            return {
                ...state,
                details: {
                    ...state.details,
                    error: action.payload,
                    isLoading: false
                }
            }

        case ACTION.LOAD_TRENDING_DISHES_REQ:
            return {
                ...state,
                trendingDishes: {
                    ...state.trendingDishes,
                    isLoading: true,
                    error: ""
                }
            }

        case ACTION.LOAD_TRENDING_DISHES_SUCCESS:
            return {
                ...state,
                trendingDishes: {
                    isLoading: false,
                    data: action.payload,
                    error: ""
                }
            }

        case ACTION.LOAD_TRENDING_DISHES_FAILURE:
            return {
                ...state,
                trendingDishes: {
                    isLoading: false,
                    data: [],
                    error: ""
                }
            }
            case ACTION.GET_USER_DETAILS_REQ:
                return {
                    ...state,
                    userDetails: {
                        ...state.userDetails,
                        isLoading: true,
                        error: ""
                    }
                }
    
            case ACTION.GET_USER_DETAILS_SUCCESS:
                return {
                    ...state,
                    userDetails: {
                        isLoading: false,
                        data: action.payload,
                        error: {}
                    }
                }
    
            case ACTION.GET_USER_DETAILS_FAILURE:
                return {
                    ...state,
                    userDetails: {
                        isLoading: false,
                        data: [],
                        error: {...action.payload}
                    }
                }
    

        default:
            return state
    }
}