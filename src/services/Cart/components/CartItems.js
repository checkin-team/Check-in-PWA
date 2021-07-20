import React, { Component, useCallback, useEffect } from 'react'
import { connect } from 'react-redux'
import VegIcon from '../../../assets/home/vegicon.png'
import NonVegIcon from '../../../assets/home/nonvegicon.jpg'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import BrightnessLowIcon from '@material-ui/icons/BrightnessLow';
import actionTypes from '../actions/actionTypes';
import {calculateAmount} from "../actions/actionCreator"
import {addItem,removeItem} from "../actions/actionCreator"
import { _addItem,_removeItem,_calculateAmount } from '../middleware';
export const CartItems = ({ cart,Amount ,_add_item,_remove_item,remarkArr,setRemarkArr}) => {
  const items = cart.items.data
  const width = window.innerWidth
  const [value, setValue] = React.useState(1);
  useEffect(()=>{
    const remarks= []
  items.forEach((item)=>{
    remarks.push({remark:''})
  })
  setRemarkArr([...remarks])
  },[])
  const handleIncrease = (dish) => {
    console.log('item added')
    _add_item(dish,cart)
    // Amount(cart)
  
  }
  // Amount(cart)

  
  const handleDecrease = (dish) => {
    _remove_item(dish,cart)
  }
  const handleCustomize = () => {
    // console.log("this is customizeable")
  }
  
  useEffect(
    () => {
      Amount(cart)
      console.log("item added")
    },
    [handleIncrease,handleDecrease]
  )

  // console.log(cart)
  // console.log(items)
  // console.log(cart)
  // console.log(items[2].variantId)
  // (cart.items.data) ? console.log(cart.items.data) : console.log(cart)


  const cartSearchStyle = {
    width: '77vw',
    height: '2vh',
    margin: '1vh 8vw 1vh 8vw',
    border: '1px solid #cdcdcd',
    borderRadius: '5vw',
    fontSize: '16px',
    fontWeight: '500',
    fontFamily: '"Josefin Sans", sans-serif',
    padding: '8px',
    paddingLeft: '15px'
  }
  const handleChange=(e,index)=>{
    const arr= [...remarkArr];
    arr[index].remark=e.target.value;
    setRemarkArr([...arr]);
  }
  return (
    <div>
      <div>{items.map((item, index) =>
        <div>
          <div style={{ display: 'flex', }}>
            <div style={{ display: 'flex' }}>
              {item.is_vegetarian===null?<div style={{ marginTop: '20px', marginLeft: '15px' }}></div>:item.is_vegetarian === "veg"  ? (<div style={{ marginTop: '20px', marginLeft: '15px' }}>
                <img src={NonVegIcon} style={{ height: "10px", width: "10px", marginLeft: "5px", marginTop: "5px" }} />
              </div>) : (<div style={{ marginTop: '20px', marginLeft: '20px' }} ><img src={VegIcon} style={{ height: "11px", width: "11px", marginTop: "5px" }} /></div>)}

              <div style={{ marginTop: '22px', color: '#6d6d6d', fontSize: '14px', marginLeft: '10px', fontWeight: 500, width: '37vw' }}>
                {item.name}


                <div style={{marginTop:"7px"}}> {item.variantId ? (<div style={{ fontStyle: 'JosefinSans-Regular', marginTop: '5px', color: '#ff5656', width: '200px', fontSize: '11px' }} onClick={handleCustomize()} >  Customize <BrightnessLowIcon style={{ fontSize: '8px' }} /> <span style={{ marginRight: '80px', fontWeight: 500, color: '#6d6d6d', marginBottom: '50px', fontSize: '15px', marginLeft: '10px' }} > &#8377;&nbsp;{item.price}</span>  </div>) :
                  <span style={{ marginRight: '100px',marginTop:"10px", fontWeight: 600, color: '#6d6d6d', fontSize: '17px',fontStyle: 'Arial' }} > &#8377;&nbsp;{item.costs[0]} </span>}
                </div>

              </div>

              {/* marginLeft: width * 0.15 + 'px' */}
            </div>

            <div>{item.is_vegetarian === "veg" ?
              <div style={{ marginTop: '20px', marginLeft: '108px', color: '#fff' }}>
                <div style={{ width: '60px', height: '20px', backgroundColor: '#f5365c', borderRadius: '5px', display: 'flex', justifyContent: 'space-between', marginLeft: '5px' }}>
                  <div style={{ marginLeft: '11px', marginTop: '2px',cursor:"pointer" }} onClick={()=>handleDecrease(item)}>-</div>
                  <div style={{ marginTop: '4px' }}>{item.quantity}</div>
                  <div style={{ marginRight: '10px', marginTop: '2px',cursor:"pointer" }} onClick={()=>handleIncrease(item)}>+</div>

                </div>

              </div> :
              <div style={{ marginTop: '20px', marginLeft: '108px', color: '#fff'}}>
                <div style={{ width: '60px', height: '20px', backgroundColor: '#f5365c', borderRadius: '5px', display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ marginLeft: '10px', marginTop: '2px',cursor:"pointer" }} onClick={()=>handleDecrease(item)}>-</div>
                  <div style={{ marginTop: '4px' }}>{item.quantity}</div>
                  <div style={{ marginRight: '10px', marginTop: '2px',cursor:"pointer" }} onClick={()=>handleIncrease(item)}>+</div>

                </div>

              </div>}

            </div>

          </div>

          <div>
            <input style={cartSearchStyle} type="text" onChange={(e)=>handleChange(e,index)} value={remarkArr[index]?.remark} placeholder="Write special instructions..." />
          </div>
        </div>
      )}
        {JSON.stringify(remarkArr)}
        <div style={{ position: 'fixed', bottom: 50, marginLeft: '65px', color: '#6d6d6d', fontSize: '12px' }}>
          " Does not include extra charges or discounts "
      </div>
      </div>

    </div>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart
})


const mapDispatchToProps = dispatch => ({
  _add_item: (item,cart) => dispatch(_addItem(item,cart)),
    _remove_item: (item,cart) => dispatch(_removeItem(item,cart)),
    Amount: (data)=>dispatch(_calculateAmount(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(CartItems);
