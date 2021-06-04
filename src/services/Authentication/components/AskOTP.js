import React, {useState, useCallback, useEffect} from 'react'
import { Grid } from "@material-ui/core"
import { connect } from "react-redux"

import BoxInput from "../../../shared/components/TextInput/BoxInput"
import Button from "../../../shared/components/Button/Basic"
import { _set_state } from '../middleware'
import { act } from 'react-dom/test-utils'



function AskOTP(props) {
  const { setState } = props
  const handleVerify = () => {
    setState({
      askingProfileDetails: true,
      askingContact: false,
      askingOTP: false
    })
  }
  const [activeInput, setActiveInput] = useState(0);
  const [values, setValues] = useState(['','','',''])
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
    if(activeInput<3)  setActiveInput(activeInput+1)
  }

  const handleOnFocus = useCallback((index, event) => {
      setActiveInput(index)
      event.target.select();
      const image = document.getElementById("bottom-image");
      image.style.display = "none";
      // console.log(activeInput)
  })

  const blurHandler = () => {
    const image = document.getElementById("bottom-image");
    image.style.display = "block";
  }

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

  return (
    <div>
      <Grid spacing={3} container >
        <Grid item xs={1} >

        </Grid>
        <Grid item xs={10} >
          <Grid spacing={3} container >
            <Grid item xs={12} >
              <div style={{ fontSize: 20, textAlign: "left" }} ><span style={{ fontWeight: 100 }}>OTP sent to </span>9997867899</div>
            </Grid>
            <Grid item xs={12} >
              <Grid spacing={3} container >
                <Grid className="text-left" item xs={3} >
                  <BoxInput autoFocus={activeInput === 0} value={values[0]} onChange={handleOnChange} onFocus={(e) => handleOnFocus(0, e)} onKeyDown={handleOnKeyDown} onBlur={blurHandler} />
                </Grid>
                <Grid className="text-left" item xs={3}  >
                  <BoxInput autoFocus={activeInput === 1} value={values[1]} onChange={handleOnChange} onFocus={(e) => handleOnFocus(1, e)} onKeyDown={handleOnKeyDown} onBlur={blurHandler} />
                </Grid>
                <Grid className="text-left" item xs={3}  >
                  <BoxInput autoFocus={activeInput === 2} value={values[2]} onChange={handleOnChange} onFocus={(e) => handleOnFocus(2, e)} onKeyDown={handleOnKeyDown} onBlur={blurHandler} />
                </Grid>
                <Grid className="text-left" item xs={3}  >
                  <BoxInput autoFocus={activeInput === 3} value={values[3]} onChange={handleOnChange} onFocus={(e) => handleOnFocus(3, e)} onKeyDown={handleOnKeyDown} onBlur={blurHandler} />
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
              <div style={{ fontWeight: 400, fontSize: 12 }} >
                Didn’t recieve the verification OTP? <a className="a-tag" href="#" >Resend Again</a>
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
    state: state.authentication.signup
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setState: (obj) => dispatch(_set_state(obj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AskOTP)