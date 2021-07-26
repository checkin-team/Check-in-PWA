import React from 'react'
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';
import { Widgets } from '@material-ui/icons';
import {connect} from 'react-redux';
import {useHistory} from 'react-router'
import FastForwardIcon from '@material-ui/icons/FastForward';
import {_GET_TOTAL_AMOUNT} from '../middleware/index';
import {getSettleBill} from "../../Checkout/middleware";

function BillingBottomBar(props) {
    const history = useHistory();

    React.useEffect(()=>{
        props.get_amount('11');
        props._getSettleBill();
    },[]);

    
    React.useEffect(()=>{
        console.log('[BillingBottomBar]',props.totalAmount)
    },[props.totalAmount]);

    // const amount = cart.items.data.reduce((init, item) => init + item.price, 0).toFixed(2)
    return (
        <div style={{ color: "#fff"}} >
            <div style={{ display: "flex", justifyContent: "space-between", marginRight: "5px" }} >
                <div style={{ margin: "8px", display: "flex",alignItems:"center" }}> <ReceiptOutlinedIcon /><div style={{ marginTop: "3px", marginLeft: "6px" }}>Total: &#8377;{props?.settleBill?.data?.bill?.total}</div> </div>
                <div onClick={() => history.push('/settlebill')} style={{ display:"flex",alignItems:"center"}}>Check Out &nbsp; <FastForwardIcon fontSize="small" /></div>
            </div>
        </div >
    )
}

const mapStateToProps = state => ({
    cart : state.cart,
    settleBill : state.checkout.settleBillDetails,
    amount:state.amount,
    totalAmount: state.home.totalAmount
});

const mapDispatchToProps = dispatch => ({
    get_amount: (id) => dispatch(_GET_TOTAL_AMOUNT(id)),
    _getSettleBill: ()=>dispatch(getSettleBill())
})

export default connect(mapStateToProps,mapDispatchToProps)(BillingBottomBar);
