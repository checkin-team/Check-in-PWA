import ACTION from "./actionTypes";

export const GET_ORDER_STATUS_REQ = (payload) => ({
  type: ACTION.GET_ORDER_STATUS_REQ,
})

export const GET_ORDER_STATUS_SUCCESS = (payload) => ({
    type: ACTION.GET_ORDER_STATUS_SUCCESS,
    payload
  })

export const GET_ORDER_STATUS_FAILED = (payload) => ({
    type: ACTION.FAILED_TO_GET_ORDER_STATUS,
    payload
  })

  export const SEND_PAYMENT_REQUEST_REQ = () => ({
  type: ACTION.GET_PAYMENT_DETAILS_REQ,
})


export const SEND_PAYMENT_REQUEST_SUCCESS = payload => ({
  type: ACTION.GET_PAYMENT_DETAILS_SUCCESS,
  payload
})

export const SEND_PAYMENT_REQUEST_FAILED = payload => ({
  type : ACTION.PAYMENT_DEATILS_LOADING_FAILED,
  payload
})