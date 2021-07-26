import React from 'react'
import { Grid } from "@material-ui/core"
import { connect } from "react-redux"

import TextInput from "../../../shared/components/TextInput/Basic"
import Button from "../../../shared/components/Button/Basic"
import { _set_state, _authenticate_via_number } from '../middleware'
import  '../../../stylings/contact.css'

function AskContact(props) {
  const { setState, authenticateViaNumber,login } = props
  const [phonenumber, setPhonenumber] = React.useState("")
  const [disable, setDisable] = React.useState(false)
  const handleProceed =async () => {
    // const resp= await authenticateViaNumber(phonenumber)
    // if(resp.status===200){
    //   setState({
    //     askingProfileDetails: false,
    //     askingContact: false,
    //     askingOTP: true,
    //   })
    // }
     authenticateViaNumber(phonenumber);
    console.log(login);
    // if(login.contact.isLoading===false&&login.contact.error===null){
      // setState({
      //   askingProfileDetails: false,
      //   askingContact: false,
      //   askingOTP: true,
      // })
    // }
  }

  const handlePhone = (event) => {
    let val=event.target.value;
    let len=val.length;

    //this is for restricting user to give only numeric input
    for(let i=0;i<len;i++){
      if(val[i]<'0' || val[i]>'9'){
        event.preventDefault();
        return;
      }
    }
    setPhonenumber(val)
    //this is for user to not allow them to proceed until they provide valid input first
    //  if(len>=10) setDisable(false)
    //  else  setDisable(true)
  }       
  {/* Here these 2 functions are made to handle the visiblity of bottom image in mobile phones
      Since to put the bottom image fixed at the bottom, i have used position property assigned to fixed
      and when the user clicks on the input field such as contact number and the keyboard is opened, the image also 
      gets pushed up and covers the input area and proceed button. So to handle that when input is clicked the bottom-image
      will not be visible and when the input field in not focused the image comes again at the bottom. */}
      
  // const focusHandler = () => {
  //   const image = document.getElementById("bottom-image");
  //   image.style.display = "none";
  // }
  // const blurHandler = () => {
  //   const image = document.getElementById("bottom-image");
  //   image.style.display = "block";
  // }
  return (
    <div>
      <div style={{ fontWeight: 400, fontSize: 30 }} id="div1" >Welcome,</div>
      <div style={{ fontWeight: 200, fontSize: 20 }} id="div2" >Login to access the account</div>
      <br />
      <br />
      
       <Grid container >
        <Grid item xs={1} ></Grid>
        <Grid item xs={10} >
          <TextInput
            fullWidth
            label={"Contact No"}
            placeholder={"Enter your Contact Number (10 digits)"}
            InputLabelProps={{
              shrink: true,
              style: { color: '#fff' },
            }}
            required
            autoFocus
            inputMode = "numeric"
            value={phonenumber}
            onChange={(e) => handlePhone(e)}
            // onFocus = {focusHandler}
            // onBlur = {blurHandler}
          />
        </Grid>
        <Grid item xs={1} ></Grid>
      </Grid>
      <br />
      <br />
      <Grid container >
        <Grid item xs={1} ></Grid>
        <Grid item xs={10} >
          <Button
            fullWidth
            onClick={handleProceed}
            id="proceed-button"
             disabled={disable}
            style={{ textTransform: 'uppercase', color: '#ff5656' }}
          >
            Proceed
          </Button>
        </Grid>
        <Grid item xs={1} ></Grid>
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
    authenticateViaNumber: (number) => dispatch(_authenticate_via_number(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AskContact)