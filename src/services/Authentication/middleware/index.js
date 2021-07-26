import { setStateAction,sendPhoneNoReq,sendPhoneNoSuccess,sendPhoneNoFailure,sendNameReq,sendNameFailure,sendNameSuccess,checkOtpReq,checkOtpFailure,checkOtpSuccess, getSessionDetailsReq, getSessionDetailsSuccess, getSessionDetailsFailure, resendOtpReq,authenticateReq,authenticateFailure,authenticateSuccess} from "../actions/actionCreator"
import fb from "firebase"
// import firebase from "../../../fbConfig"
import make_API_call from "../../../providers/REST_API"
import firebase from "../../../firebase";
import axios from "axios";
import cookies from 'js-cookie';
export const _set_state = (obj) => (dispatch) => {
  dispatch(setStateAction(obj))
}

export const _authenticate_via_number = (number) =>async (dispatch) => {
  try{ dispatch(sendPhoneNoReq()) 
  // const resp = await make_API_call('post','/auth/login',number);

  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
    'size': 'invisible',
    'callback': (response) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      // ...
       console.log("captcha")
    },
  });
  
  const resp = await firebase.auth().signInWithPhoneNumber(`+91${number}`,window.recaptchaVerifier);
  if(resp){
   console.log(resp);
    window.confirmationResult = resp;
     dispatch(sendPhoneNoSuccess({phoneNo:number,...resp}));
     dispatch(_set_state({
      askingProfileDetails: false,
      askingContact: false,
      askingOTP: true,
    }));
   }
  }catch(err){
    console.log(err);
    dispatch(sendPhoneNoFailure(err))
    // dispatch(getSessionDetails())
    // dispatch(_set_state({
    //   login: {
    //     isLoggedIn: true
    //   }
    // }))

  } 
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

export const resendOtp =()=>async (dispatch,getState)=>{
  try{ 
    dispatch(resendOtpReq())
    const number= getState().authentication.login.contact.payload.phoneNo;
  const appVerifier = window.recaptchaVerifier;
  const resp = await firebase.auth().signInWithPhoneNumber(`+91${number}`,appVerifier);
  if(resp){
    window.confirmationResult = resp;
     dispatch(sendPhoneNoSuccess({phoneNo:number,...resp}));
     
   }
  }catch(err){
    console.log(err);
    dispatch(sendPhoneNoFailure(err))
  }
}

export const authenticate =()=>async (dispatch,getState)=>{
  try{ dispatch(authenticateReq()) 
    const id_token= getState().authentication.login.otp.payload.ya; 
    const url = 'https://dev.api.check-in.in/auth/authenticate/';
    const resp = await fetch(url,{
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({id_token}) // body data type must match "Content-Type" header
    })
    const data = await resp.json();
    cookies.set('user',data);
    dispatch(authenticateSuccess(data));
    if(data.is_profile_ready===false){
      dispatch(_set_state({
        askingProfileDetails: true,
        askingContact: false,
        askingOTP: false,
      }));
    }else{
      
      dispatch(getSessionDetails())
      dispatch(_set_state({
        login: {
          isLoggedIn: true
        }
      }))
    }    
      // }
    }catch(err){
      dispatch(authenticateFailure(err))
  
    } 
}

export const cookieAuthenticate =()=>async (dispatch,getState)=>{
  try{ dispatch(authenticateReq()) 
    const data= cookies.getJSON('user')
    // const resp = await make_API_call('get','')
    const url = 'https://dev.api.check-in.in/sessions/active/';
    const resp = await fetch(url,{
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${data.token}`
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    const respData = await resp.json();
    
    if(respData.is_requested_checkout===true||respData.status===404||respData.status===401){
      cookies.remove('user');
      document.location.reload();
    }else{

      dispatch(authenticateSuccess(data));
      dispatch(getSessionDetails())
      dispatch(_set_state({
        login: {
          isLoggedIn: true
        }
      }))
      
    }
    }catch(err){
      dispatch(authenticateFailure(err))
      cookies.remove('user');
      // document.location.reload();
    } 
}



export const checkOtp =(otp)=>async (dispatch)=>{
  try{ dispatch(checkOtpReq()) 
    // const resp = await make_API_call('post','/auth/otp',otp);
   const resp = await window.confirmationResult.confirm(otp);
    if(resp){
      console.log(resp);
       dispatch(checkOtpSuccess(resp.user));
       dispatch(authenticate());
      }
    }catch(err){
      dispatch(checkOtpFailure(err))
  
    } 
}



export const getSessionDetails =()=>async (dispatch)=>{
  try{ dispatch(getSessionDetailsReq()) 
    const resp = await make_API_call('get','/sessions/active/');
     dispatch(getSessionDetailsSuccess(resp));
     const el = window.document.getElementById('recaptcha-container');
     if (el != null) {
       el.remove();
     }
      
    }catch(err){
      dispatch(getSessionDetailsFailure(err))
    } 
}

export const sendName =(firstName,lastName,token)=>async (dispatch)=>{
  try{ dispatch(sendNameReq()) 
    const resp = await make_API_call('patch','/users/self/',{first_name:firstName,last_name:lastName});
    dispatch(sendNameSuccess(resp));
        dispatch(getSessionDetails())
        dispatch(_set_state({
          login: {
            isLoggedIn: true
          }
        }))
    }catch(err){
      dispatch(sendNameFailure(err))
  
    } 
}


