import ACTION from "./actionTypes";
import make_API_call from "../../../providers/REST_API";
export const getAmountSuccess = payload => ({
  type: ACTION.GET_AMOUNT_SUCCESS,
  payload
})

export const getAmountFail = payload => ({
  type: ACTION.GET_AMOUNT_FAIL,
  payload
})

export const getOrderStatusSuccess = payload => ({
  type: ACTION.GET_ORDER_STATUS_SUCCESS,
  payload
})

export const getOrderStatusFailure = payload => ({
  type: ACTION.GET_ORDER_STATUS_FAIL,
  payload
})

export const setStateAction = (payload) => ({
  type: ACTION.SET_STATE,
  payload
})

export const loadRestaurentDetailsReq = () => ({
  type: ACTION.LOAD_RESTAURENT_DETAILS_REQ,
})

export const loadRestaurentDetailsSuccess = (payload) => ({
  type: ACTION.LOAD_RESTAURENT_DETAILS_SUCCESS,
  payload
})

export const loadRestaurentDetailsFailure = () => ({
  type: ACTION.LOAD_RESTAURENT_DETAILS_FAILURE,
})

export const loadOrdersReq = () => ({
  type: ACTION.LOAD_ORDERS_REQ,
})

export const loadOrdersSuccess = (payload) => ({
  type: ACTION.LOAD_ORDERS_SUCCESS,
  payload
})


export const loadOrdersFailure = (payload) => ({
  type: ACTION.LOAD_ORDERS_FAILURE,
  payload
})

export const loadTrendingDishesReq = () => ({
  type: ACTION.LOAD_TRENDING_DISHES_REQ,
})

export const loadTrendingDishesSuccess = (payload) => ({
  type: ACTION.LOAD_TRENDING_DISHES_SUCCESS,
  payload,
})
export const loadTrendingDishesFailure = (payload) => ({
  type: ACTION.LOAD_TRENDING_DISHES_FAILURE,
  payload
})

export const sendRequestReq=()=>({
  type: ACTION.SEND_REQUEST_REQ,
})

export const sendRequestSuccess=(payload)=>({
  type: ACTION.SEND_REQUEST_SUCCESS,
  payload
})
export const sendRequestFailure=(payload)=>({
  type: ACTION.SEND_REQUEST_FAILURE,
  payload,
})

export const loadRequestReq=()=>({
  type: ACTION.LOAD_REQUEST_DATA_REQUEST,
})

export const loadRequestSuccess=(payload)=>({
  type: ACTION.LOAD_REQUEST_DATA_SUCCESS,
  payload,
})
export const loadRequestFailure=(payload)=>({
  type: ACTION.LOAD_REQUEST_DATA_FAILURE,
  payload,
})

