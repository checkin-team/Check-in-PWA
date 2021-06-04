import { setStateAction } from "../actions/actionCreator"
import fb from "firebase"
import firebase from "../../../fbConfig"
import make_api_call from "../../../providers/REST_API"

export const _set_state = (obj) => (dispatch) => {
  dispatch(setStateAction(obj))
}

export const _authenticate_via_number = (number) => (dispatch) => {
  // window.recaptchaVerifier = new fb.auth.RecaptchaVerifier('recaptcha-container', {
  //   'size': 'normal',
  //   'callback': function (response) {
  //     // reCAPTCHA solved, allow signInWithPhoneNumber.
  //     onFinish();
  //   }
  // });
  // // [END appVerifier]
  // window.recaptchaVerifier.render().then(function (widgetId) {
  //   window.recaptchaWidgetId = widgetId;

  // });

  // function onFinish() {
  //   const appVerifier = window.recaptchaVerifier;
  //   return firebase.auth().signInWithPhoneNumber(number, appVerifier)
  //     .then((confirmationResult) => {
  //       console.log(confirmationResult);
  //       // return make_api_call
  //     }).catch(err => {
  //       console.error(err)
  //     })
  // }

}