import React from 'react'
import { connect } from 'react-redux'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom';
import SettleBill from '../components/SettleBill'
import Promos from '../components/Promos'
import GrandTotal from '../components/GrandTotal';
import Button from '../.././../shared/components/Button/Basic'
import { getSettleBill,checkout,razorpayCall,razorpayCallback } from '../middleware';
import { useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/lab/Alert';
import checkin from '../../../assets/authentication/logo.png';
import BackButton from '../../../assets/RoomServices/BackButton.svg';

// Razorpay Load Script function
function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

const navBarStyle = {
  paddingTop: "2.3vh",
  paddingLeft: "4.78vw",
  paddingRight: '6.25vw',
  paddingBottom: '1vh',
  position: 'fixed',
  top: '0',
  left: '0',
  zIndex: '100',
  background: 'white',
  minWidth: '100vw'
}

const backButtonStyle = {
  paddingRight : "3.28vw",
  width: "3.75vw",
  height: "3.7vh",
  display : "inline"
}

const headingStyle = {
  display: 'inline',
  fontSize : "3.7vh",
  verticalAlign : "bottom",
  color: '#6d6d6d',
  fontFamily: "JosefinSans-Regular"
}

const CheckoutPage = (props) => {
  const history = useHistory()
 
  const [razorpayAlert,setRazorpayAlert]= React.useState(false);
  const [checkoutAlert,setCheckoutAlert]= React.useState(false);
  const [callbackAlert,setCallbackAlert]= React.useState(false);
  const [promoAlert,setPromoAlert]= React.useState(false);
  
  React.useEffect(()=>{
    if(props.razorpay.error.title){
      setRazorpayAlert(true)
    }
    if(props.checkout.error.title){
      setCheckoutAlert(true)
    }
    if(props.callback.error.title){
      setCallbackAlert(true)
    }
    if(props.applyPromo.error.title){
      setPromoAlert(true)
    }
  },[props.razorpay.error,props.checkout.error,props.callback.error,props.applyPromo.error])
  
  
  // Razorpay function for payment popup 
  
  async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}
   const name= props.userDetails.data.full_name;
   const email= props.userDetails.data.email;
   const phone_number= props.userDetails.data.phone_no.substr(1);
  const options = {
			key: 'rzp_live_kcpBx778ilK1e3',
			currency: props.razorpay.data.currency,
			amount: (props.getSettleBillDeatils.data.bill?.total*100).toString(),
			order_id: props.razorpay.data.order_id,
			name: 'Payment',
			description: 'Please Pay',
			image: checkin,
			handler: function (response) {
        console.log(response);
				props._razorpayCallback(response);
			},
			prefill: {
        name: name,
				email:email,
				contact: phone_number,
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}


  useEffect(()=>{
    props._getSettleBill();
  },[])

  const handlePayClick=()=>{
    props._checkoutRequest();
    
  }

  useEffect(()=>{
    if(props.razorpay.data.order_id){
      displayRazorpay();
    }
  },[props.razorpay.data.order_id])

  useEffect(()=>{
    if(props.callback.isLoading===false&&props.callback.data.pk)
    {
      history.push('/payment');
    }
  },[props.callback.data])
  
  React.useEffect(()=>{
  props._getSettleBill()      
  },[props.applyPromo,props.removePromo])
 
  if(props.getSettleBillDeatils.isLoading===true||props.razorpay.isLoading===true||props.checkout.isLoading===true)
  return <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"}}>
  <CircularProgress style={{color:"#ff5656"}} size={50} />
  </div>

  
  return (
    <div>
      <div>
        {/* <div style={{ display: 'flex' }}>
          <ArrowBackIosIcon style={{ color: '#6d6d6d', margin: '12px 0px 0px 12px' }}
            onClick={() => history.hasOwnProperty("goBack") ? history.goBack() : history.push("/viewcart")} />
          <span style={{ color: "#6d6d6d", fontSize: '20px', marginTop: '15px', }}>
            Settle Bill
          </span>
        </div> */}
        <div style={navBarStyle}>
                <img onClick={() => history.hasOwnProperty("goBack") ? history.goBack() : history.push("/viewcart")} src={BackButton} alt="Back Button" style={backButtonStyle} />
                <p style={headingStyle}>Checkout</p>
        </div>
        <p style={{ color: "#6d6d6d", fontSize: '15px', marginTop: '9vh', marginLeft: '5vw' }}>
          Bill Details
        </p>
        {razorpayAlert&&<Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setRazorpayAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          severity="error"
        >
          {props.razorpay.error.title}
        </Alert>}

        {checkoutAlert&&<Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setCheckoutAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          severity="error"
        >
          {props.checkout.error.title}
        </Alert>}

        {callbackAlert&&<Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setCallbackAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          severity="error"
        >
          {props.callback.error.title}
        </Alert>}

        {promoAlert&&<Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setPromoAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          severity="error"
        >
          {props.applyPromo.error.title}
        </Alert>}
        
          <div><SettleBill settleBillDetails={props.getSettleBillDeatils}/></div>
          <div> <Promos /></div>
          <div><GrandTotal settleBillDetails={props.getSettleBillDeatils} /></div>
        
          
        
      </div>
      <div className="text-center" style={{ bottom: 20, position: 'fixed', width: '100%', backgroundColor: 'white' }}><Button fullWidth style={{ backgroundColor: '#32c282', marginTop: '30px', color: '#fff', width: '90%' }} onClick={handlePayClick}>PAY</Button></div>

    </div>
  )
}

const mapStateToProps = state => ({
  getSettleBillDeatils: state.checkout.settleBillDetails,
  razorpay: state.checkout.razorpay,
  checkout: state.checkout.checkout,
  callback: state.checkout.callback,
  applyPromo: state.checkout.applyPromo,
  removePromo: state.checkout.removePromo,
  userDetails: state.home.userDetails,
});

const mapDispatchToProps = dispatch => ({
      _getSettleBill : () => dispatch(getSettleBill()),
      _checkoutRequest: ()=> dispatch(checkout()),
      _razorpayCall: ()=>dispatch(razorpayCall()),
      _razorpayCallback: (response)=>dispatch(razorpayCallback(response))
    });

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage)
