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

const CheckoutPage = (props) => {
  const history = useHistory()
 
  // Razorpay function for payment popup 
  async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		const options = {
			key: 'rzp_test_edAXAbPED9Pl1G',
			currency: props.razorpay.data.currency,
			amount: (props.getSettleBillDeatils.data.bill?.total*100).toString(),
			order_id: props.razorpay.data.order_id,
			name: 'Payment',
			description: 'Please Pay',
			image: 'http://localhost:1337/logo.svg',
			handler: function (response) {
        console.log(response);
				props._razorpayCallback(response);
			},
			prefill: {
				// name:props.getSettleBillDeatils.data.host.User.display_name,
        name: "rahul",
				email:props.razorpay.data.email,
				phone_number: props.razorpay.data.phone
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
      <div style={{ height: '80px', width: '100%', backgroundColor: '#ececec' }}>
        <div style={{ display: 'flex' }}>
          <ArrowBackIosIcon style={{ color: '#6d6d6d', margin: '12px 0px 0px 12px' }}
            onClick={() => history.hasOwnProperty("goBack") ? history.goBack() : history.push("/viewcart")} />
          <span style={{ color: "#6d6d6d", fontSize: '20px', marginTop: '15px', }}>
            Settle Bill
          </span>
        </div>
        <div style={{ color: "#6d6d6d", fontSize: '15px', margin: '25px 0px 0px 15px' }}>
          Bill Details
        </div>
        <div><SettleBill settleBillDetails={props.getSettleBillDeatils}/></div>
        <div> <Promos /></div>
        <div><GrandTotal settleBillDetails={props.getSettleBillDeatils} /></div>
        <div className="text-center" style={{ bottom: 20, position: 'fixed', width: '100%' }}><Button fullWidth style={{ backgroundColor: '#32c282', marginTop: '30px', color: '#fff', width: '90%' }} onClick={handlePayClick}>PAY</Button></div>
      </div>


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

});

const mapDispatchToProps = dispatch => ({
      _getSettleBill : () => dispatch(getSettleBill()),
      _checkoutRequest: ()=> dispatch(checkout()),
      _razorpayCall: ()=>dispatch(razorpayCall()),
      _razorpayCallback: (response)=>dispatch(razorpayCallback(response))
    });

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage)
