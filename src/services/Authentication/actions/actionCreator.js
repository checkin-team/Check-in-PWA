import ACTION from "./actionTypes"

export const setStateAction = (payload) => ({
  type: ACTION.SET_STATE,
  payload
})

export const sendPhoneNoReq = (payload)=>({
  type: ACTION.SEND_PHONE_NO_REQ,
  payload,
})

export const sendPhoneNoSuccess = (payload)=>({
  type: ACTION.SEND_PHONE_NO_SUCCESS,
  payload,
})

export const sendPhoneNoFailure = (payload)=>({
  type: ACTION.SEND_PHONE_NO_FAILURE,
  payload,
})


export const checkOtpReq = (payload)=>({
  type: ACTION.CHECK_OTP_REQ,
  payload,
})

export const checkOtpSuccess =(payload)=>({
  type: ACTION.CHECK_OTP_SUCCESS,
  payload
})

export const checkOtpFailure = (payload)=>({
  type: ACTION.CHECK_OTP_FAILURE,
  payload
})

export const sendNameReq=(payload)=>({
  type: ACTION.SEND_NAME_REQ,
})

export const sendNameSuccess= (payload)=>({
  type: ACTION.SEND_NAME_SUCCESS,
  payload
})

export const sendNameFailure= (payload)=>({
  type: ACTION.SEND_NAME_FAILURE,
  payload
})

export const getSessionDetailsReq=(payload)=>({
  type: ACTION.GET_SESSION_DETAILS_REQ,
})

export const getSessionDetailsSuccess= (payload)=>({
  type: ACTION.GET_SESSION_DETAILS_SUCCESS,
  payload
})

export const getSessionDetailsFailure= (payload)=>({
  type: ACTION.GET_SESSION_DETAILS_FAILURE,
  payload
})

export const resendOtpReq=(payload)=>({
  type: ACTION.RESEND_OTP_REQ,
})

export const authenticateReq=(payload)=>({
  type: ACTION.AUTHENTICATE_REQ,
})

export const authenticateSuccess= (payload)=>({
  type: ACTION.AUTHENTICATE_SUCCESS,
  payload
})

export const authenticateFailure= (payload)=>({
  type: ACTION.AUTHENTICATE_FAILURE,
  payload
})


// export const setLoginState = (payload)=>({
//   type: ACTION.SET_LOGIN,
//   payload
// })