import ACTION from "./actionTypes"

// export const GET_SETTLE_BILL_DETAILS_SUCCESS = (payload) => ({
//     type: ACTION.GET_SETTLEBILL_DEATILS,
//     payload
//   })

// export const GET_SETTLE_BILL_DETAILS_FAILED = (payload) => ({
//   type: ACTION.GET_SETTLEBILL_DEATILS,
//   payload
// })
export const checkoutReq = () =>({
  type: ACTION.CHECKOUT_REQ,
})

export const checkoutSuccess=(payload)=>({
  type: ACTION.CHECKOUT_SUCCESS,
  payload
})

export const checkoutFailure=(payload)=>({
  type: ACTION.CHECKOUT_FAILURE,
  payload
})

export const settleBillReq = () =>({
  type: ACTION.SETTLE_BILL_REQ,
})

export const settleBillSuccess=(payload)=>({
  type: ACTION.SETTLE_BILL_SUCCESS,
  payload
})

export const settleBillFailure=(payload)=>({
  type: ACTION.SETTLE_BILL_FAILURE,
  payload
})

export const razorpayCallReq = () =>({
  type: ACTION.RAZORPAY_CALL_REQ,
})

export const razorpayCallSuccess=(payload)=>({
  type: ACTION.RAZORPAY_CALL_SUCCESS,
  payload
})

export const razorpayCallFailure=(payload)=>({
  type: ACTION.RAZORPAY_CALL_FAILURE,
  payload
})

export const razorpayCallbackReq = () =>({
  type: ACTION.RAZORPAY_CALLBACK_REQ,
})

export const razorpayCallbackSuccess=(payload)=>({
  type: ACTION.RAZORPAY_CALLBACK_SUCCESS,
  payload
})

export const razorpayCallbackFailure=(payload)=>({
  type: ACTION.RAZORPAY_CALLBACK_FAILURE,
  payload
})

export const applyPromoReq = () =>({
  type: ACTION.APPLY_PROMO_REQ,
})

export const applyPromoSuccess=(payload)=>({
  type: ACTION.APPLY_PROMO_SUCCESS,
  payload
})

export const applyPromoFailure=(payload)=>({
  type: ACTION.APPLY_PROMO_FAILURE,
  payload
})

export const removePromoReq = () =>({
  type: ACTION.REMOVE_PROMO_REQ,
})

export const removePromoSuccess=(payload)=>({
  type: ACTION.REMOVE_PROMO_SUCCESS,
  payload
})

export const removePromoFailure=(payload)=>({
  type: ACTION.REMOVE_PROMO_FAILURE,
  payload
})
