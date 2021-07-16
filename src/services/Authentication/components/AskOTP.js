import React, {useState, useCallback, useEffect} from 'react'
import { Grid } from "@material-ui/core"
import { connect } from "react-redux"

import BoxInput from "../../../shared/components/TextInput/BoxInput"
import Button from "../../../shared/components/Button/Basic"
import { _set_state,checkOtp } from '../middleware'
import { act } from 'react-dom/test-utils'

import { resendOtp } from '../middleware'


function AskOTP(props) {
  const { setState ,_sendOtp,login} = props
  
  const [activeInput, setActiveInput] = useState(0);
  const [values, setValues] = useState(['','','','','',''])
  const [disable, setDisable] = useState(false)

  const handleOnChange = useCallback((e) => {
     console.log(`value from the input  box = ${e.currentTarget.value} and activeinput before change = ${activeInput}`);
     const val=e.currentTarget.value;
     
     if(!val || (val[0]<'0' || val[0]>'9')){
       e.preventDefault();
       return;
     }
     changeValue(val);
     focusNextInput();
  })
  //this is for the user to not allow user to proceed until they gave 4 input numbers of OTP

  useEffect(() => {
    let t=true;
    values.map((value) => {
      if(value===''){
        t=false;
        return;
      }
    } )
    // if(t)  setDisable(false)
    // else   setDisable(true)
  },[values])

  const changeValue = (val) => {
    const copyValues = [...values];
    copyValues[activeInput]=val[0] || "";
     setValues(copyValues);
  }

  const focusNextInput = () => {
    if(activeInput<5)  setActiveInput(activeInput+1)
  }

  const handleOnFocus = useCallback((index, event) => {
      setActiveInput(index)
      event.target.select();
      // const image = document.getElementById("bottom-image");
      // image.style.display = "none";
      // console.log(activeInput)
  })

  // const blurHandler = () => {
  //   const image = document.getElementById("bottom-image");
  //   image.style.display = "block";
  // }

  const focusPrevInput = useCallback(() => {
    if(activeInput){
      setActiveInput(activeInput-1)
    }
  })

  const handleOnKeyDown = useCallback((e) => {
      // console.log(e.key);
      switch(e.key){
        case "Backspace":
          case "Delete":{
              e.preventDefault();
              if(values[activeInput]){
                changeValue("");
              }
              else{
                focusPrevInput();
              }
              break;
          }
          default: break;
      }
  })
  // My code
  const handleResend=()=>{
    props._resendOtp();
  }
  useEffect(()=>{
    const interval= setTimeout(()=>{
      const resend = document.getElementById('resend');
      resend.style.display="block";
    },60000)
  },[])
  
  const handleVerify = () => {
    console.log(values.join(''));
    _sendOtp(values.join(''));
    // if(login.otp.isLoading===false&&login.otp.error===null){
    //   setState({
    //     askingProfileDetails: true,
    //     askingContact: false,
    //     askingOTP: false
    //   })
    // }
    
  }
  return (
    <div style={{overflow:"hidden"}}>
      <Grid spacing={0} container >
        <Grid item xs={1} >

        </Grid>
        <Grid item xs={10} >
          <Grid spacing={3} container >
            <Grid item xs={12} >
              <div style={{ fontSize: 20, textAlign: "left" }} ><span style={{ fontWeight: 100 }}>OTP sent to </span>+91{props.login?.contact?.payload?.phoneNo}</div>
            </Grid>
            <Grid item xs={0} style={{marginLeft: 0,paddingLeft: 0}} >
              <Grid spacing={3} container >
                <Grid className="text-left" item xs={2} >
                  <BoxInput autoFocus={activeInput === 0} value={values[0]} onChange={handleOnChange} onFocus={(e) => handleOnFocus(0, e)} onKeyDown={handleOnKeyDown}  />
                </Grid>
                <Grid className="text-left" item xs={2}  >
                  <BoxInput autoFocus={activeInput === 1} value={values[1]} onChange={handleOnChange} onFocus={(e) => handleOnFocus(1, e)} onKeyDown={handleOnKeyDown}  />
                </Grid>
                <Grid className="text-left" item xs={2}  >
                  <BoxInput autoFocus={activeInput === 2} value={values[2]} onChange={handleOnChange} onFocus={(e) => handleOnFocus(2, e)} onKeyDown={handleOnKeyDown}  />
                </Grid>
                <Grid className="text-left" item xs={2}  >
                  <BoxInput autoFocus={activeInput === 3} value={values[3]} onChange={handleOnChange} onFocus={(e) => handleOnFocus(3, e)} onKeyDown={handleOnKeyDown}  />
                </Grid>
                <Grid className="text-left" item xs={2}  >
                  <BoxInput autoFocus={activeInput === 4} value={values[4]} onChange={handleOnChange} onFocus={(e) => handleOnFocus(4, e)} onKeyDown={handleOnKeyDown}  />
                </Grid>
                <Grid className="text-left" item xs={2}  >
                  <BoxInput autoFocus={activeInput === 5} value={values[5]} onChange={handleOnChange} onFocus={(e) => handleOnFocus(5, e)} onKeyDown={handleOnKeyDown}  />
                </Grid> 
              </Grid>
            </Grid>
            <Grid item xs={12} >
              <Button
                fullWidth
                onClick={handleVerify}
                 disabled={disable}
                style={{ textTransform: 'uppercase', color: '#ff5656' }}              >
                Verify
              </Button>
            </Grid>
            <Grid item xs={12} >
              <div style={{ fontWeight: 400, fontSize: 12,display:"none" }} id="resend" >
                Didn’t recieve the verification OTP? <span className="a-tag" href="#" style={{textDecoration:"underline"}} onClick={handleResend} >Resend Again</span>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    state: state.authentication.signup,
    login: state.authentication.login,

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setState: (obj) => dispatch(_set_state(obj)),
    _resendOtp: () => dispatch(resendOtp()),
    _sendOtp : (otp)=>dispatch(checkOtp(otp)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AskOTP)