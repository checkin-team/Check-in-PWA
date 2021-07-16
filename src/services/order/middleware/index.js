import make_API_call from "../../../providers/REST_API";
import {GET_ORDER_STATUS_SUCCESS,
  GET_ORDER_STATUS_FAILED,
  SEND_PAYMENT_REQUEST_SUCCESS,
  SEND_PAYMENT_REQUEST_FAILED,
  GET_ORDER_STATUS_REQ,
  SEND_PAYMENT_REQUEST_REQ
} from '../actions/actionCreators';

export const orderSent = id => dispatch => {
  return make_API_call('post',`/promos/active/restaurants/${id}`)
  .then(res => {
    // Success Statements
  })
  .catch(err => {
    // Failed Statements
  })
}

export const SEND_ORDER_STATUS_REQ = (id) => (dispatch) => {
    dispatch(GET_ORDER_STATUS_REQ())
    return make_API_call('get',`/sessions/active/orders/`)
      .then(res => {
        dispatch(GET_ORDER_STATUS_SUCCESS(res))
      })
      .catch(err => {
        const msg = 'Failed to get Order Status'
        dispatch(GET_ORDER_STATUS_FAILED(msg))
      })
  }

export const PAYMENT_SUCCESS_REQ = () => (dispatch,getState) => {
  dispatch(SEND_PAYMENT_REQUEST_REQ())
  var session_id= getState().authentication.login.session.payload.pk;
  
  return make_API_call('get',`/sessions/customer/closed/${session_id}/`)
    .then(res => {
      dispatch(SEND_PAYMENT_REQUEST_SUCCESS(res))
    })
    .catch(err => {
      const msg = 'Failed to get Payment Details'
      dispatch(SEND_PAYMENT_REQUEST_FAILED(err))
    })
}