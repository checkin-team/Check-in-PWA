import {Grid,Typography,Divider, makeStyles, useMediaQuery} from "@material-ui/core"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import share from '../../../assets/order/share.png';
import icon from '../../../assets/order/icon.png';
import { useState } from 'react';
import veg from '../../../assets/order/veg.png';
import { useHistory } from "react-router";
import { connect } from 'react-redux';
import React from "react";
import {PAYMENT_SUCCESS_REQ} from '../middleware/index';
import dateFormat from "dateformat";
import nonVeg from '../../../assets/home/nonvegicon.jpg';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles= makeStyles(theme=>({
  mainContainer:{
    display: "flex",
    justifyContent: "space-between",
    padding: "2rem 4rem 2rem 4rem",
    alignItems: "center",
    [theme.breakpoints.down('sm')]: {
      padding: "1rem"
    },
  },
  container:{
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem 4rem",
    alignItems: "center",
    [theme.breakpoints.down('sm')]: {
      padding: "1rem"
    },
  },
  rightContainer:{
    display: "flex",
    justifyContent: "flex-end",
  },
  arrowContainer:{
    display: "flex",
    /* justifyContent: center; */
  
  },
  arrow:{
    color: "#bebebe",
    fontSize: "3rem!important",
    [theme.breakpoints.down('sm')]: {
      fontSize: "2rem!important",
    },
  },
  share:{
    position: "relative",
    top: "1rem",
    color: "#bebebe",
    [theme.breakpoints.down('sm')]: {
      top: "0.2rem",
    },
  },
  
  name:{
    fontFamily: " 'Josefin Sans' !important",
    color:"#0295aa",
    fontWeight: 600,
    [theme.breakpoints.down('sm')]: {
      fontSize: "2rem!important",
    },
  },
  location:{
    color: "#bebebe",
    fontFamily: " 'Josefin Sans' !important",
    [theme.breakpoints.down('sm')]: {
      fontSize: "1rem!important",
    },
  },
  
  paymentContainer:{
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "0.5rem" ,
  },
  bookingContainer:{
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "0.5rem" ,
  },
  orderContaner:{
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "0.5rem" ,
  },
  payment:{
    color:"#32c282",
    fontFamily: " 'Josefin Sans' !important" ,
    fontWeight: 600,
    [theme.breakpoints.down('sm')]: {
      fontSize: "2rem!important",
    },
  },
  bookingActive:{
    color: "#ff5656",
    fontFamily: " 'Josefin Sans' !important",
  },
  orderActive:{
    color: "#ff5656",
    fontFamily: "'Josefin Sans' !important",
  },
  bookingInactive:{
    color: "#6d6d6d",
    fontFamily: "'Josefin Sans' !important",
  },
  orderInactive:{
    color: "#6d6d6d",
    fontFamily: "'Josefin Sans' !important",
  },
  up:{
    color: "#ff5656",
    fontSize: "2rem!important",
    
  },
  down:{
    color: "#6d6d6d",
    fontSize: "2rem!important",
  },
  heading:{
    color:"#bebebe",
    fontFamily: "'Josefin Sans' !important",
  },
  content:{
    color: "#6d6d6d",
    fontFamily: "'Josefin Sans' !important",
  
  },
  foodMainContainer:
  {
    display: "flex",
    justifyContent: "space-between",
    padding: "1.5rem 1rem"  ,
    [theme.breakpoints.down('sm')]: {
      padding: "1rem",
    },
  },
  
  foodContainer:
  {
    display: "flex",
    justifyContent: "space-between",
  },
  
  josefin:{
    fontFamily: "'Josefin Sans' !important",
  },
  foodMain:{
      fontFamily: "'Josefin Sans' !important",
      fontSize: '1.5rem !important',
      color:'#6d6d6d',
      [theme.breakpoints.down('sm')]: {
        fontSize: "1.2rem!important",
      },
  },
  
  divider:{
    marginTop: '1rem!important',
    marginBottom: '1rem !important',
  },
  
  addOnContainer:{
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  veg:{
    position: 'relative',
    top: '10px',
    [theme.breakpoints.down('sm')]: {
      top: "5px",
    },

  },
  
  rateHeading:{
    fontFamily: " 'Josefin Sans' !important",
    fontWeight: '600 !important',
    color:'#6d6d6d',
  },
  rateContent:{
    fontFamily: 'helvetica !important',
    fontWeight: 'normal',
    color: '#6d6d6d',
  },
  
  totalHeading:{
    fontFamily: "'Josefin Sans'!important",
    fontWeight: '600 !important',
    color:'#0295aa',
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  totalContent:{
    fontFamily: "'Arial'!important",
    fontWeight: "600 !important",
    color:"#0295aa",
    marginTop: "1rem",
    marginBottom: "1rem",
  },
  mtb:{
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
  },
  respFoodMain:{
    fontFamily: "'Josefin Sans' !important",
      fontSize: '1rem !important',
      color:'#6d6d6d',
  },
  respVeg:{
    position: 'relative',
    top:"3px",
  },
  veg200:{
    position: 'relative',
    top:"0",
  }
}))

function PaymentSuccessful(props) {
  const [booking,setBooking]= useState(true);
  const [order,setOrder]= useState(false)
  const [checkedOut,setCheckedOut] = useState();
  const {paymentDetails} = props
  const classes = useStyles();
  const isActive = useMediaQuery('(max-width:300px)');
  const isActive378 = useMediaQuery('(max-width:378px');
  const isActive200 = useMediaQuery('(max-width:200');
  const handleBookingClick=()=>{
    setBooking((val)=>!val);
  }
  const handleOrderClick=()=>{
    setOrder((val)=>!val);
  }

  const history = useHistory();

  React.useEffect(()=>{
    props.SEND_PAYMENT_SUCCESS_REQ();
    // console.log('[PaymentSuccessful]',props.paymentDetails);
    setCheckedOut(dateFormat(paymentDetails?.data?.checked_out, "dddd, mmmm dS, yyyy, h:MM:ss TT"))
  },[])

  if(paymentDetails.isLoading===true)
  return <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"}}>
  <CircularProgress style={{color:"#ff5656"}} size={50} />
  </div>

  return (
    <div>
    <Grid container className={classes.mainContainer}>
      <Grid  item lg={12} md={12} sm={12} xs={12}>
        <Grid container>
        {/* <Grid className={classes.arrowContainer} item lg={1} md={1} sm={2} xs={2}>
          <ArrowBackIcon onClick={() => history.push('/home')} className={classes.arrow} />
          
        </Grid> */}
        {/* <Grid item  lg={9} md={9} sm={8} xs={7}> */}
        <Grid item  lg={12} md={12} sm={12} xs={12}>
           <Typography className={classes.name} variant="h3">{paymentDetails?.data?.restaurant?.name}</Typography>
          <Typography className={classes.location} variant="h6">{paymentDetails?.data?.restaurant?.location?.address}</Typography>
        </Grid>
        {/* <Grid className={classes.rightContainer} item lg={2} md={2} sm={2} xs={3}>
        <span><img src={share} className={classes.share} alt="share" /></span>

        </Grid> */}
        
        </Grid>
          <Grid container className={classes.paymentContainer}>
            <Grid  item lg={10} md={10} sm={10} xs={10}>
            <Typography className={classes.payment} variant="h3">Payment Successful</Typography>
            </Grid>
            <Grid className={classes.rightContainer} item lg={2} md={2} sm={2} xs={2}>
            <span><img src={icon} alt="icon" /></span>
            </Grid>
          </Grid>
      </Grid>
    </Grid>
      <Divider></Divider>
      <Grid container className={classes.container}>
      <Grid  item lg={12} md={12} sm={12} xs={12}>
      <Grid container className={classes.bookingContainer}>
            <Grid  item lg={10} md={10} sm={10} xs={10}>
            <Typography className={booking?classes.bookingActive:classes.bookingInactive} variant="h6">Booking Details</Typography>
            </Grid>
            <Grid className={classes.rightContainer} item lg={2} md={2} sm={2} xs={2}>
            <span>{booking?<ArrowDropUpIcon className={classes.up} onClick={handleBookingClick}/>: <ArrowDropDownIcon onClick={handleBookingClick} className={classes.down} />}
            </span>
            </Grid>
          </Grid>
      
    </Grid>
    {booking?<Grid  item lg={12} md={12} sm={12} xs={12}>
      <Grid container className={classes.bookingContainer} spacing={2}>
            <Grid  item lg={10} md={10} sm={10} xs={10}>
            <Typography className={classes.heading} variant="subtitle2">Name</Typography>
            <Typography className={classes.content} variant="subtitle1">{paymentDetails?.data?.customer?.display_name}</Typography>
            </Grid>
            <Grid  item lg={10} md={10} sm={10} xs={10}>
            <Typography className={classes.heading} variant="subtitle2">Date & Time</Typography>
            <Typography className={classes.content} variant="subtitle1">{checkedOut}</Typography>
            </Grid>
            <Grid  item lg={10} md={10} sm={10} xs={10}>
            <Typography className={classes.heading} variant="subtitle2">Diners</Typography>
            <Typography className={classes.content} variant="subtitle1">2</Typography>
            </Grid>
            <Grid  item lg={10} md={10} sm={10} xs={10}>
            <Typography className={classes.heading} variant="subtitle2">Order ID</Typography>
            <Typography className={classes.content} variant="subtitle1">{paymentDetails?.data?.hash_id}</Typography>
            </Grid>
            
          </Grid>
          </Grid>
      :null}
    </Grid>
    <Divider></Divider>
    <Grid container className={classes.container}>
      <Grid  item lg={12} md={12} sm={12} xs={12}>
      <Grid container className={classes.orderContainer}>
            <Grid  item lg={10} md={10} sm={10} xs={10}>
            <Typography className={order?classes.orderActive:classes.orderInactive} variant="h6">Order Details</Typography>
            </Grid>
            <Grid className={classes.rightContainer} item lg={2} md={2} sm={2} xs={2}>
            <span>{order?<ArrowDropUpIcon className={classes.up} onClick={handleOrderClick}/>: <ArrowDropDownIcon onClick={handleOrderClick} className={classes.down} />}
            </span>
            </Grid>
          </Grid>
      </Grid>
      {order?<Grid item lg={12} md={12} sm={12} xs={12}>
      {
        paymentDetails.data.ordered_items.map(item=>{
          return <Grid container className={classes.foodMainContainer}>
      <Grid  item lg={1} md={1} sm={1} xs={1} >
          <div >

          {/* <img src={veg} className={isActive378?isActive200?classes.veg200:classes.RespVeg:classes.veg} alt="veg" /> */}
          {item.item.is_vegetarian===null?null:item.item.is_vegetarian === "veg" ?
                                (<img style={{ height: "15px", width: "15px", margin: "0 5px",positon:"relative",top:"7px" }} src={veg} />)
                                : (<img style={{ height: "15px", width: "15px", margin: "0 5px",position:"relative",top:"7px" }} src={nonVeg} />)}
          </div>
            </Grid>
            <Grid  item lg={11} md={11} sm={11} xs={11}>
                <Grid container>
                  <Grid item lg={8} md={8} sm={8} xs={8}>
                <Typography className={isActive?classes.respFoodMain:classes.foodMain} variant="subtitle1">{item?.item?.name} x {item?.quantity} {item?.is_customized?"(Customized)":null}</Typography>

                  </Grid>
                  <Grid style={{display:"flex" ,justifyContent: "flex-end"}} item lg={4} md={4} sm={4} xs={4}>
                <Typography className={isActive?classes.respFoodMain:classes.foodMain} variant="subtitle1">&#8377; {item.cost}</Typography>
                  
                  </Grid>
                </Grid>
              {/* <Divider className={classes.divider}></Divider>
              <div className={classes.foodContainer}>
                <div className={classes.addOnContainer}>
                  <Typography variant="subtitle2" className={classes.heading}> Add ons</Typography>
                  <Typography variant="subtitle1" className={classes.content}>Extra Cheese</Typography>
                </div>
                <div className={classes.addOnContainer}>
                  <Typography variant="subtitle2" style={{textAlign:"right"}} className={classes.heading}> Pizza Crust</Typography>
                  <Typography variant="subtitle1"  style={{textAlign:"right"}} className={classes.content}>Plain Bread</Typography>
                </div>
              </div>
              <div className={classes.foodContainer}>
                <div className={classes.addOnContainer}>
                <Typography variant="subtitle2" className={classes.heading}> Request</Typography>
                <Typography variant="subtitle1" className={classes.content}>Spread Cheese on the crust evenly</Typography>
                  
                </div>
                </div> */}
            </Grid>
            </Grid>
      
        })
      }
            {/* <Grid container className={classes.foodMainContainer}>
            <Grid  item lg={1} md={1} sm={1} xs={1}>
                <img src={veg} className={isActive378?isActive200?classes.veg200:classes.RespVeg:classes.veg} alt="veg" />
                  </Grid>
              <Grid  item lg={11} md={11} sm={11} xs={11}> */}
              {/* <div className={classes.foodContainer}> */}
                {/* <Grid container>
                  <Grid item item lg={8} md={8} sm={8} xs={8}>
                <Typography className={isActive?classes.respFoodMain:classes.foodMain} variant="subtitle1">Tawa Roti x 1</Typography>

                  </Grid>
                  <Grid style={{display: "flex",justifyContent:"flex-end"}} item lg={4} md={4} sm={4} xs={4}>
                <Typography className={isActive?classes.respFoodMain:classes.foodMain} variant="subtitle1">&#8377; 230</Typography>
                    
                  </Grid>
                </Grid> */}
              {/* </div> */}
            {/* </Grid>
            </Grid> */}

            
      <Divider></Divider>
        <div className={`${classes.foodContainer} ${classes.mtb}`}>
                <Typography className={classes.rateHeading} variant="subtitle1">Subtotal</Typography>
                <Typography className={classes.rateContent} variant="subtitle1">-&#8377; {paymentDetails?.data?.bill?.subtotal}</Typography>
          </div>
          <div className={`${classes.foodContainer} ${classes.mtb}`}>
                <Typography className={classes.rateHeading} variant="subtitle1">Charges</Typography>
                <Typography className={classes.rateContent} variant="subtitle1">-&#8377; {paymentDetails?.data?.bill?.total_charges}</Typography>
          </div>
          <div className={`${classes.foodContainer} ${classes.mtb}`}>
                <Typography className={classes.rateHeading} variant="subtitle1">Taxes</Typography>
                <Typography className={classes.rateContent} variant="subtitle1">-&#8377; {paymentDetails?.data?.bill?.tax}</Typography>
          </div>
          <div className={`${classes.foodContainer} ${classes.mtb}`}>
                <Typography className={classes.rateHeading} variant="subtitle1">Promo-(New)</Typography>
                <Typography className={classes.rateContent} variant="subtitle1"> {paymentDetails?.data?.bill?.promo===null?"-":paymentDetails?.data?.bill?.promo}</Typography>
          </div>
          <div className={`${classes.foodContainer} ${classes.mtb}`}>
                <Typography className={classes.rateHeading} variant="subtitle1">Discount</Typography>
                <Typography className={classes.rateContent} variant="subtitle1">-&#8377; {paymentDetails?.data?.bill?.discount}</Typography>
          </div>
          <Divider></Divider>
          <div className={classes.foodContainer}>
                <Typography className={classes.totalHeading} variant="h6">Total</Typography>
                <Typography className={classes.totalContent} variant="h6">&#8377; {paymentDetails?.data?.bill?.total}</Typography>
          </div>
      </Grid>:null}
    </Grid>
    <Divider></Divider>
       <div style={{position:"fixed",bottom:"0",width:"100%"}}>
      <p style={{display:"flex",justifyContent:"center"}}><h4 style={{color:"#6d6d6d"}}> Checked Out Successfully!</h4></p>

       </div>     
    </div>
  );
}

const mapStateToProps = state => ({
  paymentDetails : state.order.paymentSuccessDetails,
});

const mapDispatchToProps = dispatch => ({
  SEND_PAYMENT_SUCCESS_REQ : () => dispatch(PAYMENT_SUCCESS_REQ()),
});

export default connect(mapStateToProps,mapDispatchToProps)(PaymentSuccessful);
