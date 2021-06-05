import React, { Component } from 'react'
import { connect } from 'react-redux'
import VegIcon from '../../../assets/home/vegicon.png'
import NonVegIcon from '../../../assets/home/nonvegicon.jpg'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import BrightnessLowIcon from '@material-ui/icons/BrightnessLow';

export const CartItems = ({ cart }) => {
  const items = cart.items.data
  const width = window.innerWidth
  const [value, setValue] = React.useState(1);

  const handleIncrease = () => {
    setValue(value + 1)
  }
  const handleDecrease = () => {
    if (value > 0) { setValue(value - 1) };
  }
  const handleCustomize = () => {
    console.log("this is customizeable")
  }

  // console.log(cart)
  console.log(cart)
  // console.log(items[2].variantId)
  // (cart.items.data) ? console.log(cart.items.data) : console.log(cart)


  const cartSearchStyle = {
    width: '60vw',
    height: '2vh',
    margin: '1vh 4vw',
    border: '1px solid #cdcdcd',
    borderRadius: '1.5vw',
    fontSize: '16px',
    ":focus": {
        outline: 'none'
    },
    fontWeight: '500',
    fontFamily: '"Josefin Sans", sans-serif',
    padding: '8px',
    paddingLeft: '15px'
  }

  return (
    <div>
      <div>{items.map((item, index) =>
        <div>
          <div style={{ display: 'flex', }}>
            <div style={{ display: 'flex' }}>
              {item.type === "veg" ? (<div style={{ marginTop: '20px', marginLeft: '15px' }}>
                <img src={NonVegIcon} style={{ height: "10px", width: "10px", marginLeft: "5px", marginTop: "5px" }} />
              </div>) : (<div style={{ marginTop: '20px', marginLeft: '20px' }} ><img src={VegIcon} style={{ height: "11px", width: "11px", marginTop: "5px" }} /></div>)}

              <div style={{ marginTop: '22px', color: '#6d6d6d', fontSize: '14px', marginLeft: '10px', fontWeight: 500 }}>
                {item.name}


                <div> {item.variantId ? (<div style={{ fontStyle: 'JosefinSans-Regular', marginTop: '5px', color: '#ff5656', width: '200px', fontSize: '11px' }} onClick={handleCustomize()} >  Customize <BrightnessLowIcon style={{ fontSize: '8px' }} /> <span style={{ marginRight: '80px', fontWeight: 500, color: '#6d6d6d', marginBottom: '50px', fontSize: '15px', marginLeft: '10px' }} > &#8377;&nbsp;{item.price}</span>  </div>) :
                  <span style={{ marginRight: '100px', fontWeight: 500, color: '#6d6d6d', fontSize: '15px' }} > &#8377;&nbsp;{item.price}</span>}
                </div>

              </div>

              {/* marginLeft: width * 0.15 + 'px' */}
            </div>

            <div>{item.type === "veg" ?
              <div style={{ marginTop: '20px', marginLeft: '58px', color: '#fff' }}>
                <div style={{ width: '60px', height: '20px', backgroundColor: '#f5365c', borderRadius: '5px', display: 'flex', justifyContent: 'space-between', marginLeft: '5px' }}>
                  <div style={{ marginLeft: '11px', marginTop: '2px', }} onClick={handleDecrease}>-</div>
                  <div style={{ marginTop: '4px' }}>{value}</div>
                  <div style={{ marginRight: '10px', marginTop: '2px' }} onChange={handleIncrease}>+</div>

                </div>

              </div> :
              <div style={{ marginTop: '20px', marginLeft: '108px', color: '#fff' }}>
                <div style={{ width: '60px', height: '20px', backgroundColor: '#f5365c', borderRadius: '5px', display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ marginLeft: '10px', marginTop: '2px', }} onClick={handleDecrease}>-</div>
                  <div style={{ marginTop: '4px' }}>{value}</div>
                  <div style={{ marginRight: '10px', marginTop: '2px' }} onChange={handleIncrease}>+</div>

                </div>

              </div>}

            </div>

          </div>

          <div>
            <input style={cartSearchStyle} type="text" placeholder="Write special instructions..." />
            {/* {<Paper
              elevation={0}
              component="form"
              style={{
                borderRadius: '10px',
                margin: '5px',
                height: '30px',
                marginTop: '-10px',
                border: "1px solid #cdcdcd",
                marginLeft: '40px',
                marginRight: '32px'

              }}
            >
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "2px"
              }}
              >
                <InputBase
                  placeholder="Write special instructions"
                  style={{ marginLeft: '10px', fontSize: '13px', color: '#6d6d6d' }}
                />
                


              </div>
            </Paper>} */}
          </div>
        </div>
      )}

        <div style={{ position: 'fixed', bottom: 50, marginLeft: '65px', color: '#6d6d6d', fontSize: '12px' }}>
          " Does not include extra charges or discounts "
      </div>
      </div>

    </div >
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CartItems)
