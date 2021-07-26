import React from 'react'
import PercentageIcon from '../../../assets/menu/percentageicon.svg'
import Divider from '@material-ui/core/Divider';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux'
import parser from 'html-react-parser'
import cancel from "../../../assets/order/drawable/cancel.svg"
import { removePromo } from '../middleware';

function Promos(props) {
    const history = useHistory();
    return (

        <>
            <Divider style={{marginTop: '20px', height: '5px', width: '100%',  }} />
            {props.applyPromo?.data.code?
                <div style={{ marginTop: '20px', display: 'flex', marginLeft: '5vw', justifyContent: 'space-between',alignContent:"center", marginRight: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <img src={PercentageIcon} style={{ height: '25px' }} />

                    {<div style={{ marginTop: '6px', color: '#ff5656', marginLeft: '10px', fontSize: '15px',cursor:"pointer" }} >{props.applyPromo.data?.code} - {parser(props.applyPromo.data.name)}</div>}
                
                </div>
                    {/* {<div style={{ marginTop: '6px', color: '#ff5656', marginLeft: '10px', fontSize: '10px',cursor:"pointer" }} >Promo Applied</div>} */}
                <div style={{ marginTop: '6px', color: '#ff5656', fontWeight: 600, fontSize: '12px',cursor:"pointer" }} onClick={() => props._removePromo()}>
                    <img src={cancel} alt="cancel image" />
            </div>

            </div>
            :
            <div style={{ marginTop: '20px', display: 'flex', marginLeft: '5vw', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <img src={PercentageIcon} style={{ height: '25px' }} />

                    {<div style={{ marginTop: '6px', color: '#6d6d6d', marginLeft: '10px', fontSize: '15px',cursor:"pointer" }} onClick={() => history.push("/Apply")}>Apply Promo Code</div>}
                </div>
                <div style={{marginRight: '5vw', marginTop: '6px', color: '#ff5656', fontWeight: 600, fontSize: '12px',cursor:"pointer" }} onClick={() => history.push("/Apply")}>
                    View Offers
            </div>

            </div>}
            <Divider style={{ height: '5px', width: '100%', marginTop: '20px' }} />
        </>
    )
}
const mapStateToProps = state => ({
    applyPromo: state.checkout.applyPromo,
    removePromo: state.checkout.removePromo,
  });

  const mapDispatchToProps = dispatch => ({
    _removePromo: ()=>dispatch(removePromo())
});

  
export default connect(mapStateToProps, mapDispatchToProps)(Promos)
