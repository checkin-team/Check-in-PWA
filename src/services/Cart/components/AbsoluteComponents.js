import React from 'react'
// import RoundedButton from '../../../shared/components/Button/Rounded'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { connect } from "react-redux"
import { useHistory } from 'react-router-dom';

function AbsoluteItems({ cart }) {
  
  

  const amount = cart.items.data.reduce((init, item) => init + item.price, 0).toFixed(2)

  const history = useHistory()
  const handleClick = () => {
    history.push("/settlebill")
  }

 
  return (
    <div style={{
      width: "100%",
      height: "45px",
      overflow: "hidden",
      position: "sticky",
      bottom: 0,
      backgroundColor: "#32c282",

    }}>
      <div style={{
        justifyContent: 'space-between',
        display: 'flex',
        color: '#fff',
        // bottom: 0
      }}>
        <div style={{
          marginTop: '5px',
          // marginTop: '5px',
          marginLeft: '10px'
        }}>
          <div style={{ fontSize: "12px", marginBottom: "5px" }} >4 Items</div>
          <div> &#8377;&nbsp;{amount}</div>
        </div>
        <div
            style={{
              fontSize: "16px",
              marginRight: '10px',
              marginTop: '15px',

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
  cart: state.cart
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(AbsoluteItems)
