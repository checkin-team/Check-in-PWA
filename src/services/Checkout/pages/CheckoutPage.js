import React from 'react'
import { connect } from 'react-redux'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom';
import SettleBill from '../components/SettleBill'
import Promos from '../components/Promos'
import GrandTotal from '../components/GrandTotal';
import Button from '../.././../shared/components/Button/Basic'



export const CheckoutPage = (props) => {
  const history = useHistory()
  return (
    <div>
      <div style={{ height: '80px', width: '100%', backgroundColor: '#ececec' }}>
        <div style={{ display: 'flex' }}>
          <ArrowBackIosIcon style={{ color: '#6d6d6d', margin: '12px 0px 0px 12px' }}
            onClick={() => history.hasOwnProperty("back") ? history.back() : history.push("/viewcart")} />
          <span style={{ color: "#6d6d6d", fontSize: '20px', marginTop: '15px', }}>
            Settle Bill
          </span>
        </div>
        <div style={{ color: "#6d6d6d", fontSize: '15px', margin: '25px 0px 0px 15px' }}>
          Bill Details
        </div>
        <div><SettleBill /></div>
        <div> <Promos /></div>
        <div><GrandTotal /></div>
        <div className="text-center" style={{ bottom: 20, position: 'fixed', width: '100%' }}><Button fullWidth style={{ backgroundColor: '#32c282', marginTop: '30px', color: '#fff', width: '90%' }}>PAY</Button></div>
      </div>


    </div>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage)
