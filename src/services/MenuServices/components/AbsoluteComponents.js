import React, { useState } from 'react'
// import RoundedButton from '../../../shared/components/Button/Rounded'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FastForwardIcon from '@material-ui/icons/FastForward';
import { connect } from "react-redux"
import { useHistory } from 'react-router-dom'
import cart5 from '../../../assets/home/cart5.png'

function AbsoluteComponents({ cart,amount }) {
  const history = useHistory()

  // const amount = cart.items.data.reduce((init, item) => init + item.price, 0).toFixed(2)
  if (cart.items.data.length)
    return (<>
      <div style={{
        width: "100%",
        height: "4vh",
        overflow: "hidden",
        position: "fixed",
        bottom: "0",
        backgroundColor: "#32c282",
        padding: "0.5rem",
        overscrollBehavior: "contain" ,
      }}>
        <div className="d-flex justify-content-between" style={{ color: "#fff", width: "100%",alignItems:"center" }}>
          <div className="d-flex" style={{alignItems:"center"}}>
            <div><img src={cart5} width="20" height="20" viewBox="0 0 30 30"></img></div>
            <div style={{
              justifyContent: 'space-between',
              display: 'flex',
              
            }}>
              <div style={{
                marginLeft: '2rem',
                color: '#fff'
              }}>
                { cart.items.data.reduce((init,item)=>init+item.quantity,0)} Items&nbsp;|&nbsp; &#8377;{amount.Total}
              </div>
            </div>
          </div>
          <div>
            <div style={{
              display: "flex",
              cursor: "pointer",
              marginRight:"2rem",
            }}>
              <span
              style={{
                display: "inline-block",
                fontSize: "20px",
                padding: "6px"
              }}
              onClick={() => history.push("/viewcart")}
            >
              Continue</span><span style = {{
                display: "inline-block",
                padding: "5px"
              }}><FastForwardIcon fontSize="small"/>
            </span>
            </div>
          </div>
        </div>
      </div>
    </>)
  return <div></div>
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  amount: state.amount
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(AbsoluteComponents)
