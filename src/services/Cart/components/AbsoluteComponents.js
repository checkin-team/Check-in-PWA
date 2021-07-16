import React from 'react'
// import RoundedButton from '../../../shared/components/Button/Rounded'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { connect } from "react-redux"
import { useHistory } from 'react-router-dom';
import {place_order} from "../middleware/index"
import { useEffect } from 'react';
function AbsoluteItems({ cart,amount,placeOrder }) {

  const history = useHistory()
  const handleClick = () => {
    placeOrder();
  }
  useEffect(()=>{
    if(cart.order.isLoading===false&&cart.order.data==="success"){
      history.push('/order-successful')
    }
  },[cart.order])
 
  return (
    <div style={{
      width: "100%",
      height: "4.5vh",
      overflow: "hidden",
      position: "sticky",
      bottom: 0,
      backgroundColor: "#32c282",
      

    }}> 
      <div style={{
        justifyContent: 'space-between',
        display: 'flex',
        color: '#fff',
        height:"100%"
        // bottom: 0
      }}>
        <div style={{
          marginTop: '5px',
          // marginTop: '5px',
          marginLeft: '10px'
        }}>
          <div style={{ fontSize: "12px", marginBottom: "5px" }} >{cart.items.data.reduce((init,item)=>init+item.quantity,0)} items</div>
          <div> &#8377;&nbsp;{amount.Total}</div>
        </div>
        <div
            style={{
              fontSize: "16px",
              marginRight: '10px',
              marginTop: '15px',
              cursor:"pointer",
            }}
            onClick={handleClick}
          >
            PLACE ORDER
            
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  amount: state.amount
})

const mapDispatchToProps = dispatch => ({
  placeOrder: ()=>dispatch(place_order())
})

export default connect(mapStateToProps, mapDispatchToProps)(AbsoluteItems)
