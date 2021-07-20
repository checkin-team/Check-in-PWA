import make_API_call from "../../../providers/REST_API";
import {
    // GET_SETTLE_BILL_DETAILS_SUCCESS,
    // GET_SETTLE_BILL_DETAILS_FAILED,
    settleBillReq,
    settleBillSuccess,
    settleBillFailure,
    razorpayCallReq,
    razorpayCallFailure,
    razorpayCallSuccess,
    razorpayCallbackReq,
    razorpayCallbackSuccess,
    razorpayCallbackFailure,
    applyPromoReq,
    applyPromoSuccess,
    applyPromoFailure,
    removePromoReq,
    removePromoFailure,
    removePromoSuccess
  } from '../actions/actionCreator';
import { checkoutReq,checkoutSuccess,checkoutFailure } from "../actions/actionCreator";

// export const SEND_SETTLE_BILL_DETAILS_REQ = (id) => (dispatch) => {
    
//     return make_API_call('get',`/promos/active/restaurants/${id}`)
//       .then(res => {
//         dispatch(GET_SETTLE_BILL_DETAILS_SUCCESS(res))
//       })
//       .catch(err => {
//         const msg = 'Failed to get Settle Bill Details'
//         dispatch(GET_SETTLE_BILL_DETAILS_FAILED(msg))
//       })
//   }


export const  checkout = () =>async (dispatch,getState)=>{
    try{ dispatch(checkoutReq())
     const resp= await make_API_call('post',"/sessions/active/request/checkout/",{payment_mode:"rzrpay"})
       dispatch(checkoutSuccess("success"));
        dispatch(razorpayCall())
      }catch(err){
      dispatch(checkoutFailure(err));
     }
   }

export const  getSettleBill = () =>async (dispatch,getState)=>{
    try{ dispatch(settleBillReq())
        const session_id= getState().authentication.login.session.payload.pk;
     const resp= await make_API_call('get',`/sessions/active/invoice/ `)
       dispatch(settleBillSuccess(resp));
  
      }catch(err){
     console.log(err);
      dispatch(settleBillFailure(err));
     }
   }

  export const  razorpayCall = () =>async (dispatch,getState)=>{
    try{ dispatch(razorpayCallReq())
      const session_id= getState().authentication.login.session.payload.pk;
     const resp= await make_API_call('post',`/sessions/active/pay/razorpay/`,session_id)
       dispatch(razorpayCallSuccess(resp));
   }catch(err){
      dispatch(razorpayCallFailure(err));
     }
   }

   export const  razorpayCallback = (response) =>async (dispatch,getState)=>{
    try{ dispatch(razorpayCallbackReq())
     const resp= await make_API_call('post',`/payments/callback/razorpay/`,{
      payment_id: response.razorpay_payment_id,
      order_id: response.razorpay_order_id,
      signature: response.razorpay_signature,
      extra_data: {...response}
      })
       dispatch(razorpayCallbackSuccess(resp));
   }catch(err){
      dispatch(razorpayCallbackFailure(err));
     }
   }
 
   export const  applyPromo = (code) =>async (dispatch,getState)=>{
    try{ dispatch(applyPromoReq())
      const resp= await make_API_call('post',`/sessions/active/promos/avail/`,{
      code
      })
       dispatch(applyPromoSuccess(resp));
   }catch(err){
      dispatch(applyPromoFailure(err));
     }
   }
 
   export const  removePromo = (code) =>async (dispatch,getState)=>{
    try{ dispatch(removePromoReq())
      const session_id= getState().authentication.login.session.payload.pk;
      const resp= await make_API_call('delete',`/sessions/active/promos/remove/`)
       dispatch(removePromoSuccess(resp));
   }catch(err){
      dispatch(removePromoFailure(err));
     }
   }
 