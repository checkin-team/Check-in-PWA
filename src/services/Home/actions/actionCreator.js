import ACTION from "./actionTypes"

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
