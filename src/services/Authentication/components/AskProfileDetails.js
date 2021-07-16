import React, { useState, useCallback } from 'react'
import { Grid } from "@material-ui/core"

import BoxInput from "../../../shared/components/TextInput/BoxInput"
import TextInput from "../../../shared/components/TextInput/Basic"
import Button from "../../../shared/components/Button/Basic"
import { useHistory } from 'react-router-dom'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { _set_state,sendName } from '../middleware'
import { connect } from "react-redux"
import { useEffect } from 'react'

function AskProfileDetails(props) {
  const { setState,_sendName,login } = props
  const history = useHistory()
  const handleProceed = () => {
    // history.push("/Home")
    _sendName(firstName,lastName,login.otp.payload);
    // setState({
    //   login: {
    //     isLoggedIn: true
    //   }
    // })
  }
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [disable,setDisable] = useState(false)

  const handleChange_first = useCallback((event) => {
      let val=event.target.value;
      setFirstName(val)
      // console.log(val)
      if(firstName && lastName){
        setDisable(false)
      }
  })

  const handleChange_second = useCallback((event) => {
    const val=event.target.value;
    setLastName(val)
    if(firstName.length && lastName.length){
      setDisable(false)
    }
    // console.log(val)
})
// const focusHandler = () => {
//   const image = document.getElementById("bottom-image");
//   image.style.display = "none";
// }
// const blurHandler = () => {
//   const image = document.getElementById("bottom-image");
//   image.style.display = "block";
// }
  // useEffect(()=>{
  //   if(login.isLoggedIn===true){
  //   history.push('/home');
  //   }
  // },[login.isLoggedIn])
  return (
    <div style={{overflow:"hidden"}}>
      <div style={{ fontWeight: 400, fontSize: 12 }} >One step away from your first 500 Checkin CHIPS <InfoOutlinedIcon style={{ marginBottom: "-6px" }} fontSize="small" /></div>
      <br />
      <br />
      <Grid spacing={4} container >
        <Grid item xs={1} ></Grid>
        <Grid item xs={5} >
          <TextInput
            label={"First Name"}
            InputLabelProps={{
              shrink: true,
              style: { color: '#fff' },
            }}
            autoFocus
            value={firstName}
            onChange={handleChange_first}
            // onFocus = {focusHandler}
            // onBlur = {blurHandler}
          />
        </Grid>
        <Grid item xs={5} >
          <TextInput
            label={"Last Name"}
            InputLabelProps={{
              shrink: true,
              style: { color: '#fff' },
            }}
            value={lastName}
            onChange={handleChange_second}
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
            style={{ textTransform: 'uppercase', color: '#ff5656' }}
            disabled={disable}
          >
            Proceed
          </Button>
        </Grid>
        <Grid item xs={1} ></Grid>
      </Grid>
      <br />
      <div style={{ fontWeight: 400, fontSize: 12 }} >
        Earn 1000 Checkin Chips more with a, <a href="#" className="my-a" >Referal Code</a>
      </div>

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
    _sendName: (fName,lName,token)=> dispatch(sendName(fName,lName,token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AskProfileDetails)
