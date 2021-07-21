import React,{useEffect} from 'react'
import { connect } from "react-redux"
import { Grid, Paper, Hidden, useMediaQuery } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

import MarketImage from "../../../assets/authentication/market.png"
import Logo from "../../../assets/authentication/logo.png"
import WaveShapeImage from "../../../assets/authentication/path_2_cropped.jpg"
import BottomDisplay from "../../../assets/authentication/bottomdisplay.jpg"
import CircularProgress from '@material-ui/core/CircularProgress';


import { useSelector } from "react-redux"
import AskContact from '../components/AskContact'
import AskOTP from '../components/AskOTP'
import AskProfileDetails from '../components/AskProfileDetails'
import LandingPage from '../components/LandingPage'
import { _authenticate_via_number } from '../middleware';
import '../../../stylings/profilepage.css'
import make_API_call from '../../../providers/REST_API';
import { _set_state } from '../middleware'

function SignupPage(props) {

  const { state,setState,login } = props
  const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://www.itl.cat/pngfile/big/290-2906065_indian-food-wallpaper-hd.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  const classes = useStyles();
  const isActive = useMediaQuery('(min-width:600px)');
  
  useEffect(()=>{
    setState({
      showLandingPage: false,
      askingProfileDetails: false,
      askingContact: true,
      askingOTP: false
    })
  },[])
  
  // if (state.showLandingPage)
  //   return <LandingPage />
  if(login.contact.isLoading===true||login.otp.isLoading===true||login.name.isLoading===true||login.authenticate.isLoading===true||login.session.isLoading===true)
  return <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"}}>
  <CircularProgress style={{color:"#ff5656"}} size={50} />
  </div>
  return (
    <div style={{backgroundColor: "#ff5656"}}>
      <Grid component="main"  className={classes.root} container>
        <>
          {
            isActive?
              <Grid className={classes.image} item sm={8} xs={12} >
              </Grid>
              :
              null
          }
        </>

        <Grid item container alignContent="space-between"  style={{ backgroundColor: "#ff5656"}} sm={4} xs={12} >
          <div>

          <div style={{ backgroundColor: "#fff" }} className={classes.paper}>
            <img width="100%" src={MarketImage} id="marketimage" />
            <div className="text-center" style={{ marginTop: "22px"}} >
              <img width="100" src={Logo} id="logo" />
              <div style={{ letterSpacing: "0.95sp", fontSize: "28px", fontWeight: "bold", color: "#ff5656",margin: "7px 0" }} id="checkin" >
                Checkin
              </div>
            </div>
          </div>
          <div>
            <img width="100%" src={WaveShapeImage} style={{marginTop: "-12.5px"}} />
            <div style={{ width: "100%", backgroundColor: "#ff5656"}} >
              <div className="text-center text-light" >
                {
                  state.askingContact ?
                    <AskContact />
                    :
                    null
                }
                {
                  state.askingOTP ?
                    <AskOTP />
                    :
                    null
                }
                {
                  state.askingProfileDetails ?
                    <AskProfileDetails />
                    :
                    null
                }
                <br />
                <br />
              </div>
              
            </div>
            
          </div>
            </div>
                <img width="100%" id="bottom-image" height="150px" src={BottomDisplay} />

          {/* <img width={isActive?"32%":"100%"} src={BottomDisplay} id="bottom-image" style={{position: "fixed", bottom: "0"}} /> */}
        </Grid>
        

      </Grid>

    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    state: state.authentication.signup,
    login: state.authentication.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    _authenticate_via_number: (number) => dispatch(_authenticate_via_number(number)),
    setState: (obj) => dispatch(_set_state(obj))
  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage)
